import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleEventsComponent } from './multiple-events.component';

describe('MultipleEventsComponent', () => {
  let component: MultipleEventsComponent;
  let fixture: ComponentFixture<MultipleEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
