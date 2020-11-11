import { Component, OnInit } from '@angular/core';
import { faCar, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  faCar = faCar;

  constructor() { }

  ngOnInit(): void {
  }

}
