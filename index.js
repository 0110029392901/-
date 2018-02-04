const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '526966802:AAEm_el5nQz50q-ldjIvqD2utNIORLvvzt4'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Hello, bot says: "hi, ${msg.from.first_name}"')
})