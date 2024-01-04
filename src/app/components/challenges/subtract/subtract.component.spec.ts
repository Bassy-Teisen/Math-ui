import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtractComponent } from './subtract.component';

describe('SubtractComponent', () => {
  let component: SubtractComponent;
  let fixture: ComponentFixture<SubtractComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubtractComponent]
    });
    fixture = TestBed.createComponent(SubtractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
