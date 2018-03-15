const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '531195296:AAHu6-WxmVxo5LUmKezlY7kwWstDPHdFlSI'

const bot = new TelegramBot(TOKEN, {polling: true})

const KB = {
    priv: 'Ежедневный привнот',
    getpriv: 'Получить привнот',
    vybor: 'Оформить заказ',
    gorod: 'Выбор города',
    otzivy: 'Правила',
    support: 'Поддержка',
    price: 'Прайс',
    cao: 'Цао',
    svao: 'Свао Вднх',
    cher: 'Чертаново',
    butovo: 'Бутово',
    luber: 'Люберцы',
    msk: 'Москва',
    zelen: 'Зеленоград',
    tovar1: 'KRIS-A29+BONUS ROSS\'GreenDevil\' 0.3gr.+0.5gr. СВАО ВДНХ',
    tovar2: 'KRIS-A29+BONUS ROSS\'GreenDevil\' 0.5gr.+0.5gr. СВАО ВДНХ',
    tovar3: 'KRIS-A29+BONUS ROSS\'GreenDevil\' 1gr.+0.5gr. СВАО ВДНХ',
    tovar4: 'KRIS-A29+BONUS ROSS\'GreenDevil\' 3gr.+0.5gr. СВАО ВДНХ',
    tovar5: 'KRIS-A29+BONUS ROSS\'GreenDevil\' 0.3gr.+0.5gr. ЦАО',
    tovar6: 'ROSS\'GreenDevil\' 3gr. ЦАО',
    tovar7: 'KRIS-A29+BONUS ROSS\'GreenDevil\' 0.5gr.+0.5gr. ЦАО',
    tovar8: 'KRIS-A29+BONUS ROSS\'GreenDevil\' 5gr. ЦАО',
    tovar9: 'KRIS-A29+BONUS ROSS\'GreenDevil\' 1gr. ЧЕРТАНОВО',
    tovar10: 'KRIS-A29+BONUS ROSS\'GreenDevil\' 0.3gr.+0.5gr. ЧЕРТАНОВО',
    tovar11: 'ROSS\'GreenDevil\' 3gr. ЧЕРТАНОВО',
    tovar12: 'KRIS-A29+BONUS ROSS\'GreenDevil\' 0.5gr.+0.5gr. ЧЕРТАНОВО',
    tovar13: 'ROSS\'GreenDevil\' 1gr. БУТОВО',
    tovar14: 'ROSS\'GreenDevil\' 3gr. БУТОВО',
    tovar15: 'ROSS\'GreenDevil\' 5gr. БУТОВО',
    tovar16: 'KRIS-A29+BONUS ROSS\'GreenDevil\' 1gr.+0.5gr. БУТОВО',
    tovar17: 'ROSS\'GreenDevil\' 1gr. ЛЮБЕРЦЫ',
    tovar18: 'KRIS-A29+BONUS ROSS\'GreenDevil\' 0.3gr.+0.5gr. ЛЮБЕРЦЫ',
    tovar19: 'ROSS\'GreenDevil\' 5gr. ЛЮБЕРЦЫ',
    tovar20: 'KRIS-A29+BONUS ROSS\'GreenDevil\' 1gr.+0.5gr. ЛЮБЕРЦЫ',
    bitcoin1: 'BTC 0,00220000 0.3gr.+0.5gr. СВАО ВДНХ',
    bitcoin2: 'BTC 0,00260000 0.5gr.+0.5gr. СВАО ВДНХ',
    bitcoin3: 'BTC 0,00520000 1gr.+0.5gr. СВАО ВДНХ',
    bitcoin4: 'BTC 0,00730000 3gr.+0.5gr. СВАО ВДНХ',
    bitcoin5: 'BTC 0,00220000 0.3gr.+0.5gr. ЦАО',
    bitcoin6: 'BTC 0,00240000 3gr. ЦАО',
    bitcoin7: 'BTC 0,00260000 0.5gr.+0.5gr. ЦАО',
    bitcoin8: 'BTC 0,00320000 5gr. ЦАО',
    bitcoin9: 'BTC 0,00350000 1gr. ЧЕРТАНОВО',
    bitcoin10: 'BTC 0,00220000 0.3gr.+0.5gr. ЧЕРТАНОВО',
    bitcoin11: 'BTC 0,00240000 3gr. ЧЕРТАНОВО',
    bitcoin12: 'BTC 0,00260000 0.5gr.+0.5gr. ЧЕРТАНОВО',
    bitcoin13: 'BTC 0,00130000 1gr. БУТОВО',
    bitcoin14: 'BTC 0,00240000 3gr. БУТОВО',
    bitcoin15: 'BTC 0,00320000 5gr. БУТОВО',
    bitcoin16: 'BTC 0,00520000 1gr.+0.5gr. БУТОВО',
    bitcoin17: 'BTC 0,00130000 1gr. ЛЮБЕРЦЫ',
    bitcoin18: 'BTC 0,00220000 0.3gr.+0.5gr. ЛЮБЕРЦЫ',
    bitcoin19: 'BTC 0,00320000 5gr. ЛЮБЕРЦЫ',
    bitcoin20: 'BTC 0,00520000 1gr.+0.5gr. ЛЮБЕРЦЫ',
    qiwi1: 'QIWI 1000р. 0.3gr.+0.5gr. СВАО ВДНХ',
    qiwi2: 'QIWI 1200р. 0.5gr.+0.5gr. СВАО ВДНХ',
    qiwi3: 'QIWI 2400р. 1gr.+0.5gr. СВАО ВДНХ',
    qiwi4: 'QIWI 3400р. 3gr.+0.5gr. СВАО ВДНХ',
    qiwi5: 'QIWI 1000р. 0.3gr.+0.5gr. ЦАО',
    qiwi6: 'QIWI 1100р. 3gr. ЦАО',
    qiwi7: 'QIWI 1200р. 0.5gr.+0.5gr. ЦАО',
    qiwi8: 'QIWI 1500р. 5gr. ЦАО',
    qiwi9: 'QIWI 600р. 1gr. ЧЕРТАНОВО',
    qiwi10: 'QIWI 1000р. 0.3gr.+0.5gr. ЧЕРТАНОВО',
    qiwi11: 'QIWI 1100р. 3gr. ЧЕРТАНОВО',
    qiwi12: 'QIWI 1200р. 0.5gr.+0.5gr. ЧЕРТАНОВО',
    qiwi13: 'QIWI 600р. 1gr. БУТОВО',
    qiwi14: 'QIWI 1100р. 3gr. БУТОВО',
    qiwi15: 'QIWI 1500р. 5gr. БУТОВО',
    qiwi16: 'QIWI 2400р. 1gr.+0.5gr. БУТОВО',
    qiwi17: 'QIWI 600р. 1gr. ЛЮБЕРЦЫ',
    qiwi18: 'QIWI 1000р. 0.3gr.+0.5gr. ЛЮБЕРЦЫ',
    qiwi19: 'QIWI 1500р. 5gr. ЛЮБЕРЦЫ',
    qiwi20: 'QIWI 2400р. 1gr.+0.5gr. ЛЮБЕРЦЫ',
    back: 'Главное меню',
    check: 'Проверка заказа'

}

bot.onText(/\/start/, msg => {

    const text = 'Добро пожаловать в автомагазин\n' +
        'FAST SHOP MSK 24/7\n' +
        '➖➖➖➖➖➖➖➖➖➖\n' +
        'Оператор @FASTMSK_HELP\n' +
        'Оптовые покупки JABBER: fastmsk@sj.ms\n' +
        'Канал отзывов: https://t.me/FASTMSK\n' +
        'Сайт: https://fastmsk.biz !!!ВНИМАНИЕ!!!ТЕХНИЧЕСКИЕ РАБОТЫ!!!\n' +
        'ВСЕМ ЗАРЕГИСТРИРОВАННЫМ ПОЛЬЗОВАТЕЛЯМ СРОЧНО ОТПИСАТЬ ОПЕРАТОРУ!!!\n' +
        '➖➖➖➖➖➖➖➖➖➖\n' +
        '!!!ТРЕБУЮТСЯ МИНЁРЫ И ГРАФФИТЧИКИ ПО МСК!!!\n' +
        '  !!!ОТ 400р. ЗА КЛАД!!!\n' +
        '    НЕ УПУСТИ СВОЙ ШАНС\n' +
        'ПО ТРУДОУСТРОЙСТВУ ПИСАТЬ СЮДА:\n' +
        '          JABBER: fastmsk_job@sj.ms\n' +
        '➖➖➖➖➖➖➖➖➖➖\n' +
        'Для оформления заказа выберите пункт "Оформить заказ" в меню ниже\n'

    bot.sendMessage(msg.chat.id, text, {
        reply_markup: {
            keyboard: [
                [KB.vybor], [KB.price]
            ],
            one_time_keyboard: true,
            resize_keyboard: true
        }
    })

})


bot.on('message', msg=> {

    switch (msg.text) {
        case KB.vybor:
            bot.sendMessage(msg.chat.id, "Выберите пункт меню:", {
                reply_markup: {
                    keyboard: [
                        [KB.gorod,
                            KB.otzivy,],[KB.priv, KB.price],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.otzivy:
            bot.sendMessage(msg.chat.id, "Правила работы нашего магазна! Перед покупкой ПРОЧЕСТЬ!\n" +
                "\n" +
                "Пункт 1.Приобретая товары в нашем магазина вы автоматически соглашаетесь со всеми ниже сказанными условиями!\n" +
                "\n" +
                "Пункт 2.При конфлиткой ситуации в нашем магазине, если у вас первая покупка у нас и меньше 5 покупок в системе наших автоматичских магазинов, то в каком либо решение в вашу пользу будет принят ОТРИЦАТЕЛЬНЫЙ РЕЗУЛЬТАТ( ЭТО ЗНАЧИТ ЧТО ПОЛОЖИТЕЛЬНОГО РЕШЕНИЯ ВАШЕЙ ПРОБЛЕМЫ НЕ БУДЕТ)\n" +
                "\n" +
                "Пункт 3.Если вы купили клад, и у вас там форс мажор в виде недовеса (его можно увидеть сразу на глаз), спутали товар, то Вы должны ОБЯЗАТЕЛЬНО НЕ ОТКРЫВАТЬ СВЕРТОК МЫ ЭТО УВИДИМ! СДЕЛАТЬ 3 ФОТО, А ИМЕННО ПАКЕТ РЯДОМ С ЗАЖИГАЛКОЙ, УПАКОВКУ ОТ СВЕРТКА И ФОТО ПАКЕТА НА ВЕСАХ \n" +
                "\n" +
                "Пункт 4.Если у вас не найден клад, то не стоит сразу писать что вас кинули и тем более думать такое, вам следует проверять все клады в дневное время, строго следовать указаниям в описании, и не паниковать при поиске, что бы не закопать его дальше, если все же у вас не найден клад, то вы должны предоставить оператору такие факты как, 3 ФОТО С МЕСТА, А ИМЕННО РАКУРС МЕСТА за 3-5 метро, место непосредорвенно вблизи, а так же фотографии где и как вы смотрели!\n" +
                "\n" +
                "Пункт 5. Мы не рекомендуем оставлять отзывы до какого-либо решения вашей ситуации, ибо мы все люди и не всегда можем оперативно ответить вам. но как только оператор увидит ваше сообщение, вы получите дальнейшние указание по решению вашей проблемы.\n" +
                "\n" +
                "Магазин FAST SHOP Желает всем нашим клиентам, успехов в их делах, а так же выражает благодарность, что вы выбираете наш сервис! А ТАК ЖЕ БОЛЬШАЯ ПРОСЬБА НЕ БРОСАТЬ УПАКОВКУ В МЕСТАХ ПОДЬЕМА КЛАДА!", {
                reply_markup: {
                    keyboard: [
                        [KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.priv:
            bot.sendMessage(msg.chat.id, "АКЦИЯ 'ЕЖЕДНЕВНЫЙ ПРИВНОТ' ОТ FAST SHOP\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Привноты выдаются в боте и на нашем канале https://t.me/FASTSHOP\n" +
                "Привнот обновляется ежедневно с 12 по 19 часов по МСК.\n" +
                "Стандартно в привноте лежит адрес с KRIS-A29+BONUS'GreenDevil' 0.3gr.+0.5gr. либо с  ROSS'GreenDevil' 3gr.\n" +
                "В праздничные дни выдается привнот с БОЛЕЕ ЩЕДРЫМИ ПОЗИЦИЯМИ\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения привнота выберите пункт 'Получить привнот' в меню ниже" , {
                reply_markup: {
                    keyboard: [
                        [KB.getpriv], [KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.getpriv:
            bot.sendMessage(msg.chat.id, "Привнот на сегодня:\n" +
                "https://privnote.com/FsJt2tDA#ucrFFLif9 (МСК)", {
                reply_markup: {
                    keyboard: [
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.price:
            bot.sendMessage(msg.chat.id, "В наличии:\n" +
                "Москва\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "СВАО ВДНХ:\n" +
                "KRIS-A29+BONUS ROSS'GreenDevil' 0.5gr.+0.5gr. - 1200р.\n" +
                "KRIS-A29+BONUS ROSS'GreenDevil' 1gr.+0.5gr. - 2400р.\n" +
                "KRIS-A29+BONUS ROSS'GreenDevil' 3gr.+0.5gr. - 3400р.\n" +
                "\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "ЦАО:\n" +
                "KRIS-A29+BONUS ROSS'GreenDevil' 0.3gr.+0.5gr. - 1000р.\n" +
                "ROSS'GreenDevil' 3gr. - 1100р.\n" +
                "KRIS-A29+BONUS ROSS'GreenDevil' 5gr. - 1500р.\n" +
                "\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "ЧЕРТАНОВО:\n" +
                "KRIS-A29+BONUS ROSS'GreenDevil' 1gr. - 600р.\n" +
                "KRIS-A29+BONUS ROSS'GreenDevil' 0.3gr.+0.5gr. - 1000р.\n" +
                "ROSS'GreenDevil' 3gr. - 1100р.\n" +
                "KRIS-A29+BONUS ROSS'GreenDevil' 0.5gr.+0.5gr. - 1200р.\n" +
                "\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "БУТОВО:\n" +
                "ROSS'GreenDevil' 3gr. - 1100р.\n" +
                "ROSS'GreenDevil' 5gr. - 1500р.\n" +
                "KRIS-A29+BONUS ROSS'GreenDevil' 1gr.+0.5gr. - 2400р.\n" +
                "\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "ЛЮБЕРЦЫ:\n" +
                "ROSS'GreenDevil' 5gr. - 1500р.\n" +
                "KRIS-A29+BONUS ROSS'GreenDevil' 1gr.+0.5gr. - 2400р.\n" 
                , {
                reply_markup: {
                    keyboard: [
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.gorod:
            bot.sendMessage(msg.chat.id, "Выберите свой город в меню ниже:", {
                reply_markup: {
                    keyboard: [
                        [KB.msk,
                            KB.zelen],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.msk:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Город: МОСКВA\n"  +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Выберите район:" , {
                reply_markup: {
                    keyboard: [
                        [KB.cao],
                        [KB.svao], [KB.cher], [KB.butovo], [KB.luber],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.zelen:
            bot.sendMessage(msg.chat.id, "В данном городе закончились товары.\n" +
                "\n" +
                "Работает ОПТ и ПРЕДЗАКАЗ\n" +
                "Для оформления предзаказа ОТПИСАТЬ ОПЕРАТОРУ В ТЕЛЕГРАМ: @FASTMSK_HELP либо в JABBER: fastmsk@sj.ms"
                , {
                reply_markup: {
                    keyboard: [
                        [KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.svao:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Район: СВАО ВДНХ\n" +
                "Город: МОСКВА\n" +
                '➖➖➖➖➖➖➖➖➖➖\n' +
                "Выберите товар:" , {
                reply_markup: {
                    keyboard: [
                        [KB.tovar2], [KB.tovar3],
                        [KB.tovar4],[KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.cao:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Район: ЦАО\n" +
                "Город: МОСКВА\n" +
                '➖➖➖➖➖➖➖➖➖➖\n' +
                "Выберите товар:" , {
                reply_markup: {
                    keyboard: [
                        [KB.tovar5], [KB.tovar6],
                        [KB.tovar8],[KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.cher:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Район: ЧЕРТАНОВО\n" +
                "Город: МОСКВА\n" +
                '➖➖➖➖➖➖➖➖➖➖\n' +
                "Выберите товар:" , {
                reply_markup: {
                    keyboard: [
                        [KB.tovar9], [KB.tovar10], [KB.tovar11],
                        [KB.tovar12],[KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.butovo:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Район: БУТОВО\n" +
                "Город: МОСКВА\n" +
                '➖➖➖➖➖➖➖➖➖➖\n' +
                "Выберите товар:" , {
                reply_markup: {
                    keyboard: [
                        [KB.tovar14], [KB.tovar15],
                        [KB.tovar16],[KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.luber:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Район: ЛЮБЕРЦЫ\n" +
                "Город: МОСКВА\n" +
                '➖➖➖➖➖➖➖➖➖➖\n' +
                "Выберите товар:" , {
                reply_markup: {
                    keyboard: [
                        [KB.tovar19],
                        [KB.tovar20],[KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tovar1:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: KRIS-A29+BONUS'GreenDevil' 0.3gr.+0.5gr.\n" +
                "Район: СВАО ВДНХ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 1000р.\n" +
                "Выберите способ оплаты:" , {
                reply_markup: {
                    keyboard: [
                        [KB.bitcoin1],
                        [KB.qiwi1],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tovar2:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: KRIS-A29+BONUS ROSS'GreenDevil' 0.5gr.+0.5gr.\n" +
                "Район: СВАО ВДНХ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 1200р.\n" +
                "Выберите способ оплаты:" , {
                reply_markup: {
                    keyboard: [
                        [KB.bitcoin2],
                        [KB.qiwi2],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tovar3:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: KRIS-A29+BONUS ROSS'GreenDevil' 1gr.+0.5gr.\n" +
                "Район: СВАО ВДНХ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 2400р.\n" +
                "Выберите способ оплаты:" , {
                reply_markup: {
                    keyboard: [
                        [KB.bitcoin3],
                        [KB.qiwi3],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tovar4:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: KRIS-A29+BONUS ROSS'GreenDevil' 3gr.+0.5gr.\n" +
                "Район: СВАО ВДНХ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 3400р.\n" +
                "Выберите способ оплаты:" , {
                reply_markup: {
                    keyboard: [
                        [KB.bitcoin4],
                        [KB.qiwi4],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tovar5:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: KRIS-A29+BONUS ROSS'GreenDevil' 0.3gr.+0.5gr.\n" +
                "Район: ЦАО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 1000р.\n" +
                "Выберите способ оплаты:" , {
                reply_markup: {
                    keyboard: [
                        [KB.bitcoin5],
                        [KB.qiwi5],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tovar6:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: ROSS'GreenDevil' 3gr.\n" +
                "Район: ЦАО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 1100р.\n" +
                "Выберите способ оплаты:" , {
                reply_markup: {
                    keyboard: [
                        [KB.bitcoin6],
                        [KB.qiwi6],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tovar7:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: KRIS-A29+BONUS ROSS'GreenDevil' 0.5gr.+0.5gr.\n" +
                "Район: ЦАО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 1200p.\n" +
                "Выберите способ оплаты:" , {
                reply_markup: {
                    keyboard: [
                        [KB.bitcoin7],
                        [KB.qiwi7],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tovar8:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: ROSS'GreenDevil' 5gr.\n" +
                "Район: ЦАО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 1500p.\n" +
                "Выберите способ оплаты:" , {
                reply_markup: {
                    keyboard: [
                        [KB.bitcoin8],
                        [KB.qiwi8],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tovar9:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: ROSS'GreenDevil' 1gr.\n" +
                "Район: ЧЕРТАНОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 600p.\n" +
                "Выберите способ оплаты:" , {
                reply_markup: {
                    keyboard: [
                        [KB.bitcoin9],
                        [KB.qiwi9],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tovar10:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: KRIS-A29+BONUS ROSS'GreenDevil' 0.3gr.+0.5gr.\n" +
                "Район: ЧЕРТАНОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 1000p.\n" +
                "Выберите способ оплаты:" , {
                reply_markup: {
                    keyboard: [
                        [KB.bitcoin10],
                        [KB.qiwi10],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tovar11:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: ROSS'GreenDevil' 3gr.\n" +
                "Район: ЧЕРТАНОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 1100p.\n" +
                "Выберите способ оплаты:" , {
                reply_markup: {
                    keyboard: [
                        [KB.bitcoin11],
                        [KB.qiwi11],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tovar12:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: KRIS-A29+BONUS ROSS'GreenDevil' 0.5gr.+0.5gr.\n" +
                "Район: ЧЕРТАНОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 1200p.\n" +
                "Выберите способ оплаты:" , {
                reply_markup: {
                    keyboard: [
                        [KB.bitcoin12],
                        [KB.qiwi12],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tovar13:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: ROSS'GreenDevil' 1gr.\n" +
                "Район: БУТОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 600p.\n" +
                "Выберите способ оплаты:" , {
                reply_markup: {
                    keyboard: [
                        [KB.bitcoin13],
                        [KB.qiwi13],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tovar14:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: ROSS'GreenDevil' 3gr.\n" +
                "Район: БУТОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 1100p.\n" +
                "Выберите способ оплаты:" , {
                reply_markup: {
                    keyboard: [
                        [KB.bitcoin14],
                        [KB.qiwi14],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tovar15:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: ROSS'GreenDevil' 5gr.\n" +
                "Район: БУТОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 1500p.\n" +
                "Выберите способ оплаты:" , {
                reply_markup: {
                    keyboard: [
                        [KB.bitcoin15],
                        [KB.qiwi15],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tovar16:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: KRIS-A29+BONUS ROSS'GreenDevil' 1gr.+0.5gr.\n" +
                "Район: БУТОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 2400p.\n" +
                "Выберите способ оплаты:" , {
                reply_markup: {
                    keyboard: [
                        [KB.bitcoin16],
                        [KB.qiwi16],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tovar17:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: ROSS'GreenDevil' 1gr.\n" +
                "Район: ЛЮБЕРЦЫ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 600p.\n" +
                "Выберите способ оплаты:" , {
                reply_markup: {
                    keyboard: [
                        [KB.bitcoin17],
                        [KB.qiwi17],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tovar18:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: 'KRIS-A29+BONUS ROSS'GreenDevil' 0.3gr.+0.5gr.\n" +
                "Район: ЛЮБЕРЦЫ\n" +
                "Город: МОСКВА\n" +
            "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 1000p.\n" +
                "Выберите способ оплаты:" , {
                reply_markup: {
                    keyboard: [
                        [KB.bitcoin18],
                        [KB.qiwi18],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tovar19:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: ROSS'GreenDevil' 5gr.\n" +
                "Район: ЛЮБЕРЦЫ\n" +
                "Город: МОСКВА\n" +
            "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 1500p.\n" +
                "Выберите способ оплаты:" , {
                reply_markup: {
                    keyboard: [
                        [KB.bitcoin19],
                        [KB.qiwi19],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tovar20:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: KRIS-A29+BONUS ROSS'GreenDevil' 1gr.+0.5gr.\n" +
                "Район: ЛЮБЕРЦЫ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 2400p.\n" +
                "Выберите способ оплаты:" , {
                reply_markup: {
                    keyboard: [
                        [KB.bitcoin20],
                        [KB.qiwi20],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.back:
            bot.sendMessage(msg.chat.id, "Выберите пункт меню:", {
                reply_markup: {
                    keyboard: [
                        [KB.gorod,
                            KB.otzivy,],[KB.priv, KB.price],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.bitcoin1:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS ROSS'GreenDevil' 0.3gr.+0.5gr.\n" +
                "Район: СВАО ВДНХ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00220000 BTC на указанные реквизиты:\n" +
                "\n" +
                "15fRsjQPW6gcYmeVu3m6JCGgfHc4kwggpW\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже" , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.bitcoin2:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS ROSS'GreenDevil' 0.5gr.+0.5gr.\n" +
                "Район: СВАО ВДНХ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00260000 BTC на указанные реквизиты:\n" +
                "\n" +
                "15fRsjQPW6gcYmeVu3m6JCGgfHc4kwggpW\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже" , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.bitcoin3:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS ROSS'GreenDevil' 1gr.+0.5gr.\n" +
                "Район: СВАО ВДНХ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00520000 BTC на указанные реквизиты:\n" +
                "\n" +
                "15fRsjQPW6gcYmeVu3m6JCGgfHc4kwggpW\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже" , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.bitcoin4:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS ROSS'GreenDevil' 3gr.+0.5gr.\n" +
                "Район: СВАО ВДНХ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00730000 BTC на указанные реквизиты:\n" +
                "\n" +
                "15fRsjQPW6gcYmeVu3m6JCGgfHc4kwggpW\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже" , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.bitcoin5:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS ROSS'GreenDevil' 0.3gr.+0.5gr.\n" +
                "Район: ЦАО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00220000 BTC на указанные реквизиты:\n" +
                "\n" +
                "15fRsjQPW6gcYmeVu3m6JCGgfHc4kwggpW\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже" , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.bitcoin6:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: ROSS'GreenDevil' 3gr.\n" +
                "Район: ЦАО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00240000 BTC на указанные реквизиты:\n" +
                "\n" +
                "15fRsjQPW6gcYmeVu3m6JCGgfHc4kwggpW\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже" , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.bitcoin7:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS ROSS'GreenDevil' 0.5gr.+0.5gr.\n" +
                "Район: ЦАО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00520000 BTC на указанные реквизиты:\n" +
                "\n" +
                "15fRsjQPW6gcYmeVu3m6JCGgfHc4kwggpW\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже" , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.bitcoin8:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: ROSS'GreenDevil' 5gr.\n" +
                "Район: ЦАО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00320000 BTC на указанные реквизиты:\n" +
                "\n" +
                "15fRsjQPW6gcYmeVu3m6JCGgfHc4kwggpW\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже" , {
                reply_markup: {
                    keyboard: [
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.bitcoin9:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: ROSS'GreenDevil' 1gr.\n" +
                "Район: ЧЕРТАНОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00130000 BTC на указанные реквизиты:\n" +
                "\n" +
                "15fRsjQPW6gcYmeVu3m6JCGgfHc4kwggpW\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже" , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.bitcoin10:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS ROSS'GreenDevil' 0.3gr.+0.5gr.\n" +
                "Район: ЧЕРТАНОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00220000 BTC на указанные реквизиты:\n" +
                "\n" +
                "15fRsjQPW6gcYmeVu3m6JCGgfHc4kwggpW\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже" , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.bitcoin11:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: ROSS'GreenDevil' 3gr.\n" +
                "Район: ЧЕРТАНОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00240000 BTC на указанные реквизиты:\n" +
                "\n" +
                "15fRsjQPW6gcYmeVu3m6JCGgfHc4kwggpW\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже" , {
                reply_markup: {
                    keyboard: [
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.bitcoin12:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS ROSS'GreenDevil' 0.5gr.+0.5gr.\n" +
                "Район: ЧЕРТАНОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00260000 BTC на указанные реквизиты:\n" +
                "\n" +
                "15fRsjQPW6gcYmeVu3m6JCGgfHc4kwggpW\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже" , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.bitcoin13:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: ROSS'GreenDevil' 1gr.\n" +
                "Район: БУТОВОn" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00130000 BTC на указанные реквизиты:\n" +
                "\n" +
                "15fRsjQPW6gcYmeVu3m6JCGgfHc4kwggpW\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже" , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.bitcoin14:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: ROSS'GreenDevil' 3gr.\n" +
                "Район: БУТОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00240000 BTC на указанные реквизиты:\n" +
                "\n" +
                "15fRsjQPW6gcYmeVu3m6JCGgfHc4kwggpW\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже" , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.bitcoin15:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: ROSS'GreenDevil' 5gr.\n" +
                "Район: БУТОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00320000 BTC на указанные реквизиты:\n" +
                "\n" +
                "15fRsjQPW6gcYmeVu3m6JCGgfHc4kwggpW\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже" , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.bitcoin16:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS ROSS'GreenDevil' 1gr.+0.5gr.\n" +
                "Район: БУТОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00520000 BTC на указанные реквизиты:\n" +
                "\n" +
                "15fRsjQPW6gcYmeVu3m6JCGgfHc4kwggpW\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже" , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.bitcoin17:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: ROSS'GreenDevil' 1gr.\n" +
                "Район: ЛЮБЕРЦЫ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00130000 BTC на указанные реквизиты:\n" +
                "\n" +
                "15fRsjQPW6gcYmeVu3m6JCGgfHc4kwggpW\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже" , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.bitcoin18:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS ROSS'GreenDevil' 0.3gr.+0.5gr.\n" +
                "Район: ЛЮБЕРЦЫ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00220000 BTC на указанные реквизиты:\n" +
                "\n" +
                "15fRsjQPW6gcYmeVu3m6JCGgfHc4kwggpW\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже" , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.bitcoin19:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: ROSS'GreenDevil' 5gr.\n" +
                "Район: ЛЮБЕРЦЫ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00320000 BTC на указанные реквизиты:\n" +
                "\n" +
                "15fRsjQPW6gcYmeVu3m6JCGgfHc4kwggpW\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже" , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.bitcoin20:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS ROSS'GreenDevil' 1gr.+0.5gr.\n" +
                "Район: ЛЮБЕРЦЫ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00520000 BTC на указанные реквизиты:\n" +
                "\n" +
                "15fRsjQPW6gcYmeVu3m6JCGgfHc4kwggpW\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже" , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.qiwi1:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS ROSS'GreenDevil' 0.3gr.+0.5gr.\n" +
                "Район: СВАО ВДНХ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 1000р. на указанные реквизиты.\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже\n" +
                "\n" +
                "QIWI: +79529093996\n" +
                "КОММЕНТАРИЙ: " + msg.from.username , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.qiwi2:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS ROSS'GreenDevil' 0.5gr.+0.5gr.\n" +
                "Район: СВАО ВДНХ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 1200р. на указанные реквизиты.\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже\n" +
                "\n" +
                "QIWI: +79529093996\n" +
                "КОММЕНТАРИЙ: \n" + msg.from.username , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.qiwi3:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS ROSS'GreenDevil' 1gr.+0.5gr.\n" +
                "Район: СВАО ВДНХ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 2400р. на указанные реквизиты.\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже\n" +
                "\n" +
                "QIWI: +79529093996\n" +
                "КОММЕНТАРИЙ: \n" + msg.from.username , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.qiwi4:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS'GreenDevil' 3gr.+0.5gr.\n" +
                "Район: СВАО ВДНХ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 3400р. на указанные реквизиты.\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже\n" +
                "\n" +
                "QIWI: +79529093996\n" +
                "КОММЕНТАРИЙ: \n" + msg.from.username , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.qiwi5:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS'GreenDevil' 0.3gr.+0.5gr.\n" +
                "Район: ЦАО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 1000р. на указанные реквизиты.\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже\n" +
                "\n" +
                "QIWI: +79529093996\n" +
                "КОММЕНТАРИЙ: \n" + msg.from.username , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.qiwi6:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: 'GreenDevil' 3gr.\n" +
                "Район: ЦАО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 1100р. на указанные реквизиты.\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже\n" +
                "\n" +
                "QIWI: +79529093996\n" +
                "КОММЕНТАРИЙ: \n" + msg.from.username , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.qiwi7:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS'GreenDevil' 0.5gr.+0.5gr.\n" +
                "Район: ЦАО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 1200р. на указанные реквизиты.\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже\n" +
                "\n" +
                "QIWI: +79529093996\n" +
                "КОММЕНТАРИЙ: \n" + msg.from.username , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.qiwi8:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: 'GreenDevil' 5gr.\n" +
                "Район: ЦАО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 1500р. на указанные реквизиты.\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже\n" +
                "\n" +
                "QIWI: +79529093996\n" +
                "КОММЕНТАРИЙ: \n" + msg.from.username , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.qiwi9:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: 'GreenDevil' 1gr.\n" +
                "Район: ЧЕРТАНОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 600р. на указанные реквизиты.\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже\n" +
                "\n" +
                "QIWI: +79529093996\n" +
                "КОММЕНТАРИЙ: \n" + msg.from.username , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.qiwi10:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS'GreenDevil' 0.3gr.+0.5gr.\n" +
                "Район: ЧЕРТАНОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 1000р. на указанные реквизиты.\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже\n" +
                "\n" +
                "QIWI: +79529093996\n" +
                "КОММЕНТАРИЙ: \n" + msg.from.username , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.qiwi11:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: 'GreenDevil' 3gr.\n" +
                "Район: ЧЕРТАНОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 1100р. на указанные реквизиты.\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже\n" +
                "\n" +
                "QIWI: +79529093996\n" +
                "КОММЕНТАРИЙ: \n" + msg.from.username , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.qiwi12:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS'GreenDevil' 0.5gr.+0.5gr.\n" +
                "Район: ЧЕРТАНОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 1200р. на указанные реквизиты.\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже\n" +
                "\n" +
                "QIWI: +79529093996\n" +
                "КОММЕНТАРИЙ: \n" + msg.from.username , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.qiwi13:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: 'GreenDevil' 1gr.\n" +
                "Район: БУТОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 600р. на указанные реквизиты.\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже\n" +
                "\n" +
                "QIWI: +79529093996\n" +
                "КОММЕНТАРИЙ: \n" + msg.from.username , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.qiwi14:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: 'GreenDevil' 3gr.\n" +
                "Район: БУТОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 1100р. на указанные реквизиты.\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже\n" +
                "\n" +
                "QIWI: +79529093996\n" +
                "КОММЕНТАРИЙ: \n" + msg.from.username , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.qiwi15:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: 'GreenDevil' 5gr.\n" +
                "Район: БУТОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 1500р. на указанные реквизиты.\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже\n" +
                "\n" +
                "QIWI: +79529093996\n" +
                "КОММЕНТАРИЙ: \n" + msg.from.username , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.qiwi16:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS'GreenDevil' 1gr.+0.5gr.\n" +
                "Район: БУТОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 2400р. на указанные реквизиты.\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже\n" +
                "\n" +
                "QIWI: +79529093996\n" +
                "КОММЕНТАРИЙ: \n" + msg.from.username , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.qiwi17:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
            "Товар: 'GreenDevil' 1gr.\n" +
            "Район: ЛЮБЕРЦЫ\n" +
            "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 600р. на указанные реквизиты.\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже\n" +
                "\n" +
                "QIWI: +79529093996\n" +
                "КОММЕНТАРИЙ: \n" + msg.from.username , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.qiwi18:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS'GreenDevil' 0.3gr.+0.5gr.\n" +
                "Район: ЛЮБЕРЦЫ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 1000р. на указанные реквизиты.\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже\n" +
                "\n" +
                "QIWI: +79529093996\n" +
                "КОММЕНТАРИЙ: \n" + msg.from.username , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.qiwi19:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: 'GreenDevil' 5gr.\n" +
                "Район: ЛЮБЕРЦЫ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 1500р. на указанные реквизиты.\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже\n" +
                "\n" +
                "QIWI: +79529093996\n" +
                "КОММЕНТАРИЙ: \n" + msg.from.username , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.qiwi20:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS'GreenDevil' 1gr.+0.5gr.\n" +
                "Район: ЛЮБЕРЦЫ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 2400р. на указанные реквизиты.\n" +
                "После оплаты нажмите пункт 'Проверка заказа' в меню ниже\n" +
                "\n" +
                "QIWI: +79529093996\n" +
                "КОММЕНТАРИЙ: \n" + msg.from.username , {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.check:
            bot.sendMessage(msg.chat.id, "Ваш баланс 0р. Для повторной проверки заказа нажмите пункт меню 'Проверка заказа'. Чтобы вернуться к выбору города нажмите пункт меню 'Главное меню'", {
                reply_markup: {
                    keyboard: [
                        [KB.check],
                        [KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
    }
})



require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){ res.end('') })
