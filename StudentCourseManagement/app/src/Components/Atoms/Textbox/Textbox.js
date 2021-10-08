import PropTypes from 'prop-types';

import './Textbox.scss';

function Textbox(props) {
    return (
        <div>
            <label for="exampleFormControlInput1" className="form-label">{props.label}</label>
            <input type="email" className="form-control" id="" placeholder={props.placeholder} value={props.value}/>
        </div>
    );
}

export default Textbox;

Textbox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};