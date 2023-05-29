var oInp = document.getElementById('in');
var oBtn = document.getElementById('bt');
oBtn.onclick = function () {
    Search();
}
document.onkeydown = function () {
    if (event.keyCode == 13) {
        Search();
    }
}
function Search() {
    var url = 'https://cn.bing.com/search?q=' + oInp.value;
    window.open(url);
}