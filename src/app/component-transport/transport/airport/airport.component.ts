import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; // <-- do not forget to import
import { Months } from '../airport/months/Months';
import { Airports } from '../airport/airportsList/Airports';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css']
})
export class AirportComponent implements OnInit {

  private fragment: string;
  private linkCheapFlights = 'https://global.cheapflights.com/flight-search/';
  private fullLinkCheapFlights: string = '';
  private numDays: number = null;
  private months: Months[];
  private listAirports: Airports[];
  private arrayNumberDays: number[] = [];
  private datePlusDay:any;
  private showFind: boolean = false;
  private yearNow: any;
  private monthNowName: any = formatDate(Date.now(), 'MMMM', 'en');
  private monthNowNumber: any = formatDate(Date.now(), 'MM', 'en');
  private daysNow: any = formatDate(Date.now(), 'dd', 'en');
  private yearsForFlight = [];

  constructor(private route: ActivatedRoute) {

    // List of months and number

    this.months =  [
      { id: "01", name: "January"},
      { id: "02", name: "February"},
      { id: "03", name: "March"},
      { id: "04", name: "April"},
      { id: "05", name: "May"},
      { id: "06", name: "June"},
      { id: "07", name: "July"},
      { id: "08", name: "August"},
      { id: "09", name: "September"},
      { id: "10", name: "October"},
      { id: "11", name: "November"},
      { id: "12", name: "December"}
    ];

    // List of airports

    this.listAirports = [
      { id: "BEG", name: "Belgrade, Serbia - Nikola Tesla"},
      { id: "TZL", name: "Tuzla, Bosnia and Herzegovina - Tuzla International"},
      { id: "VIE", name: "Wien, Austria - Vienna International"},
      { id: "SJJ", name: "Sarajevo, Bosnia and Herzegovina - Butmir"},
      { id: "ZAG", name: "Zagreb, Croatia - Franjo Tuđman"},
      { id: "FRA", name: "Frankfurt am Main, Germany - Frankfurt"},
      { id: "MUC", name: "Munich, Germany - Franz Josef Strauss"},
      { id: "NYC", name: "New York, NY - All airports"},
      { id: "OMO", name: "Mostar, Bosnia and Herzegovina - Mostar"},
      { id: "PAR", name: "Paris, France - All airports"},
      { id: "LON", name: "London, United Kingdom - All airports"},
      { id: "OSL", name: "Oslo, Norway - Oslo & other airports"},
      { id: "WAS", name: "Washington, DC - All airports"},
      { id: "MIA", name: "Miami, FL - Miami"},
      { id: "MAD", name: "Madrid, Spain - Barajas"},
      { id: "BCN", name: "Barcelona, Spain - Barcelona-El Prat"},
      { id: "MOW", name: "Moscow, Russia - All airports"},
      { id: "PEK", name: "Beijing, China - Capital"},
      { id: "RIO", name: "Rio de Janeiro, Brazil - All airports"},
      { id: "AMS", name: "Amsterdam, Netherlands - Schiphol"},
      { id: "ROM", name: "Rome, Italy - All airports"},
      { id: "MIL", name: "Milan, Italy - All airports"},
      { id: "BER", name: "Berlin, Germany - All airports"},
      { id: "BRN", name: "Bern, Switzerland - Belp"}
    ];
   
    $('.collapse').collapse();

    $(document).ready(function() {
      $(".dropdown-toggle").dropdown();
    });
  }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });

    // Get current year
    this.yearNow = formatDate(Date.now(), 'yyyy', 'en');

    // Array with current and next year

    this.yearsForFlight = [
      this.yearNow,
      parseInt(this.yearNow)+1]

      // Get number days current month
      
    this.getNumberDaysCurrentMonth();

    //  Get date plus one of today

     this.datePlusDay  = new Date().setDate(new Date().getDate()+1);

    //  Sort list of Airports by name

     this.listAirports.sort((a, b) => {
       if(a.name > b.name)
       return 1;
       else
       return -1;
    });

  }

  // Create link for find Flights

  findFlight(destinationStart: string, destinationReturn: string,
    startYear: string, startMonth: string, startDay: string,
    returnYear:string, returnMonth: string, returnDay:string )
  {

    this.fullLinkCheapFlights = this.linkCheapFlights + destinationStart + '-' + destinationReturn + '/' +
     startYear + '-' + startMonth + '-' + startDay +
    '/' + returnYear + '-' + returnMonth + '-' + returnDay;
  }

  // Create array with number days of month

  setNumberDays(monthID: string, startYear: string){
    this.arrayNumberDays = [];
    for(let i = 0; i < this.months.length; i++ )
    {
        if(monthID == this.months[i].id)
         {
          this.numDays = new Date(parseInt(startYear), parseInt(monthID), 0).getDate()
          for(let j = 1; j <= this.numDays; j++)
          {

            this.arrayNumberDays.push(j);
          }
        }
    }
  }

  // Get number days of current month

  getNumberDaysCurrentMonth()
{
  this.arrayNumberDays = [];
  this.numDays = new Date(parseInt(this.yearNow), parseInt(this.monthNowNumber), 0).getDate()
  for(let j = 1; j <= this.numDays; j++)
  {

    this.arrayNumberDays.push(j);
  }
}

// Show/hide block for finding flights

showHideFind(){
  if(this.showFind)
  this.showFind = false;
  else
  this.showFind = true;
}

}
