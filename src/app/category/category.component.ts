import { Component, OnInit, Input } from '@angular/core';
import { ArticleThumbnail } from '../models/model';
import { ActivatedRoute, Router} from '@angular/router';

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
    
    this.category  = this.activatedRoute.snapshot.params['category'];

  }

}
