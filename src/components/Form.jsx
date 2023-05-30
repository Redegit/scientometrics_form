import { SigleInput } from "./SingleInput";
import { MultipleInput } from "./MultipleInput";
import { useForm } from 'react-hook-form';
import { Dropdown } from "./Dropdown/Dropdown";
import { MultipleDropdown } from "./MultipleDropdown";
import { useEffect, useState } from "react";
// import { getSpecializations } from "../functions/getSpecializations";
import { sendData } from "../functions/sendData";
// import { getReferences } from "../functions/getReferences";
import { getJournals } from "../functions/getJournals";
import MultipleReferences from "./References/MultipleReferences";
import { Modal } from "./Modal";


export

    const Form = () => {

        const { register, setValue, formState: { errors, isValid }, control, handleSubmit, trigger } = useForm({});

        const tools = { register, setValue, formState: { errors, isValid }, control, handleSubmit, trigger }

        // const [specializations, setSpecializations] = useState([])
        // const [references, setReferences] = useState([])
        const [journals, setJournals] = useState([])
        const [journalExists, setJournalExists] = useState(false)
        const [invalid, setInvalid] = useState(false)
        const [modalData, setModalData] = useState({})
        const [showModal, setShowModal] = useState(false)

        const onSubmit = (data) => {
            console.log(data);
            sendForm(data)
        };

        const sendForm = async (data) => {
            const modalData = await sendData(data)
            await setModalData(modalData)
            setShowModal(true)
        }

        useEffect(() => {
            // getSpecs();
            // getRefs();
            getJour();
        }, []);

        // const getSpecs = async () => {
        //     const data = await getSpecializations()
        //     setSpecializations(data);
        // }

        // const getRefs = async () => {
        //     const refs = await getReferences();
        //     setReferences(refs);
        // }

        const getJour = async () => {
            const journals = await getJournals();
            setJournals(journals);
        }




        return (
            <div className="container mt-3 mb-3">
                <form className='form-control' onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="d-flex gap-3 flex-column">
                        <h1>Добавление статьи</h1>
                        <div className="container border border-2 rounded pb-3">
                            <h2>Статья</h2>
                            <SigleInput {...{
                                ...tools,
                                name: "art_name",
                                label: "Название статьи",
                                constraints: {
                                    required: { value: true, message: "Поле необходимо заолнить" },
                                    maxLength: { value: 255, message: "Максимальная длина - 255 символов" }
                                }
                            }} />

                            <SigleInput {...{
                                ...tools,
                                name: "pages",
                                label: "Страницы",
                                constraints: {
                                    required: { value: true, message: "Поле необходимо заолнить" },
                                    pattern: { value: /^(\d+-\d+|\d+)$/, message: "Страницы должны быть двумя числами, разделенными дефисом (123-123), или просто одним числом (123)" },
                                    maxLength: { value: 11, message: "Максимальная длина - 11 символов" }
                                }
                            }} />

                            <SigleInput {...{
                                ...tools,
                                name: "year",
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
                                name: "volume",
                                label: "Том",
                                constraints: {
                                    maxLength: { value: 10, message: "Максимальная длина - 10 символов" },
                                    pattern: {value: /^\d+$/, message: 'Том должен быть числом'}
                                }
                            }} />

                            <SigleInput {...{
                                ...tools,
                                name: "annotation",
                                label: "Аннотация",
                                constraints: {
                                    maxLength: { value: 1500, message: "Максимальная длина - 1500 символов" }
                                }
                            }} />

                            <SigleInput {...{
                                ...tools,
                                name: "keywords",
                                label: "Ключевые слова (через запятую)",
                                constraints: {
                                    maxLength: { value: 500, message: "Максимальная длина - 500 символов" }
                                }
                            }} />

                            <Dropdown
                                handleChoice={(value) => { console.log(value); }}
                                label={"Язык"}
                                name={"language"}
                                options={[
                                    { name: "Русский", value: "rus" },
                                    { name: "Английский", value: "eng" },
                                    { name: "Другое", value: "" }
                                ]}
                                placeHolder={"Выберите язык"}
                                required={false}
                                {...tools}
                                defaultValue={{ value: "" }}
                            />

                            <SigleInput {...{
                                ...tools,
                                name: "source",
                                label: "Ссылка на источник статьи",
                                constraints: {
                                    maxLength: { value: 255, message: "Максимальная длина - 255 символов" }
                                }
                            }} />
                        </div>

                        <div className="container border border-2 rounded pb-3">
                            <h2>Журнал</h2>

                            <MultipleDropdown
                                {...tools}
                                options={journals}
                                name='journal_id'
                                label="Журнал"
                                placeholder="Поиск..."
                                isMulti={false}
                                required={true}
                                cb={setJournalExists}
                            />

                            {journalExists &&
                                <>
                                    <SigleInput {...{
                                        ...tools,
                                        name: "journal_name",
                                        label: "Название",
                                        constraints: {
                                            required: { value: true, message: "Поле необходимо заолнить" },
                                            maxLength: { value: 255, message: "Максимальная длина - 255 символов" }
                                        }
                                    }} />

                                    <SigleInput {...{
                                        ...tools,
                                        name: "journal_pissn",
                                        label: "PISSN",
                                        constraints: {
                                            required: { value: true, message: "Поле необходимо заполнить" },
                                            pattern: { value: /^[0-9]{4}-[0-9]{3}[0-9X]$/, message: "Несоответствие шаблону 1111-1111 или 1111-111X" }
                                        }
                                    }} />

                                    <SigleInput {...{
                                        ...tools,
                                        name: "journal_eissn",
                                        label: "EISSN",
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
                            name: 'authors'
                        }} />

                        <MultipleReferences {...{
                            ...tools,
                            journals,
                        }}
                        />

                    </fieldset>
                    {invalid &&
                        <div className="mt-4 text-danger fs-5 fw-bold">Не все поля заполнены корректно</div>
                    }
                    <button
                        className='btn btn-primary mt-4'
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        onClick={() => {
                            trigger()
                                .then((isValid) => {
                                    if (isValid) {
                                        console.log("VALID!");
                                        setInvalid(false);
                                        handleSubmit(onSubmit)();
                                    } else {
                                        console.log(errors);
                                        setInvalid(true);
                                    }
                                })
                        }}
                    >
                        Сохранить
                    </button>
                </form>
                {showModal &&
                    <Modal
                        data={modalData}
                        cb={setShowModal}
                    />
                }
            </div >
        );
    }

export default Form;