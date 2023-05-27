export const InputForMulti = ({ register, root, name, index, errors, trigger, placeholder, constraints }) => {

    const checkError = () => {
        if (errors[root] && errors[root][index] &&
            errors[root][index][name] && errors[root][index][name]) {
            return true
        }
        return false
    }

    return (
        <input
            className={`form-control ${checkError() ? "is-invalid" : ""}`}
            {...register(`${root}[${index}].${name}`,
                constraints
            )}
            placeholder={`${placeholder}${constraints?.required ? ' *' : ''}`}
            onBlur={async () => { await trigger(`${root}[${index}].${name}`); console.log(errors); }}
        />
    );
}
