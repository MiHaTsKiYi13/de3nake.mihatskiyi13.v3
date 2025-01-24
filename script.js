// Генерация звезд на экране
function createStars() {
    const starContainer = document.querySelector('.stars-container');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 2 + 1}s`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        starContainer.appendChild(star);
    }
}

createStars();  // Вызов функции для создания звезд

// Функция для скачивания DE3NAKE Tweaker
function downloadTweaker() {
    var fileId = 'ID_тут';  // ID файла на Google Drive для Tweaker
    var downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    var a = document.createElement('a');
    a.href = downloadUrl;
    a.target = '_blank'; // Это откроет ссылку в новой вкладке
    a.click(); // Эмулируем клик по ссылке
}


// Функция для переключения между секциями
function showSection(section) {
    // Скрываем все секции
    const tweakerSection = document.getElementById('tweaker');
    const packSection = document.getElementById('pack');
    
    // Кнопки для переключения
    const tweakerBtn = document.getElementById('tweakerBtn');
    const packBtn = document.getElementById('packBtn');

    // Обновление видимости секций
    if (section === 'tweaker') {
        tweakerSection.style.display = 'block';
        packSection.style.display = 'none';
        tweakerBtn.classList.add('active');
        packBtn.classList.remove('active');
    } else if (section === 'pack') {
        tweakerSection.style.display = 'none';
        packSection.style.display = 'block';
        tweakerBtn.classList.remove('active');
        packBtn.classList.add('active');
    }
    
}


document.oncopy = function () { 
    let selection = window.getSelection(); // Получаем текущее выделение
    let text = selection.toString(); // Преобразуем выделение в строку
    text = text.replace(/е/g, "e") // Заменяем 'е' на 'e'
               .replace(/о/g, "o") // Заменяем 'о' на 'o'
               .replace(/р/g, "p") // Заменяем 'р' на 'p'
               .replace(/а/g, "a") // Заменяем 'а' на 'a'
               .replace(/с/g, "c") // Заменяем 'с' на 'c'
               .replace(/х/g, "x"); // Заменяем 'х' на 'x'
    
    let textEl = document.createElement('textarea'); // Создаем textarea
    textEl.style.position = 'absolute'; 
    textEl.style.left = '-99999px'; // Прячем textarea за пределами экрана
    textEl.value = text; // Записываем измененный текст в textarea
    document.body.appendChild(textEl); // Добавляем textarea в DOM
    textEl.select(); // Выбираем текст в textarea

    setTimeout(function() { 
        document.body.removeChild(textEl); // Удаляем textarea после копирования
    }, 100); 
};


