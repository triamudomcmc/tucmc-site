import { NextApiRequest, NextApiResponse } from "next"
import fs from "fs"
import JSZip from "jszip"
import path from "path"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { stickerPath } = req.query

  res.setHeader("Content-Type", "application/zip")
  res.setHeader("Content-Disposition", "attachment; filename=TUCMC-stickers.zip")

  const basePath = `${process.cwd()}/public/assets/images/work/stickers/${stickerPath}`

  const zip = new JSZip()
  const files = await fs.promises.readdir(basePath)

  for (const file of files) {
    const filePath = path.join(basePath, file)
    const content = await fs.promises.readFile(filePath)
    zip.file(file, content)
  }

  const zipBuffer = await zip.generateAsync({ type: "nodebuffer" })
  res.end(zipBuffer)
}
