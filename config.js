/* ⚙️ Credits to:
* AzamiJs
* Elrebelde21
* GataNina-Li */

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

 global.owner = [
['51929972576', '🍧𝙹𝚇𝚃𝚇𝙽¹⁷🍧', true],
['51955918117', 'Daniel', true],
['50558124470'],
['573106040746', '𝙴𝙳𝙴𝚁', true],
['51992004117', 'HJ', true],
['5214434703586'],
['50499698072'],
['5492215034412'],
['5217294888993'],
['5214437863111'],
['51971959440']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.suittag = ['5214531287294']
global.mods = []
global.prems = []

//Solo desarrolladores aprobados
global.isdev = [ /* ['5217294888993'], */ ['5214434703586'], ['5492266466080'], ['5492266613038'], ['573012482597'], ['5215610314499'], ['51935531943'], ['33760536110'], ['5492964650915'], ['50558124470']]

//Aqui encuentras los nombres del bot 
global.packname = ''
global.author = 'CuriosityBot'
global.wm = '© CuriosityBot-MD'
global.wm2 = 'Curiosity : Bot'
global.jxtxn = 'Jxtxn'
global.cb = 'CuriosityBot'


//Las Versiones Y Entre Otros
global.vs = 'V2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '¿Jxtxn ~ Axx?'
global.devnum = '+ʙʏ ᴀxx.ᴏғᴄ'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})