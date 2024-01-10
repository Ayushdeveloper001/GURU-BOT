let handler = async (m, { conn, usedprefix }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/misc/blur', {
    avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://raw.githubusercontent.com/Ayushdeveloper001/KawaiiMedia/main/95b119d40310f68a57927b564c8bbd46.jpg'),
    }), 'hornycard.png', '*[ ✔ ]*', m)
    }
    handler.help = ['blur','difuminar2']
    handler.tags = ['maker']
    handler.command = /^(blur|difuminar2)$/i
    export default handler
