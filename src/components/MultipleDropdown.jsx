import _ from "lodash";
import { useEffect, useState } from "react";
import Select from "react-select";
import Tooltip from "./Tooltip/Tooltip";

export const MultipleDropdown = ({ cb, placeholder, required, isMulti, setValue, options, register, formState: { errors, isValid }, control, trigger, label, name }) => {

    useEffect(() => {
        setValue(name, []);
    }, []);

    const handleMultiChange = (selectedOptions) => {
        const ids = selectedOptions.map(option => {
            return option.value
        })
        setValue(name, ids);
        trigger(name);
    }

    const handleSingleChange = (option) => {
        if (option.value === "notInList") {
            cb(true)
        } else {
            cb(false)
        }
        setValue(name, option.value);
        trigger(name);
    }

    const checkError = () => {
        if (_.get(errors, name)) {
            return true
        }
        return false
    }

    useEffect(() => {
        register(name, { required: { value: required, message: 'Поле необходимо заполнить' } })
    }, []);

    return (
        <>
            <label>{label}</label>
            <Tooltip text="Если у статьи отсутствует журнал, выберите 'Нет журнала'" />
            {required &&
                <span className="text-danger m-1">*</span>
            }

            <div className={`d-flex align-items-stretch flex-column p-0 ${checkError() ? "my-dropdown-input my-dropdown-invalid" : ""}`}>
                <Select
                    options={options}
                    isMulti={isMulti}
                    placeholder={placeholder || "Выберите один или несколько вариантов"}
                    onChange={isMulti ? handleMultiChange : handleSingleChange}
                    required={required}
                />
            </div>
            {errors[name]
                ? <p className='m-0 text-danger'>{`${_.get(errors, `${name}.message`)}`}</p>
                : <></>
            }
        </>

    );
}
