// Ichronoclast.js
// Stupid simple javascript library to display the current, live date and time
//
// Author: Matthew Cowie
// Version: 0.1.0

var Ichronoclast = function(dateDisplay, timeDisplay) {
  this.dateDisplay = Ichronoclast.getDOMObject(dateDisplay);
  this.timeDisplay = Ichronoclast.getDOMObject(timeDisplay);

  this.refreshDisplay();
  this.start();
}

Ichronoclast.prototype.start = function() {
  myself = this;
  this.looper = window.setInterval(function(){ myself.refreshDisplay() }, 1000);
};

Ichronoclast.prototype.stop = function() {
  window.clearInterval(this.looper);
}

Ichronoclast.prototype.refreshDisplay = function() {
  current = new Date();
  this.dateDisplay.textContent = this.formattedDate(current);
  this.timeDisplay.textContent = this.formattedTime(current);
};

Ichronoclast.prototype.formattedTime = function(date) {
  meridian = this.getMeridian(date.getHours());
  hours = this.get12Hours(date.getHours());
  minutes = date.getMinutes();

  formatted = '' + hours + ':' + minutes + ' ' + meridian;
  return formatted;
};

Ichronoclast.prototype.formattedDate = function(date) {
  year      = date.getFullYear();
  monthDay  = date.getDate();
  dayName   = this.dayName(date.getDay());
  monthName = this.monthName(date.getMonth());

  formatted = dayName + ' ' + monthName + ' ' + monthDay + ', ' + year;
  return formatted;
};

Ichronoclast.prototype.monthName = function(idx) {
  MONTHS = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"]

  return MONTHS[idx];
};

Ichronoclast.prototype.dayName = function(idx) {
  DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
          "Saturday"]

  return DAYS[idx];
};

Ichronoclast.prototype.getMeridian = function(hours) {
  if(hours > 12)
    return "PM"
  return "AM"
};

Ichronoclast.prototype.get12Hours = function(hours) {
  twelveHours = hours;

  if(hours > 12)
    twelveHours -= 12

  return twelveHours;
};

Ichronoclast.getDOMObject = function(objectOrSelector)  {
  if(typeof objectOrSelector == 'string'){
    object = document.querySelector(objectOrSelector);
  } else if(typeof objectOrSelector == 'object'){
    object = objectOrSelector;
  } else {
    throw "Neither object nor selector provided";
  }
  return object;
};
