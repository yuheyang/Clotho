'use strict';

/**
 * 类的成员需要定义在一对花括号 {} 里，花括号里的代码和花括号本身组成了类体。
 * 类成员包括类构造器和类方法（包括静态方法和实例方法）。
 * class 根据 constructor 方法来创建和初始化对象。
 * constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。
 * 一个类只能有一个constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。
 * constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。
 *
 */
var traceur = require("traceur");

class Calc {
    constructor(){
        console.log('Calc constructor');
    }
    add(a, b){
        return a + b;
    }
}
// 匿名类表达式
var Polygon1 = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        console.log('Polygon constructor');
    }
    set(){console.log("1 set")}
};
// 命名类表达式
var Polygon2 = class Polygon {
    get(){return 1;}
};
class Foo {
    constructor() {
        return Object.create(null);
    }
}
console.log(new Foo() instanceof Foo);

/**
 * static关键字定义了一个类的静态方法。静态方法被称为无需实例化类也可当类被实例化。
 * 静态方法通常用于为应用程序创建实用函数。
 */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx*dx + dy*dy);
    }
}
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
console.log(Point.distance(p1, p2));

/**
 * extends 关键字可以用来创建继承于某个类的子类。
 */
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' makes a noise.');
    }
}
class Dog extends Animal {
    speak() {
        console.log(this.name + ' barks.');
    }
}
var dog = new Dog('NiNi');
dog.speak();

/**
 * map对象是一个简单的键/值映射。任何值（包括对象和原始值）都可以用作一个键或一个值。
 * 注意Map的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。
 *     如果使用对象作为键名，就不用担心自己的属性与原作者的属性同名。
 *     如果Map的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，
 *     Map将其视为一个键，包括0和-0。另外，虽然NaN不严格相等于自身，但Map将其视为同一个键。
 *  size属性返回Map结构的成员总数。即返回映射对象中的键/值对的数目。
 *  set(key, value)方法设置key所对应的键值，然后返回整个Map结构。
 *  如果key已经有值，则键值会被更新，否则就新生成该键。
 *  set方法返回的是Map本身，因此可以采用链式写法。
 *  get(key)方法读取key对应的键值，如果找不到key，返回undefined。
 *  has(key)方法返回一个布尔值，表示某个键是否在Map数据结构中。
 *  delete(key)方法删除某个键，返回true。如果删除失败，返回false。
 *  clear()方法清除所有成员，没有返回值。
 *  Map原生提供三个遍历器生成函数和一个遍历方法。keys()：返回键名的遍历器。values()：返回键值的遍历器。entries()：返回所有成员的遍历器。forEach()：遍历Map的所有成员。
 */
function key_map(){
    var m = new Map();
    var o = {p: "Hello World"};
    m.set(o, "content");
    console.log(m.get(o)); // "content"
    var map = new Map([["name", "张三"], ["title", "Author"]]);
    console.log(map.size); // 2
    console.log(map.get("name")); // "张三"
    var m = new Map();
    console.log(m.set("edition", 6).get("edition"));        // 键是字符串
    m.set(262, "standard")     // 键是数值
    m.set(undefined, "nah")    // 键是undefined
    var myMap = new Map();
    myMap.set(0, "zero");
    myMap.set(1, "one");
    for (var key of myMap.keys()) {
        console.log(key);
    }
    // Will show 2 logs; first with "0" and second with "1"
    for (var value of myMap.values()) {
        console.log(value);
    }
    // Will show 2 logs; first with "zero" and second with "one"
    for (var item of myMap.entries()) {
        console.log(item[0] + " = " + item[1]);
    }
    // Will show 2 logs; first with "0 = zero" and second with "1 = one"
    myMap.forEach(function(value, key) {
        console.log(key + " = " + value);
    }, myMap)
}
//key_map();

/**
 * WeakMap结构与Map结构基本类似，唯一的区别是它只接受对象作为键名（null除外），不接受其他类型的值作为键名，而且键名所指向的对象，不计入垃圾回收机制。
 * WeakMap的设计目的在于，键名是对象的弱引用（垃圾回收机制不将该引用考虑在内），所以其所对应的对象可能会被自动回收。当对象被回收后，WeakMap自动移除对应的键值对。
 * 典型应用是，一个对应DOM元素的WeakMap结构，当某个DOM元素被清除，其所对应的WeakMap记录就会自动被移除。
 * 基本上，WeakMap的专用场合就是，它的键所对应的对象，可能会在将来消失。WeakMap结构有助于防止内存泄漏。
 * WeakMap与Map在API上的区别主要是两个，一是没有遍历操作（即没有key()、values()和entries()方法），也没有size属性；二是无法清空，即不支持clear方法。
 * 这与WeakMap的键不被计入引用、被垃圾回收机制忽略有关。WeakMap只有四个方法可用：get()、set()、has()、delete()。
 */
var map = new WeakMap()
//map.set(1, 2)                 // TypeError: 1 is not an object!
//map.set(Symbol(), 2)          // TypeError: Invalid value used as weak map key

/**
 * ES6提供了新的数据结构Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
 * Set本身是一个构造函数，用来生成Set数据结构。
 * 向Set加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值。Set内部判断两个值是否不同，使用的算法类似于精确相等运算符（===），
 * 这意味着，两个对象总是不相等的。唯一的例外是NaN等于自身（精确相等运算符认为NaN不等于自身）。
 * Set结构的实例有以下属性。
 * Set.prototype.constructor：构造函数，默认就是Set函数。
 * Set.prototype.size：返回Set实例的成员总数。
 * Set实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。
 * add(value)：添加某个值，返回Set结构本身。
 * delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
 * has(value)：返回一个布尔值，表示该值是否为Set的成员。clear()：清除所有成员，没有返回值。
 * Set结构的实例有四个遍历方法，可以用于遍历成员。keys()，values()，entries()，forEach()
 * key方法、value方法、entries方法返回的都是遍历器对象。由于Set结构没有键名，只有键值（或者说键名和键值是同一个值），
 * 所以key方法和value方法的行为完全一致。
 * entries方法返回的遍历器，同时包括键名和键值，所以每次输出一个数组，它的两个成员完全相等。
 * Set结构的实例的forEach方法，用于对每个成员执行某种操作，没有返回值。
 *
 */
function key_set(){
    var s = new Set();
    [2,3,5,4,5,2,2].map(x => s.add(x))
    for (i of s) {console.log(i)}

    var s = new Set();
    s.add(1).add(2).add(2);
    // 注意2被加入了两次
    console.log(s.size);   // 2
    console.log(s.has(1)); // true
    console.log(s.has(2)); // true
    console.log(s.has(3)); // false
    console.log(s.delete(2));
    console.log(s.has(2)); // false

    let set = new Set(['red', 'green', 'blue']);
    for ( let item of set.keys() ){
        console.log(item);
    }
    for ( let item of set.values() ){
        console.log(item);
    }
    for ( let item of set.entries() ){
        console.log(item);
    }

    let set = new Set([1, 2, 3]);
    set.forEach((value, key) => console.log(value * 2) )
    // 2  4  6
}
key_set();