import React from "react";
import "./Events.css"
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css"

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const Events = props => (
    <div className="calendar" style={{ height: 558, color: "white", fontSize: "1rem" }}>


        <BigCalendar
            events={[
                {
                    title: "Tom Walsh",
                    start: new Date(2018, 6, 27, 19, 0),
                    end: new Date(2018, 6, 27, 20, 0),
                    allDay: false
                },
                {
                    title: "Paul Lover",
                    start: new Date(2018, 6, 28, 19, 0),
                    end: new Date(2018, 6, 28, 20, 0),
                    allDay: false
                },
                {
                    title: "Will Pittman",
                    start: new Date(2018, 6, 28, 19, 0),
                    end: new Date(2018, 6, 28, 20, 0),
                    allDay: false
                },
                {
                    title: "Kevin Bidges, Chris Feeree",
                    start: new Date(2018, 7, 3, 19, 0),
                    end: new Date(2018, 7, 3, 20, 0),
                    allDay: false
                },
                {
                    title: "Doug Williams, DT",
                    start: new Date(2018, 7, 4, 19, 0),
                    end: new Date(2018, 7, 4, 20, 0),
                    allDay: false
                },
                {
                    title: "Jay Corriher, David Whitman",
                    start: new Date(2018, 7, 10, 19, 0),
                    end: new Date(2018, 7, 10, 20, 0),
                    allDay: false
                },
                {
                    title: "Katie Oakes, Parker Foley",
                    start: new Date(2018, 7, 11, 19, 0),
                    end: new Date(2018, 7, 11, 20, 0),
                    allDay: false
                },
                {
                    title: "DC, Shay Lovett, Danny Platt",
                    start: new Date(2018, 7, 14, 19, 0),
                    end: new Date(2018, 7, 14, 20, 0),
                    allDay: false
                },
                {
                    title: "Shannon Lee, DT",
                    start: new Date(2018, 7, 17, 19, 0),
                    end: new Date(2018, 7, 17, 20, 0),
                    allDay: false
                },
                {
                    title: "David Griffin, Steve Simpson",
                    start: new Date(2018, 7, 18, 19, 0),
                    end: new Date(2018, 7, 18, 20, 0),
                    allDay: false
                },
                {
                    title: "Chris Peace and band",
                    start: new Date(2018, 7, 24, 19, 0),
                    end: new Date(2018, 7, 24, 20, 0),
                    allDay: false
                },
                {
                    title: "Don Eidman, DT, Al Lemmond",
                    start: new Date(2018, 7, 25, 19, 0),
                    end: new Date(2018, 7, 25, 20, 0),
                    allDay: false
                },
                {
                    title: "mike Nolan, Louis Beeler, Bernie Swayngim",
                    start: new Date(2018, 7, 31, 19, 0),
                    end: new Date(2018, 7, 31, 20, 0),
                    allDay: false
                },
                {
                    title: "Chad Bowden, DT, and Rick Spreitzer",
                    start: new Date(2018, 8, 1, 19, 0),
                    end: new Date(2018, 8, 1, 20, 0),
                    allDay: false
                },
                {
                    title: "Darcie Richardson, Paul Lover",
                    start: new Date(2018, 8, 8, 19, 0),
                    end: new Date(2018, 8, 8, 20, 0),
                    allDay: false
                },
                {
                    title: "Kevin Marshall, DT, Jamie Kay",
                    start: new Date(2018, 8, 14, 19, 0),
                    end: new Date(2018, 8, 14, 20, 0),
                    allDay: false
                },
                {
                    title: "Scott Bianchi, DT",
                    start: new Date(2018, 8, 15, 19, 0),
                    end: new Date(2018, 8, 15, 20, 0),
                    allDay: false
                },
                {
                    title: "Herschel Brown, Barb Gardiner, DT",
                    start: new Date(2018, 8, 21, 19, 0),
                    end: new Date(2018, 8, 21, 20, 0),
                    allDay: false
                },
                {
                    title: "Kat, DC, Jack Lawrence",
                    start: new Date(2018, 8, 22, 19, 0),
                    end: new Date(2018, 8, 22, 20, 0),
                    allDay: false
                },
                {
                    title: "Lou Breaux, Randy Higgins, Marie Calabro, DT",
                    start: new Date(2018, 8, 28, 19, 0),
                    end: new Date(2018, 8, 28, 20, 0),
                    allDay: false
                },
                {
                    title: "Kathy Hall, DT, Chuck Johnson",
                    start: new Date(2018, 8, 29, 19, 0),
                    end: new Date(2018, 8, 29, 20, 0),
                    allDay: false
                },
                {
                    title: "DC, Chris English, DT",
                    start: new Date(2018, 9, 5, 19, 0),
                    end: new Date(2018, 9, 5, 20, 0),
                    allDay: false
                }

            ]}

            views={['month', 'day', 'agenda']}

            defaultDate={new Date()}
            defaultView="month"
        />

    </div>

);


export default Events;