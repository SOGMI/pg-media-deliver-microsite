const fs = require('fs');
const slugify = require('slugify');
let folder = './static/audio';

fs.readdir(folder, (err, files) => {
    files.forEach(file => {
        let filecontent = `---\ntitle: ${file.replace(".mp3", "")}\naudio: "/audio/${file}"\n---\n
        `
        let mdSlug = slugify(file.replace(".mp3", ".md").toLowerCase())
        console.log(mdSlug);
        console.log(filecontent)
        fs.writeFile(`./content/personal-prophecies/${mdSlug}`, filecontent, function(err){
            if (err) throw err;
            console.log(mdSlug + "written")
        })
    })
})