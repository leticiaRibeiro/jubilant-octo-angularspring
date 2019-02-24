/*
Utilizando a inferencia de tipos no typescript
*/
function showLog(message: any) {
    console.log(message);
}

showLog('Hello World'); 
showLog(23);

let test: Array<string> = ['Hello', 'Test'];
let isEnabled: boolean = true;
let testw: [string] = ['Hello'];