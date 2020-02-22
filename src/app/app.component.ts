import { Component, OnInit } from '@angular/core';
import { locations } from './testobservable';
import { of, pipe} from 'rxjs';
import { map,filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'obsproj';

  ngOnInit(): void {
    myObservable.subscribe(myObserver);
  } 

}

//const myObservable = of(1,2,3);

//map(x => x * x)(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));

//const mulValues = map ((val: number) => val * 2);

//const myObservable = mulValues(of(1,2,3));

const myObservable = of(1,2,3).pipe(
  map(x => x + 1),
  filter(x => x > 2)
);



const myObserver = {
  next: x => console.log('Observer got a next value : '+x),

  error: err => console.log('Observer got an error : '+err),

  complete : () => console.log('Observer got a complete notigication'),
  
};