//default export class
export default class Nokia {
    volumeUp() {
        console.log("high volume");
    }
}
//named export class
class Nokia {
    volumeup() {
        console.log("high Vol");
    }
}
export{Nokia};

//named export function
export function show(){

        console.log("helloo Vol");
    }
