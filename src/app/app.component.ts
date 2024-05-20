import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menuItens = [
    { title: 'Inbox', url: '/inbox', },
    { title: 'Outbox', url: '/outbox', },
    { title: 'Favorites', url: '/favorites', },
    { title: 'Archived', url: '/archived', },
    { title: 'Trash', url: '/trash', },
    { title: 'Spam', url: '/spam', },
  ];
  constructor() { }
}
