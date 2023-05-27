export const sendData = (formData) => {

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
    // console.log(formData);

    const jsonData = JSON.stringify(formData, null, 2); // сериализуем объект в формате JSON

    const blob = new Blob([jsonData], { type: 'application/json' }); // делаем данные доступными как blob
    const url = URL.createObjectURL(blob); // создаем URL-адрес для загрузки данных из blob

    const link = document.createElement('a'); // создаем элемент 'a'
    link.href = url; // устанавливаем ссылку на созданный URL-адрес
    link.download = 'article.json'; // задаем имя файла

    document.body.appendChild(link); // добавляем элемент 'a' на страницу (но он останется скрытым)

    link.click(); // имитируем клик по элементу 'a', чтобы начать загрузку файла

    URL.revokeObjectURL(url); // освобождаем занятые ресурсы

    const data = JSON.stringify(formData)
    console.log(data);

    console.log("qwe");
    fetch('http://localhost:8070/upload', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: data
    })
        .then(response => response.json())
        .then(data => { console.log(data); return true })
        .catch(error => { console.error(error); alert(error) });
}
