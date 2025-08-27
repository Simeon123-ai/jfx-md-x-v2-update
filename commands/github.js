const moment = require('moment-timezone');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

async function githubCommand(sock, chatId, message) {
  try {
    const res = await fetch('https://api.github.com/repos/Jeffreyfx1/jfx-md-x-v2-update');
    if (!res.ok) throw new Error('Error fetching repository data');
    const json = await res.json();

    let txt = `*🏴‍☠ ᴊꜰx ᴍᴅ-xᴠ2 🏴‍☠*\n\n`;
    txt += `⪩⪨ *ɴᴀᴍᴇ* : ${json.name}\n`;
    txt += `⪩⪨ *ᴡᴀᴛᴄʜᴇʀꜱ* : 4k\n`;
    txt += `⪩⪨ *ꜱɪᴢᴇ* : ${(json.size / 1024).toFixed(2)} MB\n`;
    txt += `⪩⪨ *ʟᴀꜱᴛ ᴜᴘᴅᴀᴛᴇᴅ* : ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}\n`;
    txt += `⪩⪨ *ᴜʀʟ* : ${json.html_url}\n`;
    txt += `⪩⪨ *ꜰᴏʀᴋꜱ* : 700k\n`;
    txt += `⪩⪨ *ꜱᴛᴀʀꜱ* : 50k\n\n`;
    txt += `> 💥*ᴊꜰx ᴍᴅ-xᴠ2*`;

    // 🔄 Load all images in assets folder
    const assetsDir = path.join(__dirname, '../assets');
    const files = fs.readdirSync(assetsDir).filter(f => /\.(jpg|jpeg|png)$/i.test(f));

    if (files.length > 0) {
      // pick a random image
      const randomImage = files[Math.floor(Math.random() * files.length)];
      const imgPath = path.join(assetsDir, randomImage);
      const imgBuffer = fs.readFileSync(imgPath);

      await sock.sendMessage(chatId, { image: imgBuffer, caption: txt }, { quoted: message });
    } else {
      // fallback if no image found
      await sock.sendMessage(chatId, { text: txt }, { quoted: message });
    }

    // 🔊 Send audio response
    const audioBuffer = fs.readFileSync('./audio/repo.mp3');
    await sock.sendMessage(chatId, {
      audio: audioBuffer,
      mimetype: 'audio/mpeg',
      ptt: true
    }, { quoted: message });

  } catch (error) {
    console.error('Error in githubCommand:', error);
    await sock.sendMessage(chatId, { text: '❌ Error fetching repository information.' }, { quoted: message });
  }
}

module.exports = githubCommand;
