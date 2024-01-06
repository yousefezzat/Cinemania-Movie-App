import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MovieService } from '../../Services/movie.service';
import { environment } from '../../../environments/environment';
import { MovieInterface } from '../../../Models/movie-interface';
import { TopRatedMoviesResponseInterface } from '../../../Models/top-rated-movies-response-interface';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, AfterViewInit {
  baseUrl = environment.baseUrl;
  // apiKey = environment.apiKey;


  receivedTopRatedMovies: MovieInterface[] = [];
  // movieImagesMap: { [key: number]: string[] } = {};


  constructor(private movieService: MovieService) { }
  ngAfterViewInit(): void {
    // this.getTopRatedMovies();
  }

  ngOnInit() {
    this.getTopRatedMovies();
  }
  getTopRatedMovies() {
    this.movieService.getTopRatedMovies().subscribe((movies) => {
      this.receivedTopRatedMovies = movies.results;
      // console.log(movies)
      // console.log(this.receivedTopRatedMovies);

      // this.loadMovieImages();


      // Fetch images for each movie
      /* this.receivedTopRatedMovies.forEach(movie => {
        this.movieService.getMovieImages(movie.id).subscribe(images => {
          const posterPath = this.extractPosterPath(images);
          // Now you have the poster path, you can use it to display the image.
          // Update the movie object or use the path directly in your HTML template.
          movie.poster_path = posterPath;
        });
      }); */

    });
  }
  // loadMovieImages() {
  //   this.receivedTopRatedMovies.forEach((movie) => {
  //     this.movieService.getMovieImages(movie.id).subscribe((images) => {
  //       // Store movie images in a map for each movie ID
  //       this.movieImagesMap[movie.id] = images.backdrops.map((image: any) => image.file_path);
  //     });
  //   });
  // }
  // Extract the poster path from the images response
  // extractPosterPath(images: any): string {
  //   // Implement logic to filter and get the poster path from the images response.
  //   // This depends on the structure of the response. Look for the image that represents the poster.
  //   // Return the poster path or modify as needed.
  //   // Example logic:
  //   const posterImages = images.posters.filter((image: any) => image.iso_639_1 === null);
  //   return posterImages.length > 0 ? `${this.baseUrl}${posterImages[0].file_path}` : '';
  // }

  // getMoviePoster(movieId: number): string {
  //   // Retrieve the poster path from movieImagesMap based on the movieId
  //   const posterPaths = this.movieImagesMap[movieId];
  //   return posterPaths && posterPaths.length > 0 ? `${this.baseUrl}${posterPaths[0]}` : '';
  // }
}
