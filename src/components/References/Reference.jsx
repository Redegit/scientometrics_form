import { useState } from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import { MultipleDropdown } from "../MultipleDropdown";
import { SingleInput } from "../SingleInput";
import { MultipleInput } from "../MultipleInput";

export const Reference = ({ register, formState: { errors, isValid }, setValue, control, trigger, journals, index }) => {
    const [journalExists, setJournalExists] = useState(false)

    const tools = { register, formState: { errors, isValid }, control, setValue, trigger }

    return (
        <>
            <h3 className="text-center">{`Статья ${index + 1}`}</h3>
            <div className="container border border-2 rounded pb-3">
                <h4>Статья</h4>
                <SingleInput {...{
                    ...tools,
                    name: `references[${index}].art_name`,
                    label: "Название статьи",
                    constraints: {
                        required: { value: true, message: "Поле необходимо заполнить" },
                        maxLength: { value: 255, message: "Максимальная длина - 255 символов" },
                        pattern: { value: /^(?!\s+$)/, message: "Значение не может состоять только из пробелов" }
                    }
                }} />

                <SingleInput {...{
                    ...tools,
                    name: `references[${index}].pages`,
                    label: "Страницы",
                    constraints: {
                        required: { value: true, message: "Поле необходимо заполнить" },
                        pattern: { value: /^(\d+-\d+|\d+)$/, message: "Страницы должны быть двумя числами, разделенными дефисом (123-123), или просто одним числом (123)" },
                        maxLength: { value: 11, message: "Максимальная длина - 11 символов" }
                    }
                }} />

                <SingleInput {...{
                    ...tools,
                    name: `references[${index}].year`,
                    label: "Год",
                    constraints: {
                        pattern: { value: /^(19[0-9]{2}|20[0-9]{2})$/, message: "Несоответствие шаблону YYYY" },
                        max: { value: (new Date()).getFullYear(), message: "Год не может превышать текущий" },
                        min: { value: 1900, message: "Год не может быть ниже 1900" },
                        required: { value: true, message: "Поле должно быть заполнено" }
                    }
                }} />

                <SingleInput {...{
                    ...tools,
                    name: `references[${index}].volume`,
                    label: "Том",
                    constraints: {
                        maxLength: { value: 10, message: "Максимальная длина - 10 символов" },
                        pattern: { value: /^\d+$/, message: 'Том должен быть числом' }
                    }
                }} />

                <SingleInput {...{
                    ...tools,
                    name: `references[${index}].annotation`,
                    label: "Аннотация",
                    constraints: {
                        maxLength: { value: 60000, message: "Максимальная длина - 60000 символов" },
                        pattern: { value: /^(?!\s+$)/, message: "Значение не может состоять только из пробелов" }
                    }
                }} />

                <SingleInput {...{
                    ...tools,
                    name: `references[${index}].keywords`,
                    label: "Ключевые слова (через запятую)",
                    constraints: {
                        maxLength: { value: 500, message: "Максимальная длина - 500 символов" },
                        pattern: { value: /^(?!\s+$)/, message: "Значение не может состоять только из пробелов" }
                    }
                }} />

                <Dropdown
                    handleChoice={(value) => { console.log(value); }}
                    label={"Язык"}
                    name={`references[${index}].language`}
                    options={[
                        { name: "Русский", value: "rus" },
                        { name: "Английский", value: "eng" },
                        { name: "Другое", value: "" }
                    ]}
                    placeHolder={"Выберите язык"}
                    required={false}
                    {...tools}
                />

                <SingleInput {...{
                    ...tools,
                    name: `references[${index}].source`,
                    label: "Ссылка на источник статьи",
                    constraints: {
                        maxLength: { value: 1000, message: "Максимальная длина - 1000 символов" },
                        pattern: { value: /^(?!\s+$)/, message: "Значение не может состоять только из пробелов" }
                    }
                }} />
            </div>

            <div className="container border border-2 rounded pb-3">
                <h3>Журнал</h3>

                <MultipleDropdown {...{
                    ...tools,
                    options: journals,
                    name: `references[${index}].journal_id`,
                    label: "Журнал",
                    placeholder: "Поиск...",
                    isMulti: false,
                    required: true,
                    cb: setJournalExists
                }}
                />

                {journalExists &&
                    <>
                        <SingleInput {...{
                            ...tools,
                            name: `references[${index}].journal_name`,
                            label: "Название",
                            constraints: {
                                required: { value: true, message: "Поле необходимо заполнить" },
                                maxLength: { value: 255, message: "Максимальная длина - 255 символов" },
                                pattern: { value: /^(?!\s+$)/, message: "Значение не может состоять только из пробелов" }
                            }
                        }} />

                        <SingleInput {...{
                            ...tools,
                            name: `references[${index}].journal_pissn`,
                            label: "PISSN (ISSN печатной версии)",
                            constraints: {
                                required: { value: true, message: "Поле необходимо заполнить" },
                                pattern: { value: /^[0-9]{4}-[0-9]{3}[0-9X]$/, message: "Несоответствие шаблону 1111-1111 или 1111-111X" }
                            },
                            defaultValue: "0000-0000"
                        }} />

                        <SingleInput {...{
                            ...tools,
                            name: `references[${index}].journal_eissn`,
                            label: "EISSN (ISSN электронной версии)",
                            constraints: {
                                pattern: { value: /^[0-9]{4}-[0-9]{3}[0-9X]$/, message: "Несоответствие шаблону 1111-1111 или 1111-111X" }
                            }
                        }} />
                    </>
                }
            </div>

            <MultipleInput {...{
                ...tools,
                label: "Автор(ы)",
                name: `references[${index}].authors`
            }} />
        </>
    );
}
