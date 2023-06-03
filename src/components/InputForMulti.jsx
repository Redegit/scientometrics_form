import _ from "lodash";
import Tooltip from "./Tooltip/Tooltip";

export const InputForMulti = ({ register, root, name, index, errors, trigger, placeholder, constraints, tooltip }) => {

    const checkError = () => {
        const err = _.get(errors, `${root}[${index}].${name}`)
        if (err) {
            return true
        }
        return false
    }

    const checkWhiteSpaces = () => {
        const err = _.get(errors, `${root}[${index}].${name}`)
        if (err && err.type === 'pattern') {
            return true
        }
        return false
    }

    return (
        <span className={`d-inline-block my-tooltip ${checkWhiteSpaces() ? "form-invalid-spaces" : ''} ${tooltip ? "input-tooltip" : ""}`} tabIndex="0" data-toggle="tooltip" title={tooltip}>
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
