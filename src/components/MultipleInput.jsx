import React, { useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { InputForMulti } from './InputForMulti';


export const MultipleInput = ({ register, formState: { errors, isValid }, control, trigger, label, name }) => {

    const { fields, append, remove } = useFieldArray({
        control,
        name: name,
    });

    useEffect(() => {
        append('')
    }, []);

    return (
        <div className="container border border-2 rounded pb-3">
            <h2>{label}</h2>
            <fieldset className="d-flex gap-3 flex-column">
                {fields.map((item, index) => (
                    <div key={item.id}>
                        <h4 className='text-center'>{`Автор ${index + 1}`}</h4>
                        <div
                            className={`form-group d-flex gap-3 flex-row justify-content-center border rounded p-2 flex-wrap`}
                        >
                            <div className='flex-grow-1'>
                                <InputForMulti
                                    register={register}
                                    placeholder={"Фамилия"}
                                    trigger={trigger}
                                    root={name}
                                    name="surname"
                                    index={index}
                                    errors={errors}
                                    constraints={{
                                        required: { value: true, message: "Поле необходимо заполнить" },
                                        maxLength: { value: 255, message: "Максимальная длина - 255 символов" }
                                    }}
                                />
                                <InputForMulti
                                    register={register}
                                    constraints={{
                                        maxLength: { value: 255, message: "Максимальная длина - 255 символов" }
                                    }}
                                    placeholder={"Имя"}
                                    trigger={trigger}
                                    root={name}
                                    name="name"
                                    index={index}
                                    errors={errors}
                                />
                                <InputForMulti
                                    register={register}
                                    placeholder={"Отчество"}
                                    trigger={trigger}
                                    root={name}
                                    name="last_name"
                                    index={index}
                                    errors={errors}
                                    constraints={{
                                        maxLength: { value: 255, message: "Максимальная длина - 255 символов" }
                                    }}
                                />
                            </div>
                            <div className='flex-grow-1'>
                                <InputForMulti
                                    register={register}
                                    placeholder={"Департамент (отдел)"}
                                    trigger={trigger}
                                    root={name}
                                    name="department"
                                    index={index}
                                    errors={errors}
                                    constraints={{
                                        maxLength: { value: 255, message: "Максимальная длина - 255 символов" }
                                    }}
                                />
                                <InputForMulti
                                    register={register}
                                    placeholder={"Пост"}
                                    trigger={trigger}
                                    root={name}
                                    name="post"
                                    index={index}
                                    errors={errors}
                                    constraints={{
                                        maxLength: { value: 255, message: "Максимальная длина - 255 символов" }
                                    }}
                                />
                                <InputForMulti
                                    register={register}
                                    placeholder={"Организация (полное название)"}
                                    trigger={trigger}
                                    root={name}
                                    name="organization"
                                    index={index}
                                    errors={errors}
                                    constraints={{
                                        required: { value: true, message: "Поле необходимо заполнить" },
                                        maxLength: { value: 255, message: "Максимальная длина - 255 символов" }
                                    }}
                                />
                            </div>
                            <div className='flex-grow-1 d-flex flex-column'>
                                <InputForMulti
                                    register={register}
                                    placeholder={'Организация (сокращение)'}
                                    trigger={trigger}
                                    root={name}
                                    name="organization_short"
                                    index={index}
                                    errors={errors}
                                    constraints={{
                                        maxLength: { value: 255, message: "Максимальная длина - 255 символов" }
                                    }}
                                />
                                <InputForMulti
                                    register={register}
                                    placeholder={"Город организации"}
                                    trigger={trigger}
                                    root={name}
                                    name="city"
                                    index={index}
                                    errors={errors}
                                    constraints={{
                                        maxLength: { value: 255, message: "Максимальная длина - 255 символов" }
                                    }}
                                />
                                {index !== 0 && (
                                    <button
                                        type="button"
                                        onClick={() => remove(index)}
                                        className='btn btn-danger'
                                    >
                                        Удалить
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </fieldset>
            <div className="d-flex gap-3 justify-content-end">
                <button
                    type="button"
                    onClick={() => append('')}
                    className='btn btn-primary mt-4 flex-grow-1'
                >
                    Добавить автора
                </button>
            </div>
        </div>
    );

}
