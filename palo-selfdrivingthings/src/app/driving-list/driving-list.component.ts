import { Component, Input, OnInit } from '@angular/core';
import { Driving } from '../driving.model';

@Component({
  selector: 'app-driving-list',
  templateUrl: './driving-list.component.html',
  styleUrls: ['./driving-list.component.css']
})
export class DrivingListComponent implements OnInit {
  @Input() listDriving: Driving[];
  @Input() rented : Driving;

  constructor() { }

  ngOnInit(): void {
  }

  rent(driving): void {
    this.rented.tipo = driving.tipo;
    this.rented.descrizione = driving.descrizione;
    this.rented.tariffa = driving.tariffa;
    this.rented.valutazionemedia = driving.valutazionemedia;
  }

}
