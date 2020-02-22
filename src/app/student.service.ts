import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  students: Student[] = [{
    id: 1,
    name: 'Krunal',
    enrollmentNumber: 110470116021,
    college: 'VVP Engineering College',
    university: 'GTU'
},
{
    id: 2,
    name: 'Rushabh',
    enrollmentNumber: 110470116023,
    college: 'VVP Engineering College',
    university: 'GTU'
},
{
    id: 3,
    name: 'Ankit',
    enrollmentNumber: 110470116022,
    college: 'VVP Engineering College',
    university: 'GTU'
}];

public getStudents(): any {
  const studentsObservable = new Observable(observer => {
         setTimeout(() => {
             observer.next(this.students);
         }, 1000);
  });

  return studentsObservable;
}
  
}
