const fs = require('fs');
const puppeteer = require('puppeteer')
 
async function main() {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    console.log(`PDF ${process.env.SLIDE_NAME}.html loading`);
    await page.goto(`http://172.22.0.1:9001/${process.env.SLIDE_NAME}.html?view=print`, {waitUntil: 'networkidle0'});
    const pdf = await page.pdf({ format: 'A4' });

    fs.writeFile(`/home/pptruser/pdf/${process.env.SLIDE_NAME}.pdf`, pdf, err => {
        if (err) throw err;
        console.log(`PDF ${process.env.SLIDE_NAME}.pdf saved!`);
    });
    await browser.close();
}
main();
