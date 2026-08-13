import { Component, inject, signal, computed, afterNextRender, DestroyRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { timer, of, Subject, merge, forkJoin } from 'rxjs';
import { catchError, switchMap, tap, timeout, map } from 'rxjs/operators';

import { HealthService } from '../../services/health/health.service';

@Component({
  selector: 'app-api-check',
  standalone: true,
  imports: [DatePipe, MatIconModule, MatButtonModule],
  templateUrl: './api-check.html',
  styleUrl: './api-check.scss'
})
export class ApiCheckComponent {
  private healthService = inject(HealthService);
  private destroyRef = inject(DestroyRef);

  isLoading = signal<boolean>(true);
  isSuccess = signal<boolean>(false);
  statusMessage = signal<string>('Verificando API...');
  lastChecked = signal<Date | null>(null);

  iconName = computed(() => this.isLoading() ? 'autorenew' : (this.isSuccess() ? 'check_circle' : 'error_outline'));

  detailText = computed(() => {
    if (this.isLoading()) return 'Monitorando a saúde do servidor...';
    return this.isSuccess()
      ? 'Conexão estabelecida com sucesso!'
      : 'Verifique se o backend está rodando na porta 8080.';
  });

  private isFirstLoad = true;
  private manualTrigger$ = new Subject<void>();

  constructor() {
    afterNextRender(() => {
      this.startHealthPolling();
    });
  }

  private startHealthPolling(): void {
    merge(timer(0, 5000), this.manualTrigger$)
      .pipe(
        tap(() => {
          if (this.isFirstLoad) this.isLoading.set(true);
        }),
        switchMap(() =>
          forkJoin([
            this.healthService.checkHealth().pipe(
              timeout(3000),
              catchError(() => of({ status: 'DOWN' }))
            ),
            timer(1000)
          ]).pipe(
            map(([response]) => response)
          )
        ),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((response) => {
        this.isLoading.set(false);
        this.isFirstLoad = false;
        this.lastChecked.set(new Date());

        if (response && response.status === 'UP') {
          this.statusMessage.set('API disponível');
          this.isSuccess.set(true);
        } else {
          this.statusMessage.set('Erro de conexão');
          this.isSuccess.set(false);
        }
      });
  }

  checkNow(): void {
    if (!this.isLoading()) {
      this.isLoading.set(true);
      this.manualTrigger$.next();
    }
  }
}