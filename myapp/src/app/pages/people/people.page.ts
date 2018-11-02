import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
}
)
export class PeoplePage implements OnInit {

	people: Observable<any>;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  	this.people = this.http.get('https://swapi.co/api/people');
  }

  openDetails(people) {
    let split = people.url.split('/');
    let peopleId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/(people:people/${peopleId})`);
   }
}