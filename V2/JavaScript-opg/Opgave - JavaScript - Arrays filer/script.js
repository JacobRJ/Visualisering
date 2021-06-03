var bank = "al"

var jyskebank = {firmanavn: "Jyske Bank", firmaaddrese: "Skattelyvej 1", firmapost: "2222", firmaby: "Solsiden", firmatlf: "+45 1234 1234", firmamail: "kontakt@jyskebank.nu"}

var arbejderbank = {firmanavn: "Arbejdernes Landsbank", firmaaddrese: "Bankvej 1", firmapost: "4242", firmaby: "Solsiden", firmatlf: "+45 4321 1234", firmamail: "kontakt@albank.nu"}

// template
/*
var find = document.querySelectorAll('.');
console.log();
.forEach()

function udskift(item){
    if(bank == "jb"){
        item.innerHTML = jyskebank.
    }
    else if(bank == "al"){
        item.innerHTML = arbejderbank.
    }
}
*/

var findfimanavn = document.querySelectorAll('.firmanavn');
console.log(findfimanavn);
findfimanavn.forEach(udskiftFirmaNavn)

function udskiftFirmaNavn(item){
    if(bank == "jb"){
        item.innerHTML = jyskebank.firmanavn
    }
    else if(bank == "al"){
        item.innerHTML = arbejderbank.firmanavn
    }
}


var findfirmaaddrese = document.querySelectorAll('.firmaaddrese');
console.log(findfirmaaddrese);
findfirmaaddrese.forEach(udskiftFirmaaddrese)

function udskiftFirmaaddrese(item){
    if(bank == "jb"){
        item.innerHTML = jyskebank.firmaaddrese
    }
    else if(bank == "al"){
        item.innerHTML = arbejderbank.firmaaddrese
    }
}

var findfirmapost = document.querySelectorAll('.firmapost');
console.log(findfirmapost);
findfirmapost.forEach(udskiftfirmapost)

function udskiftfirmapost(item){
    if(bank == "jb"){
        item.innerHTML = jyskebank.firmapost
    }
    else if(bank == "al"){
        item.innerHTML = arbejderbank.firmapost
    }
}

var findfirmaby = document.querySelectorAll('.firmaby');
console.log(findfirmaby);
findfirmaby.forEach(udskiftfirmaby)

function udskiftfirmaby(item){
    if(bank == "jb"){
        item.innerHTML = jyskebank.firmaby
    }
    else if(bank == "al"){
        item.innerHTML = arbejderbank.firmaby
    }
}

var findfirmatlf = document.querySelectorAll('.firmatlf');
console.log(findfirmatlf);
findfirmatlf.forEach(udskiftfirmatlf)

function udskiftfirmatlf(item){
    if(bank == "jb"){
        item.innerHTML = jyskebank.firmatlf
    }
    else if(bank == "al"){
        item.innerHTML = arbejderbank.firmatlf
    }
}

var findfirmamail = document.querySelectorAll('.firmamail');
console.log(findfirmamail);
findfirmamail.forEach(udskiftfirmamail)

function udskiftfirmamail(item){
    if(bank == "jb"){
        item.innerHTML = jyskebank.firmamail
    }
    else if(bank == "al"){
        item.innerHTML = arbejderbank.firmamail
    }
}