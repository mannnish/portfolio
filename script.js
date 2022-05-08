window.onload = function() {
    var index = (Math.floor(Date.now() / 1000) % 4) + 1;
    var url = "<img class=\"sticker\" src=\"assets/sticker" + index + ".png\" />";

    var stickerobj = document.getElementById('sticker_id')
    stickerobj.innerHTML = url
}

dfyt = function() {
    var q = document.getElementById("query").value
    if (q != '')
        window.location.replace("https://www.youtube.com/results?search_query=" + q);
    else {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
    }
}