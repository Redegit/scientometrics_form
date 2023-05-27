export const getJournals = async () => {

    let journalData = [{ label: "Журнала нет в списке", value: "notInList" }]

    await fetch("http://localhost:8070/journals")
        .then(response => response.json())
        .then(data => {
            journalData.push(...data.data)
        })
        .catch(() => console.error("Ошибка получения данных о журналах")
        );


    // const data = json.map(item => ({
    //     value: item.id,
    //     label: `${item.name}, PISSN: ${item.pissn}, EISSN:${item.eissn}`
    // }));

    // const data = [
    //     { label: "Журнал 1, PISSN: 1111-1111, EISSN: 2121-2121", value: "id0" },
    //     { label: "Журнал 2, PISSN: 2222-2222, EISSN: 1212-1234", value: "id1" }
    // ]

    return journalData


}