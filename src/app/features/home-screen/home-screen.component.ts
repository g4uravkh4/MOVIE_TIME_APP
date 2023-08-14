import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/core/movie-api-service.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css'],
})
export class HomeScreenComponent implements OnInit {
  bannerApiData: any = [];
  trendingMovieApiData: any = [];

  constructor(private service: MovieApiServiceService) {}

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
  }

  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerApiData = result.results;
    });
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMovieApiData = result.results;
    });
  }
}
