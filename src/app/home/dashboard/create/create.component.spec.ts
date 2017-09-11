import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { By } from '@angular/platform-browser';

import { CreateComponent } from './create.component';
import { TypeaheadComponent } from '../../../shared/components/typeahead/typeahead.component';
import { FormsModule } from '@angular/forms';
import { MdDialogModule } from '@angular/material';
import { MdDialogRef, MdSnackBar } from '@angular/material';
import { SubscriptionService } from '../../../shared/services/subscription.service';
import { SubscriptionCreatedService } from '../../../shared/services/subscription-created.service';
import { SymbolsService } from '../../../shared/services/symbols.service';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
  const mdDialogSpy = jasmine.createSpy('MdDialogRef');
  const mdSnackSpy = jasmine.createSpy('MdSnackBar');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, HttpModule, FormsModule, MdDialogModule ],
      declarations: [ CreateComponent, TypeaheadComponent ],
      // tslint:disable-next-line:max-line-length
      providers: [ SymbolsService, SubscriptionCreatedService, { provide: MdDialogRef, useClass: mdDialogSpy }, { provide: MdSnackBar, useClass: mdSnackSpy}, SubscriptionService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have 5 inputs', () => {
    expect(fixture.debugElement.queryAll(By.css('input.form-control')).length).toEqual(5);
  });

  it('should have submit button disabled with no inputs entered', () => {
    const de = fixture.debugElement.query(By.css('button.btn.btn-primary')).nativeElement;
    expect(de.disabled).toBeTruthy();
  })
});
