const imagemin = require('imagemin')
const webp = require('imagemin-webp')
const inDir = 'resource/materials/toWebps/*.{png,jpg,jpeg,gif}'
const outDir = 'resource/materials/images/'

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
  dataArr.length === 0 ? console.log('No Convert to Webps') : console.log('Converted to Webps List Below,\n', dataArr)
  //-> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})()
