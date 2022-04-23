window.onload = function() {
    var index = (Math.floor(Date.now() / 1000) % 4) + 1;
    var url = "<img class=\"sticker\" src=\"assets/sticker" + index + ".png\" />";

    var stickerobj = document.getElementById('sticker_id')
    stickerobj.innerHTML = url
}