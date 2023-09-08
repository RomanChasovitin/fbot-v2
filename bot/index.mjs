import { Telegraf } from "telegraf";
import { config as configDotenv } from 'dotenv'

configDotenv()

const BOT_TOKEN = process.env.BOT_TOKEN ?? ''
const bot = new Telegraf(BOT_TOKEN);

bot.on('message', ctx => {
  ctx.reply('Hello! Fbot V2 is working!')
})

bot.launch()