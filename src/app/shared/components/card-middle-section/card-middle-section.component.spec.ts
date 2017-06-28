import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMiddleSectionComponent } from './card-middle-section.component';

describe('CardMiddleSectionComponent', () => {
  let component: CardMiddleSectionComponent;
  let fixture: ComponentFixture<CardMiddleSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMiddleSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMiddleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
