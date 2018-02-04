const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '526966802:AAEm_el5nQz50q-ldjIvqD2utNIORLvvzt4'

const bot = new TelegramBot(TOKEN, {polling: true})

const KB = {
    vybor: 'Выбор города',
    pomosh: 'Поддержка',
    soc: 'Оставить отзыв'
}
bot.onText(/\/start/, msg => {
    const text = 'Добро пожаловать в магазин vasyareper! Выберите город:'

    bot.sendMessage(msg.chat.id, text, {
        reply_markup: {
            keyboard: [
                [KB.vybor, KB.pomosh, KB.soc]
            ]
        }
    }

})

bot.on('message', msg=> {

    switch (msg.text) {
        case KB.vybor:
            break
        case KB.pomosh:
            break
        case KB.soc:
            break
    }
})
