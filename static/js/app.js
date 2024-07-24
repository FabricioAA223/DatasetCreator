function getImages() {
    showMessage('Capturando imagenes...')

    var interval = document.getElementById('interval').value;
    var duration = document.getElementById('duration').value;

    $.ajax({
        url: '/get_images/' + interval + '/' + duration,
        type: 'GET',
        success: function(response) {
            // displayImages(response.images);
            showMessage('Imagenes cargadas al drive con éxito')
            console.log('Imagenes: ', response);
        },
        error: function(error) {
            showMessage('Error al obtener imágenes')

            console.error('Error al obtener imágenes:', error);
        }
    });
}

function showMessage(msg) {
    var msgcontainer = document.getElementById('messages-container');
    msgcontainer.innerHTML = '';
    var documentH1 = document.createElement('div');
    documentH1.innerHTML = '<p>'+msg+'</p>';
    msgcontainer.appendChild(documentH1)
}

function displayImages(images) {
    var container = document.getElementById('image-container');
    container.innerHTML = '';

    images.forEach(function(imageData) {
        var timestamp = imageData.timestamp;
        var imageBase64 = imageData.image;

        var imageDiv = document.createElement('div');
        imageDiv.innerHTML = '<p>Timestamp: ' + timestamp + '</p>' +
                             '<img src="data:image/jpeg;base64,' + imageBase64 + '" alt="Captured Image">';

        container.appendChild(imageDiv);
    });
}
