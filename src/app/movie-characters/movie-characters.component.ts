import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-characters',
  templateUrl: './movie-characters.component.html',
  styleUrls: ['./movie-characters.component.css']
})
export class MovieCharactersComponent implements OnInit {
  characters = {
    'luke': { name: 'Luke Skywalker', movie: 'Star Wars', year: '1977' },
    'leia': { name: 'Leia Organa', movie: 'Star Wars', year: '1977' },
    'han': { name: 'Han Solo', movie: 'Star Wars', year: '1977' },
    'chewie': { name: 'Chewbacca', movie: 'Star Wars', year: '1977' },
    'vader': { name: 'Darth Vader', movie: 'Star Wars', year: '1977' },
    'obiwan': { name: 'Obi-Wan Kenobi', movie: 'Star Wars', year: '1977' },
    'yoda': { name: 'Yoda', movie: 'Star Wars', year: '1980' },
    'bobafett': { name: 'Boba Fett', movie: 'The Empire Strikes Back', year: '1980' },
    'jabba': { name: 'Jabba the Hutt', movie: 'Return of the Jedi', year: '1983' },
    'ewok': { name: 'Wicket W. Warrick', movie: 'Return of the Jedi', year: '1983' },
  }

  isHighlighted: boolean = true;
  constructor() { }
  ngOnInit(): void { }

}
