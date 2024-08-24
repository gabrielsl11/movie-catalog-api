var apiKey = "427cf9c7";

document.querySelector('.buttonSearch').addEventListener('click', (e) => {
    e.preventDefault();

    let inputSearch = document.querySelector('.inputSearch').value;

    if (inputSearch == "") {
        alert('enter correct values.');
        return;
    };

    fetch(`https://www.omdbapi.com/?s=${inputSearch}&apikey=${apiKey}`)
        .then(result => result.json())
        .then(json => loadList(json))
    ;

    const loadList = (json) => {
        let list = document.querySelector('.grid');
        list.innerHTML = "";

        json.Search.forEach(element => {
            let li = document.createElement('li');

            list.appendChild(li);

            li.classList.add('grid-item');

            li.innerHTML = `
                <img src="${element.Poster}"/>
                <p class="title" title="${element.Title}">${element.Title}</p>
                <p>${element.Type}</p>
                <p>${element.Year}</p>
            `;
        })
    }
})