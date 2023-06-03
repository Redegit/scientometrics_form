import './Tooltip.css'

const Tooltip = ({ text }) => {
    return (
        <span class="d-inline-block my-tooltip" tabindex="0" data-toggle="tooltip" title={`${text}`}>
            <button class="btn" type="button" disabled>?</button>
        </span>
    );
}

export default Tooltip;