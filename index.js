/* Just A Theoretical Explanation Of How it Should Function */

// Node Packages
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

// Telegram Bot
const TOKEN = '526966802:AAEm_el5nQz50q-ldjIvqD2utNIORLvvzt4';
const URL = 'https://qwertrt.herokuapp.com:443';

const bot = new TelegramBot(TOKEN);

bot.setWebHook(`${URL}/bot${TOKEN}`);

// Express
const app = express();

// Use Node-Telegram-Bot-API As An Express Middleware
app.use(bot.webhookCallback((`/bot${TOKEN}`))
// Updates Sent To Route Above

const KB = {
    vybor: 'Выбор города',
    pomosh: 'Поддержка',
    soc: 'Оставить отзыв',
    back: 'Назад'
}

bot.onText(/\/start/, msg => {

    const text = 'Добро пожаловать в магазин vasyareper! Выберите город:'

    bot.sendMessage(msg.chat.id, text, {
        reply_markup: {
            keyboard: [
                [KB.vybor, KB.pomosh, KB.soc]
            ]
        }
    })
})

bot.on('message', msg=> {

    switch (msg.text) {
        case KB.vybor:
            break
        case KB.pomosh:
            break
        case KB.soc:
            break
        case KB.back:
            bot.sendMessage(msg.chat.id, 'Выберите пункт меню:', {

            })
            break
    }

})

// Start Express Server
app.listen(443, () => {
    console.log(`Express listening on 443`)
});
