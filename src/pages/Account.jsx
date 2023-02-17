import React, { useState } from 'react';
import {UserAuth} from '../context/AuthContext'

// imports used for calendar
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
  "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const events = [
  {
    title:"Big Meeting",
    allDay:true,
    start: new Date(2023,6,0),
    end: new Date(2023,6,0)
  }
]

const Account = () => {
  const {logOut, user} = UserAuth();
  const handleSignOut = async () => {
    try{
      await logOut();
    } catch(error){
      console.log(error);
    }
  }

  const [newEvent, setNewEvent] = useState({title:"", start:"", end:""});
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent(){
    setAllEvents([...allEvents, newEvent])
  }
  return (
    <div>
      <h1>Account</h1>
      <div>
        <p>Welcome {user?.displayName}!</p>
      </div>
      <button onClick={handleSignOut}>Logout</button>
      <h2>Add New Event</h2>
      <div>
        <input type="text" placeholder="Add Title" style={{width:"20%", marginRight: "10px"}} value={newEvent.title} onChange={(e)=>setNewEvent({...newEvent, title:e.target.value})}/>
        <DatePicker placeholderText="Start Date" style={{marginRight:
        "10px"}} selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent,start})} />
        <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent,end})} />
        <button style={{marginTop:"10px"}} onClick={handleAddEvent}>Add Event</button>
      </div>
      <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{height:500, margin : "50px"}} />
    </div>
  );
};

export default Account;