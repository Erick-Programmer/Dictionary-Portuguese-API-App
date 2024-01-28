//function for api search

function searchWord() {
    var inWord = document.querySelector('#inWord');
    var word = inWord.value;

    if(word == ""){
        alert('Preencha corretamente!');
        inWord.focus();
        return;
    }

    async function getApi(){
        var url = 'https://api.dicionario-aberto.net/word/' + word;
        try {
            let res = await fetch(url);
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }
    

    async function renderApi() {
        var meanings = await getApi();
        var wordMeaning = "";

        meanings.forEach(meaning => {
            wordMeaning = meaning.xml; //xml

        });

        const html = await $.parseHTML(wordMeaning); //html

        const res = [];

        $(html).find('def').each(function(){
            res.push($(this).text());
        });       
        var filter = res.join(' ');
        var word = "";

        for(var i = 0; i < filter.length;i++){
            if (filter[i] == '_'){
                continue;
            } else if (filter[i] == '.'){
                filter[i] == '.';
                word += filter[i];
                break;
            }
            word += filter[i];
        }
        
        var outWord = document.getElementById('outWord');
        outWord.textContent = word; 
        console.log(word);
    }

    
    renderApi();

}

var btnResult = document.getElementById('btnResult');
btnResult.addEventListener('click', searchWord);


