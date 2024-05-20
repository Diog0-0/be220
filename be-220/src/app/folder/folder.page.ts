import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  public section!: { name: string }[];
  private activatedRoute = inject(ActivatedRoute);

  constructor() { }

  ngOnInit() {
    this.section = [{ name: 'personal online' }, { name: 'programas' }];
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}