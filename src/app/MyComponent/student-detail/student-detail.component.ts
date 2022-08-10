import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../main/student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})

export class StudentDetailComponent implements OnInit {
  @Input()
  dispList!: Student[];
  constructor() { }

  ngOnInit(): void {
  }

}
