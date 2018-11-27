import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-rent-a-car',
  templateUrl: './rent-a-car.component.html',
  styleUrls: ['./rent-a-car.component.css']
})
export class RentACarComponent implements OnInit {

  num: number = 0;
  openedPerfect: boolean = false;
  openedIntercar: boolean = false;
  openedDalton: boolean = false;
  showedInformation: boolean = false;
  time: any;
  day: any;
  workDays: string[] = ['Mon','Tue','Wed','Thu','Fri','Sat'];
  private fragment: string;

  constructor(private route: ActivatedRoute) { 
    $('.collapse').collapse();
    

    $(document).ready(function() {
      $(".dropdown-toggle").dropdown();
    });
  }

  ngOnInit() {

    this.openedPerfect = this.checkOpened('14:00');
    this.openedIntercar = this.checkOpened('15:00');
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
}

// Checking open or close rent-a-car agency

checkOpened(timeEndSunday:any) {
  for(var i = 0; i < this.workDays.length; i++)
  {
  this.day = formatDate(Date.now(), 'EEE', 'en');
  if(this.day == this.workDays[i])
      {
        this.time = formatDate(Date.now(), 'HH:mm', 'en');
  if(this.day != 'Sat')
  {
    if(this.time >= '08:00' && this.time <= '17:00')
    return true;
    else
    return false;
  }
  else
  {
    if(this.time >= '08:00' && this.time <= timeEndSunday)
    return true;
    else
    return false;
  }
}
}
}



}
