import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { Observable } from 'rxjs';
import { AsanaDTO } from './asana';

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
  test2:any;

  private apiUrl = 'https://yogaapi-10086380608.development.catalystappsail.com/asanaapi/addasanasDTO';
  private apiUrltest = 'https://yogaapi-10086380608.development.catalystappsail.com/asanaapi/Test'; // Replace with your actual API endpoint
  private apiUrltest2 = 'https://yogaapi-10086380608.development.catalystappsail.com/asanaapi/Test2';
  private apiUrltest3 = 'https://yogaapi-10086380608.development.catalystappsail.com/asanaapi/addasanasDTO';
  constructor(private http: HttpClient) {}

  fetchData() {
    this.http.get('https://yogaapi-10086380608.development.catalystappsail.com/asanaapi/getasanas')
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
    const body = {
      asanaid: 23,
      asananame: 'Spring Boot',
      url: 'from Angular!'
    };
    const data = { "asanaid": "22245","asananame":"pt testing","url":"pt.com" }; // Replace with your actual data
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const headers=new HttpHeaders({
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin':'*',
      });
    //this.http.post<any>(this.apiUrl, data, { headers }).subscribe(
    this.http.post<any>(this.apiUrl, body).subscribe(
      response => {
        console.log('Success!', response);
      },
      error => {
        console.error('Error!', error);
      }
    );
  }

  submitDataTest() {
    const data = { "asanaid": "22245","asananame":"pt testing","url":"pt.com" }; // Replace with your actual data
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const headers=new HttpHeaders({
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin':'*',
      });
    //this.http.post<any>(this.apiUrl, data, { headers }).subscribe(
    this.http.post<any>(this.apiUrl,null).subscribe(
      response => {
        console.log('Success!', response);
      },
      error => {
        console.error('Error!', error);
      }
    );
  }

  submitDataTest2() {

    const exampleAsana: AsanaDTO= {
      asanaid: 2,
      asananame: 'Downward Dog',
      url: 'http://example.com/downward-dog'
  };

  let newAsana= {
    "asanaid": 6,
    "asananame": 'Sirasana',
    "url": 'https://sarvyoga.com/mayurasana-peacock-pose-steps-and-benefits23'
  };

  
    const body = 'Hello, Spring Boot! {"a":"a"}'; // Replace with your actual data
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const headers=new HttpHeaders({
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin':'https://yogaapi-10086380608.development.catalystappsail.com/asanaapi/addasanasDTO',
      });

     let a = JSON.stringify(newAsana);
    //this.http.post<any>(this.apiUrl, data, { headers }).subscribe(
    this.http.post<AsanaDTO>(this.apiUrltest3,a,{headers}).subscribe(
      response => {
        console.log('Success  ssss!', response);
        this.test2=response;
      },
      error => {
        console.error('Error ssss!', error);
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

