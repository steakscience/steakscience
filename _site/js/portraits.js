window.onload = function () {

    cyclePortraitPhotos();
};

// load and cycle the portrait images
function cyclePortraitPhotos() {
    var imageRange = loadPortraitPhotos();


    var index = imageRange;
    setInterval(function () {
        var currentZIndex = $('#portrait' + index).css('z-index') ? $('#portrait' + index).css('z-index') : '0';

        $('#portrait' + index).css('z-index', parseInt(currentZIndex) + 1);
        if (index == 0) {
            index = imageRange + 1;
        }
        index--;
    }, 7000); // change portrait interval here (milliseconds)
}

// create portrait imgs and return index range
function loadPortraitPhotos() {
    // hardcode photos in here. They need to be hosted in the /images folder, and their names must be in this array for them to be included in background transition
    var images = ['4.jpg', '5.jpg', '6.jpg'];

    images.forEach(function (image, index) {
        var elem = document.createElement("img");
        elem.id = 'portrait' + index;

        // use the second uri for hosting, first for testing
        var uri = '/images/portraits/' + image;
        // var uri = 'http://nirawit.me/images/portraits' + image;

        $(elem).attr('src', uri);
        $(elem).css('position', 'absolute');
        $(elem).css('top', '0');
        $(elem).css('left', '0');
        $(elem).css('z-index', '-1');
        $(elem).addClass('br-100');

        $('#portrait-container').prepend(elem);
    });

    return images.length - 1;
}