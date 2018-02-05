const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '526966802:AAEm_el5nQz50q-ldjIvqD2utNIORLvvzt4'

const bot = new TelegramBot(TOKEN, {polling: true})

const KB = {
    vybor: 'ГЛАВНОЕ МЕНЮ'
    
}

bot.onText(/\/start/, msg => {

    const text = 'MANUFACTURA АВТОМАГАЗИН 24/7\n' +
        'Служба поддержки: @manufactura_help\n' +
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
            break
       
    }

})


require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){ res.end('') })
