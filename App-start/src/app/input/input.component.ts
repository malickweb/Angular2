import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor() { }

  gender: string;
  javascript = false;
  angular = false;
  csharp = false;
  name = "Two way bound";

  ngOnInit() {
  }

}
