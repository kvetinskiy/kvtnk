const telegraf = require('988296646:AAEt3dX5t5Sodf8z2sKm2-MNciJJg2X0D-A');

const bot = new telegraf(process.env.988296646:AAEt3dX5t5Sodf8z2sKm2-MNciJJg2X0D-A)
bot.start((ctx) => ctx.reply('Здравствуйте! Мы занимаемся созданием и администрированием ботов телеграм. Для просмотра меню нажмите /help'))
bot.help((ctx) => ctx.reply('Для просмотра продуктов нажмите /shop . Для получения информации о нас нажмите /info . Для просмотра вводного видео нажмите /video . '))
bot.shop((ctx) => ctx.reply('Продукт 1 - 120. Продукт 2 - 982. Продукт 3 - ...'))
bot.info((ctx) => ctx.reply('Обратная связь: n.kvetinskiy@gmail.com ; +77052881122'))
bot.launch()
