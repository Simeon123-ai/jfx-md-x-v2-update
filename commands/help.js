const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
☜☩☞☜☩☞☜☩☞☜☩☞☜☩☞
⚠️ʙᴏᴛ ꜱʏꜱᴛᴇᴍ ᴏᴠᴇʀᴠɪᴇᴡ⚠️
☜☩☞☜☩☞☜☩☞☜☩☞☜☩☞
⟟ ɴᴀᴍᴇ:  ${settings.botName || 'ᴊꜰx ᴍᴅ-x'}
⟟ ᴠᴇʀꜱɪᴏɴ:  ${settings.version || '2.0.8'}
⟟ ᴄʀᴇᴀᴛᴏʀ:  ${settings.botOwner || 'ᴊᴇᴘʜᴛᴇʀ ᴛᴇᴄʜ'}
⟟ ʏᴏᴜᴛᴜʙᴇ:  ${global.ytch}
☜☩☞☜☩☞☜☩☞☜☩☞☜☩☞




*ꜰᴜɴᴄᴛɪᴏɴꜱ ᴍᴇɴᴜ:*

☜☩☞☜☩☞☜☩☞☜☩☞☜☩
⚡ ɢᴇɴᴇʀᴀʟ ᴄᴏᴍᴍᴀɴᴅꜱ ⚡
☜☩☞☜☩☞☜☩☞☜☩☞☜☩

☜☩☞ .ʜᴇʟᴘ ᴏʀ .ᴍᴇɴᴜ  
☜☩☞ .ᴘɪɴɢ  
☜☩☞ .ᴀʟɪᴠᴇ  
☜☩☞ .ᴛᴛꜱ <ᴛᴇxᴛ>  
☜☩☞ .ᴏᴡɴᴇʀ  
☜☩☞ .ᴊᴏᴋᴇ  
☜☩☞ .ǫᴜᴏᴛᴇ  
☜☩☞ .ꜰᴀᴄᴛ  
☜☩☞ .ᴡᴇᴀᴛʜᴇʀ <ᴄɪᴛʏ>  
☜☩☞ .ɴᴇᴡꜱ  
☜☩☞ .ᴀᴛᴛᴘ <ᴛᴇxᴛ>  
☜☩☞ .ʟʏʀɪᴄꜱ <ꜱᴏɴɢ ᴛɪᴛʟᴇ>  
☜☩☞ .8ʙᴀʟʟ <ǫᴜᴇꜱᴛɪᴏɴ>  
☜☩☞ .ɢʀᴏᴜᴘɪɴꜰᴏ  
☜☩☞ .ꜱᴛᴀꜰꜰ ᴏʀ .ᴀᴅᴍɪɴꜱ  
☜☩☞ .ᴠᴠ  
☜☩☞ .ᴛʀᴛ <ᴛᴇxᴛ> <ʟᴀɴɢ>  
☜☩☞ .ꜱꜱ <ʟɪɴᴋ>  
☜☩☞ .ᴊɪᴅ


☜☩☞☜☩☞☜☩☞☜☩☞☜☩
⚡ ᴀᴅᴍɪɴ ᴄᴏᴍᴍᴀɴᴅꜱ ⚡
☜☩☞☜☩☞☜☩☞☜☩☞☜☩

☜☩☞ .ʙᴀɴ @user  
☜☩☞ .ᴘʀᴏᴍᴏᴛᴇ @user  
☜☩☞ .ᴅᴇᴍᴏᴛᴇ @user  
☜☩☞ .ᴍᴜᴛᴇ <ᴍɪɴᴜᴛᴇꜱ>  
☜☩☞ .ᴜɴᴍᴜᴛᴇ  
☜☩☞ .ᴅᴇʟᴇᴛᴇ ᴏʀ .ᴅᴇʟ  
☜☩☞ .ᴋɪᴄᴋ @user  
☜☩☞ .ᴡᴀʀɴɪɴɢꜱ @user  
☜☩☞ .ᴡᴀʀɴ @user  
☜☩☞ .ᴀɴᴛɪʟɪɴᴋ  
☜☩☞ .ᴀɴᴛɪʙᴀᴅᴡᴏʀᴅ  
☜☩☞ .ᴄʟᴇᴀʀ  
☜☩☞ .ᴛᴀɢ <ᴍᴇꜱꜱᴀɢᴇ>  
☜☩☞ .ᴛᴀɢᴀʟʟ  
☜☩☞ .ᴄʜᴀᴛʙᴏᴛ  
☜☩☞ .ʀᴇꜱᴇᴛʟɪɴᴋ  
☜☩☞ .ᴡᴇʟᴄᴏᴍᴇ <ᴏɴ/ᴏꜰꜰ>  
☜☩☞ .ɢᴏᴏᴅʙʏᴇ <ᴏɴ/ᴏꜰꜰ> 

☜☩☞☜☩☞☜☩☞☜☩☞☜☩
⚡ *ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ* ⚡
☜☩☞☜☩☞☜☩☞☜☩☞☜☩

☜☩☞ .ᴍᴏᴅᴇ  
☜☩☞ .ᴀᴜᴛᴏꜱᴛᴀᴛᴜꜱ  
☜☩☞ .ᴄʟᴇᴀʀꜱᴇꜱꜱɪᴏɴ  
☜☩☞ .ᴀɴᴛɪᴅᴇʟᴇᴛᴇ  
☜☩☞ .ᴄʟᴇᴀʀᴛᴍᴘ  
☜☩☞ .ꜱᴇᴛᴘᴘ <ʀᴇᴘʟʏ ᴛᴏ ɪᴍᴀɢᴇ>  
☜☩☞ .ᴀᴜᴛᴏʀᴇᴀᴄᴛ  
☜☩☞ .ꜱᴇᴛʙᴏᴛʙɪᴏ <ʙɪᴏ ᴛᴇxᴛ>
☜☩☞ .ʙᴜɢ <ᴘᴇʀᴍᴀ ᴡᴛ>
☜☩☞ .ᴄᴀɴᴠᴀꜱʙᴜɢ <ᴀᴍᴏᴜɴᴛ>
☜☩☞ .ɢɪᴛᴄʟᴏɴᴇ
☜☩☞ .ɢᴇᴛᴘᴘ
☜☩☞ .ᴀᴜᴛᴏᴛʏᴘɪɴɢ
☜☩☞ .ᴀᴜᴛᴏʀᴇᴀᴅ


☜☩☞☜☩☞☜☩☞☜☩☞☜☩
⚡ɪᴍᴀɢᴇ/ꜱᴛɪᴄᴋᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ⚡
☜☩☞☜☩☞☜☩☞☜☩☞☜☩

☜☩☞ .ʙʟᴜʀ <ɪᴍᴀɢᴇ>  
☜☩☞ .ꜱɪᴍᴀɢᴇ   
☜☩☞ .ꜱᴛɪᴄᴋᴇʀ   
☜☩☞ .ᴛɢꜱᴛɪᴄᴋᴇʀ <ʟɪɴᴋ>  
☜☩☞ .ᴍᴇᴍᴇ  
☜☩☞ .ᴛᴀᴋᴇ <ᴘᴀᴄᴋɴᴀᴍᴇ>  
☜☩☞ .ᴇᴍᴏᴊɪᴍɪx 
☜☩☞ .ɪᴍɢ

☜☩☞☜☩☞☜☩☞☜☩☞☜☩
⚡ ɢᴀᴍᴇ ᴄᴏᴍᴍᴀɴᴅꜱ ⚡
☜☩☞☜☩☞☜☩☞☜☩☞☜☩

☜☩☞ .ᴛɪᴄᴛᴀᴄᴛᴏᴇ @ᴜꜱᴇʀ  
☜☩☞ .ʜᴀɴɢᴍᴀɴ  
☜☩☞ .ɢᴜᴇꜱꜱ <ʟᴇᴛᴛᴇʀ>  
☜☩☞ .ᴛʀɪᴠɪᴀ  
☜☩☞ .ᴀɴꜱᴡᴇʀ <ᴀɴꜱᴡᴇʀ>  
☜☩☞ .ᴛʀᴜᴛʜ  
☜☩☞ .ᴅᴀʀᴇ


☜☩☞☜☩☞☜☩☞☜☩☞☜
⚡ ᴀɪ ᴄᴏᴍᴍᴀɴᴅꜱ ⚡
☜☩☞☜☩☞☜☩☞☜☩☞

☜☩☞ .ɢᴘᴛ <ǫᴜᴇꜱᴛɪᴏɴ>
☜☩☞ .ɢᴇᴍɪɴɪ <ǫᴜᴇꜱᴛɪᴏɴ>
☜☩☞ .ɪᴍᴀɢɪɴᴇ <ᴘʀᴏᴍᴘᴛ>
☜☩☞ .ꜰʟᴜx <ᴘʀᴏᴍᴘᴛ>

☜☩☞☜☩☞☜☩☞☜☩☞
⚡ ꜰᴜɴ ᴄᴏᴍᴍᴀɴᴅꜱ ⚡
☜☩☞☜☩☞☜☩☞☜☩☞

☜☩☞ .ꜱᴛᴀʟᴋ <ᴛᴛᴜꜱᴇʀɴᴀᴍᴇ>
☜☩☞ .ᴄᴏᴍᴘʟɪᴍᴇɴᴛ @ᴜꜱᴇʀ
☜☩☞ .ɪɴꜱᴜʟᴛ @ᴜꜱᴇʀ
☜☩☞ .ꜰʟɪʀᴛ
☜☩☞ .ꜱʜᴀʏᴀʀɪ
☜☩☞ .ɢᴏᴏᴅɴɪɢʜᴛ
☜☩☞ .ʀᴏꜱᴇᴅᴀʏ
☜☩☞ .ᴄʜᴀʀᴀᴄᴛᴇʀ @ᴜꜱᴇʀ
☜☩☞ .ᴡᴀꜱᴛᴇᴅ @ᴜꜱᴇʀ
☜☩☞ .ꜱʜɪᴘ @ᴜꜱᴇʀ
☜☩☞ .ꜱɪᴍᴘ @ᴜꜱᴇʀ
☜☩☞ .ꜱᴛᴜᴘɪᴅ @ᴜꜱᴇʀ [ᴛᴇxᴛ]

☜☩☞☜☩☞☜☩☞☜☩☞
⚡ ᴛᴇxᴛᴍᴀᴋᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ ⚡
☜☩☞☜☩☞☜☩☞☜☩☞

☜☩☞ .ʟᴏɢᴏ <ᴛᴇxᴛ>
☜☩☞ .ᴍᴇᴛᴀʟʟɪᴄ <ᴛᴇxᴛ>
☜☩☞ .ɪᴄᴇ <ᴛᴇxᴛ>
☜☩☞ .ꜱɴᴏᴡ <ᴛᴇxᴛ>
☜☩☞ .ɪᴍᴘʀᴇꜱꜱɪᴠᴇ <ᴛᴇxᴛ>
☜☩☞ .ᴍᴀᴛʀɪx <ᴛᴇxᴛ>
☜☩☞ .ʟɪɢʜᴛ <ᴛᴇxᴛ>
☜☩☞ .ɴᴇᴏɴ <ᴛᴇxᴛ>
☜☩☞ .ᴅᴇᴠɪʟ <ᴛᴇxᴛ>
☜☩☞ .ᴘᴜʀᴘʟᴇ <ᴛᴇxᴛ>
☜☩☞ .ᴛʜᴜɴᴅᴇʀ <ᴛᴇxᴛ>
☜☩☞ .ʟᴇᴀᴠᴇꜱ <ᴛᴇxᴛ>
☜☩☞ .1917 <ᴛᴇxᴛ>
☜☩☞ .ᴀʀᴇɴᴀ <ᴛᴇxᴛ>
☜☩☞ .ʜᴀᴄᴋᴇʀ <ᴛᴇxᴛ>
☜☩☞ .ꜱᴀɴᴅ <ᴛᴇxᴛ>
☜☩☞ .ʙʟᴀᴄᴋᴘɪɴᴋb b<ᴛᴇxᴛ>
☜☩☞ .ɢʟɪᴛᴄʜ <ᴛᴇxᴛ>
☜☩☞ .ꜰɪʀᴇ <ᴛᴇxᴛ>

☜☩☞☜☩☞☜☩☞☜☩☞
⚡ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ⚡
☜☩☞☜☩☞☜☩☞☜☩☞

☜☩☞ .ᴘʟᴀʏ <ꜱᴏɴɢ_ɴᴀᴍᴇ>
☜☩☞ .ꜱᴏɴɢ <ꜱᴏɴɢ_ɴᴀᴍᴇ>
☜☩☞ .ɪɴꜱᴛᴀɢʀᴀᴍ <ʟɪɴᴋ>
☜☩☞ .ꜰᴀᴄᴇʙᴏᴏᴋ <ʟɪɴᴋ>
☜☩☞ .ᴛɪᴋᴛᴏᴋ <ʟɪɴᴋ>
☜☩☞ .ᴠɪᴅᴇᴏ <ꜱᴏɴɢ_ɴᴀᴍᴇ>
☜☩☞ .ʏᴛᴍᴘ4 <ʟɪɴᴋ>
☜☩☞ .ʏᴛᴍᴘ3 <ʟɪɴᴋ>
☜☩☞ .ʟʏʀɪᴄꜱ

☜☩☞☜☩☞☜☩☞☜☩☞
⚡ ɢɪᴛʜᴜʙ ᴄᴏᴍᴍᴀɴᴅꜱ ⚡
☜☩☞☜☩☞☜☩☞☜☩☞

☜☩☞ .ɢɪᴛ
☜☩☞ .ɢɪᴛʜᴜʙ
☜☩☞ .ꜱᴄ
☜☩☞ .ꜱᴄʀɪᴘᴛ
☜☩☞ .ʀᴇᴘᴏ


ᴊᴏɪɴ ᴏᴜʀ ᴄʜᴀɴɴᴇʟ ꜰᴏʀ ᴜᴘᴅᴀᴛᴇꜱ`;

     try {
    const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
    
    if (fs.existsSync(imagePath)) {
      const imageBuffer = fs.readFileSync(imagePath);

      await sock.sendMessage(chatId, {
        image: imageBuffer,
        caption: helpMessage,
        contextInfo: {
          forwardingScore: 1,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363420646690174@newsletter',
            newsletterName: 'ᴊꜰx ᴍᴅ-xᴠ2',
            serverMessageId: -1
          }
        }
      }, { quoted: message });
    } else {
      console.error('Bot image not found at:', imagePath);
      await sock.sendMessage(chatId, { 
        text: helpMessage,
        contextInfo: {
          forwardingScore: 1,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '1203634206466901748@newsletter',
            newsletterName: 'ᴊꜰx ᴍᴅ-xᴠ2',
            serverMessageId: -1
          } 
        }
      });
    }

    // ✅ Send the audio (menu.mp3)
    const audioPath = path.join(__dirname, '../audio/menu.mp3');
    if (fs.existsSync(audioPath)) {
      const audioBuffer = fs.readFileSync(audioPath);
      await sock.sendMessage(chatId, {
        audio: audioBuffer,
        mimetype: 'audio/mp4',
        ptt: true
      }, { quoted: message });
    } else {
      console.warn('Audio file not found at:', audioPath);
    }

  } catch (error) {
    console.error('Error in help command:', error);
    await sock.sendMessage(chatId, { text: helpMessage });
  }
}

module.exports = helpCommand;