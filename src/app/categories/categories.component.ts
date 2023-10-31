import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories:string[] = [];

  constructor(){  }

  ngOnInit(): void { 

    this.categories = [

      'indian-politics',
      'international-politics',
      'education',
      'elections',
      'religion',
      'tollywood',
      'bollywood',
      'technology',
    ];


  }


}
