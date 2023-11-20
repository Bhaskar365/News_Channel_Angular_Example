import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivationEnd } from '@angular/router';
import { Article } from '../models/model';
import { testArticle } from '../models/data';

@Component({
  selector: 'article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit{

  category : string = '';
  id : string = '';

  articleDetails:Article = testArticle;

  constructor(private activateRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void { 

      this.category = this.activateRoute.snapshot.params['category'];
      this.id = this.activateRoute.snapshot.params['id'];

      this.router.events.subscribe((res:any)=>{
        if(res instanceof ActivationEnd){
          this.category = res.snapshot.params['category'];
          this.id = res.snapshot.params['id'];
        }
      });

  }


}
