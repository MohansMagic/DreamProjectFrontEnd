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
  asananame!: String;
  url!:string;
  asanaid!:number;
  private apiUrl = 'https://yogaapi-10086380608.development.catalystappsail.com/asanaapi/addasanasDTO';
  private apiUrltest = 'https://yogaapi-10086380608.development.catalystappsail.com/asanaapi/Test'; // Replace with your actual API endpoint
  private apiUrltest2 = 'https://yogaapi-10086380608.development.catalystappsail.com/asanaapi/Test2';
  // private apiUrltest3 = 'https://yogaapi-10086380608.development.catalystappsail.com/asanaapi/addasanasDTO';
   private apiUrltest4 = 'https://yogaapi-10086380608.development.catalystappsail.com/asanaapi/postasana';
   private apiUrltest5 = 'https://yogaapi-10086380608.development.catalystappsail.com/asanaapi/Testing';
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
      "Access-Control-Allow-Origin":"*",
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


  let newAsana= {
    "asanaid": 6,
    "asananame": 'Sirasana',
    "url": 'https://sarvyoga.com/mayurasana-peacock-pose-steps-and-benefits23'
  };

  this.asanaid=2;
  this.asananame='mudra';
  this.url='abc.com';
    const body ='asanaid:'+this.asanaid+ ',asananame:'+this.asananame+',url:'+this.url; // Replace with your actual data
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const headers=new HttpHeaders({
      "Content-Type": "application/json"
      });

    //  let a = JSON.stringify(newAsana);

    console.log('body is', body);
    this.http.post<AsanaDTO>(this.apiUrltest4,body).subscribe(
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

  Stringdtotest() {
    // let testingdto= {"abc":"abnn","def":"aaaamm"}

    const payload = {
      abc: '6',
      def: 'Sirasana'
    };
      const headers=new HttpHeaders({
        "Content-Type": "application/json"
        });     
        console.log('payload! is ', payload,{headers});

      this.http.post<any>(this.apiUrltest5,payload).subscribe(
        response => {
          console.log('Success from the post!', response);
          this.test2=response;
        },
        error => {
          console.error('Error from the post!', error);
        }
      );
    }
}

