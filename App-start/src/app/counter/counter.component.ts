import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  value:any= 0;

  increment(){
    this.value;
    this.value++;
  }

  desincrement(){
    this.value;
    this.value--;
  }
  constructor() { }


  ngOnInit() {
  }

}
