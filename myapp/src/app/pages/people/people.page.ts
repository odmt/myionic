import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
=======
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
>>>>>>> 728eeafaa0c5689535085170749646020c2457ad

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
}
)
export class PeoplePage implements OnInit {

	people: Observable<any>;

<<<<<<< HEAD
  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
  	this.people = this.api.getPeoples();
=======
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  	this.people = this.http.get('https://swapi.co/api/people');
>>>>>>> 728eeafaa0c5689535085170749646020c2457ad
  }

  openDetails(people) {
    let split = people.url.split('/');
    let peopleId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/(people:people/${peopleId})`);
   }
}