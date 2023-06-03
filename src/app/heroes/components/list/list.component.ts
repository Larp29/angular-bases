import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Capitan American', 'Hulk', 'AntMan'];
  public deletedHero?: string;

  removeHero(): void{
    this.deletedHero = this.heroNames.pop();
  }

}
