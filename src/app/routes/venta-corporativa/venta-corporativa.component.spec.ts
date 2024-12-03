import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaCorporativaComponent } from './venta-corporativa.component';

describe('VentaCorporativaComponent', () => {
  let component: VentaCorporativaComponent;
  let fixture: ComponentFixture<VentaCorporativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VentaCorporativaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentaCorporativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
