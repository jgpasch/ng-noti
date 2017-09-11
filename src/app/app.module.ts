import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdDialogModule } from '@angular/material';
import { MdSnackBarModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateComponent } from './home/dashboard/create/create.component';
import { ConfirmComponent } from './shared/components/confirm/confirm.component';
import { TypeaheadComponent } from './shared/components/typeahead/typeahead.component';

import { SharedModule } from './shared/shared.module';
import { SubscriptionService } from './shared/services/subscription.service';
import { SubscriptionCreatedService } from './shared/services/subscription-created.service';
import { SymbolsService } from './shared/services/symbols.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    TypeaheadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MdDialogModule,
    ReactiveFormsModule,
    MdSnackBarModule,
    FormsModule
  ],
  providers: [ SubscriptionService, SubscriptionCreatedService, SymbolsService ],
  bootstrap: [AppComponent],
  entryComponents: [ CreateComponent, ConfirmComponent ]
})
export class AppModule { }
