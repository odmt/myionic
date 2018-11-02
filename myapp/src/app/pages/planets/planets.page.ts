import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',  
}
)
export class PlanetsPage implements OnInit {

	planets: Observable<any>;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
     this.planets = this.http.get('https://swapi.co/api/planets');
  }
  
  openDetails(planets) {
    let split = planets.url.split('/');
    let planetsId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/(planets:planets/${planetsId})`);
   }
}  