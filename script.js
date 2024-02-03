function openCityPage(city) {
    window.open(city + ".html", '_blank');
}

function openCityPage(city) {
    try {
        // Ваш код для открытия страницы города
        window.open(city + ".html", '_blank');
    } catch (error) {
        // Обработка ошибки
        console.error('Произошла ошибка:', error.message);

        // Отображение информативного сообщения пользователю
        alert('Что-то пошло не так. Пожалуйста, попробуйте снова или обратитесь к администратору.');
    }
}
