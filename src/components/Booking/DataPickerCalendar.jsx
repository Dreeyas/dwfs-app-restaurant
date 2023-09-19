
const DatePickerCalendar = ({ value, onClick }) => (
  <div className="input-group">
    <input
      type="text"
      value={value}
      onClick={onClick}
      className="form-control"
      placeholder="Select date"
      />
  </div>
);

export default DatePickerCalendar;