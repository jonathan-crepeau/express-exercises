console.log('Fear is the mind killer.');

$(document).ready(async function() {
    await $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/albums',
    dataType: 'json',
    success: (response) => {
        appendAlbums(response);
    },
    error: (error) => {
        printError(error);
    }
    });
       await $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/api/taquerias',
        dataType: 'json',
        success: (response) => prependTaquerias(response),
        error: (err) => console.error(err)
    })
})

function appendAlbums(response) {
    for (let i = 0; i < response.length; i++) {
        const singleAlbum = $(`<div class="album"><div>`)
        const albumTitle = $(`<p class="title">${response[i].title}</p>`);
        const artistName = $(`<p class="artist">${response[i].artist}</p>`);
        $(singleAlbum).append(albumTitle)
        $(singleAlbum).append(artistName);
        $('#albums-container').append(singleAlbum)
    }
}

function prependTaquerias(response) {
    for (let i = 0; i < response.length; i++) {
        const taqueria = $(`<p class="taqueria">${response[i].name}</p>`)
        $(`.album:nth-child(${i + 1})`).prepend(taqueria);
    }
}

function printResponse(response) {
    console.log(response);
    console.log(response.length);
}

function printError(error) {
    console.error(error);
}