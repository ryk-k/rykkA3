import { Component, OnInit } from '@angular/core';
import { RYKK } from 'src/assets/data/rykkData';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  rykk = RYKK;
}
