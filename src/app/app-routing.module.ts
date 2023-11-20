import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

const routes: Routes = [
  { path: 'category/:category', component:CategoryComponent },
  { path: 'article/:category/:id', component:ArticleDetailsComponent },
  { path: 'home', component:HomeComponent },
  { path: '', redirectTo:'/home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
