export const getReferences = async () => {

    fetch('/куда отправлять данные', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data
        })
        // .catch(error => { console.error(error); alert("Ошибка получения данных") });

}