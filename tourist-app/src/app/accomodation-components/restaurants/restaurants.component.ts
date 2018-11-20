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
    $('.collapse').collapse();
    

    $(document).ready(function() {
      $(".dropdown-toggle").dropdown();
    });
  }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  showReservation() {
    this.show = !this.show;
    console.log(this.show);
  }

  

  

  


  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

}
