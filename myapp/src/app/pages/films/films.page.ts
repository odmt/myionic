import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
=======
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
>>>>>>> 728eeafaa0c5689535085170749646020c2457ad

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
})
export class FilmsPage implements OnInit {

   films: Observable<any>;	

<<<<<<< HEAD
  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
  	 this.films = this.api.getFilms();
=======
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  	 this.films = this.http.get('https://swapi.co/api/films');
>>>>>>> 728eeafaa0c5689535085170749646020c2457ad
  }

  openDetails(film) {
    let split = film.url.split('/');
    let filmId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/(films:films/${filmId})`);
  }
}