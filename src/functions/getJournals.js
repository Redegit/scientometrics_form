export const getJournals = async () => {


    // const response = await fetch("/журналы");
    // const json = await response.json();

    // const data = json.map(item => ({
    //     value: item.id,
    //     label: `${item.name} ${item.specialization} ${item.number}`
    // }));
    // return data;

    const data = [
        { label: "Журнал 1, PISSIN: 1111-1111, ESSIN: 2121-2121", value: "id0" },
        { label: "Журнал 2, PISSIN: 2222-2222, ESSIN: 1212-1234", value: "id1" }
    ]

    return [{ label: "Журнала нет в списке", value: "notInList" }, ...data]


}