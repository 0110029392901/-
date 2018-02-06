const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '526966802:AAEm_el5nQz50q-ldjIvqD2utNIORLvvzt4'

const bot = new TelegramBot(TOKEN, {polling: true})

const KB = {
    vybor: 'ГЛАВНОЕ МЕНЮ',
    gorod: 'ВЫБОР ГОРОДА',
    otzivy: 'ОТЗЫВЫ',
    support: 'ПОДДЕРЖКА',
    price: 'ПРАЙС',
    nskdzer: 'ДЗЕРЖИНСКИЙ',
    nskcentr: 'ЦЕНТР',
    tomskokt: 'ОКТЯБРЬСКИЙ',
    tomsksov: 'СОВЕТСКИЙ',
    nsk: 'НОВОСИБИРСК',
    tomsk: 'ТОМСК',
    tovar1: 'товар1',
    tovar2: 'товар2',
    tovar3: 'товар3',
    tovar4: 'товар4',
    bitcoin: 'BITCOIN',
    qiwi: 'QIWI',
    back: 'ГЛАВНОЕ МЕНЮ'

}

bot.onText(/\/start/, msg => {

    const text = 'VASYAREPER АВТОМАГАЗИН 24/7\n' +
        'Служба поддержки: @vasyareper_help\n' +
        '➖➖➖➖➖➖➖➖➖➖\n' +
        'ДЛЯ ОФОРМЛЕНИЯ ЗАКАЗА ВЫБЕРИТЕ ПУНКТ "ГЛАВНОЕ МЕНЮ" В МЕНЮ НИЖЕ:'

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
            bot.sendMessage(msg.chat.id, "ВЫБЕРИТЕ ПУНКТ МЕНЮ:", {
                reply_markup: {
                    keyboard: [
                        [KB.gorod,
                            KB.otzivy, KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.gorod:
            bot.sendMessage(msg.chat.id, "ВЫБЕРИТЕ ГОРОД:" , {
                reply_markup: {
                    keyboard: [
                        [KB.nsk,
                            KB.tomsk, KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case  KB.nsk:
            bot.sendMessage(msg.chat.id, "ВЫ ВЫБРАЛИ НОВОСИБИРСК, ВЫБЕРИТЕ РАЙОН:" , {
                reply_markup: {
                    keyboard: [
                        [KB.nskcentr,
                            KB.nskdzer, KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tomsk:
            bot.sendMessage(msg.chat.id, "ВЫ ВЫБРАЛИ ТОМСК, ВЫБЕРИТЕ РАЙОН:" , {
                reply_markup: {
                    keyboard: [
                        [KB.tomskokt,
                            KB.tomsksov, KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.nskcentr:
            bot.sendMessage(msg.chat.id, "ВЫ ВЫБРАЛИ НОВОСИБИРСК ЦЕНТРАЛЬНЫЙ РАЙОН, ВЫБЕРИТЕ ТОВАР:" , {
                reply_markup: {
                    keyboard: [
                        [KB.tovar3,
                            KB.tovar4, KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.nskdzer:
        bot.sendMessage(msg.chat.id, "ВЫ ВЫБРАЛИ НОВОСИБИРСК ДЗЕРЖИНСКИЙ РАЙОН, ВЫБЕРИТЕ ТОВАР:" , {
            reply_markup: {
                keyboard: [
                    [KB.tovar3,
                        KB.tovar4, KB.back]
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
                        KB.tovar2, KB.back]
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
                        KB.tovar2, KB.back]
                ],
                one_time_keyboard: true,
                resize_keyboard: true
            }
        })
            break
        case KB.tovar1:
            bot.sendMessage(msg.chat.id, "ВЫБЕРИТЕ СПОСОБ ОПЛАТЫ:" , {
            reply_markup: {
                keyboard: [
                    [KB.bitcoin,
                        KB.qiwi, KB.back]
                ],
                one_time_keyboard: true,
                resize_keyboard: true
            }
        })
            break
        case KB.tovar2:
            bot.sendMessage(msg.chat.id, "ВЫБЕРИТЕ СПОСОБ ОПЛАТЫ:" , {
                reply_markup: {
                    keyboard: [
                        [KB.bitcoin,
                            KB.qiwi, KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tovar3:
            bot.sendMessage(msg.chat.id, "ВЫБЕРИТЕ СПОСОБ ОПЛАТЫ:" , {
                reply_markup: {
                    keyboard: [
                        [KB.bitcoin,
                            KB.qiwi, KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tovar4:
            bot.sendMessage(msg.chat.id, "ВЫБЕРИТЕ СПОСОБ ОПЛАТЫ:" , {
                reply_markup: {
                    keyboard: [
                        [KB.bitcoin,
                            KB.qiwi, KB.back]
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
                            KB.otzivy, KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
    }
})



require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){ res.end('') })
