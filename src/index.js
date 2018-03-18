import './styles.css';

function parseQuery(queryString) {
    var query = {};
    var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}

function createAudioElement(src, time) {
    var container = document.body;
    var audio = document.createElement('audio');
    audio.controls = true;
    audio.autoplay = true;
    audio.src = src;

    container.appendChild(audio);

    var callback = function(event) {
        audio.currentTime = time;
        audio.play();
        audio.removeEventListener("canplay", callback);
    };

    audio.addEventListener("canplay", callback);

}

document.addEventListener("DOMContentLoaded", function(event) {
  var query = parseQuery(document.location.search);
  createAudioElement(decodeURIComponent(query.src), query.time);
});
