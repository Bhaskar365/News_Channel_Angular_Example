import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedArticlesComponent } from './suggested-articles.component';

describe('SuggestedArticlesComponent', () => {
  let component: SuggestedArticlesComponent;
  let fixture: ComponentFixture<SuggestedArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestedArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestedArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
