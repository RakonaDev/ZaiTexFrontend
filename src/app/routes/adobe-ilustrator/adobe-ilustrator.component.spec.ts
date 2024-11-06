import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdobeIlustratorComponent } from './adobe-ilustrator.component';

describe('AdobeIlustratorComponent', () => {
  let component: AdobeIlustratorComponent;
  let fixture: ComponentFixture<AdobeIlustratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdobeIlustratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdobeIlustratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
