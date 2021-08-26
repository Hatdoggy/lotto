function getURLParameter(name) {
  return decodeURI(
    (RegExp(name + '=' + '(.+?)(&|$)').exec(window.location.search)||[,null])[1] || '');
}

let subid       = getURLParameter('subid');
let subid2      = getURLParameter('subid2');
let firstname   = getURLParameter('firstname');
let surname     = getURLParameter('surname');
let city        = getURLParameter('city');
let zipcode     = getURLParameter('zipcode');
let address     = getURLParameter('address');
let phone       = getURLParameter('phone');
let mobile      = getURLParameter('mobile');
let pid         = getURLParameter('pid');
let nrp         = getURLParameter('nrp');

let ffdomain = 'https://' + getURLParameter('ffdomain');
let session = getURLParameter('session');
let fluxf = getURLParameter('fluxf');
let fluxffn = getURLParameter('fluxffn');

export function ActionRedirect(action){
    window.location.replace(ffdomain + '/?flux_action=' + action + '&flux_f=' + fluxf + '&flux_ffn=' + fluxffn + '&flux_sess=' + session);
}

export const random = ()=>{
  return Math.floor(Math.random()*window.data.fin.length);
}

export const remove = (target,stat)=>{
  console.log(target)
  if(stat){
    target.classList.remove('fade-b');
    target.classList.add('fade-out');    
  }else{
    target.classList.remove('fade-out');
    target.classList.add('fade-b');
  }
}