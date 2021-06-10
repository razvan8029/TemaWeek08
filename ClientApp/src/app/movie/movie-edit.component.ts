import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie.models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html'
})
export class MovieEditComponent implements OnInit {

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  public movie: Movie = <Movie>{};
  public id: String;

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params.id,
        this.loadMovie();
    })
  }

  public loadMovie() {
    this.http.get<Movie>(this.baseUrl + 'api/movies/' + this.id).subscribe(result => {
      this.movie = result;
    }, error => console.error(error))

  }
  public editMovie() {
    this.http.put<Movie>(this.baseUrl + 'api/movies/' + this.id, this.movie).subscribe(result => {
      this.router.navigateByUrl("/movies");
    }, error => console.error(error))

  }

}
