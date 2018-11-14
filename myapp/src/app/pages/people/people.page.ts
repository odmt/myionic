import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
}
)
export class PeoplePage implements OnInit {

	people: Observable<any>;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
  	this.people = this.api.getPeoples();
  }
  
  openDetails(people) {
    let split = people.url.split('/');
    let peopleId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/(people:people/${peopleId})`);
   }
}