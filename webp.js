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
    ? console.log(`😎 ${logFontBold}${logFontColorMagenta}No Convert to Webps.${logFontReset}`)
    : console.log(`👍 ${logFontBold}${logFontColorCyan}Converted to Webps List Below,${logFontReset}\n`, dataArr)
  //-> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})()
