import { Component, OnInit } from '@angular/core';
import { MYCOURSES } from 'src/assets/data/myCourses';
import { Course } from '../courseInfo';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles: [],
})
export class ContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  courses = MYCOURSES;

  selectedCourse?: Course;
  
 // displ: string [] = [];


  onSelect(c: Course): void  {
    this.selectedCourse = c;
//   this.displ[] = !this.displ[];
  }
}
