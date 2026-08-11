import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadoresComponent } from './prestadores';

describe('PrestadoresComponent', () => {
  let component: PrestadoresComponent;
  let fixture: ComponentFixture<PrestadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrestadoresComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrestadoresComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
