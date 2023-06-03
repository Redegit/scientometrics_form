export const getJournals = async () => {

    let journalData = [
        { label: "Нет журнала", value: "noJournal" },
        { label: "Журнала нет в списке", value: "notInList" }
    ]

    await fetch("/journals", {
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