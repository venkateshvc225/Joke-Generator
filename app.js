document.querySelector('.get-jokes').addEventListener('click',getJokes);

function getJokes(e){
    //get input value
    const number = document.querySelector('.number').value;
    //crete xhr object
    const xhr = new XMLHttpRequest();
    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);

    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            let jokess;
            if(response.type === 'success'){
                response.value.forEach(function(joke1){
                    jokess += `<li>${joke1.joke}</li>`;
                })
            } else{
                jokess += `<h3>Something went wrong</h3>`;
            }
            document.querySelector('.jokes').innerHTML = jokess;
            
        }
    }
    xhr.send();

    e.preventDefault();
}