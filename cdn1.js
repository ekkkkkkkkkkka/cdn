fetch("/flag")  // Запрашиваем флаг
    .then(response => response.text())  // Получаем флаг
    .then(flag => alert("Flag: " + flag));  // Показываем флаг в alert
