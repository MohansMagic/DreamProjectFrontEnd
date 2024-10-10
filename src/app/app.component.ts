import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { DataDto } from './app.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  private http = inject(HttpClient);
  response: any;
  abc!: String;

  sendPostRequest() {
    const data: DataDto = {
      message: 'Hello from Angular!',
      timestamp: new Date()
    };
    this.http.post<DataDto>('https://yogaapi-10086380608.development.catalystappsail.com/api/post', data).subscribe(
      res => this.response = res,
      err => console.error('Error:', err)
    );
  }

  Sendgetreq() {
    this.response="";
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'// Example of an authorization header
    });
   //https://10octyoga-10089526778.development.catalystappsail.com/health
   //this.http.get<any>('https://fullstackbackend-10089494602.development.catalystappsail.com/health',{headers}).subscribe(
    this.http.get<any>('https://10octyoga-10089526778.catalystappsail.com/health').subscribe(
      // res => this.response = res,
      res => console.log('response',this.response=res),
      // console.log('response',this.response)
      err => console.error('Error:', err)
    );
  }

  Sendgetreq2() {
   
    this.http.get<any>('https://yogasanas-10089379509.development.catalystappsail.com/Yogasana/AddYogasanathruget/mohane22/abc22.dceom/32').subscribe(
      res => this.response = res,
      err => console.error('Error:', err)
    );
  }
  Post() {
    const body = {
      "asanaid":99900,
      "asananame":"finally",
      "url":"aaasaasssa.com"
  }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'// Example of an authorization header
    });
    
    this.http.post<any>('https://fullstackbackend-10089494602.development.catalystappsail.com/Yogasana/AddYogasana',body,{headers}).subscribe(
      res => this.response = res,
      err => console.error('Error:', err)
    );
  }


  string() {
    this.abc="mohan";
    
    this.http.post<any>('https://yogasanas-10089379509.development.catalystappsail.com/Yogasana/String',this.abc).subscribe(
      res => this.response = res,
      err => console.error('Error:', err)
    );
  }


  Post2() {
    const url = 'https://jsonplaceholder.typicode.com/posts'; // Demo API endpoint
    const body = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*' // Set content type
    });

    this.http.post(url, body, { headers }).subscribe(
      response => {
        console.log('Success:', response);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }




  posting() {
    const body = {
      "asanaid":239,
      "asananame":"magicmohanchess",
      "url":"chess.com"
  }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'https://asanasapp.netlify.app'// Example of an authorization header
    });
    
    this.http.post<any>('https://10octyoga-10089526778.development.catalystappsail.com/Yogasana/AddYogasana',body,{headers}).subscribe(
      res => this.response = res,
      err => console.error('Error:', err)
    );
  }
}