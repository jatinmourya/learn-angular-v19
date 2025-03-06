import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowsComponent } from './control-flows.component';

describe('ControlFlowsComponent', () => {
  let component: ControlFlowsComponent;
  let fixture: ComponentFixture<ControlFlowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlowsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlFlowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
