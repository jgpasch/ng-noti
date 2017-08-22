import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSubsComponent } from './no-subs.component';

describe('NoSubsComponent', () => {
  let component: NoSubsComponent;
  let fixture: ComponentFixture<NoSubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoSubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
