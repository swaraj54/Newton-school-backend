const fs = require('fs');

const content = "Hello again";

fs.writeFile("helloAgain.txt", content, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Created a file ...")
    }
})

// const content = "Hello world";
// fs.writeFile('createdFileByUsingWriteFile.txt', content, (error) => {
//     if(error){
//         console.log(error)
//     } else {
//         console.log("Created file.")
//     }
// })