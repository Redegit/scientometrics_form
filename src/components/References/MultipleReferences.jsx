import { useFieldArray } from "react-hook-form";
import { Reference } from "./Reference";

const MultipleReferences = ({ register, formState: { errors, isValid }, setValue, control, trigger, journals }) => {


    const { fields, append, remove } = useFieldArray({
        control,
        name: "references",
    });

    return (
        <>
            <h1>Цитируемые статьи</h1>
            {fields.map((item, index) => (
                <fieldset key={item.id} className="d-flex gap-3 flex-column border rounded p-2">
                    <Reference {...{
                        register, formState: { errors, isValid }, control, trigger, setValue,
                        journals,
                        index
                    }}
                    />
                    <button
                        type="button"
                        onClick={() => remove(index)}
                        className='btn btn-danger'
                    >
                        Удалить цитирование
                    </button>
                </fieldset>
            ))}
            <div className="d-flex gap-3 justify-content-end">
                <button
                    type="button"
                    onClick={() => append('')}
                    className='btn btn-success mt-4 flex-grow-1'
                >
                    Добавить цитирование
                </button>
            </div>

        </>
    );
}

export default MultipleReferences;