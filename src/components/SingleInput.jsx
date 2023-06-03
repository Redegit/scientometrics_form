import _ from 'lodash';


export const SingleInput = ({ register, formState: { errors, isValid }, control, handleSubmit, trigger, name, label, constraints, defaultValue }) => {

    return (
        <div className="form-group">
            <label htmlFor="journal">{`${label}`}</label>
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

