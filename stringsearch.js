/*
** Print message in monitor depending on case
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
** Reset results in monitor - div with id=monitor
*/
function resetMonitor(){
    document.getElementById('monitor').innerText = "Results:";
}
/*
** Get full text from the input where user copy text which will be searched for key words
*/
function getFullText(){
    return document.getElementById('fullText').value;
}
/*
** Get keywords list from input where user copy text with key words
*/
function getKeywordsList(){
    return document.getElementById('keywordsList').value;
}
/*
** Get keywords by regular expriession from keywords list
*/
function getKeywords(keywordList, regex){
    return keywordList.match(regex);
}
/*
** Parse fulltext with keyword (after regex) array
*/
function parseText(text, keys){
    keys.forEach(key => {
        // If there is no such key because value is -1 then add not found
        if (text.search(`${key} `) == -1) {                    
            document.getElementById('monitor').appendChild(createNotFound(key));                    
        }
        else{                    
            document.getElementById('monitor').appendChild(createFound(key));
        }
    });
}
// Function isEmpty checks if a list is empty or not
function isEmpty(list){
    if(!list) return true;
    else return false;
}
/*
** Function createNotFound which create and return a html with given key
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
** Function createFound which create and return a html with given key
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
** Button Search which is triggered by event listener
*/
function searchText(){
    // Clear div #id=monitor
    resetMonitor();
    // Regulax expression for a word wich starts with "mod_"
    const regexMob = /\bmod_\w+\b/g;
    // Get a keyword list
    let keywordList = getKeywordsList(); 
    // If a keywordList is empty it should stop and ask for some input to find keywords wich starts with "mod_"
    if(isEmpty(keywordList)){
        printMsg('monitor', 'Warning');
        return 
    }   
    // Get an array of string which consists of keys that match regexMob
    let keysAfterRegex = getKeywords(keywordList, regexMob);
    // If there are no keys that fit then it should print a warning
    if(isEmpty(keysAfterRegex)){
        printMsg('monitor', 'Danger');
        return
    }   
    // For every key in an array the parseText function checks if a keys exists in fullText
    parseText(getFullText(), keysAfterRegex);
}

let buttonSearch = document.getElementById('buttonSearch');
// Add event listener to button search 
buttonSearch.addEventListener('click', searchText);
resetMonitor();
