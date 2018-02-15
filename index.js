
const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '482152456:AAGrw5bzZ8RxI5MQQ2v63VQ91JOmQlf47BA'

const bot = new TelegramBot(TOKEN, {polling: true})

const KB = {
    vybor: 'Главное меню',
    gorod: 'Выбор города',
    otzivy: 'Правила',
    support: 'Поддержка',
    price: 'Прайс',
    nskdzer: 'ЦАО',
    nskcentr: 'СВАО ВДНХ',
    losino: 'ЛОСИНООСТРОВСКИЙ ПАРК',
    butovo: 'БУТОВО',
    luber: 'ЛЮБЕРЦЫ',
    tomskokt: 'ЦЕНТР',
    tomsksov: 'СОВЕТСКИЙ',
    nsk: 'МСК',
    tomsk: 'ХИМКИ',
    tovar1: 'товар1',
    tovar2: 'товар2',
    tovar3: 'товар3',
    tovar4: 'товар4',
    bitcoin: 'BITCOIN',
    qiwi: 'QIWI',
    back: 'Главное меню',
    check: 'Проверка заказа',
    recheck: 'ПРОВЕРКА ЗАКАЗА'

}

bot.onText(/\/start/, msg => {

    const text = 'Добро пожаловать в автомагазин' +
        'FAST MSK 24/7\n' +
        'Оператор @\n' +
        'Оптовые покупки JABBER:' +
        'Сайт: !!!ТЕХНИЧЕСКИЕ РАБОТЫ!!! ВСЕМ ЗАРЕГИСТРИРОВАННЫМ ПОЛЬЗОВАТЕЛЯМ ОТПИСАТЬ ОПЕРАТОРУ !!!'
        '➖➖➖➖➖➖➖➖➖➖\n' +
        'Для оформления заказа выберите пункт "Главное меню" в меню ниже'

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
        case KB.gorod:
            bot.sendMessage(msg.chat.id, "Выберите город:" , {
                reply_markup: {
                    keyboard: [
                        [KB.nsk,
                            KB.tomsk],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case  KB.nsk:
            bot.sendMessage(msg.chat.id, "Вы выбрали МСК, выберите район:" , {
                reply_markup: {
                    keyboard: [
                        [KB.nskcentr,
                            KB.nskdzer, KB.losino],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tomsk:
            bot.sendMessage(msg.chat.id, "В данном городе закончились товары" , {
                reply_markup: {
                    keyboard: [
                        [KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.nskcentr:
            bot.sendMessage(msg.chat.id, "Вы выбрали СВАО ВДНХ МСК, выберите товар:" , {
                reply_markup: {
                    keyboard: [
                        [KB.tovar3,
                            KB.tovar4],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.nskdzer:
            bot.sendMessage(msg.chat.id, "Вы выбрали ЦАО МСК, выберите товар:" , {
                reply_markup: {
                    keyboard: [
                        [KB.tovar3,
                            KB.tovar4],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tomsksov:
            bot.sendMessage(msg.chat.id, "ВЫ ВЫБРАЛИ ТОМСК СОВЕТСКИЙ РАЙОН, ВЫБЕРИТЕ ТОВАР:" , {
                reply_markup: {
                    keyboard: [
                        [KB.tovar1,
                            KB.tovar2],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tomskokt:
            bot.sendMessage(msg.chat.id, "ВЫ ВЫБРАЛИ ТОМСК ОКТЯБРЬСКИЙ РАЙОН, ВЫБЕРИТЕ ТОВАР:" , {
                reply_markup: {
                    keyboard: [
                        [KB.tovar1,
                            KB.tovar2],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tovar1:
            bot.sendMessage(msg.chat.id, "Выберите способ оплаты:" , {
                reply_markup: {
                    keyboard: [
                        [KB.bitcoin,
                            KB.qiwi],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tovar2:
            bot.sendMessage(msg.chat.id, "Выберите способ оплаты:" , {
                reply_markup: {
                    keyboard: [
                        [KB.bitcoin,
                            KB.qiwi],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tovar3:
            bot.sendMessage(msg.chat.id, "Выберите способ оплаты:" , {
                reply_markup: {
                    keyboard: [
                        [KB.bitcoin,
                            KB.qiwi],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tovar4:
            bot.sendMessage(msg.chat.id, "Выберите способ оплаты:" , {
                reply_markup: {
                    keyboard: [
                        [KB.bitcoin,
                            KB.qiwi],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.back:
            bot.sendMessage(msg.chat.id, "ВЫБЕРИТЕ ПУНКТ МЕНЮ:", {
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
        case KB.bitcoin:
            bot.sendMessage(msg.chat.id, 'Вы выбрали оплату QIWI, для получения заказа оплатите 1000 НА *QIWI* C КОММЕНТАРИЕМ: ' + msg.from.username, {
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
            bot.sendMessage(msg.chat.id, 'ВЫ ВЫБРАЛИ ОПЛАТУ QIWI, ДЛЯ ПОЛУЧЕНИЯ ЗАКАЗА ОПЛАТИТЕ 1000 НА *QIWI* C КОММЕНТАРИЕМ: ' + msg.from.username, {
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
            bot.sendMessage(msg.chat.id, "ВАШ БАЛАНС 0р. ДЛЯ ПОВТОРНОЙ ПРОВЕРКИ ЗАКАЗА НАЖМИТЕ 'ПРОВЕРКА ЗАКАЗА'", {
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
