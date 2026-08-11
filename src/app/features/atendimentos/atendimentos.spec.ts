import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendimentosComponent } from './atendimentos';

describe('AtendimentosComponent', () => {
  let component: AtendimentosComponent;
  let fixture: ComponentFixture<AtendimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtendimentosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtendimentosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
