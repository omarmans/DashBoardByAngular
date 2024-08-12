import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleChecboxComponent } from './toggle-checbox.component';

describe('ToggleChecboxComponent', () => {
  let component: ToggleChecboxComponent;
  let fixture: ComponentFixture<ToggleChecboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleChecboxComponent]
    });
    fixture = TestBed.createComponent(ToggleChecboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
