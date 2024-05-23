import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title: string = "";
  @Input() label: string = ""
  @Input() icon: string = ""
  @Input() type: string = ""
  @Input() img_path: string = ""

  constructor() {

  }

  ngOnInit() {
    console.log('init cards')
  }

}
