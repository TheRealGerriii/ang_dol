import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Vehicle {
  constructor(
    public id: number,
    public plate: string,
    public brand: string,
    public year: number,
    public price: number,
    public sold: boolean,
    public created_at: string,
    public updated_at: string
  ) {}
}
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  Vehicles !: Vehicle[];
  link : string = 'http://localhost:8000/api/vehicles';
  constructor(
    private HttpClient: HttpClient) { }

  ngOnInit(): void {
    this.getVehicles();
  }
  getVehicles(){
    this.HttpClient.get<any>(this.link).subscribe(
      response => {
        this.Vehicles = response;
      }
    );
  }
}
