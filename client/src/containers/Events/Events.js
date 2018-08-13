import React from "react";
import "./Events.css"
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css"

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const Events = props => (
  <div id="calendar" style = {{height: 598, color: "white", fontSize:"1rem" }}>
 <container>


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
   
</container> {/* container end*/}
  <div className="footer">
      <div className="row">
      <div className="col-2">
      </div>

        <div id="addr"className="col-8">
          <p>Address: 117 N Main St, Mt Holly, NC 28120</p>
          <p>
            Hours: Sunday Closed Monday 7AM–8PM | Tuesday 7AM–8PM | Wednesday 7AM–8PM
           | Thursday 7AM–8PM | Friday 7AM–9PM | Saturday 8AM–8PM  || Phone: (704) 820-6556</p>
        </div> {/* addr*/}

        <div id="media" className="col-2">
          <a href="https://www.facebook.com/catawbacoffeeco/" target="_blank">
            <img className="img-responsive1" src={require("../../images/fb.png")} alt="Facebook" width="35" height="35" />
          </a>
          <a href="https://www.yelp.com/biz/catawba-coffee-co-mount-holly" target="_blank">
            <img className="img-responsive2" src={require("../../images/Yelp.png")} alt="Yelp" width="35" height="35" /></a>
          <a href="https://www.instagram.com/catawbacoffeeco/" target="_blank">
            <img className="img-responsive3" src={require("../../images/Instagram.png")} alt="Instagram" width="35" height="35" /></a>
        </div> {/* media end*/}
      </div>
    </div>
</div>

  );
  
  
  export default Events;