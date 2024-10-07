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
   
    this.http.get<any>('https://yogasanas-10089379509.development.catalystappsail.com/health').subscribe(
      res => this.response = res,
      err => console.error('Error:', err)
    );
  }

  Post() {
    const body = {
      "asanaid":22,
      "asananame":""
  }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'// Example of an authorization header
    });
    
    this.http.post<any>('https://yogasanas-10089379509.development.catalystappsail.com/Yogasana/AddYogasana',body,{headers}).subscribe(
      res => this.response = res,
      err => console.error('Error:', err)
    );
  }
}