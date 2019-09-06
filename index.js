const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.988296646:AAEt3dX5t5Sodf8z2sKm2-MNciJJg2X0D-A)
bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply(''))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()
