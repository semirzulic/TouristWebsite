import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-taxi',
  templateUrl: './taxi.component.html',
  styleUrls: ['./taxi.component.css']
})
export class TaxiComponent implements OnInit {

  private fragment: string;

  constructor(private route: ActivatedRoute) { 
    $('.collapse').collapse();
    

    $(document).ready(function() {
      $(".dropdown-toggle").dropdown();
    });
  }

  ngOnInit() {
  }

}
