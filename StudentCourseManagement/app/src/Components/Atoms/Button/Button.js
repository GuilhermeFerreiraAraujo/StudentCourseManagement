import PropTypes from 'prop-types';
import './Button.scss';

function Button(props) {
    if (props.type === "danger"){
        return (<button onClick={props.onClick} className="button btn btn-danger mb-3">{props.label}</button>);
    }

    return (<button onClick={props.onClick} className="button btn btn-primary mb-3">{props.label}</button>);
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Button;