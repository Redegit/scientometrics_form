import { useState } from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import { MultipleDropdown } from "../MultipleDropdown";
import { SigleInput } from "../SingleInput";
import { MultipleInput } from "../MultipleInput";

export const Reference = ({ register, formState: { errors, isValid }, setValue, control, trigger, journals, index }) => {
    const [journalExists, setJournalExists] = useState(false)

    const tools = { register, formState: { errors, isValid }, control, setValue, trigger }

    return (
        <>
            <h2>{`Статья ${index + 1}`}</h2>
            <div className="container border border-2 rounded pb-3">
                <h3>Статья</h3>
                <SigleInput {...{
                    ...tools,
                    name: `references[${index}].art_name`,
                    label: "Название статьи",
                    constraints: {
                        required: { value: true, message: "Поле необходимо заолнить" }
                    }
                }} />

                <SigleInput {...{
                    ...tools,
                    name: `references[${index}].pages`,
                    label: "Страницы",
                    constraints: {
                        required: { value: true, message: "Поле необходимо заолнить" },
                        pattern: { value: /^(\d+-\d+|\d+)$/, message: "Страницы должны быть двумя числами, разделенными дефисом (123-123), или просто одним числом (123)" }
                    }
                }} />

                <SigleInput {...{
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

                <SigleInput {...{
                    ...tools,
                    name: `references[${index}].volume`,
                    label: "Том",
                    constraints: {
                    }
                }} />

                <SigleInput {...{
                    ...tools,
                    name: `references[${index}].annotation`,
                    label: "Аннотация",
                    constraints: {
                    }
                }} />

                <SigleInput {...{
                    ...tools,
                    name: `references[${index}].keywords`,
                    label: "Ключевые слова (через запятую)",
                    constraints: {
                    }
                }} />

                <Dropdown
                    handleChoice={(value) => { console.log(value); }}
                    label={"Язык"}
                    name={`references[${index}].language`}
                    options={[
                        { name: "Русский", value: "rus" },
                        { name: "Английский", value: "eng" }
                    ]}
                    placeHolder={"Выберите язык"}
                    required={false}
                    {...tools}
                />

                <SigleInput {...{
                    ...tools,
                    name: `references[${index}].source`,
                    label: "Ссылка на источник статьи",
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
                        <SigleInput {...{
                            ...tools,
                            name: `references[${index}].journal_name`,
                            label: "Название",
                            constraints: {
                                required: { value: true, message: "Поле необходимо заолнить" }
                            }
                        }} />

                        <SigleInput {...{
                            ...tools,
                            name: `references[${index}].journal_pissn`,
                            label: "PISSN",
                            constraints: {
                                required: { value: true, message: "Поле необходимо заполнить" },
                                pattern: { value: /^[0-9]{4}-[0-9]{4}$/, message: "Несоответствие шаблону 1111-1111" }
                            }
                        }} />

                        <SigleInput {...{
                            ...tools,
                            name: `references[${index}].journal_eissn`,
                            label: "EISSN",
                            constraints: {
                                pattern: { value: /^[0-9]{4}-[0-9]{4}$/, message: "Несоответствие шаблону 1111-1111" }
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
