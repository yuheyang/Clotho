function strict() {
// 函数级别严格模式语法
    'use strict';
    let v = "Hi!  I'm a strict mode script!";
    return v ;
}
function notStrict() {
    return "I'm not strict.";
}

/**
 * 很多语言中都有块级作用域，JavaScript使用var声明变量，以function来划分作用域，大括号“{}” 却限定不了var的作用域。
 * 用var声明的变量具有变量提升（declaration hoisting）的效果。
 */
function kw_let(){
    'use strict';
    for (let i = 0; i < 10; i++) {
        console.log(i); // 0, 1, 2, 3, 4 ... 9
    }
    //let的作用域是块，而var的作用域是函数
    var a = 5;
    var b = 10;
    if (a === 5) {
        let a = 4; // The scope is inside the if-block
        var b = 1; // The scope is inside the function
        console.log(a);  // 4
        console.log(b);  // 1
    }
    console.log(a); // 5
    console.log(b); // 1
}

function kw_const(){
    const num = 10;
    //num =20;
    console.log(num); // 10
}

//console.log(kw_let());
console.log(kw_const());


