//封装cookie 增删改
function setCookie(key, value, days = 7, path = "/") {
    var date = new Date();
    date.setDate(date.getDate() + days);
    date.setHours(date.getHours() - 8);

    document.cookie = encodeURIComponent(key) + "=" + encodeURIComponent(value) + ";expires=" + date + ";path=" + path;
}
//查询0009000090

function getCookie(key) {
    var cookieStr = document.cookie;
    if (cookieStr) {
        var cookieList = cookieStr.split("; "); //[key=value,key1=value1,key2=value2,key3=value3]
        var newList = cookieList.filter(item => {
            return item.indexOf(encodeURIComponent(key)) == 0;
        });
        if (newList.length > 0) {
            return decodeURIComponent(newList[0].split("=")[1]);
        }
        return "";
    }
    return "";
}
//4KB  50个