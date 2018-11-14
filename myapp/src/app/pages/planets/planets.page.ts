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
  selector: 'app-planets',
  templateUrl: './planets.page.html',  
}
)
export class PlanetsPage implements OnInit {

	planets: Observable<any>;

<<<<<<< HEAD
  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
     this.planets = this.api.getPlanets();
=======
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
     this.planets = this.http.get('https://swapi.co/api/planets');
>>>>>>> 728eeafaa0c5689535085170749646020c2457ad
  }
  
  openDetails(planets) {
    let split = planets.url.split('/');
    let planetsId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/(planets:planets/${planetsId})`);
   }
}  