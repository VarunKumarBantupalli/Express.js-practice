import fs from "fs/promises"
console.log(fs);

let files =await  fs.readdir("C:\\Users\\VICTUS\\OneDrive\\Desktop\\web development storage\\express.js-5(files organisation)")
console.log(files);

for (const item of files) {
    console.log(item);
    
    
}

