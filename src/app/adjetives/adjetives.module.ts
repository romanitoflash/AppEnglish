import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdjetivesPageRoutingModule } from './adjetives-routing.module';

import { AdjetivesPage } from './adjetives.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdjetivesPageRoutingModule
  ],
  declarations: [AdjetivesPage]
})
export class AdjetivesPageModule {}
