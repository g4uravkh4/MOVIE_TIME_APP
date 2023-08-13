import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieApiServiceService {
  baseurl = 'https://api.themoviedb.org/3';
  apikey = 'e3768971c7e61dd375c13648d9f54f2b';

  constructor(private http: HttpClient) {}

  bannerApiData() {
    return this.http.get(
      `${this.baseurl}/trending/all/week?api_key=${this.apikey}`
    );
  }
}
