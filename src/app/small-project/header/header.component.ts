import { Component, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{
  collapsed = true;

  ngOnInit(): void {
  }
}
