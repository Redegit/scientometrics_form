export const Header = () => {


    return (
        <header>
            <div class="container">
                <div class="d-flex flex-wrap justify-content-center align-items-center py-3 mb-4 border-bottom" style={{ color: "MediumBlue" }}>
                    <a href="/home" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        {/* <svg class="bi me-2" width="40" height="32"><use href="#bootstrap"></use></svg> */}
                        <img class="bi me-2" src="https://offers-api.agregatoreat.ru/api/file/8d45e50c-161d-4024-9a8c-48ea419efd47" width="100" height="90" />
                        <span class="fs-4">Наукометрия</span>
                    </a>

                    <ul class="nav nav-pills" style={{ color: "SkyBlue" }}>
                        <li class="nav-item"><a href="/home" class="nav-link active" aria-current="page">Главная</a></li>
                        <li class="nav-item"><a href="/json" class="nav-link">Загрузить JSON</a></li>
                        <li class="nav-item"><a href="/form" class="nav-link">Заполнить форму</a></li>
                        <li class="nav-item"><a href="/authors/" class="nav-link">Авторы</a></li>
                        <li class="nav-item"><a href="/organizations/" class="nav-link">Организации</a></li>
                        <li class="nav-item"><a href="/names_cloud/" class="nav-link">Облако слов</a></li>
                        <li class="nav-item"><a href="/articles/" class="nav-link">Статьи</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}