var param = function(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

if (param("submitted")) {
    document.getElementById("hidden").style.display = "block";

    document.getElementById("send-form").disabled = true;
    document.getElementById("send-form").value = "Thanks!";
    document.getElementById("send-form").style.backgroundColor = "tomato";
    document.getElementById("send-form").style.color = "white";
    document.getElementById("send-form").style.borderColor = "tomato";
}
