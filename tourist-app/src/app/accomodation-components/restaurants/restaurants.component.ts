import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; // <-- do not forget to import
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  show: boolean = false;

  private fragment: string;

  constructor(private route: ActivatedRoute) { 

    // Enable bootstrap components

    $('.collapse').collapse();
    

    $(document).ready(function() {
      $(".dropdown-toggle").dropdown();
    });
  }

  // Enable routing inside a component

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

}
