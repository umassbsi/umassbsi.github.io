var param = function(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

if (param("submitted")) {
    document.getElementById("success").style.display = "block";

    document.getElementById("send").disabled = true;
    document.getElementById("send").value = "Thanks!";
    document.getElementById("send").style.backgroundColor = "tomato";
    document.getElementById("send").style.color = "white";
    document.getElementById("send").style.borderColor = "tomato";
}
