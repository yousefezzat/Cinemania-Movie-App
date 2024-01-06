import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title,Meta } from '@angular/platform-browser';
import { MovieService } from '../../Services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  

  constructor(private service: MovieService,private router:ActivatedRoute,private title:Title,private meta:Meta) { }
  moveID:number = 0;
  getMovieDetail:any;
  getMovieVideo:any;
  getMovieCastNames:any;
  ngOnInit(): void {
    this.moveID = Number (this.router.snapshot.paramMap.get('id'));  
    this.getMovie(this.moveID);
    this.getVideo(this.moveID);
    this.getMovieCast(this.moveID);
  }


  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe(async(result)=>{
        this.getMovieDetail = await result;

      

    });
  }

  getVideo(id:any)
  {
    this.service.getMovieVideo(id).subscribe((result)=>{
        result.results.forEach((element:any) => {
            if(element.type=="Trailer")
            {
              this.getMovieVideo = element.key;
            }
        });

    });
  }

  getMovieCast(id:any)
  {
    this.service.getMovieCast(id).subscribe((result)=>{
      this.getMovieCastNames = result.cast.splice(0, 9);
    });
  }


}