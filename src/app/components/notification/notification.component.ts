import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  public isModalOpen: boolean = false;
  public newNotification: boolean = false;

  constructor() { }

  ngOnInit() {
    console.log('init notification')
    this.checkNotifications()
  }

  checkNotifications() {
    //checa notificações e cria o tint
    this.newNotification = true;
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
