import './Tooltip.css'

const Tooltip = ({ text }) => {
    return (
        <span className="d-inline-block my-tooltip" tabIndex="0" data-toggle="tooltip" title={`${text}`}>
            <button className="btn" type="button" disabled>?</button>
        </span>
    );
}

export default Tooltip;