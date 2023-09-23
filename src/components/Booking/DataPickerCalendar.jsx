import React from 'react';

const DatePickerCalendar = (props) => (
  <div className="input-group">
    <input
      type="text"
      value={props.value}
      onClick={props.onClick}
      className="form-control"
      placeholder="Select date"
    />
  </div>
);

export default DatePickerCalendar;