var validateForm = function() {
    var email = document.forms.form.email.value;
    if (!email) {
        return false;
    }
    return true;
};
