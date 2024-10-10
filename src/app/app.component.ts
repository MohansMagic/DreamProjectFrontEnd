import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
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
  BackEndApiHealth() {
    this.response="";
    this.http.get<any>('https://fullstackbackend-10089494602.development.catalystappsail.com/health').subscribe(
      res => console.log('response',this.response=res),
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
    subscribe(res => console.log('response',this.response=res)
    );
  }
}