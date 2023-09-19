import Spinner from 'react-bootstrap/Spinner';
import './SpinnerLoad.css'

function SpinnerLoad () {
  return (
    <div className="spinner-container">
      <Spinner animation="border" variant="warning" className="spinner">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default SpinnerLoad;