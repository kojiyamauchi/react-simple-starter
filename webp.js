/*
  The latest version of imagemin is now ESM.
  If add '"type": “module"' to package.json,
  Webpack dose not work. (node.js | __dirname is not available etc...)
  So fix the imagemin's version to 7.
*/
const imagemin = require('imagemin')
const webp = require('imagemin-webp')
const inDir = 'resource/materials/toWebps/*.{png,jpg,jpeg,gif}'
const outDir = 'resource/materials/images/'
const logFontBold = '\x1b[1m'
const logFontColorCyan = '\u001b[36m'
const logFontColorMagenta = '\u001b[35m'
const logFontReset = '\x1b[0m'

;(async () => {
  const dataObjArr = await imagemin([inDir], {
    destination: outDir,
    plugins: [
      webp({
        quality: 75
      })
    ]
  })

  const dataArr = dataObjArr.map((info) => info.destinationPath.replace(outDir, ''))
  dataArr.length === 0
    ? console.info(`😎 ${logFontBold}${logFontColorMagenta}No Convert to Webps.${logFontReset}`)
    : console.info(`👍 ${logFontBold}${logFontColorCyan}Converted to Webps List Below,${logFontReset}\n`, dataArr)
  //-> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})()
