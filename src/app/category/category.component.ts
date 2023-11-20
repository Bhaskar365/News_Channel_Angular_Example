import { Component, OnInit, Input } from '@angular/core';
import { ArticleThumbnail } from '../models/model';
import { ActivatedRoute, ActivationEnd, Router} from '@angular/router';
import { testArticleThumbnail } from '../models/data';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  articles:ArticleThumbnail[] = []; 

  @Input() category: string = '';

  constructor(private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.category = this.activatedRoute.snapshot.params['category'];
    this.populateArticleThumbnail();
    this.router.events.subscribe((res:any)=> {
      if(res instanceof ActivationEnd) 
      {
        this.category = res.snapshot.params['category'];
        this.populateArticleThumbnail();
      }
    });
  }

  populateArticleThumbnail(){
    this.articles = [
      testArticleThumbnail,
      testArticleThumbnail,
      testArticleThumbnail,
      testArticleThumbnail,
      testArticleThumbnail
    ];
  }

}
