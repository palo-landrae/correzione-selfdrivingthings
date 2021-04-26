import { Component, OnInit, Input } from '@angular/core';
import { Rent } from '../models/rent.model';

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.css']
})
export class RentListComponent implements OnInit {

  @Input() listRented : Rent[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
