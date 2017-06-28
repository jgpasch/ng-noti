import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTopSectionComponent } from './card-top-section.component';

describe('CardTopSectionComponent', () => {
  let component: CardTopSectionComponent;
  let fixture: ComponentFixture<CardTopSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTopSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTopSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
