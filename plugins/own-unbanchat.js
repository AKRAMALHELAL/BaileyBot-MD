var handler = async (m) => {

global.db.data.chats[m.chat].isBanned = false
conn.reply(m.chat, '✅ *Este chat fue desbaneado con éxito, ahora puedes usar a BaileyBot-MD.*', m, fake, )

}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat$/i

handler.admin = true

export default handler
