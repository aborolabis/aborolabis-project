import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('goSearchingMode', [
      state('searchingMode', style({opacity: 1})),
      state('normalMode', style({opacity: 0})),
      transition('searchingMode => normalMode', [animate('1s')]),
      transition('normalMode => searchingMode', [animate('1s')]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {

  searching: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
