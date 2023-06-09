import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondImageComponent } from './second-image.component';

describe('SecondImageComponent', () => {
  let component: SecondImageComponent;
  let fixture: ComponentFixture<SecondImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
