const sharp = require("sharp");
const fs = require("fs/promises");
const path = require("path");

(async () => {
  try {
    await fs.rm("output", { recursive: true, force: true });
    await fs.mkdir("output");

    const files = await fs.readdir("input");
    for (const file of files) {
      // 壓縮原始輸入圖像並複製到 output 資料夾
      const inputPath = `input/${file}`;
      const outputFileName = `${file.replace(/\./, "_thumb.")}`;
      const outputPath = `output/${outputFileName}`;
      await sharp(inputPath)
        .resize({ width: 800 })
        .toFile(outputPath);

      console.log(`${file} generated.`);
    }
  } catch (err) {
    console.error(err);
  }
})();
