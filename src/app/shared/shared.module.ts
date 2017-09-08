import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { MdProgressSpinnerModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { SubscriptionDeletedService } from '../shared/services/subscription-deleted.service';
import { CardComponent } from './components/card/card.component';
import { CardTopSectionComponent } from './components/card-top-section/card-top-section.component';
import { CardMiddleSectionComponent } from './components/card-middle-section/card-middle-section.component';
import { CardBottomSectionComponent } from './components/card-bottom-section/card-bottom-section.component';
import { CardEditComponent } from './components/card-edit/card-edit.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ConfirmComponent } from './components/confirm/confirm.component';

@NgModule({
  imports: [ HttpModule, CommonModule, ReactiveFormsModule, MdProgressSpinnerModule ],
  providers: [ AuthGuardService, AuthService, SubscriptionDeletedService ],
  // tslint:disable-next-line:max-line-length
  declarations: [ CardComponent, CardTopSectionComponent, CardMiddleSectionComponent, CardBottomSectionComponent, CardEditComponent, SpinnerComponent, ConfirmComponent ],
  exports: [ CardComponent, SpinnerComponent, ConfirmComponent ]
})
export class SharedModule { }
