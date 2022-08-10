import { Component, OnInit } from '@angular/core';
import { Student } from "./student";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  stuList: Student[];
  dispStudent: Student[];
  constructor() { 
    this.dispStudent=[];
    this.stuList= [
      {fname:'Hadiqa',
      lname:'Rabnawaz',
      email:'hadiqa@gmail.com',
      rollNo:'42'
    },
    {fname:'Iram',
      lname:'Fiyaz',
      email:'iram@gmail.com',
      rollNo:'43'
    },
    {fname:'Ali',
      lname:'Hadir',
      email:'ali@gmail.com',
      rollNo:'19'
    }
    ]
  }
  ngOnInit(): void {
  }
  deleteStudent(student: Student) {
    const index= this.stuList.indexOf(student);
    this.stuList.splice(index,1);
  }
  showDetail(student:Student){
    this.dispStudent.push(student);
  }
}
