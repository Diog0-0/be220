import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  public user: { name: string, level: string, avatar_path: string } = { name: 'default user', level: 'zero', avatar_path: '' }
  public slidesTreinos: { title: string, label?: string, img_path: string }[] = []
  public slidesContent: { title: string, label?: string, img_path?: string }[] = []
  public slidesPersonal: { title: string, label?: string, img_path: string, type: string, icon: string }[] = []

  constructor() { }

  ngOnInit() {
    console.log('init home')
    this.onLoadUser()
    this.onLoadSlidesWorkOut()
    this.onLoadSlidesPersonalWorkOut()
  }
  ngOnDestroy() {
    console.log('destroy home')
  }
  onLoadUser() {
    this.user = { name: 'Leonardo Santos', level: 'Nivel roxo', avatar_path: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" }
  }
  onLoadSlidesWorkOut() {
    this.slidesTreinos = [
      {
        title: 'Levantamento de peso',
        label: 'Continuar treinando',
        img_path: '../../../assets/cards/lifting-weight.jpg',
      },
      {
        title: 'Yoga expressivo',
        label: 'Começar',
        img_path: '../../../assets/cards/yoga.jpg',
      }
    ];
    this.slidesContent = [
      {
        title: 'Em breve',
        label: '',
      },
      {
        title: 'Em breve',
        label: '',
      }
    ];
  }
  onLoadSlidesPersonalWorkOut() {
    this.slidesPersonal = [
      {
        title: 'Novo Treino',
        label: '',
        type: 'new',
        icon: 'add-circle-outline',
        img_path: '../../../assets/cards/lifting-weight.jpg',
      },
      {
        title: 'Treino de Costas',
        label: 'Quarta-Feira',
        type: 'normal',
        icon: 'add-circle-outline',
        img_path: '../../../assets/cards/workout-back.jpg',
      }
    ];
  }
}
