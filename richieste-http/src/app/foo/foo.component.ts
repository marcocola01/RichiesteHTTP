import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {
data: Object;
loading: boolean;
o: Observable<Object>;
  constructor(public http: HttpClient) { }

  ngOnInit() {
  }
makeRequest(): void{
  this.loading = true;
  this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  this.o.subscribe(this.getData);
}
  getData = (d: Object) => {
    this.data = d;
    this.loading = false;
  }

  makeCompactPost(): void {
   this.loading = true;
   this.http
     .post('https://jsonplaceholder.typicode.com/posts',
       JSON.stringify({
         body: 'bar',
         title: 'foo',
         userId: 1
       })
     )
     .subscribe(data => {
       this.data = data;
       this.loading = false;
     });
 }


}

