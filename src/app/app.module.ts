import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdDialogModule } from '@angular/material';
import { MdSnackBarModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateComponent } from './home/dashboard/create/create.component';
import { ConfirmComponent } from './shared/components/confirm/confirm.component';

import { SharedModule } from './shared/shared.module';
import { SubscriptionService } from './shared/services/subscription.service';
import { SubscriptionCreatedService } from './shared/services/subscription-created.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MdDialogModule,
    ReactiveFormsModule,
    MdSnackBarModule
  ],
  providers: [ SubscriptionService, SubscriptionCreatedService ],
  bootstrap: [AppComponent],
  entryComponents: [ CreateComponent, ConfirmComponent ]
})
export class AppModule { }
