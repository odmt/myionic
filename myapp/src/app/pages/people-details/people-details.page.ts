import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.page.html',
})
export class PeopleDetailsPage implements OnInit {

	film: any;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
     let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get(`https://swapi.co/api/people/${id}`).subscribe(res => {
      this.film = res;
    });
  }  

 }