const topCaption = document.querySelector('#top-caption');
const bottomCaption = document.querySelector('#bot-caption');
const image = document.querySelector('#image');
const container = document.querySelector('.container');
const form = document.querySelector('form')

updatePage();

form.addEventListener('submit', function (event) {

    event.preventDefault();

    //delete button
    const del = document.createElement('p')
    del.innerText='X';
    del.classList.add('delete');

    //image
    const img = document.createElement('img');
    img.setAttribute('src', image.value); // todo: don't add if has  broken link

    //header and footer
    const header = document.createElement('h1');
    const footer = document.createElement('h1');
    header.innerText = topCaption.value;
    header.classList.add('header');
    footer.innerText = bottomCaption.value;
    footer.classList.add('footer');
   
    const meme = document.createElement('div')
    meme.setAttribute('class', 'meme');

    meme.appendChild(del);
    meme.appendChild(header);
    meme.appendChild(img);
    meme.appendChild(footer);
    
    // add meme
    container.appendChild(meme);


    updateLocalStorage();

    
});

container.addEventListener('click', function (e){
    console.dir(e.target);
    if(e.target.tagName === 'P')
	e.target.parentElement.remove();

});


function updateLocalStorage() {
    localStorage.setItem('content', JSON.stringify(container.innerHTML));
}

function updatePage() {
    container.innerHTML = JSON.parse(localStorage.getItem('content'));
}
