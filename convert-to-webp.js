import sharp from 'sharp'

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const inputDir = path.join(__dirname, 'public', 'images', 'gallery')
const outputDir = path.join(__dirname, 'public', 'images', 'gallery')

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

      console.log(`Converting ${file} to WebP with 60% size reduction...`)

      // Get original image metadata to calculate new dimensions
      const metadata = await sharp(filePath).metadata()
      const newWidth = Math.round(metadata.width * 0.4)
      const newHeight = Math.round(metadata.height * 0.4)

      await sharp(filePath)
        .resize(newWidth, newHeight)
        .webp({ quality: 80 })
        .toFile(outputPath)

      console.log(
        `✓ Converted ${file} -> ${fileNameWithoutExt}.webp (${metadata.width}x${metadata.height} -> ${newWidth}x${newHeight})`
      )

      return fileNameWithoutExt
    })

    await Promise.all(conversions)

    console.log('\n🎉 All images converted successfully!')

    console.log(`Converted images are saved in: ${outputDir}`)
  } catch (error) {
    console.error('Error converting images:', error)
  }
}

convertToWebP()
