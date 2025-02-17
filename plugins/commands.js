const config = require('../config')
const { cmd, commands } = require('../command');

cmd({
    pattern: "scammer",
    alias: ["chutiye","bctatty"],
    desc: "menu the bot",
    category: "menu",
    react: "⚡",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━━〔 *Scammers's Numbers* 〕━━━┈⊷
┃★╭─────────────·๏
┃★│ BC tatta 1🖕🏻: https://api.whatsapp.com/send?phone=923094230218&text=hi_bc_scammer🖕🏻
┃★│ BC tatta 2🖕🏻: https://api.whatsapp.com/send?phone=447715929714&text=hi_bc_scammer🖕🏻
┃★│ BC tatta 3🖕🏻: https://api.whatsapp.com/send?phone=923092342318&text=hi_bc_scammer🖕🏻
┃★│ BC tatta 4🖕🏻: https://api.whatsapp.com/send?phone=923304093758&text=hi_bc_scammer🖕🏻
┃★│ BC tatta 5🖕🏻: https://api.whatsapp.com/send?phone=923202231275&text=hi_bc_scammer🖕🏻
┃★│ BC tatta 6🖕🏻: https://api.whatsapp.com/send?phone=923134885399&text=hi_bc_scammer🖕🏻
┃★│ BC gashti🖕🏻: https://api.whatsapp.com/send?phone=923299539369&text=hi_bc_scammer🖕🏻
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷

╭━━〔 *Contact to the owner* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• If you have more scammers's number so contact me. I will add in my bot.
┃◈┃• Type .owner to get my number
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/YdSKMhv/6767.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363333032882285@newsletter',
                        newsletterName: '𝐒𝐇𝐄𝐈𝐊𝐇-𝐀𝐋𝐈-𝐌𝐃',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/sigma.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});