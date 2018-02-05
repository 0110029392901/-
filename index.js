const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '526966802:AAEm_el5nQz50q-ldjIvqD2utNIORLvvzt4'

const bot = new TelegramBot(TOKEN, {polling: true})

const KB = {
    vybor: 'ГЛАВНОЕ МЕНЮ',
    gorod: 'ВЫБОР ГОРОДА',
    otzivy: 'ОТЗЫВЫ',
    support: 'ПОДДЕРЖКА',
    nsk: 'НОВОСИБИРСК',
    tomsk: 'ТОМСК',
    tovar1: 'товар1',
    tovar2: 'товар2',
    tovar3: 'товар3',
    tovar4: 'товар4'

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
            ]
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
                            KB.otzivy]
                    ]
                }
            })
            break
        case KB.gorod:
            bot.sendMessage(msg.chat.id, "ВЫБЕРИТЕ ГОРОД:" , {
                reply_markup: {
                    keyboard: [
                        [KB.nsk, 
                            KB.tomsk]
                    ]
                }
            })
            break
        case  KB.nsk:
            bot.sendMessage(msg.chat.id, "ВЫ ВЫБРАЛИ НОВОСИБИРСК, ВЫБЕРИТЕ ТОВАР:" , {
                reply_markup: {
                    keyboard: [
                        [KB.tovar1, 
                            KB.tovar2]
                    ]
                }
            })
            break
        case KB.tomsk:
            bot.sendMessage(msg.chat.id, "ВЫ ВЫБРАЛИ ТОМСК, ВЫБЕРИТЕ ТОВАР:" , {
                reply_markup: {
                    keyboard: [
                        [KB.tovar3, 
                            KB.tovar4]
                    ]
                }
            })
            break
        case KB.tovar1:
            break
        case KB.tovar2:
            break
        case KB.tovar3:
            break
        case KB.tovar4:
            break
    }
})




require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){ res.end('') })
