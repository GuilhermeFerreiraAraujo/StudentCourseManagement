import PropTypes from 'prop-types';
import './Select.scss';

function Select(props) {
    const list = props.data.map(x => <option>{x}</option>);

    return (
        <div>
            <label className="form-label" for="exampleFormControlSelect1">{props.label}</label>
            <select class="form-control" name={props.name} onChange={props.onChange} value={props.value} id="">
                {list}
            </select>
            <small id="" className="form-text text-muted">{props.error}</small>
        </div>
    );
}

Select.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
};

export default Select;
