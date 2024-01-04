import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentialComponent } from './differential.component';

describe('DifferentialComponent', () => {
  let component: DifferentialComponent;
  let fixture: ComponentFixture<DifferentialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DifferentialComponent]
    });
    fixture = TestBed.createComponent(DifferentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
