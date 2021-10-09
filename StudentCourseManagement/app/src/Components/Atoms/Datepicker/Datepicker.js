import PropTypes from 'prop-types';
import './Datepicker.scss';

function Datepicker(props) {
    return (
        <div>
            <label for="exampleFormControlInput1" className="form-label">{props.label}</label>
            <input type="date" className="form-control" name={props.name} onChange={props.onChange} placeholder={props.placeholder} value={props.value}/>
            <small id="emailHelp" className="form-text text-muted">{props.error}</small>
        </div>
    );
}

Datepicker.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Datepicker;