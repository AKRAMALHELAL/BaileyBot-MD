let foto = imagen4
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let multi = `MI creador`
await conn.sendButton(m.chat, multi, `🌼 ¡Hello! ` + nombre, foto, [
['☄️ Menu Completo', '!allmenu'],
['💚 Script', '!sc'],
['⌨️ Creador', '#owner'],
['🛑 Hola Bot', '!bot Hey Wue Mas']], m, fake)}
handler.customPrefix = /axx|Axx|ax|Ax/i;
handler.command = new Regxp;
export default handler;
