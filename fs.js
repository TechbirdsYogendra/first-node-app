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

// Reading from a file with error handling
try {
    const fileContent = fs.readFileSync(fileName, 'utf8');
    console.log(fileContent); 
} catch (error) {
   console.log(`Error while reading file ${error}`); 
}


