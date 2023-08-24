let monitor = document.getElementById('monitor');
monitor.innerText = 'Results:';
//keyword list
let keywordsList = document.getElementById('keywordsList');

/*
** Button Search
** event listener
*/
function searchText(){
    //clear monitor
    monitor.innerText = 'Results:';
    //regulax expression for a word wich starts with "mod_"
    const regexMob = /\bmod_\w+\b/g;
    //get fullText which will be searched
    let fullText = document.getElementById('fullText');
    // if keywordList is empty it should stop and ask for some input to firs find keywords wich starts with "mod_"
    
    if(!keywordsList.value){
        monitor.innerHTML ='<span class=\"text-warning\">You need to insert some keywords first.</span>';
    }
    else{
        //array of string which consts of keys that match regexMob
        const keysAfterRegex = keywordsList.value.match(regexMob);
        //if there is no keys that match is should print a warning
        if(!keysAfterRegex){
            monitor.innerHTML ='<span class=\"text-danger\">There is no keywords in your input.</span>';
        }
        else{
            //for every key in array keysAfterRegex check if a key exists in fullText
            keysAfterRegex.forEach(key => {
                if (fullText.value.search(key+' ') == -1) {
                    var notFound = document.createElement('span');
                    notFound.className = 'text-danger'; 
                    notFound.innerText = 'NOT FOUND'

                    var keyNotFound = document.createElement('h6');
                    keyNotFound.className = 'ms-3 text-dark';
                    keyNotFound.innerText = key+', ';
                    keyNotFound.appendChild(notFound);
                    document.getElementById('monitor').appendChild(keyNotFound);
                    
                }
                else{
                    var found = document.createElement('span');
                    found.className = 'text-success'; 
                    found.innerText = 'FOUND'
                    
                    var keyFound = document.createElement('h6');
                    keyFound.className = 'ms-3 text-dark';
                    
                    keyFound.innerText = key+', ';
                    keyFound.appendChild(found);
                    document.getElementById('monitor').appendChild(keyFound);
                }
            });
        }
    }
}

let buttonSearch = document.getElementById('buttonSearch');
buttonSearch.addEventListener('click', searchText);

