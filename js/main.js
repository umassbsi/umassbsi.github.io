var param = function(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

if (param("submitted")) {
    // document.getElementById("hidden").style.display = "block";
    console.log(document.getElementById('hidden'));
    console.log('yolo');
}
