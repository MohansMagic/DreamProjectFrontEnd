import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataDto } from './app.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <h1>Angular Spring Boot POST Request</h1>
    <button (click)="sendPostRequest()">Send POST Request</button>
    <p>Response: {{ response | json }}</p>
  `,
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
}