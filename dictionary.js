//function for api search
function searchWord() {
    var inWord = document.getElementById('inWord');
    var word = inWord.value;

    if(word == ""){
        alert('Preencha corretamente!');
        inWord.focus();
        return;
    }

    async function getApi(){
        var url = 'https://api.dicionario-aberto.net/word' + '/' + word + '/1';
        try {
            let res = await fetch(url);
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }

    async function renderApi() {
        var messages = await getApi();
        var palavra = "";
        var array = new Array(messages);

        array.forEach(message => {
            palavra = message.xml;
            
        });

        var outWord = document.getElementById('outWord');
        outWord.textContent = palavra;
    }

    renderApi();

}

var btnResult = document.getElementById('btnResult');
btnResult.addEventListener('click', searchWord);




