import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menuItens: { title: string, url: string, disable: boolean }[] = [

  ];
  constructor() {
    this.menuItens = [
      { title: 'Planilha de treinos', url: '/workout', disable: true },
      { title: 'Evolução', url: '/evolution', disable: true },
      { title: 'Treinos favoritos', url: '/favorite-workout', disable: true },
      { title: 'Ajuda', url: '/help', disable: true },
    ]
  }
}
