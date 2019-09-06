const TelegramBot = require('node-telegram-bot-api');
const request = require("request");
// replace the value below with the Telegram token you receive from @BotFather
const token = '988296646:AAEt3dX5t5Sodf8z2sKm2-MNciJJg2X0D-A';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/menu (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, "Что вас интересует?", {
    reply_markup: {
      inline_keyboard: [
          [
            {
              text: "Продукты"
              callback_data: "Продукты"
            }, {
              text: "Бизнес"
              callback_data: "Бизнес"
            }, {
              text: "Обратная связь"
              callback_data: "Обратная связь"
            }
          ]
      ]
}
};
});
