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
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
})
export class FilmDetailsPage implements OnInit {

   film: any;

<<<<<<< HEAD
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
  	  let id = this.activatedRoute.snapshot.paramMap.get('id');
      this.api.getFilm(id).subscribe(res => {
        this.film = res;
=======
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
  	  let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get(`https://swapi.co/api/films/${id}`).subscribe(res => {
      this.film = res;
>>>>>>> 728eeafaa0c5689535085170749646020c2457ad
    });
  }

 }