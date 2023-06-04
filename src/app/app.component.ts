import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'experimentangular';
  myObservable: any;
  ngOnInit() {
    this.myObservable = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.complete();
      observer.next(3);
    });
    this.myObservable.subscribe(
      (data:any) => console.log(data),
      (error:any) => console.error(error),
      () => console.log('Observable complete')
    );
  }
}
