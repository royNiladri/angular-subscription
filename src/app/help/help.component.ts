import { Component, OnInit } from '@angular/core';
import { TickerService } from '../ticker.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor(private serv: TickerService) { }

  ngOnInit() {
    this.serv.ev.subscribe(n => {
      console.log("Help", n);
    })
  }

}
