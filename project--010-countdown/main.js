import { log } from "console";
let date_ob = new Date();
let date = (date_ob.getDate());
let month = (+date_ob.getMonth() + 1);
let year = (date_ob.getFullYear());
let hours = (date_ob.getHours() + 1);
let minutes = (date_ob.getMinutes() + 1);
let seconds = (date_ob.getSeconds() + 1);
log(`TIME : ${date} - ${month} - ${year} -- ${hours}:${minutes}:${seconds}`);
