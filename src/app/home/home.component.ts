import { Component, OnInit } from '@angular/core';
import { TickerService } from '../ticker.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  subscribers: Subscription[] = [];
  constructor(private serv: TickerService) { }

  ngOnInit() {
    this.subscribers.push(this.serv.ev.subscribe(n => {
      console.log("Home", n);
    }))
  }

  ngOnDestroy() {
    this.subscribers.forEach(s => {
      s.unsubscribe();
    })
  }

}
