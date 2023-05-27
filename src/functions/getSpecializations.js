export const getSpecializations = async () => {

    const response = await fetch("data/specializations.json");
    const json = await response.json();

    const data = json.map(item => ({
        value: item.id,
        label: `${item.name} ${item.specialization} ${item.number}`
    }));
    return data;


}