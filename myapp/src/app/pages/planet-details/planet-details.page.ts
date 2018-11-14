import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.page.html',
})
export class PlanetDetailsPage implements OnInit {

	planets: any;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
     let id = this.activatedRoute.snapshot.paramMap.get('id');
     this.api.getPlanet(id).subscribe(res => {
      this.planets = res;
    });
  }  

}