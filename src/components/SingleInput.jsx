import _ from 'lodash';
import Tooltip from './Tooltip/Tooltip';


export const SingleInput = ({ register, formState: { errors, isValid }, control, handleSubmit, trigger, name, label, constraints, defaultValue, tooltip }) => {

    return (
        <div className="form-group">
            <label htmlFor="journal">{`${label}`}</label>
            {tooltip && <Tooltip text={tooltip} /> }
            {constraints?.required &&
                <span className="text-danger m-1">*</span>
            }
            <input className={`form-control ${_.get(errors, name) ? "is-invalid" : ""}`}
                {...register(name, { ...constraints })}
                onBlur={async () => { await trigger(name); }}
                defaultValue={defaultValue}
            />
            {_.get(errors, name)
                ? <p className='m-0 text-danger'>{`${_.get(errors, `${name}.message`)}`}</p>
                : <></>
            }

        </div>
    )
}

