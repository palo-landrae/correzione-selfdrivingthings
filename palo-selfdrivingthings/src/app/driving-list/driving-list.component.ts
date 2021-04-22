import { Component, Input, OnInit } from '@angular/core';
import { Driving } from '../models/driving.model';
import { Rent } from '../models/rent.model';

@Component({
  selector: 'app-driving-list',
  templateUrl: './driving-list.component.html',
  styleUrls: ['./driving-list.component.css']
})
export class DrivingListComponent implements OnInit {
  @Input() listDriving: Driving[];
  @Input() rented : Driving;

  rentedVector : Rent[] = new Array<Rent>();
  constructor() { }

  ngOnInit(): void {
  }

  rent(driving): void {
    this.rented.tipo = driving.tipo;
    this.rented.descrizione = driving.descrizione;
    this.rented.tariffa = driving.tariffa;
    this.rented.valutazionemedia = driving.valutazionemedia;
    
    let r = new Rent();
    r.numeroNoleggi = 1;
    r.driving = driving;
    this.rentedVector.push(r);
    console.log(this.rentedVector);
  }



}
