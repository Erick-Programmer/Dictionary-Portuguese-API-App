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


/*async function getApi() {
    let url = "https://api.dicionario-aberto.net/prefix/cavalo";
    let response = await fetch(url);
    let datas = await response.json();
    let palavra = "";
    datas.forEach(data => {
        palavra += data.preview;
    });
    console.log(palavra); 
}

getApi(); */

/* uncomment the next line for real application: */
// fetch("person.xml").then(r=>r.text()).then(txt=>{

/*const atts = "name,city,age,sex".split(",");*/
/* XML data string for SO demo, remove line for real application: */
/*const txt = `<person><data><name>juan</name><city>tokyo</city><age>20</age><sex>m</sex></data><data><name>pedro</name><city>manila</city><age>22</age><sex>m</sex></data><data><name>maria</name><city>bangkok</city><age>23</age><sex>f</sex></data></person>`; 

const xml = new DOMParser().parseFromString(txt,"text/html"), 
    result=[...xml.querySelectorAll("data")].reduce((res,da)=>
        (res.push(atts.map(at=>da.querySelector(at).textContent)),res),
    []);
    // Test
console.log(result);
    
/* end of fetch(), uncomment next line for real application: */
// });

let array = ['oi sou o, goku'];
const filtered = array.some(x => x.includes(','));
if(filtered == true){
    var filter = array.map(y => y.replace(',', ",\n"));
    console.log(filter);
}

let array2 = ['Edifício para habitação: _uma casa moderna_.']
var filter = array2.join(' ');
var word = "";
for (var i = 0; i < filter.length; i++){
    if(filter[i] == '_'){
        continue;
    }else if (filter[i] == ':'){
        filter[i] = ','
    }else {
        word += filter[i];
        if(i == 41){
            break;
        }
    }
    
}
console.log(word);