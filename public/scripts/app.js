console.log('Fear is the mind killer.');

$(document).ready(function() {
    $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/albums',
    dataType: 'json',
    success: (response) => {
        // printResponse(response);
        appendAlbums(response);
    },
    error: (error) => {
        printError(error);
    }
  });
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

function printResponse(response) {
    console.log(response);
    console.log(response.length);
}

function printError(error) {
    console.error(error);
}