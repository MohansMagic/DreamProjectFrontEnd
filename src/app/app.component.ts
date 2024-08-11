import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule,HttpClientModule,AboutComponent]
})
export class AppComponent {
  title = 'DreamProject';
  asanas: any;
  health:any;

  private apiUrl = 'https://yogaapi-10086380608.development.catalystappsail.com/asanaapi/addasanasDTO'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  fetchData() {
    this.http.get('https://yoga-10086244327.development.catalystappsail.com/asanaapi/getasanas')
      .subscribe(response => {
        this.asanas = response;
        console.log(this.asanas);
      }, error => {
        console.error('Error fetching data:', error);
      });
  }

  
  fetchHealth() {
    this.http.get('https://yoga-10086244327.development.catalystappsail.com/health')
      .subscribe(response => {
        this.health = response;
        console.log(this.health);
      }, error => {
        console.error('Error fetching data:', error);
      });
  }

  submitData() {
    const data = { asanaid: '22245',asananame:'pt testing',url:'pt.com' }; // Replace with your actual data
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const headers=new HttpHeaders({
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin':'*',
      });
    //this.http.post<any>(this.apiUrl, data, { headers }).subscribe(
    this.http.post<any>(this.apiUrl, data,{headers}).subscribe(
      response => {
        console.log('Success!', response);
      },
      error => {
        console.error('Error!', error);
      }
    );
  }

  postData(): Observable<any> {
     const data = { asanaid: '2224',asananame:'MMMMM',url:'2222233' };
     this.http.post(this.apiUrl, data).subscribe(
      response => {
        console.log('Success!', response);
        this.asanas=response;
      },
      error => {
        console.error('Error!', error);
      }
    ); // Replace with your actual data
    return this.asanas; 
  }
 

  fetchlocalHealth() {
    this.http.get('http://localhost:9000/asanaapi/health')
      .subscribe(response => {
        this.health = response;
        console.log(this.health);
      }, error => {
        console.error('Error fetching data:', error);
      });
  }


}

