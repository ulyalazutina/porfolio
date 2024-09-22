type ProjectsDataType = {
    id:number,
    imgSrc:string,
    imgMobileSrc:string,
    title:string,
    desc: string,
    linkGithub:string,
    linkWebsite:string,
    skills: Array<string>,
    category: Category
}

export enum Category {
    HTML = "HTML",
    REACT = "React",
    PREPROCESSORS = "Preprocessors",
    BUILDERS = 'Builder',
}

export const ProjectsData:Array<ProjectsDataType> = [
    {
        id: 1,
        imgSrc: "./img/projects/project2.png",
        imgMobileSrc: "./img/projects/project2-mobile.png",
        title: "Online furniture store",
        desc: "Многостраничный интерент-магазин мебели. Адаптивная верстка. Flexbox. Эффекты наведения. Псевдоэлементы. БЭМ.",
        linkGithub: "https://github.com/ulyalazutina/online_furniture_store",
        linkWebsite: "https://ulyalazutina.github.io/online_furniture_store/index.html",
        skills: ["HTML", "CSS"],
        category : Category.HTML
    },
    {
        id: 2,
        imgSrc: "./img/projects/project3.png",
        imgMobileSrc: "",
        title: "Пионер",
        desc: "Одностраничный веб-сайт. Flexbox. Эффекты наведения.  БЭМ.",
        linkGithub: "https://github.com/ulyalazutina/pioner",
        linkWebsite: "https://ulyalazutina.github.io/pioner/",
        skills: ["HTML", "CSS"],
        category : Category.HTML
    },
    {
        id: 3,
        imgSrc: "./img/projects/project4.png",
        imgMobileSrc: "",
        title: "Decbase",
        desc: "Одностраничный веб-сайт о дизайне интерьера. Flexbox. Эффекты наведения. БЭМ.",
        linkGithub: "https://github.com/ulyalazutina/decbase",
        linkWebsite: "https://ulyalazutina.github.io/decbase",
        skills: ["HTML", "CSS"],
        category : Category.HTML
    },
    {
        id: 4,
        imgSrc: "./img/projects/project5.png",
        imgMobileSrc: "",
        title: "Webovio",
        desc: "Одностраничный веб-сайт. Flexbox. Эффекты наведения. БЭМ.",
        linkGithub: "https://github.com/ulyalazutina/Webovio",
        linkWebsite: "https://ulyalazutina.github.io/Webovio/",
        skills: ["HTML", "CSS"],
        category : Category.HTML
    },
    {
        id: 5,
        imgSrc: "./img/projects/project6.png",
        imgMobileSrc: "./img/projects/project6-mobile.png",
        title: "Лента комментариев",
        desc: "Проект 'Лента комментариев'. Авторизация/Регистрация. Загрузка. Лайки. Удаление последнего комментария. Редактирование комментария. Ответ на комментарий.",
        linkGithub: "https://github.com/ulyalazutina/webdev-dom-homework",
        linkWebsite: "https://ulyalazutina.github.io/webdev-dom-homework/",
        skills: ["HTML", "CSS", "Webpack", "Java Script"],
        category : Category.BUILDERS
    },
    {
        id: 6,
        imgSrc: "./img/projects/project7.png",
        imgMobileSrc: "./img/projects/project7-mobile.png",
        title: "MVP аналог социальной сети",
        desc: "Адаптивная верстка. Авторизация/Регистрация. Загрузка. Лайки/Количество лайков. Добавление поста. Просмотр постов пользователя. Доработка чужого кода.",
        linkGithub: "https://github.com/ulyalazutina/webdev-cw-instapro",
        linkWebsite: "https://ulyalazutina.github.io/webdev-cw-instapro/",
        skills: ["HTML", "CSS", "Webpack", "Java Script"],
        category : Category.BUILDERS
    },
    {
        id: 7,
        imgSrc: "./img/projects/project8.png",
        imgMobileSrc: "./img/projects/project8-mobile.png",
        title: "FromBoard Delivery",
        desc: "Одностраничный веб-сайт. Адаптивная верстка. БЭМ. Эффекты наведения. Открытие фотографий - lightbox. Слайдер отзывов - slick. grid и flexbox. Псевдоэлементы. Плавный скролл.",
        linkGithub: "https://github.com/ulyalazutina/fromboard_delivery",
        linkWebsite: "https://ulyalazutina.github.io/fromboard_delivery/",
        skills: ["HTML", "CSS", "Java Script"],
        category : Category.HTML
    },
    {
        id: 8,
        imgSrc: "./img/projects/project9.png",
        imgMobileSrc: "./img/projects/project9-mobile.png",
        title: "Cat Energy",
        desc: "Многостраничный интернет-магазин. Адаптивная верстка. БЭМ. Эффекты наведения. Слайдер до/после. grid и flexbox. Псевдоэлементы. Обработка данных из формы.",
        linkGithub: "https://github.com/ulyalazutina/fromboard_delivery",
        linkWebsite: "https://ulyalazutina.github.io/cat-food/",
        skills: ["HTML", "SASS", "Java Script", "Webpack"],
        category : Category.PREPROCESSORS
    },
]