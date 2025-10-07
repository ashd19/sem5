import {promises as fs}  from "fs";
import {resolve} from 'path';

// promise is an object which contains the status of completion of an operation
// A promise has 3 states:
// 1. Pending - operation is still running
// 2. Fulfilled (Resolved) - operation completed successfully with a result
// 3. Rejected - operation failed with an error
// Promises allow us to handle asynchronous operations without blocking the main thread
// We use await to wait for the promise to resolve and get the actual result
// Without await, we get the promise object itself, not the data it will eventually contain




// 1. loading data from a large data file 
//read the content  , utf-8 encoding is just another way to convert the raw bytes into string.
// .readFile is async , it takes time to read the file , Code pauses at await, waits for file to be read completely, then continues.
// without await you get the promise not the data 
// 
async function getData(){
  console.time('getData');
  const dataFile  =  resolve('data.json');
  const content  = await fs.readFile(dataFile,'utf-8');
  console.log(content);

  console.timeEnd('getData');

}
getData();


// 2.timeout function and clear ??


// 3. getting data from an external api 



