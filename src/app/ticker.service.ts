import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TickerService {
  ev: Subject<number>;
  constructor() { 
    this.ev = new Subject<number>();
    let i = 0;
    let tick = setInterval(()=>{
      this.ev.next(++i);
      if(i ==25){
        clearInterval(tick);
      }
    }, 1000)
  }
}
