
const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '482152456:AAGrw5bzZ8RxI5MQQ2v63VQ91JOmQlf47BA'

const bot = new TelegramBot(TOKEN, {polling: true})

const KB = {
    vybor: 'Главное меню',
    gorod: 'Выбор города',
    otzivy: 'Правила',
    support: 'Поддержка',
    price: 'Прайс',
    cao: 'ЦАО',
    svao: 'СВАО ВДНХ',
    cher: 'ЧЕРТАНОВО',
    butovo: 'БУТОВО',
    luber: 'ЛЮБЕРЦЫ',
    msk: 'МОСКВА',
    zelen: 'ЗЕЛЕНОГРАД',
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
    check: 'Проверка заказа'

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
                        [KB.msk,
                            KB.zelen],[ KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case  KB.msk:
            bot.sendMessage(msg.chat.id, "Вы выбрали МОСКВА, выберите район:" , {
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
        case KB.svao:
            bot.sendMessage(msg.chat.id, "Вы выбрали СВАО ВДНХ МОСКВА, выберите товар:" , {
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
            bot.sendMessage(msg.chat.id, "Вы выбрали ЦАО МОСКВА, выберите товар:" , {
                reply_markup: {
                    keyboard: [
                        [KB.tovar5], [KB.tovar6], [KB.tovar7], [KB.tovar8],[KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.cher:
            bot.sendMessage(msg.chat.id, "Вы выбрали ЧЕРТАНОВО МОСКВА, выберите товар:" , {
                reply_markup: {
                    keyboard: [
                        [KB.tovar9], [KB.tovar10], [KB.tovar11], [KB.tovar12],[KB.back]
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
                        [KB.tovar13], [KB.tovar14], [KB.tovar15], [KB.tovar16],[KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.luber:
            bot.sendMessage(msg.chat.id, "Вы выбрали ЛЮБЕРЦЫ МОСКВА, выберите товар:" , {
                reply_markup: {
                    keyboard: [
                        [KB.tovar17], [KB.tovar18], [KB.tovar19], [KB.tovar20],[KB.back]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            break
        case KB.tovar1:
            bot.sendMessage(msg.chat.id, "Вы выбрали KRIS-A29+BONUS'GreenDevil' 0.3gr.+0.5gr. - 1000p.СВАО ВДНХ МОСКВА, выберите способ оплаты:" , {
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
            bot.sendMessage(msg.chat.id, "Вы выбрали KRIS-A29+BONUS'GreenDevil' 0.5gr.+0.5gr. - 1200р.  СВАО ВДНХ МОСКВА, выберите способ оплаты:" , {
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
            bot.sendMessage(msg.chat.id, "Вы выбрали KRIS-A29+BONUS'GreenDevil' 1gr.+0.5gr. - 2400р.  СВАО ВДНХ МОСКВА, выберите способ оплаты:" , {
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
            bot.sendMessage(msg.chat.id, "Вы выбрали KRIS-A29+BONUS'GreenDevil' 3gr.+0.5gr. - 3400р.  СВАО ВДНХ МОСКВА, выберите способ оплаты:" , {
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
            bot.sendMessage(msg.chat.id, "Вы выбрали KRIS-A29+BONUS'GreenDevil' 0.3gr.+0.5gr. - 1000p. ЦАО МОСКВА, выберите способ оплаты:", {
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
            bot.sendMessage(msg.chat.id, "Вы выбрали KRIS-A29+BONUS'GreenDevil' 0.5gr.+0.5gr. - 1200p. ЦАО МОСКВА, выберите способ оплаты:", {
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
            bot.sendMessage(msg.chat.id, "Вы выбрали 'GreenDevil' 3gr. - 1100р. ЦАО МОСКВА, выберите способ оплаты:", {
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
            bot.sendMessage(msg.chat.id, "Вы выбрали 'GreenDevil' 5gr. - 1500р. ЦАО МОСКВА, выберите способ оплаты:", {
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
            bot.sendMessage(msg.chat.id, "Вы выбрали KRIS-A29+BONUS'GreenDevil' 0.3+0.5 - 1000p. ЧЕРТАНОВО МОСКВА, выберите способ оплаты:", {
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
            bot.sendMessage(msg.chat.id, "Вы выбрали KRIS-A29+BONUS'GreenDevil' 0.5gr.+0.5gr. - 1200р. ЧЕРТАНОВО МОСКВА, выберите способ оплаты:", {
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
            bot.sendMessage(msg.chat.id, "Вы выбрали 'GreenDevil' 1gr. - 600р. ЧЕРТАНОВО МОСКВА, выберите способ оплаты:", {
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
            bot.sendMessage(msg.chat.id, "Вы выбрали 'GreenDevil' 3gr. - 1100р. МОСКВА, выберите способ оплаты:", {
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
            bot.sendMessage(msg.chat.id, "Вы выбрали KRIS-A29+BONUS'GreenDevil' 1gr.+0.5gr. - 2400р. БУТОВО МОСКВА, выберите способ оплаты:", {
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
            bot.sendMessage(msg.chat.id, "Вы выбрали 'GreenDevil' 1gr. - 600р. БУТОВО МОСКВА, выберите способ оплаты:", {
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
            bot.sendMessage(msg.chat.id, "Вы выбрали 'GreenDevil' 3gr. - 1100р. БУТОВО МОСКВА, выберите способ оплаты:", {
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
            bot.sendMessage(msg.chat.id, "Вы выбрали 'GreenDevil' 5gr. - 1500р. БУТОВО МОСКВА, выберите способ оплаты:", {
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
            bot.sendMessage(msg.chat.id, "Вы выбрали KRIS-A29+BONUS'GreenDevil' 0.3gr.+0.5gr. - 1000p. ЛЮБЕРЦЫ МОСКВА выберите способ оплаты:", {
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
            bot.sendMessage(msg.chat.id, "Вы выбрали KRIS-A29+BONUS'GreenDevil' 1gr.+0.5gr. - 2400р. ЛЮБЕРЦЫ МОСКВА, выберите способ оплаты:", {
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
            bot.sendMessage(msg.chat.id, "Вы выбрали 'GreenDevil' 1gr. - 600р. ЛЮБЕРЦЫ МОСКВА, выберите способ оплаты:", {
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
            bot.sendMessage(msg.chat.id, "Вы выбрали 'GreenDevil' 5gr. - 1500р. ЛЮБЕРЦЫ МОСКВА, выберите способ оплаты:", {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретаете A29+BONUS\'GreenDevil\' 0.3gr.+0.5gr. СВАО ВДНХ МОСКВА, для получения заказа оплатите 1000 на кошелек *btc', {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретаете KRIS-A29+BONUS\'GreenDevil\' 0.5gr.+0.5gr. СВАО ВДНХ МОСКВА, для получения заказа оплатите 1000 на кошелек *btc', {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретаете KRIS-A29+BONUS\'GreenDevil\' 1gr.+0.5gr. СВАО ВДНХ МОСКВА, для получения заказа оплатите 1000 на кошелек *btc', {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретаете KRIS-A29+BONUS\'GreenDevil\' 3gr.+0.5gr. СВАО ВДНХ МОСКВА, для получения заказа оплатите 1000 на кошелек *btc', {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретаете KRIS-A29+BONUS\'GreenDevil\' 0.3gr.+0.5gr. 1000p. ЦАО МОСКВА для получения заказа оплатите 1000 на кошелек *btc', {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретаете KRIS-A29+BONUS\'GreenDevil\' 0.5gr.+0.5gr. ЦАО МОСКВА, для получения заказа оплатите 1000 на кошелек *btc', {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретаете \'GreenDevil\' 3gr. ЦАО МОСКВА, для получения заказа оплатите 1000 на кошелек *btc', {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретаете \'GreenDevil\' 5gr. ЦАО МОСКВА, для получения заказа оплатите 1000 на кошелек *btc', {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретаете KRIS-A29+BONUS\'GreenDevil\' 0.3gr.+0.5gr. ЧЕРТАНОВО МОСКВА, для получения заказа оплатите 1000 на кошелек *btc', {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретаете RIS-A29+BONUS\'GreenDevil\' 0.5gr.+0.5gr. ЧЕРТАНОВО ЧЕРТАНОВО МОСКВА, для получения заказа оплатите 1000 на кошелек *btc', {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретаете \'GreenDevil\' 1gr. ЧЕРТАНОВО МОСКВА, для получения заказа оплатите 1000 на кошелек *btc', {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретаете \'GreenDevil\' 3gr. ЧЕРТАНОВО МОСКВА, для получения заказа оплатите 1000 на кошелек *btc', {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретаете KRIS-A29+BONUS\'GreenDevil\' 1gr.+0.5gr. БУТОВО МОСКВА, для получения заказа оплатите 1000 на кошелек *btc', {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретаете \'GreenDevil\' 1gr. БУТОВО МОСКВА, для получения заказа оплатите 1000 на кошелек *btc', {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретаете \'GreenDevil\' 3gr. БУТОВО МОСКВА, для получения заказа оплатите 1000 на кошелек *btc', {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретаете \'GreenDevil\' 5gr. БУТОВО МОСКВА, для получения заказа оплатите 1000 на кошелек *btc', {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретаете KRIS-A29+BONUS\'GreenDevil\' 0.3gr.+0.5gr. ЛЮБЕРЦЫ МОСКВА, для получения заказа оплатите 1000 на кошелек *btc', {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретаете KRIS-A29+BONUS\'GreenDevil\' 1gr.+0.5gr. ЛЮБЕРЦЫ МОСКВА, для получения заказа оплатите 1000 на кошелек *btc', {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретаете \'GreenDevil\' 1gr. ЛЮБЕРЦЫ МОСКВА, для получения заказа оплатите 1000 на кошелек *btc', {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретаете \'GreenDevil\' 5gr. ЛЮБЕРЦЫ МОСКВА, для получения заказа оплатите 1000 на кошелек *btc', {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретеаете KRIS-A29+BONUS\'GreenDevil\' 0.3gr.+0.5gr. - 1000p.СВАО ВДНХ МОСКВА, для получения заказа оплатите 1000 НА кошелек *QIWI* C КОММЕНТАРИЕМ: ' + msg.from.username, {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретеаете A29+BONUS\'GreenDevil\' 0.5gr.+0.5gr. - 1200р.  СВАО ВДНХ МОСКВА, для получения заказа оплатите 1000 НА кошелек *QIWI* C КОММЕНТАРИЕМ: ' + msg.from.username, {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретеаете KRIS-A29+BONUS\'GreenDevil\' 1gr.+0.5gr. - 2400р.  СВАО ВДНХ МОСКВА, для получения заказа оплатите 1000 НА кошелек *QIWI* C КОММЕНТАРИЕМ: ' + msg.from.username, {
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
        case KB.qiwi3:
            bot.sendMessage(msg.chat.id, 'Вы приобретеаете KRIS-A29+BONUS\'GreenDevil\' 3gr.+0.5gr, для получения заказа оплатите 1000 НА кошелек *QIWI* C КОММЕНТАРИЕМ: ' + msg.from.username, {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретеаете KRIS-A29+BONUS\'GreenDevil\' 0.3gr.+0.5gr, для получения заказа оплатите 1000 НА кошелек *QIWI* C КОММЕНТАРИЕМ: ' + msg.from.username, {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретеаете KRIS-A29+BONUS\'GreenDevil\' 0.5gr.+0.5gr. - 1200p. ЦАО МОСКВА, для получения заказа оплатите 1000 НА кошелек *QIWI* C КОММЕНТАРИЕМ: ' + msg.from.username, {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретеаете \'GreenDevil\' 3gr. - 1100р. ЦАО МОСКВА, для получения заказа оплатите 1000 НА кошелек *QIWI* C КОММЕНТАРИЕМ: ' + msg.from.username, {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретеаете \'GreenDevil\' 5gr. - 1500р. ЦАО МОСКВА, для получения заказа оплатите 1000 НА кошелек *QIWI* C КОММЕНТАРИЕМ: ' + msg.from.username, {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретеаете KRIS-A29+BONUS\'GreenDevil\' 0.3+0.5 - 1000p. ЧЕРТАНОВО МОСКВА, для получения заказа оплатите 1000 НА кошелек *QIWI* C КОММЕНТАРИЕМ: ' + msg.from.username, {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретеаете KRIS-A29+BONUS\'GreenDevil\' 0.5gr.+0.5gr. - 1200р. ЧЕРТАНОВО МОСКВА, для получения заказа оплатите 1000 НА кошелек *QIWI* C КОММЕНТАРИЕМ: ' + msg.from.username, {
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
            bot.sendMessage(msg.chat.id, 'Вы приобретеаете \'GreenDevil\' 1gr., для получения заказа оплатите 1000 НА кошелек *QIWI* C КОММЕНТАРИЕМ: ' + msg.from.username, {
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
        case KB.qiwi12:
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
        case KB.qiwi13:
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
        case KB.qiwi14:
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
        case KB.qiwi15:
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
        case KB.qiwi16:
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
        case KB.qiwi17:
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
        case KB.qiwi18:
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
        case KB.qiwi19:
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
