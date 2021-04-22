import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Driving } from './models/driving.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  oDriving: Observable<Driving[]>;
  listDriving: Driving[];
  rented: Driving = new Driving('#','#','#',0);

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.oDriving = this.http.get<Driving[]>('https://my-json-server.typicode.com/malizia-g/fine_anno_exp/mezzi');
    this.oDriving.subscribe(this.getDriving);
  }

  getDriving = (data: Driving[]) => {
    this.listDriving = data;
    console.log(this.listDriving);
  }
}
