import _ from "lodash";
import Tooltip from "./Tooltip/Tooltip";

export const InputForMulti = ({ register, root, name, index, errors, trigger, placeholder, constraints, tooltip }) => {

    const checkError = () => {
        if (_.get(errors, `${root}[${index}].${name}`)) {
            return true
        }
        return false
    }

    return (
        <span class={`d-inline-block my-tooltip  ${tooltip ? "input-tooltip" : ""}`} tabindex="0" data-toggle="tooltip" title={tooltip}>
            <input
                className={`form-control ${checkError() ? "is-invalid" : ""}`}
                {...register(`${root}[${index}].${name}`,
                    constraints
                )}
                placeholder={`${placeholder}${constraints?.required ? ' *' : ''}`}
                onBlur={async () => { await trigger(`${root}[${index}].${name}`); console.log(errors); }}
            />
        </span>
    );
}
