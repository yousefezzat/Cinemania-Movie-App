import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MovieInterface } from '../../Models/movie-interface';
import { TopRatedMoviesResponseInterface } from '../../Models/top-rated-movies-response-interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = environment.baseUrl;
  apiKey = environment.apiKey;

  // Get top-rated movies
  getTopRatedMovies(): Observable<TopRatedMoviesResponseInterface> {
      const url = `${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}`;
      return this.httpClient.get<TopRatedMoviesResponseInterface>(url);
    
  }

  /* // Get popular movies
  getPopularMovies(): Observable<any> {
    const url = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}`;
    return this.httpClient.get(url);
  } */

  // Get movie details by ID
  getMovieDetails(movieId: number): Observable<any> {
    const url = `${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}`;
    return this.httpClient.get(url);
  }

  // Search movies by query
  searchMovies(query: string): Observable<any> {
    const url = `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${query}`;
    return this.httpClient.get(url);
  }
  getMovieVideo(data: any): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/movie/${data}/videos?api_key=${this.apiKey}`)
  }

  // getMovieCast
  getMovieCast(data: any): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/movie/${data}/credits?api_key=${this.apiKey}`)
  }
  /* getMovieImages(movieId: number): Observable<any> {
    const url = `${this.baseUrl}/movie/${movieId}/images?api_key=${this.apiKey}`;
    return this.httpClient.get(url);
  }
 */
}

/* 
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = environment.baseUrl;
  apiKey = environment.apiKey;

  // Get top-rated movies
  getTopRatedMovies(): Observable<any> {
    const url = `${this.baseUrl}/movie/top_rated`;
    const params = new HttpParams().set('api_key', this.apiKey);
    return this.httpClient.get(url, { params });
  }

  // Get popular movies
  getPopularMovies(): Observable<any> {
    const url = `${this.baseUrl}/movie/popular`;
    const params = new HttpParams().set('api_key', this.apiKey);
    return this.httpClient.get(url, { params });
  }

  // Get movie details by ID
  getMovieDetails(movieId: number): Observable<any> {
    const url = `${this.baseUrl}/movie/${movieId}`;
    const params = new HttpParams().set('api_key', this.apiKey);
    return this.httpClient.get(url, { params });
  }

  // Search movies by query
  searchMovies(query: string): Observable<any> {
    const url = `${this.baseUrl}/search/movie`;
    const params = new HttpParams().set('api_key', this.apiKey).set('query', query);
    return this.httpClient.get(url, { params });
  }


}

 */