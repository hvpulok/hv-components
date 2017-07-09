import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hv-navbar',
  templateUrl: './hv-navbar.component.html',
  styleUrls: ['./hv-navbar.component.scss']
})
export class HvNavbarComponent implements OnInit {
  @Input() navBarConfig = {
    navClass : '' // possible values: '', 'fixed-top', 'fixed-bottom
  }

  constructor() { }

  ngOnInit() {
  }

}
