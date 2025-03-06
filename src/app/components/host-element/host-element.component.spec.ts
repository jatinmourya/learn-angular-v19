import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostElementComponent } from './host-element.component';

describe('HostElementComponent', () => {
  let component: HostElementComponent;
  let fixture: ComponentFixture<HostElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
