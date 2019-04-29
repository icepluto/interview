//self相当于this指向window，好像是这样
var int = self.setInterval("clock()",1000)
function clock(){
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("clock").value = t;
}
var hello = function (){
    alert('hello')
}
function myFunction(){
    setTimeout(hello,3000)
}
