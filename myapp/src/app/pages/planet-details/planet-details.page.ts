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
  selector: 'app-planet-details',
  templateUrl: './planet-details.page.html',
})
export class PlanetDetailsPage implements OnInit {

<<<<<<< HEAD
	planets: any;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getPlanet(id).subscribe(res => {
=======
	planet: any;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get(`https://swapi.co/api/planets/${id}`).subscribe(res => {
>>>>>>> 728eeafaa0c5689535085170749646020c2457ad
      this.planets = res;
    });
  }  

}