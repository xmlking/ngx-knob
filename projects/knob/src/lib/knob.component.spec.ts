import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { KnobComponent } from './knob.component';

describe('KnobComponent', () => {
  let component: KnobComponent;
  let fixture: ComponentFixture<KnobComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KnobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
