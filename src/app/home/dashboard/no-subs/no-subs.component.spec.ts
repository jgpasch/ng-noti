import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MdDialogModule } from '@angular/material';
import { MdDialogRef } from '@angular/material';

import { NoSubsComponent } from './no-subs.component';

describe('NoSubsComponent', () => {
  let component: NoSubsComponent;
  let fixture: ComponentFixture<NoSubsComponent>;
  const mdDialogSpy = jasmine.createSpy('MdDialogRef')

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MdDialogModule ],
      declarations: [ NoSubsComponent ],
      providers: [ { provide: MdDialogRef, useClass: mdDialogSpy}]
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
