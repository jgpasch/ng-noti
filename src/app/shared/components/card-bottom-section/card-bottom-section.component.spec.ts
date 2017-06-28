import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBottomSectionComponent } from './card-bottom-section.component';

describe('CardBottomSectionComponent', () => {
  let component: CardBottomSectionComponent;
  let fixture: ComponentFixture<CardBottomSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBottomSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBottomSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
