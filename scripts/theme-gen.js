const fs = require('fs')
const path = require('path')
const [file_name] = process.argv.slice(2)

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

try {
  theme = require(`../mock/${file_name ?? 'default'}-theme.json`)
} catch (error) {
  console.log('❌ Couldn\'t get themes.\n.\n.\n👀 new default themes...')

  theme = require(`../mock/theme.json`)
}

const new_theme = {
  name: theme.name,
  typeStyles: {},
  radii: {},
  shadows: {},
}

console.log(`〰️ Processing Toolabs JSON Theme...`)


Object.keys(theme).forEach((t_key) => {
  new_theme[t_key] = {}

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
            new_theme.typeStyles[typeStyleLabel] = {
              ...new_theme.typeStyles[typeStyleLabel],
              [style]: typeStyle[style],
            }
          }
        })
      })
      break
    case 'BorderRadiuses': {
      theme[t_key].forEach((prop) => {
        new_theme.radii[prop.name] = prop.value
      })
      break
    }
    case 'easeCurves': {
      theme[t_key].forEach((prop) => {
        new_theme[t_key][prop.name] = prop.curve
      })
      break
    }
    case 'durations':
      theme[t_key].forEach((prop) => {
        new_theme[t_key][prop.name] = prop.duration
      })
      break
    case 'fonts':
      theme[t_key].forEach((prop) => {
        new_theme[t_key][prop.name] = prop.fontFamily
      })
      break
    case 'Shadows':
      theme[t_key].forEach((prop) => {
        new_theme.shadows[prop.name] = prop.value
      })
      break
    case 'colors':
    case 'fonts':
    case 'space':
      theme[t_key].forEach((prop) => {
        new_theme[t_key][prop.name] = prop.value
      })
      break
    default:
      break
  }
})

console.log(`〰️ Processing Toolabs JSON Theme...`)

Object.keys(new_theme).forEach((key) => {
  if (Object.keys(new_theme[key]).length === 0 && key !== 'name')
    delete new_theme[key]
})

console.log(`✔️  Toolabs JSON Theme Digested successfully`)
console.log(`〰️ Writting Toolabs JSON Theme for stitches...`)

fs.writeFile(
  `./app/styles/${file_name ? `${file_name}-` : ''}theme.ts`,
  `export const ${file_name ? `${file_name}_` : ''}theme = ${JSON.stringify(new_theme, null, 2)}`,
  (err) => {
    if (err) {
      console.error(err)
      throw new Error(
        '❌ There was problem trying to creting the file 💔. Check if values are valid.',
      )
    }

    console.log(
      `✔️  Stitches file for ${file_name} theme created successfully 🎉`,
    )
  },
)

// TODO: fs.writeFile(`./app/types/${file_name ? `${file_name}_` : ''}-theme.ts`)...
