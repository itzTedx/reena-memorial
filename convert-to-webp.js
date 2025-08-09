const fs = require('node:fs')
const path = require('node:path')
const sharp = require('sharp')

const inputDir = path.join(__dirname, 'public', 'images')
const outputDir = path.join(__dirname, 'public', 'images')

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// Supported image formats
const supportedFormats = ['.jpg', '.jpeg', '.png', '.tiff', '.gif']

async function convertToWebP() {
  try {
    const files = fs.readdirSync(inputDir)

    // Convert all images in parallel to avoid await in loop
    const conversions = files.map(async (file) => {
      const filePath = path.join(inputDir, file)
      const fileExt = path.extname(file).toLowerCase()

      // Skip if not an image file
      if (!supportedFormats.includes(fileExt)) {
        return null
      }

      const fileNameWithoutExt = path.parse(file).name
      const outputPath = path.join(outputDir, `${fileNameWithoutExt}.webp`)

      // biome-ignore lint/suspicious/noConsole: i have to
      console.log(`Converting ${file} to WebP...`)

      await sharp(filePath).webp({ quality: 80 }).toFile(outputPath)

      // biome-ignore lint/suspicious/noConsole: i have to
      console.log(`✓ Converted ${file} -> ${fileNameWithoutExt}.webp`)

      return fileNameWithoutExt
    })

    await Promise.all(conversions)

    // biome-ignore lint/suspicious/noConsole: i have to
    console.log('\n🎉 All images converted successfully!')
    // biome-ignore lint/suspicious/noConsole: i have to
    console.log(`Converted images are saved in: ${outputDir}`)
  } catch (error) {
    // biome-ignore lint/suspicious/noConsole: i have to
    console.error('Error converting images:', error)
  }
}

convertToWebP()
