const sharp = require("sharp");
const fs = require("fs/promises");
const path = require("path");

(async () => {
  try {
    await fs.rm("output", { recursive: true, force: true });
    await fs.mkdir("output");

    const files = await fs.readdir("input");
    for (const file of files) {
      const inputPath = `input/${file}`;
      const outputFileName = `${file.replace(/\.png/, "")}.webp`;
      const outputPath = `output/${outputFileName}`;

      // 使用 sharp 處理圖像並輸出到 output 資料夾中
      await sharp(inputPath).toFile(outputPath);

      console.log(`${file} generated.`);
    }
  } catch (err) {
    console.error(err);
  }
})();
