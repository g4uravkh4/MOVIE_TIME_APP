import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieApiServiceService } from 'src/app/core/movie-api-service.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  getMovieDetailResult: any;
  getMovieVideoResult: any;
  getMovieCastResult: any;

  constructor(
    private service: MovieApiServiceService,
    private router: ActivatedRoute
  ) {}
  ngOnInit(): void {
    let getParam = this.router.snapshot.paramMap.get('id');
    console.log(getParam);

    this.getMovie(getParam);
    this.getVideo(getParam);
    this.getMovieCast(getParam);
  }

  getMovie(id: any) {
    this.service.getMovieDetaile(id).subscribe((data) => {
      this.getMovieDetailResult = data;
    });
  }

  getVideo(id: any) {
    this.service.getMovieVideo(id).subscribe((data) => {
      console.log(data, 'video#');
      data.results.forEach((element: any) => {
        if (element.type == 'Trailer') {
          this.getMovieVideoResult = element.key;
        }
      });
    });
  }

  getMovieCast(id: any) {
    this.service.getMovieCast(id).subscribe((data) => {
      console.log(data, 'cast#');
      this.getMovieCastResult = data.cast;
    });
  }
}
