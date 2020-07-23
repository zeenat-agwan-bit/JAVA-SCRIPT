//default import Class
import Nokia from "./mobile.js";
const n=new Nokia();
n.volumeUp();

//default import function
import a from "./mobile.js";
console.log(a);

//named Import class
import{Nokia} from "./mobile.js";
const n=new Nokia();
n.volumeUp();
//import * as device from "./mobile.js";