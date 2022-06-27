window.onload = function() {
    var url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mannnish';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            console.log(data)
        }
        var items = data.items;
        var html = '';
        for (var i = 0; i < items.length; i++) {
            html += '<div class="card">';
            html += '<div class="card-img"> <img src="' + items[i].thumbnail + '" width="300px" height="180px" /> </div>';
            html += '<div class="card-chips">';
            for (var j = 0; j < items[i].categories.length && j < 2; j++) {
                html += '<div class="chip">' + items[i].categories[j] + '</div>';
            }
            html += '</div>';
            html += '<div class="card-title">' + items[i].title + '</div>';
            html += '<div class="card-date">' + items[i].pubDate + '</div>';
            html += '</div>';
        }
        document.getElementById('data').innerHTML = html;
    }
    xhr.send();
    // var stickerobj = document.getElementById('sticker_id')
    // stickerobj.innerHTML = url
    // from an array of items in json to an array of items in html

}