import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app02';
  
  constructor(private http:HttpClient) {}
  onSubmit(data) {
    this.http.post('http://localhost:3000/mydata',data).subscribe((result) => {
      console.warn("result",result)
    })
  }
}
