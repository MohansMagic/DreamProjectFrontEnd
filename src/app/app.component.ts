import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule,FormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  private http = inject(HttpClient);
  healthresponse: any;
  addyogasanaresponse: any;
  abc!: String;

  asanaid!: number;
  asananame!: string;
  url!: string;
  asanas: any[] = [];


  FetchAllasanas() {
    this.http.get<any>('https://10octyoga-10089526778.development.catalystappsail.com/Yogasana/AllYogasana').subscribe(
      res => console.log('Health received from backend for the urlis ',this.asanas=res),
      err => console.error('Error:', err)
    );
  }

  submitForm() {
    const newAsana = {
      asanaid: this.asanaid,
      asananame: this.asananame,
      url: this.url,
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'https://asanasapp.netlify.app'
    });
    
    this.http.post<any>('https://10octyoga-10089526778.development.catalystappsail.com/Yogasana/AddYogasana',newAsana,{headers}).
    subscribe(res => console.log('addyogasanaresponse response received from backend for addyogasana end point is',this.addyogasanaresponse=res)
    );
  }
  
  BackEndApiHealth() {
    this.healthresponse="";
    this.http.get<any>('https://10octyoga-10089526778.development.catalystappsail.com/health').subscribe(
      res => console.log('Health received from backend for the url https://10octyoga-10089526778.development.catalystappsail.com/health is ',this.healthresponse=res),
      err => console.error('Error:', err)
    );
  }

  AddYogasanatoDB() {
    const body = {
      "asanaid":239,
      "asananame":"magicmohanchess",
      "url":"chess.com"
  }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'https://asanasapp.netlify.app'
    });
    
    this.http.post<any>('https://10octyoga-10089526778.development.catalystappsail.com/Yogasana/AddYogasana',body,{headers}).
    subscribe(res => console.log('addyogasanaresponse response received from backend for addyogasana end point is',this.addyogasanaresponse=res)
    );
  }
}