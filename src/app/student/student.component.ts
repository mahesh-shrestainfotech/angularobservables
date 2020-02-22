import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  
  students: Student[] = [];

    constructor(private studentservice: StudentService) {}

    ngOnInit() {
        const studentsObservable = this.studentservice.getStudents();
        studentsObservable.subscribe((studentsData: Student[]) => {
            this.students = studentsData;
        });
    }

}
