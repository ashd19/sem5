const fs = require('fs/promises')


async function fileOps(){
try{
 // 1. create a new file via fs
 await fs.writeFile('first.txt','This is the file created via fs module.')
 console.log("File created!")

 // 2. read data from this file and json file 
 const filedata = await fs.readFile('first.txt','utf-8');
 console.log("Data from file first.txt :\n",filedata) 
 
 const jsonData = await fs.readFile('data.json','utf-8');
 console.log("Data from data.json : \n",jsonData)
 
 // 3. Overwrite data 
 const overwrittendata = await fs.writeFile('first.txt','This is the new content which has been overwritten !!!!!.')
 console.log("Overwritten data in file :\n ",overwrittendata)

 
 // 4. Rename the file
    await fs.rename('first.txt', 'renamed-example.txt');
    console.log('File renamed.');

    // 5. Create a new file to delete
    await fs.writeFile('file-to-delete.txt', 'This file will be deleted soon.');
    console.log('File to delete created.');

    // 6. Delete the new file
    await fs.unlink('file-to-delete.txt');
    console.log('File deleted.');
}
catch(e){
    console.log("Error:\n",e)
}
}

fileOps();
