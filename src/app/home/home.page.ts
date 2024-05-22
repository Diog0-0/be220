import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  public user: { name: string, level: string } = { name: 'default user', level: 'zero' }
  public slidesTreinos: { title: string, label: string }[] = []
  public slidesPersonal: { title: string, label: string, type: string, icon: string }[] = []

  constructor() {
    this.slidesTreinos = [
      {
        title: 'Levantamento de peso',
        label: 'Continuar treinando',
      }
    ];

    this.slidesPersonal = [
      {
        title: 'Novo Treino',
        label: '',
        type: 'new',
        icon: 'add-circle-outline'
      },
      {
        title: 'Treino de Costas',
        label: 'Quarta-Feira',
        type: 'normal',
        icon: 'add-circle-outline'
      }
    ];

  }

  ngOnInit() {
    console.log('init')
  }
  ngOnDestroy() {
    console.log('destroy')
  }
}
