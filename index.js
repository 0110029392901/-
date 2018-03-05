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
    tovar1: 'товар1',
    tovar2: 'товар2',
    tovar3: 'товар3',
    tovar4: 'товар4',
    tovar5: 'товар5',
    tovar6: 'товар 6',
    tovar7: 'товар7',
    tovar8: 'товар8',
    tovar9: 'товар9',
    tovar10: 'товар10',
    tovar11: 'товар11',
    tovar12: 'товар12',
    tovar13: 'товар13',
    tovar14: 'товар14',
    tovar15: 'товар15',
    tovar16: 'товар16',
    tovar17: 'товар17',
    tovar18: 'товар18',
    tovar19: 'товар19',
    tovar20: 'товар20',
    bitcoin: 'Bitcoin',
    bitcoin1: 'Bitcoin',
    bitcoin2: 'Bitcoin',
    bitcoin3: 'Bitcoin',
    bitcoin4: 'Bitcoin',
    bitcoin5: 'Bitcoin',
    bitcoin6: 'Bitcoin',
    bitcoin7: 'Bitcoin',
    bitcoin8: 'Bitcoin',
    bitcoin9: 'Bitcoin',
    bitcoin10: 'Bitcoin',
    bitcoin11: 'Bitcoin',
    bitcoin12: 'Bitcoin',
    bitcoin13: 'Bitcoin',
    bitcoin14: 'Bitcoin',
    bitcoin15: 'Bitcoin',
    bitcoin16: 'Bitcoin',
    bitcoin17: 'Bitcoin',
    bitcoin18: 'Bitcoin',
    bitcoin19: 'Bitcoin',
    qiwi: 'Qiwi',
    qiwi1: 'Qiwi',
    qiwi2: 'Qiwi',
    qiwi3: 'Qiwi',
    qiwi4: 'Qiwi',
    qiwi5: 'Qiwi',
    qiwi6: 'Qiwi',
    qiwi7: 'Qiwi',
    qiwi8: 'Qiwi',
    qiwi9: 'Qiwi',
    qiwi10: 'Qiwi',
    qiwi11: 'Qiwi',
    qiwi12: 'Qiwi',
    qiwi13: 'Qiwi',
    qiwi14: 'Qiwi',
    qiwi15: 'Qiwi',
    qiwi16: 'Qiwi',
    qiwi17: 'Qiwi',
    qiwi18: 'Qiwi',
    qiwi19: 'Qiwi',
    back: 'Главное меню',
    check: 'Проверка заказа'

}

bot.onText(/\/start/, msg => {

    const text = 'Добро пожаловать в автомагазин\n' +
        'FAST SHOP MSK 24/7\n' +
        '➖➖➖➖➖➖➖➖➖➖\n' +
        'Оператор @\n' +
        'Оптовые покупки JABBER:\n' +
        'Сайт: !!!ТЕХНИЧЕСКИЕ РАБОТЫ!!! ВСЕМ ЗАРЕГИСТРИРОВАННЫМ ПОЛЬЗОВАТЕЛЯМ ОТПИСАТЬ ОПЕРАТОРУ!!!\n' +
        '➖➖➖➖➖➖➖➖➖➖\n' +
        '!!!ТРЕБУЮТСЯ МИНЁРЫ И ГРАФФИТЧИКИ ПО МСК!!!\n' +
        '    !!!ОТ 400р. ЗА КЛАД!!!\n' +
        '    НЕ УПУСТИ СВОЙ ШАНС\n' +
        'ПО ТРУДОУСТРОЙСТВУ ПИСАТЬ:\n' +
        'JABBER:\n' +
        '➖➖➖➖➖➖➖➖➖➖\n' +
        'Для оформления заказа выберите пункт "Оформить заказ" в меню ниже\n'

    bot.sendMessage(msg.chat.id, text, {
        reply_markup: {
            keyboard: [
                [KB.vybor]
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
                            KB.otzivy],[ KB.back]
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
                "Привнот обновляется ежедневно с 12 по 19 часов по МСК\n" +
                "Стандартно в привноте лежит адрес с KRIS-A29+BONUS'GreenDevil' 0.3gr.+0.5gr. либо с  ROSS'GreenDevil' 3gr.\n" +
                "В праздничные дни выдается привнот с !!!БОЛЕЕ ЩЕДРЫМИ ПОЗИЦИЯМИ!!!\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Привнот выдается в боте после нажатия кнопки 'Получить привнот' в меню ниже" , {
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
                "https://privnote.com/wUe3mE3j#Bg3jrgLAQ", {
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
            bot.sendMessage(msg.chat.id, "В данном городе закончились товары\n" +
                "Работает ОПТ и ПРЕДЗАКАЗ\n" +
                "Для оформления ОТПИСАТЬ ОПЕРАТОРУ @"
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
                        [KB.tovar1], [KB.tovar2], [KB.tovar3],
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
                        [KB.tovar5], [KB.tovar6], [KB.tovar7],
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
                        [KB.tovar13], [KB.tovar14], [KB.tovar15],
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
                        [KB.tovar17], [KB.tovar18], [KB.tovar19],
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
                "Стоимость: 1000р." +
                "Выберите способ оплаты:" , {
                reply_markup: {
                    keyboard: [
                        [KB.bitcoin],
                        [KB.qiwi],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tovar2:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: KRIS-A29+BONUS'GreenDevil' 0.5gr.+0.5gr.\n" +
                "Район: СВАО ВДНХ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 1200р." +
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
        case KB.tovar3:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: KRIS-A29+BONUS'GreenDevil' 1gr.+0.5gr.\n" +
                "Район: СВАО ВДНХ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 2400р." +
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
        case KB.tovar4:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: KRIS-A29+BONUS'GreenDevil' 3gr.+0.5gr.\n" +
                "Район: СВАО ВДНХ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 3400р." +
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
        case KB.tovar5:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: KRIS-A29+BONUS'GreenDevil' 0.3gr.+0.5gr.\n" +
                "Район: ЦАО ВДНХ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 1000р." +
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
        case KB.tovar6:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Район: ЦАО ВДНХ\n" +
                "Город: МОСКВА\n" +
                "Товар: 'GreenDevil' 3gr.\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 1100р." +
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
        case KB.tovar7:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: KRIS-A29+BONUS'GreenDevil' 0.5gr.+0.5gr.\n" +
                "Район: ЦАО ВДНХ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 1200p." +
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
        case KB.tovar8:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: 'GreenDevil' 5gr.\n" +
                "Район: ЦАО ВДНХ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 1500p." +
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
        case KB.tovar9:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: 'GreenDevil' 1gr.\n" +
                "Район: ЧЕРТАНОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 600p." +
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
        case KB.tovar10:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: KRIS-A29+BONUS'GreenDevil' 0.3gr.+0.5gr.\n" +
                "Район: ЧЕРТАНОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 1000p." +
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
        case KB.tovar11:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: 'GreenDevil' 3gr.\n" +
                "Район: ЧЕРТАНОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 1100p." +
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
        case KB.tovar12:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: KRIS-A29+BONUS'GreenDevil' 0.5gr.+0.5gr.\n" +
                "Район: ЧЕРТАНОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 1200p." +
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
        case KB.tovar13:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: 'GreenDevil' 1gr.\n" +
                "Район: БУТОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 600p." +
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
        case KB.tovar14:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: 'GreenDevil' 3gr.\n" +
                "Район: БУТОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 1100p." +
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
        case KB.tovar15:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: 'GreenDevil' 5gr.\n" +
                "Район: БУТОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 1500p." +
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
        case KB.tovar16:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: KRIS-A29+BONUS'GreenDevil' 1gr.+0.5gr.\n" +
                "Район: БУТОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 2400p." +
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
        case KB.tovar17:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: 'GreenDevil' 1gr.\n" +
                "Район: ЛЮБЕРЦЫ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 600p." +
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
        case KB.tovar18:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: 'KRIS-A29+BONUS'GreenDevil' 0.3gr.+0.5gr.\n" +
                "Район: ЛЮБЕРЦЫ\n" +
                "Город: МОСКВА\n" +
            "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 1000p." +
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
        case KB.tovar19:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: 'GreenDevil' 5gr.\n" +
                "Район: ЛЮБЕРЦЫ\n" +
                "Город: МОСКВА\n" +
            "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 1500p." +
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
        case KB.tovar20:
            bot.sendMessage(msg.chat.id, "Вы выбрали:\n" +
                "Товар: KRIS-A29+BONUS'GreenDevil' 1gr.+0.5gr.\n" +
                "Район: ЛЮБЕРЦЫ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Стоимость: 2400p." +
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
        case KB.back:
            bot.sendMessage(msg.chat.id, "Выберите пункт меню:", {
                reply_markup: {
                    keyboard: [
                        [KB.gorod],
                        [KB.otzivy],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.bitcoin:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS'GreenDevil' 0.3gr.+0.5gr.\n" +
                "Район: СВАО ВДНХ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00100000 BTC на кошелек:\n" +
                "*BTC*\n" +
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
        case KB.bitcoin1:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS'GreenDevil' 0.5gr.+0.5gr.\n" +
                "Район: СВАО ВДНХ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00120000 BTC на кошелек:\n" +
                "*BTC*\n" +
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
                "Товар: KRIS-A29+BONUS'GreenDevil' 1gr.+0.5gr.\n" +
                "Район: СВАО ВДНХ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00240000 BTC на кошелек:\n" +
                "*BTC*\n" +
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
                "Товар: KRIS-A29+BONUS'GreenDevil' 3gr.+0.5gr.\n" +
                "Район: СВАО ВДНХ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00340000 BTC на кошелек:\n" +
                "*BTC*\n" +
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
                "Товар: KRIS-A29+BONUS'GreenDevil' 0.3gr.+0.5gr.\n" +
                "Район: ЦАО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00100000 BTC на кошелек:\n" +
                "*BTC*\n" +
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
                "Товар: 'GreenDevil' 3gr.\n" +
                "Район: ЦАО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00110000 BTC на кошелек:\n" +
                "*BTC*\n" +
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
                "Товар: KRIS-A29+BONUS'GreenDevil' 0.5gr.+0.5gr.\n" +
                "Район: ЦАО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00120000 BTC на кошелек:\n" +
                "*BTC*\n" +
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
                "Товар: 'GreenDevil' 5gr.\n" +
                "Район: ЦАО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00150000 BTC на кошелек:\n" +
                "*BTC*\n" +
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
                "Товар: 'GreenDevil' 1gr.\n" +
                "Район: ЧЕРТАНОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00060000 BTC на кошелек:\n" +
                "*BTC*\n" +
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
        case KB.bitcoin9:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS'GreenDevil' 0.3gr.+0.5gr.\n" +
                "Район: ЧЕРТАНОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00100000 BTC на кошелек:\n" +
                "*BTC*\n" +
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
                "Товар: 'GreenDevil' 3gr.\n" +
                "Район: ЧЕРТАНОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00110000 BTC на кошелек:\n" +
                "*BTC*\n" +
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
                "Товар: KRIS-A29+BONUS'GreenDevil' 0.5gr.+0.5gr.\n" +
                "Район: ЧЕРТАНОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00120000 BTC на кошелек:\n" +
                "*BTC*\n" +
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
        case KB.bitcoin12:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: 'GreenDevil' 1gr.\n" +
                "Район: БУТОВОn" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00060000 BTC на кошелек:\n" +
                "*BTC*\n" +
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
                "Товар: 'GreenDevil' 3gr.\n" +
                "Район: БУТОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00110000 BTC на кошелек:\n" +
                "*BTC*\n" +
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
                "Товар: 'GreenDevil' 5gr.\n" +
                "Район: БУТОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00150000 BTC на кошелек:\n" +
                "*BTC*\n" +
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
                "Товар: KRIS-A29+BONUS'GreenDevil' 1gr.+0.5gr.\n" +
                "Район: БУТОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00240000 BTC на кошелек:\n" +
                "*BTC*\n" +
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
                "Товар: 'GreenDevil' 1gr.\n" +
                "Район: ЛЮБЕРЦЫ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00060000 BTC на кошелек:\n" +
                "*BTC*\n" +
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
                "Товар: KRIS-A29+BONUS'GreenDevil' 0.3gr.+0.5gr.\n" +
                "Район: ЛЮБЕРЦЫ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00100000 BTC на кошелек:\n" +
                "*BTC*\n" +
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
                "Товар: 'GreenDevil' 5gr.\n" +
                "Район: ЛЮБЕРЦЫ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00150000 BTC на кошелек:\n" +
                "*BTC*\n" +
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
                "Товар: KRIS-A29+BONUS'GreenDevil' 1gr.+0.5gr.\n" +
                "Район: ЛЮБЕРЦЫ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 0,00240000 BTC на кошелек:\n" +
                "*BTC*\n" +
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
        case KB.qiwi:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
            "Товар: KRIS-A29+BONUS'GreenDevil' 0.3gr.+0.5gr.\n" +
            "Район: СВАО ВДНХ\n" +
            "Город: МОСКВА\n" +
            "➖➖➖➖➖➖➖➖➖➖\n" +
            "Для получения товара оплатите 1000р. на кошелек:\n" +
            "*BTC*\n" +
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
                "Товар: KRIS-A29+BONUS'GreenDevil' 0.5gr.+0.5gr.\n" +
                "Район: СВАО ВДНХ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 1200р. на кошелек:\n" +
                "*BTC*\n" +
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
        case KB.qiwi2:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS'GreenDevil' 1gr.+0.5gr.\n" +
                "Район: СВАО ВДНХ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 2400р. на кошелек:\n" +
                "*BTC*\n" +
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
            break
        case KB.qiwi3:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS'GreenDevil' 3gr.+0.5gr.\n" +
                "Район: СВАО ВДНХ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 3400р. на кошелек:\n" +
                "*BTC*\n" +
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
        case KB.qiwi4:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS'GreenDevil' 0.3gr.+0.5gr.\n" +
                "Район: ЦАО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 1000р.на кошелек:\n" +
                "*BTC*\n" +
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
        case KB.qiwi5:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: 'GreenDevil' 3gr.\n" +
                "Район: ЦАО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 1100р. на кошелек:\n" +
                "*BTC*\n" +
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
        case KB.qiwi6:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS'GreenDevil' 0.5gr.+0.5gr.\n" +
                "Район: ЦАО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 1200р. на кошелек:\n" +
                "*BTC*\n" +
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
        case KB.qiwi7:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: 'GreenDevil' 5gr.\n" +
                "Район: ЦАО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 1500р. на кошелек:\n" +
                "*BTC*\n" +
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
        case KB.qiwi8:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: 'GreenDevil' 1gr.\n" +
                "Район: ЧЕРТАНОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 600р.на кошелек:\n" +
                "*BTC*\n" +
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
        case KB.qiwi9:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS'GreenDevil' 0.3gr.+0.5gr.\n" +
                "Район: ЧЕРТАНОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 1000р. на кошелек:\n" +
                "*BTC*\n" +
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
        case KB.qiwi10:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: 'GreenDevil' 3gr.\n" +
                "Район: ЧЕРТАНОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 1100р. на кошелек:\n" +
                "*BTC*\n" +
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
        case KB.qiwi11:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS'GreenDevil' 0.5gr.+0.5gr.\n" +
                "Район: ЧЕРТАНОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 1200р. на кошелек:\n" +
                "*BTC*\n" +
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
        case KB.qiwi12:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: 'GreenDevil' 1gr.\n" +
                "Район: БУТОВОn" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 600р. на кошелек:\n" +
                "*BTC*\n" +
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
        case KB.qiwi13:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: 'GreenDevil' 3gr.\n" +
                "Район: БУТОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 1100р. на кошелек:\n" +
                "*BTC*\n" +
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
        case KB.qiwi14:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: 'GreenDevil' 5gr.\n" +
                "Район: БУТОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 1500р. на кошелек:\n" +
                "*BTC*\n" +
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
        case KB.qiwi15:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS'GreenDevil' 1gr.+0.5gr.\n" +
                "Район: БУТОВО\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 2400р. на кошелек:\n" +
                "*BTC*\n" +
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
        case KB.qiwi16:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
            "Товар: 'GreenDevil' 1gr.\n" +
            "Район: ЛЮБЕРЦЫ\n" +
            "Город: МОСКВА\n" +
            "➖➖➖➖➖➖➖➖➖➖\n" +
            "Для получения товара оплатите 600р. на кошелек:\n" +
            "*BTC*\n" +
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
        case KB.qiwi17:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS'GreenDevil' 0.3gr.+0.5gr.\n" +
                "Район: ЛЮБЕРЦЫ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 1000р. на кошелек:\n" +
                "*BTC*\n" +
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
        case KB.qiwi18:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: 'GreenDevil' 5gr.\n" +
                "Район: ЛЮБЕРЦЫ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 1500р. на кошелек, указав комментарий, указанный ниже\n" +
                "*BTC*\n" +
                "Комментаний:\n" + msg.uid +
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
        case KB.qiwi19:
            bot.sendMessage(msg.chat.id, "Вы приобретаете:\n" +
                "Товар: KRIS-A29+BONUS'GreenDevil' 1gr.+0.5gr.\n" +
                "Район: ЛЮБЕРЦЫ\n" +
                "Город: МОСКВА\n" +
                "➖➖➖➖➖➖➖➖➖➖\n" +
                "Для получения товара оплатите 2400р. на кошелек:\n" +
                "*BTC*\n" +
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
        case KB.check:
            bot.sendMessage(msg.chat.id, "Ваш баланс 0р. Для повторной проверки заказа нажмите пункт меню 'Проверка заказа'", {
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
