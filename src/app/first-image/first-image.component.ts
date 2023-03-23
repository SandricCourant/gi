import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-image',
  templateUrl: './first-image.component.html',
  styleUrls: ['./first-image.component.css']
})
export class FirstImageComponent implements OnInit {

  imgs = [["https://i-dja.unimedias.fr/sites/art-de-vivre/files/styles/large/public/dj115_chaton_th.jpg", "Une photo d'un chaton tout mignon"], ["assets/img/chaton2.jpg", "Une autre photo d'un chaton tout mignon"]];
  images: { link: string, desc: string }[] = [
    {
      link: "https://i-dja.unimedias.fr/sites/art-de-vivre/files/styles/large/public/dj115_chaton_th.jpg", desc: "Une photo d'un chaton tout mignon"
    },
    {
      link: "assets/img/chaton2.jpg",
      desc: "Une autre photo d'un chaton tout mignon"
    }
  ]
  constructor() {
  }

  ngOnInit(): void { }
}
