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
    // console.log(JSON.stringify(formData, null, 2));

    const dataJson = JSON.stringify(formData)

    let result = {}

    await fetch('http://localhost:8070/upload', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: dataJson
    })
        .then(response => {
            if (!response.ok) {
                // result = { success: false, message: response };
            }
            // return response.json();
        })
        .then(data => { console.log(data); result = { success: true, message: "Можно приступать к заполнению информации о другой статье" } })
        .catch(error => { console.error(error); result = { success: false, message: error } });

    return result
}
