import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule,HttpClientModule]
})
export class AppComponent {
  title = 'DreamProject';
  data: any;


  constructor(private http: HttpClient) {}

  fetchData() {
    this.http.get('https://yoga-10086244327.development.catalystappsail.com/asanaapi/getasanas')
      .subscribe(response => {
        this.data = response;
        console.log(this.data);
      }, error => {
        console.error('Error fetching data:', error);
      });
  }

  
  fetchHealth() {
    this.http.get('https://yoga-10086244327.development.catalystappsail.com/health')
      .subscribe(response => {
        this.data = response;
        console.log(this.data);
      }, error => {
        console.error('Error fetching data:', error);
      });
  }


}
