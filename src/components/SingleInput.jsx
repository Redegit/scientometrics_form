export const SigleInput = ({ register, formState: { errors, isValid }, control, handleSubmit, trigger, name, label, constraints }) => {

    return (
        <div className="form-group">
            <label htmlFor="journal">{`${label}`}</label>
            {constraints?.required &&
                <span className="text-danger m-1">*</span>
            }
            <input className={`form-control ${errors[name] ? "is-invalid" : ""}`}
                {...register(name, { ...constraints })}
                onBlur={async () => { await trigger(name); console.log(errors); }}

            />
            {errors[name]
                ? <p className='m-0 text-danger'>{`${errors[name].message}`}</p>
                : <></>
            }

        </div>
    )
}

