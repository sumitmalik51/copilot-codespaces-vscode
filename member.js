function skillsmember() {
    var skills = document.getElementById("skills");
    var skillsvalue = skills.value;
    var skillserror = document.getElementById("skillserror");
    if (skillsvalue == "") {
        skillserror.innerHTML = "Please enter your skills";
        skillserror.style.color = "red";
        skills.style.border = "1px solid red";
        return false;
    } else {
        skillserror.innerHTML = "";
        skills.style.border = "1px solid green";
    }
}