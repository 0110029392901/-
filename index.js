const TelegramBot = require('node-telegram-bot-api');

const token = '526966802:AAEm_el5nQz50q-ldjIvqD2utNIORLvvzt4';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, msg => {

    const text = 'Добро пожаловать в магазин VasyaReper, выберите действие в меню ниже'

    bot.sendMessage(msg.chat.id, text, {
        reply_markup: {
            keyboard: [
                [KB.gorod, KB.support, KB.feedback]
            ]
        }
    })

})

const KB = {
    gorod: 'Выбор города',
    support: 'Поддержка',
    feedback: 'Отзывы',
    back: 'Назад'
}

bot.on('message', msg => {

})

switch (msg.text) {
    case KB.gorod:
        break
    case KB.support:
        break
    case KB.feedback:
        break
    case KB.back:
        break
}

require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){ res.end('') })
