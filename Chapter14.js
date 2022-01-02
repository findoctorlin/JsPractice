/*****14.2 提取URL中重复出现的某个参数对 name = value******/
function urlArgs() {
    var args = {};
    var query = location.search.substring(1);
    var pairs = query.split("&");
    for(var i = 0; i < pairs.length; i++) {
        var pos = pairs.indexOf('=');
        if(pos == -1) continue;
        var name = pairs[i].substring(0,pos);
        var value = pairs[i].substring(pos+1);
        value = decodeURIComponent(value);
        args[name] = value;     //建立映射
    }
    return args;
}