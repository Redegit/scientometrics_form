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

    await fetch('/upload', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: dataJson
    }).then(async response => {
        if (response.ok) result = { success: true, message: "Можно приступать к заполнению информации о другой статье" }
        else {
            const data = await response.json();
            console.log(data.data);
            result = { success: false, message: data.data };
        }
    }).catch(error => {
        console.error(error); return result = { success: false, message: error }
    })

    return result
}
