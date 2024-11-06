import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorelDrawComponent } from './corel-draw.component';

describe('CorelDrawComponent', () => {
  let component: CorelDrawComponent;
  let fixture: ComponentFixture<CorelDrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorelDrawComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorelDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
