import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bound-textbox',
  templateUrl: './bound-textbox.component.html',
  styleUrls: ['./bound-textbox.component.scss']
})
export class BoundTextboxComponent implements OnInit {
  text:string = 'hello bro!';

  typing($event) {
    this.text = $event.target.value;
  }
  constructor() { }

  ngOnInit() {
  }

}
