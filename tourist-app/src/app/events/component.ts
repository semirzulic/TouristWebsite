import {
    Component,
    ChangeDetectionStrategy,
    ViewChild,
    TemplateRef,
    Input
  } from '@angular/core';
  import {
    startOfDay,
    endOfDay,
    subDays,
    addDays,
    endOfMonth,
    isSameDay,
    isSameMonth,
    addHours
  } from 'date-fns';
  import { Subject } from 'rxjs';
  import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
  import {
    CalendarEvent,
    CalendarEventAction,
    CalendarEventTimesChangedEvent,
    CalendarView
  } from 'angular-calendar';
  
  const colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3'
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF'
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA'
    }
  };
  
  @Component({
    selector: 'mwl-demo-component',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['styles.css'],
    templateUrl: 'template.html'
  })

  export class DemoComponent {
    @ViewChild('modalContent')
    modalContent: TemplateRef<any>;
  
    view: CalendarView = CalendarView.Month;
  
    CalendarView = CalendarView;
  
    viewDate: Date = new Date();
  
    modalData: {
      action: string;
      event: CalendarEvent;
    };
  
    actions: CalendarEventAction[] = [
      // {
      //   label: '<i class="fa fa-fw fa-pencil"></i>',
      //   onClick: ({ event }: { event: CalendarEvent }): void => {
      //     this.handleEvent('Edited', event);
      //   }
      // },
      // {
      //   label: '<i class="fa fa-fw fa-times"></i>',
      //   onClick: ({ event }: { event: CalendarEvent }): void => {
      //     this.events = this.events.filter(iEvent => iEvent !== event);
      //     this.handleEvent('Deleted', event);
      //   }
      // }
    ];
  
    refresh: Subject<any> = new Subject();
  
    events: CalendarEvent[] = [
      {
        start: subDays(startOfDay(new Date()), 1),
        end: addDays(new Date(), 1),
        title:  'A 3 day event, 20:00',
        color: colors.red,

        actions: this.actions,
        allDay: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        },
        draggable: true
      },
      {
        start: subDays(startOfDay(new Date()), 1),
        end: addDays(new Date(), 1),
        title: 'Dan drzavnosti, 20:00 BKC',
        color: colors.red,
        actions: this.actions,
        allDay: true,
        
        draggable: true
      },
      {
        start: startOfDay('Sun Nov 25 2018 00:00:00 GMT+0100 (Central European Standard Time)'),
        title: 'Dan drzavnosti',
        color: colors.yellow,
        actions: this.actions
      },
      {
        start: subDays(endOfMonth(new Date()), 3),
        end: addDays(endOfMonth(new Date()), 3),
        title: 'A long event that spans 2 months',
        color: colors.blue,
        allDay: true
      },
      {
        start: addHours(startOfDay(new Date()), 2),
        end: new Date(),
        title: 'A draggable and resizable event',
        color: colors.yellow,
        actions: this.actions,
        resizable: {
          beforeStart: true,
          afterEnd: true
        },
        draggable: true
      }
    ];
  
    activeDayIsOpen: boolean = false;
  
    constructor(private modal: NgbModal) {}
  
    dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
      if (isSameMonth(date, this.viewDate)) {
        this.viewDate = date;
        if (
          (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
          events.length === 0
        ) {
          this.activeDayIsOpen = false;
        } else {
          this.activeDayIsOpen = true;
        }
      }
    }
  
    eventTimesChanged({
      event,
      newStart,
      newEnd
    }: CalendarEventTimesChangedEvent): void {
      event.start = newStart;
      event.end = newEnd;
      this.handleEvent('Dropped or resized', event);
      this.refresh.next();
    }
  
    handleEvent(action: string, event: CalendarEvent): void {
      this.modalData = { event, action };
      this.modal.open(this.modalContent, { size: 'lg' });
    }
  
    addEvent(): void {
      this.events.push({
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      });
      this.refresh.next();
    }
    
  
  }
  