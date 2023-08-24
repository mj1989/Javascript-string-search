/*
** print message in monitor depending on case
*/
function printMsg(targetID, msgType){
    switch (msgType) {
        case 'Warning':
            document.getElementById(targetID).innerHTML = '<span class=\"text-warning\">You need to insert some keywords first.</span>';
            break;
        case 'Danger':
            document.getElementById(targetID).innerHTML = '<span class=\"text-danger\">There is no keywords in your input. Keyword is <b>\"mod_\"</b> and a name of the module.</span>';
            break;
        default:
            document.getElementById(targetID).innerHTML = '<span class=\"text-warning\">Something went wrong. Try again.</span>';
            break;
    }
}
/*
** reset results in monitor - div with id=monitor
*/
function resetMonitor(){
    document.getElementById('monitor').innerText = "Results:";
}
/*
** get full text
*/
function getFullText(){
    return document.getElementById('fullText').value;
}
/*
** get keywords list
*/
function getKeywordsList(){
    return document.getElementById('keywordsList').value;
}
/*
** get keywords by regular expriession from keywords list
*/
function getKeywords(keywordList, regex){
    return keywordList.match(regex);
}
/*
** parse fulltext with keyword (after regex) array
*/
function parseText(text, keys){
    keys.forEach(key => {
        //if there is no such key because value is -1 then add not found
        if (text.search(`${key} `) == -1) {                    
            document.getElementById('monitor').appendChild(createNotFound(key));                    
        }
        else{                    
            document.getElementById('monitor').appendChild(createFound(key));
        }
    });
}
/*
** not found function
** which makes a html with given key as argument
*/
function createNotFound(key){
    let notFound = document.createElement('span');
    notFound.className = 'text-danger'; 
    notFound.innerText = 'NOT FOUND'

    let keyNotFound = document.createElement('h6');
    keyNotFound.className = 'ms-3 text-dark';
    keyNotFound.innerText = key+', ';
    keyNotFound.appendChild(notFound);
    return keyNotFound;
}
/*
** found function - which returns html with given key
*/
function createFound(key){
    let found = document.createElement('span');
    found.className = 'text-success'; 
    found.innerText = 'FOUND'
    
    let keyFound = document.createElement('h6');
    keyFound.className = 'ms-3 text-dark';
    
    keyFound.innerText = key+', ';
    keyFound.appendChild(found);
    return keyFound;
}
/*
** Button Search
** event listener
*/
function searchText(){
    //clear monitor
    resetMonitor();
    //regulax expression for a word wich starts with "mod_"
    const regexMob = /\bmod_\w+\b/g;
    // if keywordList is empty it should stop and ask for some input to firs find keywords wich starts with "mod_"
    let keywordList = getKeywordsList(); 
    if(!keywordList){
        printMsg('monitor', 'Warning');
    }
    else{
        //array of string which consts of keys that match regexMob
        let keysAfterRegex = getKeywords(keywordList, regexMob);
        //if there is no keys that match is should print a warning
        if(!keysAfterRegex){
            printMsg('monitor', 'Danger');
        }
        else{
            //for every key in array keysAfterRegex check if a key exists in fullText
            parseText(getFullText(), keysAfterRegex);
        }
    }
}

let buttonSearch = document.getElementById('buttonSearch');
buttonSearch.addEventListener('click', searchText);
resetMonitor();


