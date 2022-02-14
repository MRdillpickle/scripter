var html = document.getElementById("html").value;
var css = document.getElementById("css").value;
var js = document.getElementById("js").value;


function run() {
    html = document.getElementById("html").value;
    css = document.getElementById("css").value;
    js = document.getElementById("js").value;
    var windowr = window.open();
    windowr.document.write("<html><head><style>" + css +  "</style><title>Scripter - output</title></head><body>" + html +  "<script>" + js + "</script></body></html>");
}
function save() {
    html = document.getElementById("html").value;
    css = document.getElementById("css").value;
    js = document.getElementById("js").value;
    localStorage.setItem("html", html);
    localStorage.setItem("css", css);
    localStorage.setItem("js", js);
    alert("saved!");
}
function load() {
    document.getElementById("js").value = localStorage.getItem("js");
    document.getElementById("css").value = localStorage.getItem("css");
    document.getElementById("html").value = localStorage.getItem("html");
    alert("Loaded!");
}
function newl() {
    document.getElementById("js").value = "";
    document.getElementById("css").value = "";
    document.getElementById("html").value = "";
    alert("New Script!");
}