let handler = async(m, { conn }) => {
conn.sendContact(m.chat, 088227758096, 088227758096, m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler
