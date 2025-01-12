import fs from 'fs';
const fileName = 'messages.txt';
const allFiles = fs.readdirSync('./')
console.log(allFiles);

// Writing to a file
fs.writeFileSync(fileName, 'Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Rama Hare Rama Rama Rama Hare Hare\n');

// Appending to a file
fs.appendFileSync(fileName, 'Jai Sri Ram\n');
fs.appendFileSync(fileName, 'Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Rama Hare Rama Rama Rama Hare Hare\n');

fs.appendFileSync(fileName, 'Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Rama Hare Rama Rama Rama Hare Hare\n');

fs.appendFileSync(fileName, 'Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Rama Hare Rama Rama Rama Hare Hare\n');

// Deleting a file
// fs.unlinkSync(fileName);

const dirName = 'exampleDir';
const newFileNameInsideDirectory = `${dirName}/newfile.txt`;

// Creating a directory
try {
    fs.mkdirSync(dirName); 
    console.log('Directory created successfully');
} catch (error) {
    if (error.code !== 'EEXIST') {
        console.log(`Error while creating directory: ${error}`);
    } else {
        console.log('Directory already exists');
    }
}

// Creating a file inside the directory
try {
    fs.writeFileSync(newFileNameInsideDirectory, 'Jai Radha Madhav Jai Kunj Bihari\n');
    // Appending to a file inside the directory
    fs.appendFileSync(newFileNameInsideDirectory, 'Jai Gopijan Vallabh Jai Girivar Dhari\n');
    fs.appendFileSync(newFileNameInsideDirectory, 'Yashoda Nandan Braj Jan Ranjan\nYamuna Teer Van Chari\nHare Krishna Hare Krishna Krishna Krishna Hare Hare\nHare Rama Hare Rama Rama Rama Hare Hare\n');
} catch (error) {
    console.log(`Error while creating file: ${error}`);
}

// Reading from a file with error handling
try {
    const fileContent = fs.readFileSync(newFileNameInsideDirectory, 'utf8');
    console.log(fileContent); 
} catch (error) {
   console.log(`Error while reading file ${error}`); 
}


