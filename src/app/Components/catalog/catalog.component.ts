import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MovieInterface } from '../../../Models/movie-interface';
import { MovieService } from '../../Services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  baseUrl = environment.baseUrl;
  receivedTopRatedMovies: MovieInterface[] = [];
  showMore: boolean[] = [];


  constructor(private movieService: MovieService, private router: Router) { }


  ngOnInit() {
    this.getTopRatedMovies();

  }
  getTopRatedMovies() {
    this.movieService.getTopRatedMovies().subscribe((movies) => {
      this.receivedTopRatedMovies = movies.results;
      this.showMore = new Array<boolean>(this.receivedTopRatedMovies.length).fill(false);


    });
  }

  onMovieClicked(id: number) {
    this.router.navigate(['Movie', id]);
  }
  truncateOverview(overview: string): string {
    if (overview.length > 170 && !this.showMore[this.receivedTopRatedMovies.findIndex(movie => movie.overview === overview)]) {
      return overview.slice(0, 170) + '...';
    }
    return overview;
  }

  toggleSeeMore(index: number): void {
    this.showMore[index] = !this.showMore[index];
    console.log(this.showMore[index]);
  }

  getIndex(movie: MovieInterface): number {
    return this.receivedTopRatedMovies.findIndex(m => m === movie);
  }
}