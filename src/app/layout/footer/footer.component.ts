import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  links = {
    githubUri: 'https://github.com/aborolabis',
    twitterUri: 'https://twitter.com/aborolabis',
    instagramUri: 'https://www.instagram.com/aborolabis/',
    linkedinUri: 'https://www.linkedin.com/in/aborolabis/'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
