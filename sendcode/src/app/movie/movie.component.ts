import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
   movies= [{
     name:"KGF",
     releaseDate: "10/05/2018"
   },
   {
    name:"Sahoo",
    releaseDate: "15/aug/2019"
  }
  ]
}
