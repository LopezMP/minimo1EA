import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoCardComponent } from './seguimiento-card.component';

describe('SeguimientoCardComponent', () => {
  let component: SeguimientoCardComponent;
  let fixture: ComponentFixture<SeguimientoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguimientoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
