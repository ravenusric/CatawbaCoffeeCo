import React from "react";
import "./Events.css"
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css"

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const Events = props => (
  <div id="calendar" style = {{height: 558, color: "white", fontSize:"1rem" }}>


  <BigCalendar
    events={[
      {
          title: "Tom Walsh",
          start: new Date(2018, 6, 27, 19), 
          end: new Date(2018, 6, 27,20), 
          allDay: false 
      },
      {
          title: "Paul Lover",
          start: new Date(2018, 6, 28,19), 
          end: new Date(2018, 6, 28,20), 
          allDay: false 
      },
      {
        title: "Will Pittman",
        start: new Date(2018, 6, 28), 
        end: new Date(2018, 6, 28), 
        allDay: false 
    },
      {
          title: "Kevin Bidges, Chris Feeree",
          start: new Date(2018, 7, 3), 
          end: new Date(2018, 7, 3), 
          allDay: false 
      },
      {
          title: "Doug Williams, DT",
          start: new Date(2018, 7, 4), 
          end: new Date(2018, 7, 4), 
          allDay: false 
      },
      {
          title: "Jay Corriher, David Whitman",
          start: new Date(2018, 7, 10), 
          end: new Date(2018, 7, 10), 
          allDay: false 
      },
      {
          title: "Katie Oakes, Parker Foley",
          start: new Date(2018, 7, 11), 
          end: new Date(2018, 7, 11), 
          allDay: false 
      },

    ]}

    // step={60}
    // view='month'
    views={['month','day','agenda']}
    // onView={() => {}}
    defaultDate={new Date()}
      defaultView="month"
  />
   
</div>

  );
  
  
  export default Events;