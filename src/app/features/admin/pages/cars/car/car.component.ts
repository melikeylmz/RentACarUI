import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/core/services/car.service';
import { carModel } from 'src/app/core/models/car/carModel';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private carService: CarService,
    private activatedRoute: ActivatedRoute) { }
  cars: carModel[];
  selectedCar: carModel;
  brandId: number = 0;
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      if (params["brandid"]) {
        this.carService.getbyBrandId(params["brandid"]).subscribe(data => this.cars = data)
      }
      else if (params["colorid"]) {
        this.carService.getbyColorId(params["colorid"]).subscribe(data => this.cars = data)
      } else {
        this.carService.getall().subscribe(data => {

          this.cars = data;
        })
      }
    })



  }
}

