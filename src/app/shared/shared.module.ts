import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { CardComponent } from './components/card/card.component';
import { CardTopSectionComponent } from './components/card-top-section/card-top-section.component';
import { CardMiddleSectionComponent } from './components/card-middle-section/card-middle-section.component';
import { CardBottomSectionComponent } from './components/card-bottom-section/card-bottom-section.component';

@NgModule({
  imports: [ HttpModule, CommonModule ],
  providers: [ AuthGuardService, AuthService ],
  declarations: [ CardComponent, CardTopSectionComponent, CardMiddleSectionComponent, CardBottomSectionComponent ],
  exports: [ CardComponent ]
})
export class SharedModule { }
