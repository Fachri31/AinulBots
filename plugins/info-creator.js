let handler = async(m, { conn }) => {
conn.sendContact(m.chat, 6288227758096, 6288227758096, m)
}
handler.help = ['6288227758096', 'FachriOFC']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler
