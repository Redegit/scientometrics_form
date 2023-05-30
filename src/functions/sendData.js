export const sendData = async (formData) => {

    const newAuthors = {}

    formData.authors.forEach(author => {
        Object.keys(author).forEach(key => {
            if (!newAuthors[key]) {
                newAuthors[key] = [];
            }
            newAuthors[key].push(author[key]);
        });
    })


    formData.authors = newAuthors;

    formData.references?.forEach(reference => {
        let newInnerAuthors = {}
        reference.authors?.forEach(author => {
            Object.keys(author).forEach(key => {
                if (!newInnerAuthors[key]) {
                    newInnerAuthors[key] = [];
                }
                newInnerAuthors[key].push(author[key]);
            });
        })
        reference.authors = newInnerAuthors;
    })

    console.log(formData);

    const dataJson = JSON.stringify(formData)

    let result = {}

    await fetch('http://127.0.0.1:8070/upload', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: dataJson
    }).then(response => {
        if (response.ok) result = { success: true, message: "Можно приступать к заполнению информации о другой статье" }
        else result = { success: false, message: 'Непредвиденная ошибка' }
    }).catch(error => {
        console.error(error); return result = { success: false, message: error }
    })

    return result
}
