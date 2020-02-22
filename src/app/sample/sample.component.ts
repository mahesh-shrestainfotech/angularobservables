import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    sequence.subscribe({
      next(num) { console.log(num); },
      complete() { console.log('Finished sequence'); }
    });
    

    sequence.subscribe({
      next(num) { console.log(num); },
      complete() { console.log('Finished sequence'); }
    });

  }

}

function sequenceSubscriber(observer) {
  const seq = [1, 2, 3];
  let timeoutId;

  // Will run through an array of numbers, emitting one value
  // per second until it gets to the end of the array.
  function doSequence(arr, idx) {
    timeoutId = setTimeout(() => {
      observer.next(arr[idx]);
      if (idx === arr.length - 1) {
        observer.complete();
      } else {
        doSequence(arr, ++idx);
      }
    }, 1000);
  }

  doSequence(seq, 0);

  // Unsubscribe should clear the timeout to stop execution
  return {unsubscribe() {
    clearTimeout(timeoutId);
  }};
}

// Create a new Observable that will deliver the above sequence
const sequence = new Observable(sequenceSubscriber);

