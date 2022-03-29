import { Component, OnInit } from '@angular/core';
import { RYKK } from 'src/assets/data/rykkData';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
 
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  rykk = RYKK;
}
