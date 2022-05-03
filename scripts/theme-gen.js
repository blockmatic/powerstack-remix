const fs = require('fs')
const path = require('path')
const Spinner = require('cli-spinner').Spinner
const [file_name] = process.argv.slice(2)
const spinner_string = '⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏'

const themes = {}

// NOTE: Mck data simulating an array of themes to read (array TBD)
// NOTE: Where we fetch our data for our themes
const dir = path.join(__dirname, '..', 'mock')

// NOTE: Reading how many themes do we have
fs.readdirSync(dir).forEach(json => {
  console.log('json', json)
  const theme_key = json
    .replace(/(-theme\.json|\.json)/, '')
    .replace(/theme/, 'default')
  
  themes[theme_key] = require(path.join(dir, json));
})

let theme = null

const themes_spinner = setSpinner(' %s 👀 for new default themes...')
themes_spinner.setSpinnerString(spinner_string).setSpinnerDelay(80)

try {
  theme = require(`../mock/${file_name ?? 'default'}-theme.json`)
} catch (error) {
  console.log(`\n❌ Couldn\'t get themes...`)
  themes_spinner.start()
  
  theme = require(`../mock/theme.json`)
} finally {
  themes_spinner.stop()
  console.log(`\n✔️  Stitches themes, found default`)
}

const toolabs_theme_spinner = setSpinner(` %s 〰️ Processing Toolabs JSON Theme...`)
toolabs_theme_spinner.setSpinnerString(spinner_string).setSpinnerDelay(80)
toolabs_theme_spinner.start()

const new_theme = {
  name: theme.name,
  theme: {
    typeStyles: {},
    radii: {},
    shadows: {},
  }
}


Object.keys(theme).forEach((t_key) => {
  new_theme.theme[t_key] = {}

  switch (t_key) {
    case 'name':
      new_theme[t_key] = theme[t_key]
      break
    case 'typeStyles':
      let typeStyleLabel = ''

      theme[t_key].forEach((typeStyle) => {
        Object.keys(typeStyle).forEach((style) => {
          if (style === 'name') {
            typeStyleLabel = typeStyle[style]
          } else {
            new_theme.theme.typeStyles[typeStyleLabel] = {
              ...new_theme.theme.typeStyles[typeStyleLabel],
              [style]: typeStyle[style],
            }
          }
        })
      })
      break
    case 'BorderRadiuses': {
      theme[t_key].forEach((prop) => {
        new_theme.theme.radii[prop.name] = prop.value
      })
      break
    }
    case 'easeCurves': {
      theme[t_key].forEach((prop) => {
        new_theme.theme[t_key][prop.name] = prop.curve
      })
      break
    }
    case 'durations':
      theme[t_key].forEach((prop) => {
        new_theme.theme[t_key][prop.name] = prop.duration
      })
      break
    case 'fonts':
      theme[t_key].forEach((prop) => {
        new_theme.theme[t_key][prop.name] = prop.fontFamily
      })
      break
    case 'Shadows':
      theme[t_key].forEach((prop) => {
        new_theme.theme.shadows[prop.name] = prop.value
      })
      break
    case 'colors':
    case 'fonts':
    case 'space':
      theme[t_key].forEach((prop) => {
        new_theme.theme[t_key][prop.name] = prop.value
      })
      break
    default:
      break
  }
})

Object.keys(new_theme.theme).forEach((key) => {
  if (Object.keys(new_theme.theme[key]).length === 0)
    delete new_theme.theme[key]
})

toolabs_theme_spinner.stop()
console.log(`\n✔️  Toolabs JSON Theme Digested successfully`)
const writing_theme_spinner = setSpinner(` %s 〰️ Writting Toolabs JSON Theme for stitches...`)
writing_theme_spinner.setSpinnerString(spinner_string).setSpinnerDelay(80)
writing_theme_spinner.start()

fs.writeFile(
  `./app/styles/${file_name ? `${file_name}-` : ''}theme.ts`,
  `export const ${file_name ? `${file_name}_` : ''}theme = ${JSON.stringify(new_theme, null, 2)}`,
  (err) => {
    if (err) {
      console.error(err)
      writing_theme_spinner.stop()
      throw new Error(
        '❌ There was problem trying to creting the file 💔. Check if values are valid.',
      )
    }

    writing_theme_spinner.stop()
    console.log(
      `\n✔️  Stitches file for ${file_name} theme created successfully 🎉`,
    )    
  },
)

// TODO: fs.writeFile(`./app/types/${file_name ? `${file_name}_` : ''}-theme.ts`)...

function setSpinner(message) {
  return new Spinner(message)
}
