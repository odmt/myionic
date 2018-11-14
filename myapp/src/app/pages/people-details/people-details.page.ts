<<<<<<< HEAD
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
=======
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
>>>>>>> 728eeafaa0c5689535085170749646020c2457ad

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.page.html',
})
export class PeopleDetailsPage implements OnInit {

	people: any;

<<<<<<< HEAD
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
     let id = this.activatedRoute.snapshot.paramMap.get('id');
     this.api.getPeople(id).subscribe(res => {
      this.people = res;
    });
=======
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
     let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get(`https://swapi.co/api/people/${id}`).subscribe(res => {
      this.people = res;
    })
>>>>>>> 728eeafaa0c5689535085170749646020c2457ad
  }  

}