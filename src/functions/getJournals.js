export const getJournals = async () => {

    let journalData = [{ label: "Журнала нет в списке", value: "notInList" }]

    await fetch("http://127.0.0.1:8070/journals", {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            journalData.push(...data.data)
        })
        .catch(() => console.error("Ошибка получения данных о журналах")
        );

    return journalData


}