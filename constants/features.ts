export default {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            id: 0,
            geometry: { type: "Point", coordinates: [55.831903, 37.411961] },
            properties: {
            balloonContentHeader:
                "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
            balloonContentBody:
                "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
            balloonContentFooter:
                "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
            clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
            hintContent: "<strong>Текст  <s>подсказки</s></strong>"
            }
        },
    ]
};
