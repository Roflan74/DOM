/* 1.Выбор элементов на странице */
    /* 1.1. Выбор по id */
        const h1 = document.getElementById("title");
        console.log(h1);
    /* 1.2. Выбор одного элемента по селектору */
        const menu = document.querySelector(".menu");
        console.log(menu);
    /* 1.3. Выбор нескольких элементов по селектору */
        const paragraphs = document.querySelectorAll("p");
        console.log(paragraphs);

/* 2. Прочитать или изменить содержимое тэга */
    /* 2.1. Прочитать содержимое */
        console.log(h1.textContent);
        console.log(h1.innerHTML);
        console.log(h1.outerHTML);
        console.log(h1.innerText);
        console.log(h1.outerText);
    /* 2.2. Изменить содержимое */
        h1.textContent = 'Новый заголовок <i class="bi bi-gear"></i>'; // <i class="bi bi-gear"></i> - иконка
        h1.innerHTML = ""; // Очистка содержимого
        h1.innerHTML = 'Новый заголовок <i class="bi bi-gear"></i>';

/* 3. Работа со стилями (атрибут style) */
    /* 3.1. Изменение стилей */
        h1.style.color = "red";
        h1.style.fontSize = "48px";
    /* 3.2. Просмотр стилей */
        console.log(h1.style);

/* 4. Работа с классами (атрибут class) */
    /* 4.1. Добавление класса */
        menu.classList.add("border");
    /* 4.2. Добавление класса */
        const h2 = document.querySelector(".blue");
        h2.classList.remove("blue");
    /* 4.3. Проверка наличия класса */
        console.log(menu.classList.contains("border"));

/* 5. Работа с атрибутами */
    /* 5.1. Узнать значение атрибута */
        const firstLink = document.querySelector(".menu li:first-child a");
        console.log(firstLink.getAttribute("href"));
    /* 5.2. Установка атрибута */
        firstLink.setAttribute("href", "https://midis.ru")
        firstLink.setAttribute("target", "_blank")
    /* 5.3. Удаление атрибута */
        firstLink.removeAttribute("target", "_blank")

/* 6. Создание нового элемента на странице */
    const image = document.createElement("img"); // создание виртуального элемента
    image.setAttribute("src", "img/image.png");
    image.classList.add("border");
    const block = document.getElementById("block");
    block.classList.add("border");
    block.append(image); // Добавление в конец блока
    //block.prepend(image); // Добавление в начало блока
    //block.after(image); // Добавление после блока
    //block.before(image); // Добавление перед блоком

/* 7. Работа с предками */
    console.log(firstLink.closest("li"));

/* 8. Работа с потомками */
    console.log(document.querySelectorAll("a"));
    console.log(menu.querySelectorAll("a"));

// Учебник по JavaScript: https://learn.javascript.ru

/* 9. События */
    const btn = document.getElementById("btn");
    const circle = document.querySelector(".circle");
    btn.addEventListener("click", function() {
        circle.style.background = "blue";
    });