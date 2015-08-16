var param = function(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

if (param("submitted")) {
    var p = document.getElementById('success');
    var btn = document.getElementById('send');

    p.style.display = 'block';

    btn.disabled = true;
    btn.value = 'Thanks!';
    btn.style.color = '#fff';
    btn.style.backgroundColor = 'tomato';
    btn.style.borderColor = 'tomato';
}
