import PropTypes from 'prop-types';
import './Textbox.scss';

function Textbox(props) {
    return (
        <div>
            <label for="exampleFormControlInput1" className="form-label">{props.label}</label>
            <input type="email" style={props.style} className="form-control" name={props.name} onChange={props.onChange} placeholder={props.placeholder} value={props.value}/>
            <small id="emailHelp" className="form-text text-muted text-danger">{props.error}</small>
        </div>
    );
}

Textbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Textbox;