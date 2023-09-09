import { BOT_TOKEN } from "@/env"

export const sendPoll = async (chatID: number, question: string) => {
  const params = {
    chat_id: chatID,
    question: '?',
    options: ['Да', 'Нет'],
    is_anonymous: false,
    allows_multiple_answers: false,
  }

  const paramsString = Object.entries(params).map(([key, value]) => {
    if(Array.isArray(value)) return `${key}=${JSON.stringify(value)}`
    return `${key}=${String(value)}`
  }).join('&')

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendPoll?${paramsString}`

  const res = await fetch(url)
  const data = await res.json()
  return data
}