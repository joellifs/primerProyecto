import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PosteosService {
  token: string =
    'f52435b9fc3e0d76f8135df5a24f6dfab51a48dda3f8ceee0b29f30010c9baa0'; 
   
  constructor(private http: HttpClient) {}


  obtenerPosteos() {
    return this.http.get("https://gorest.co.in/public-api/posts");
}

}