import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie} from './movie.models';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['counterStyle.css']
})
export class MovieComponent {
  public movies: Movie[];
  displayedColumns: string[] = ['id', 'name', 'genre',];
  dataSource: MatTableDataSource<Movie>;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadMovies();
    this.dataSource = new MatTableDataSource(this.movies);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public deleteMovie(movie: Movie) {
    this.http.delete(this.baseUrl + 'api/movies/' + movie.id).subscribe(result => {
      this.loadMovies();
    }, error => console.error(error))
  }

  loadMovies() {
    this.http.get<Movie[]>(this.baseUrl + 'api/movies').subscribe(result => {
      this.movies = result;
    }, error => console.error(error));
  }

}
