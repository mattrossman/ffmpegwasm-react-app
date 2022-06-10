const fse = require("fs-extra")

const srcDir = "node_modules/@ffmpeg/core/dist/"
const destDir = "public/ffmpeg/"

fse.copySync(srcDir, destDir)
