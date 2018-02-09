"use strict";

//jquery的导入需要有window或者document的实例，通过jsdom创建dom，获取dom结构中window对象
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`<body>12345678</body>`, {
    url: "https://example.org/",
    referrer: "https://example.com/",
    contentType: "text/html",
    userAgent: "Mellblomenator/9000",
    includeNodeLocations: true
});
var $ = require('jquery')(dom.window);

$("body").append("<div>TEST</div>");
console.log($("body").html());

var abc = $.map([0,1,2,3,4,5], function(value){return value+1;});
console.log(abc);

var index = $.inArray(2, [1,2,3,4,5]);
console.log(index);

var target =  { a: 1, b: 2, c: 3 };
var source1 = { a: 4, d: 5, e: 6 };
var source2 = { e: 7, f: 8, g: 9 };
$.extend(target,source1,source2);
console.log("extend result:"+target);

//简化参数列表
function complex(p1, options){
    var settings = $.extend({
        option1: defaultValue1,
        option2: defaultValue2,
        option3: defaultValue3,
        option4: defaultValue4,
        option5: defaultValue5,
        option6: defaultValue6
    }, options || {});           // 如果 options已经定义过了，则还保持是 options，如果 options没定义，初始化为{}，{}是一个空对象，就像[]是一个空数组一样
}

var f=function(x){     //开始加载函数
    return x*x;
}
console.log(f);
