import { Component, OnInit } from '@angular/core';
import { MYCOURSES } from 'src/assets/data/myCourses';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles: [],
})
export class ContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  classes = MYCOURSES;
}
