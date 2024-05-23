import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CardComponent } from '../components/card/card.component';
import { NotificationComponent } from '../components/notification/notification.component';
import { LogoComponent } from '../components/logo/logo.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, CardComponent, NotificationComponent, LogoComponent]
})
export class HomePageModule { }
