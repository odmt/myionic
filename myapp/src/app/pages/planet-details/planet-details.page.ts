import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.page.html',
})
export class PlanetDetailsPage implements OnInit {

	planet: any;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get(`https://swapi.co/api/planets/${id}`).subscribe(res => {
      this.planets = res;
    });
  }  

}