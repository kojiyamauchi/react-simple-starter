const logFontBold = '\x1b[1m'
const logFontColorCyan = '\u001b[36m'
const logFontColorRed = '\u001b[31m'
const logFontReset = '\x1b[0m'
const errorMessage = `🙄 ${logFontBold}${logFontColorRed}Forget to enter the name command? Check it again.${logFontReset}\nCommand: 🌞 ${logFontBold}${logFontColorCyan}yarn frontend:add:page [name]${logFontReset}`

const fs = require('fs')
const layoutsDir = `${process.cwd()}/resource/components/Layouts/`
const pickLayout = fs
  .readdirSync(layoutsDir, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name)

module.exports = {
  prompt: async ({ prompter, args }) => {
    const { name } = args
    if (!name) throw new Error(errorMessage)

    const questions = [
      {
        type: 'select',
        name: 'chooseLayout',
        message: 'Please choose layout component.',
        choices: pickLayout
      },
      {
        type: 'input',
        name: 'pageTitle',
        message: 'Please add page title.\n',
        validate: (answer) => answer !== ''
      },
      {
        type: 'input',
        name: 'pageDescription',
        message: 'Please add page description.\n',
        validate: (answer) => answer !== ''
      }
    ]
    const answers = await prompter.prompt(questions)
    answers.name = name

    return { ...answers }
  }
}
