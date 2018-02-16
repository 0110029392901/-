
const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '531195296:AAHu6-WxmVxo5LUmKezlY7kwWstDPHdFlSI'

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
    nsk: 'МОСКВА',
    tomsk: 'ХИМКИ',
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
    bitcoin: 'BITCOIN',
    bitcoin1: 'BITCOIN',
    bitcoin2: 'BITCOIN',
    bitcoin3: 'BITCOIN',
    bitcoin4: 'BITCOIN',
    bitcoin5: 'BITCOIN',
    bitcoin6: 'BITCOIN',
    bitcoin7: 'BITCOIN',
    bitcoin8: 'BITCOIN',
    bitcoin9: 'BITCOIN',
    bitcoin10: 'BITCOIN',
    bitcoin11: 'BITCOIN',
    bitcoin12: 'BITCOIN',
    bitcoin13: 'BITCOIN',
    bitcoin14: 'BITCOIN',
    bitcoin15: 'BITCOIN',
    bitcoin16: 'BITCOIN',
    bitcoin17: 'BITCOIN',
    bitcoin18: 'BITCOIN',
    bitcoin19: 'BITCOIN',
    qiwi: 'QIWI',
    qiwi1: 'QIWI',
    qiwi2: 'QIWI',
    qiwi3: 'QIWI',
    qiwi4: 'QIWI',
    qiwi5: 'QIWI',
    qiwi6: 'QIWI',
    qiwi7: 'QIWI',
    qiwi8: 'QIWI',
    qiwi9: 'QIWI',
    qiwi10: 'QIWI',
    qiwi11: 'QIWI',
    qiwi12: 'QIWI',
    qiwi13: 'QIWI',
    qiwi14: 'QIWI',
    qiwi15: 'QIWI',
    qiwi16: 'QIWI',
    qiwi17: 'QIWI',
    qiwi18: 'QIWI',
    qiwi19: 'QIWI',
    back: 'Назад',
    check: 'Проверка заказа',
    recheck: 'ПРОВЕРКА ЗАКАЗА'

}

bot.onText(/\/start/, msg => {

    const text = 'Добро пожаловать в автомагазин\n' +
        'FAST MSK 24/7\n' +
        'Оператор @\n' +
        'Оптовые покупки JABBER:\n' +
        'Сайт: !!!ТЕХНИЧЕСКИЕ РАБОТЫ!!! ВСЕМ ЗАРЕГИСТРИРОВАННЫМ ПОЛЬЗОВАТЕЛЯМ ОТПИСАТЬ ОПЕРАТОРУ !!!\n'
        '➖➖➖➖➖➖➖➖➖➖\n' +
        'Для оформления заказа выберите пункт "Главное меню" в меню ниже\n'

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
            bot.sendMessage(msg.chat.id, "Вы выбрали МОСКВА, выберите район:" , {
                reply_markup: {
                    keyboard: [
                        [KB.nskcentr,
                            KB.nskdzer, KB.losino, KB.butovo, KB.luber],[ KB.back]
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
            bot.sendMessage(msg.chat.id, "Вы выбрали СВАО ВДНХ МОСКВА, выберите товар:" , {
                reply_markup: {
                    keyboard: [
                        [KB.tovar1, KB.tovar2, KB.tovar3,
                            KB.tovar4],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.nskdzer:
            bot.sendMessage(msg.chat.id, "Вы выбрали ЦАО МОСКВА, выберите товар:" , {
                reply_markup: {
                    keyboard: [
                        [KB.tovar5, KB.tovar6, KB.tovar7, KB.tovar8],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.losino:
            bot.sendMessage(msg.chat.id, "Вы выбрали ЛОСИНООСТРОВСКИЙ ПАРК МОСКВА, выберите товар:" , {
                reply_markup: {
                    keyboard: [
                        [KB.tovar9, KB.tovar10, KB.tovar11, KB.tovar12],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.butovo:
            bot.sendMessage(msg.chat.id, "Вы выбрали БУТОВО МОСКВА, выберите товар:" , {
                reply_markup: {
                    keyboard: [
                        [KB.tovar13, KB.tovar14, KB.tovar15, KB.tovar16],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.butovo:
            bot.sendMessage(msg.chat.id, "Вы выбрали ЛЮБЕРЦЫ МОСКВА, выберите товар:" , {
                reply_markup: {
                    keyboard: [
                        [KB.tovar17, KB.tovar18, KB.tovar19, KB.tovar20],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tomsksov:
            bot.sendMessage(msg.chat.id, "ю:" , {
                reply_markup: {
                    keyboard: [
                        [KB.tovar1,
                            KB.tovar2, KB.tovar4, KB.tovar5, KB.tovar6],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tomskokt:
            bot.sendMessage(msg.chat.id, "ю" , {
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
            bot.sendMessage(msg.chat.id, "Вы выбрали товар1 ЦАО МОСКВА, выберите способ оплаты:" , {
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
            bot.sendMessage(msg.chat.id, "Вы выбрали товар2 ЦАО МОСКВА, выберите способ оплаты:" , {
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
            bot.sendMessage(msg.chat.id, "Вы выбрали товар3 ЦАО МОСКВА, выберите способ оплаты:" , {
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
            bot.sendMessage(msg.chat.id, "Вы выбрали товар4 ЦАО МОСКВА, выберите способ оплаты:" , {
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
        case KB.tovar5:
            bot.sendMessage(msg.chat.id, "Вы выбрали товар5 СВАО ВДНХ МОСКВА, выберите способ оплаты:", {
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
        case KB.tovar6:
            bot.sendMessage(msg.chat.id, "Вы выбрали товар6 СВАО ВДНХ МОСКВА, выберите способ оплаты:", {
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
        case KB.tovar7:
            bot.sendMessage(msg.chat.id, "Вы выбрали товар6 СВАО ВДНХ МОСКВА, выберите способ оплаты:", {
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
        case KB.tovar8:
            bot.sendMessage(msg.chat.id, "Вы выбрали товар6 СВАО ВДНХ МОСКВА, выберите способ оплаты:", {
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
        case KB.tovar9:
            bot.sendMessage(msg.chat.id, "Вы выбрали товар6 ЛОСИНООСТРОВСКИЙ ПАРК МОСКВА, выберите способ оплаты:", {
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
        case KB.tovar10:
            bot.sendMessage(msg.chat.id, "Вы выбрали товар6 ЛОСИНООСТРОВСКИЙ ПАРК МОСКВА, выберите способ оплаты:", {
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
        case KB.tovar11:
            bot.sendMessage(msg.chat.id, "Вы выбрали товар6 ЛОСИНООСТРОВСКИЙ ПАРК МОСКВА, выберите способ оплаты:", {
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
        case KB.tovar12:
            bot.sendMessage(msg.chat.id, "Вы выбрали ЛОСИНООСТРОВСКИЙ ПАРК МОСКВА, выберите способ оплаты:", {
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
        case KB.tovar13:
            bot.sendMessage(msg.chat.id, "Вы выбрали товар6 БУТОВО МОСКВА, выберите способ оплаты:", {
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
        case KB.tovar14:
            bot.sendMessage(msg.chat.id, "Вы выбрали товар6 БУТОВО МОСКВА, выберите способ оплаты:", {
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
        case KB.tovar15:
            bot.sendMessage(msg.chat.id, "Вы выбрали товар6 БУТОВО МОСКВА, выберите способ оплаты:", {
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
        case KB.tovar16:
            bot.sendMessage(msg.chat.id, "Вы выбрали товар6 БУТОВО МОСКВА, выберите способ оплаты:", {
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
        case KB.tovar17:
            bot.sendMessage(msg.chat.id, "Вы выбрали товар6 ЛЮБЕРЦЫ МОСКВА выберите способ оплаты:", {
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
        case KB.tovar18:
            bot.sendMessage(msg.chat.id, "Вы выбрали товар6 ЛЮБЕРЦЫ МОСКВА, выберите способ оплаты:", {
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
        case KB.tovar19:
            bot.sendMessage(msg.chat.id, "Вы выбрали товар6 ЛЮБЕРЦЫ МОСКВА, выберите способ оплаты:", {
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
        case KB.tovar20:
            bot.sendMessage(msg.chat.id, "Вы выбрали товар6 ЛЮБЕРЦЫ МОСКВА, выберите способ оплаты:", {
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
        case KB.bitcoin:
            bot.sendMessage(msg.chat.id, 'Вы приобретаете товар район город, для получения заказа оплатите 1000 на кошелек *btc', {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретеаете товар район город, для получения заказа оплатите 1000 НА кошелек *QIWI* C КОММЕНТАРИЕМ: ' + msg.from.username, {
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
