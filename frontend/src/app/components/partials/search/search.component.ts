import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm = '';

  //if we put private Access Modifier in constructor of a class that means if would be used throughout the class 
  //But if we dont use any Access Modifier in constructor that means it would be used only inside the constructor
  constructor(activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.searchTerm = params.searchTerm;
      }
    });

  }

  ngOnInit(): void { }

  search(term: string): void {
    if (term) {
      this.router.navigateByUrl('/search/' + term)
    }
  }

}
