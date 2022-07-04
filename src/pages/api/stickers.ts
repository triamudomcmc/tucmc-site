import { NextApiRequest, NextApiResponse } from "next"
import fs from "fs"
import JSZip from "jszip"
import path from "path"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Content-Type", "application/zip")
  res.setHeader("Content-Disposition", "attachment; filename=TUCMC-stickers.zip")

  const basePath = `${process.cwd()}/public/assets/images/work/stickers`

  const zip = new JSZip()
  const dirPaths = await fs.promises.readdir(basePath)

  for (const dirPath of dirPaths) {
    const files = await fs.promises.readdir(path.join(basePath, dirPath))

    for (const file of files) {
      const filePath = path.join(basePath, dirPath, file)
      const content = await fs.promises.readFile(filePath)
      zip.file(file, content)
    }
  }

  const zipBuffer = await zip.generateAsync({ type: "nodebuffer" })
  res.end(zipBuffer)
}
