import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  public newNotification: boolean = false;

  constructor() { }

  ngOnInit() {
    console.log('init notification')
    this.checkNotifications()
  }

  checkNotifications(){
    //checa notificações e cria o tint
    this.newNotification = true;
  }

}
