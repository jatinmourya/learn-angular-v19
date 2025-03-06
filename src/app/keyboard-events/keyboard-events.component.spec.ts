import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardEventsComponent } from './keyboard-events.component';

describe('KeyboardEventsComponent', () => {
  let component: KeyboardEventsComponent;
  let fixture: ComponentFixture<KeyboardEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyboardEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyboardEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
