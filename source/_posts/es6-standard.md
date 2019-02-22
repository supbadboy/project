---
title: ES6编码规范

date: 2018.12.25

tags: [Hexo,Sample]

categories: 基本规范
---
# ES6编码规范

#### let,const替代 var

es6提出了新的变量声明,`let`,`const`.大部分情况下 let和const可以替代var.

 1. let 定义的变量不会被变量提升``
 2. const 定义的常量不能被修改
 3. let 和 const都是块级作用域{}(es5中只有全局作用域和函数作用域)
 4. let可以声明的时候不赋值，const必须声明时赋值

- let

	```
	//块级作用域
	for(let i=1; i<5; i++){
	    console.log(i) //1,2,3,4,5
	}
	console.log(i)//报错,因为i是块级作用域
	```
- const

	```
	const a=1
	a=2  //报错,因为const定义的常量不能修改
	const b //报错,因为const声明时必须赋值
	
	```

#### 静态字符串一律使用单引号或反引号，不建议使用双引号。动态字符使用反引号。

```
	//bad 
	 const a = "foobar";
	 const b = 'foo'+a+'bb';
	
	// good 
	const a = 'foobar';
	const b = `foo${a}bar`;
```
####  解构赋值

使用数组成员对变量赋值时，优先使用解构赋值。
```
	const arr = [1, 2, 3, 4];
	
	// bad
	const first = arr[0];
	const second = arr[1];
	
	// good
	const [first, second] = arr;
	函数的参数如果是对象的成员，优先使用解构赋值。
	
	// bad
	function getFullName(user) {
	  const firstName = user.firstName;
	  const lastName = user.lastName;
	}
	
	// good
	function getFullName(obj) {
	  const { firstName, lastName } = obj;
	}
	
	// best
	function getFullName({ firstName, lastName }) {
	}
	如果函数返回多个值，优先使用对象的解构赋值，而不是数组的解构赋值。这样便于以后添加返回值，以及更改返回值的顺序。
	
	// bad
	function processInput(input) {
	  return [left, right, top, bottom];
	}
	
	// good
	function processInput(input) {
	  return { left, right, top, bottom };
	}
	
	const { left, right } = processInput(input);
```

####  对象

对象尽量静态化，一旦定义，就不得随意添加新的属性。如果添加属性不可避免，要使用Object.assign方法。
```
	// bad
	const a = {};
	a.x = 3;
	
	// if reshape unavoidable
	const a = {};
	Object.assign(a, { x: 3 });
	
	// good
	const a = { x: null };
	a.x = 3;
	如果对象的属性名是动态的，可以在创造对象的时候，使用属性表达式定义。
	
	// bad
	const obj = {
	  id: 5,
	  name: 'San Francisco',
	};
	obj[getKey('enabled')] = true;
	
	// good
	const obj = {
	  id: 5,
	  name: 'San Francisco',
	  [getKey('enabled')]: true,
	};
	另外，对象的属性和方法，尽量采用简洁表达法，这样易于描述和书写。
	
	var ref = 'some value';
	
	// bad
	const atom = {
	  ref: ref,
	
	  value: 1,
	
	  addValue: function (value) {
	    return atom.value + value;
	  },
	};
	
	// good
	const atom = {
	  ref,
	
	  value: 1,
	
	  addValue(value) {
	    return atom.value + value;
	  },
	};
````
#### 数组
使用扩展运算符（...）拷贝数组。
```
// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];
使用 Array.from 方法，将类似数组的对象转为数组。

const foo = document.querySelectorAll('.foo');
const nodes = Array.from(foo);
```
### 函数
```
立即执行函数可以写成箭头函数的形式。

(() => {
  console.log('Welcome to the Internet.');
})();
那些需要使用函数表达式的场合，尽量用箭头函数代替。因为这样更简洁，而且绑定了 this。

// bad
[1, 2, 3].map(function (x) {
  return x * x;
});

// good
[1, 2, 3].map((x) => {
  return x * x;
});

// best
[1, 2, 3].map(x => x * x);
简单的、单行的、不会复用的函数，建议采用箭头函数。如果函数体较为复杂，行数较多，还是应该采用传统的函数写法。
```
#### Map结构
注意区分 Object 和 Map，只有模拟现实世界的实体对象时，才使用 Object。如果只是需要key: value的数据结构，使用 Map 结构。因为 Map 有内建的遍历机制。
```
let map = new Map(arr);

for (let key of map.keys()) {
  console.log(key);
}

for (let value of map.values()) {
  console.log(value);
}

for (let item of map.entries()) {
  console.log(item[0], item[1]);
}
```
#### class
总是用 Class，取代需要 prototype 的操作。因为 Class 的写法更简洁，更易于理解。
```
// bad
function Queue(contents = []) {
  this._queue = [...contents];
}
Queue.prototype.pop = function() {
  const value = this._queue[0];
  this._queue.splice(0, 1);
  return value;
}

// good
class Queue {
  constructor(contents = []) {
    this._queue = [...contents];
  }
  pop() {
    const value = this._queue[0];
    this._queue.splice(0, 1);
    return value;
  }
}
使用extends实现继承，因为这样更简单，不会有破坏instanceof运算的危险。

// bad
const inherits = require('inherits');
function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function() {
  return this._queue[0];
}

// good
class PeekableQueue extends Queue {
  peek() {
    return this._queue[0];
  }
}
````
#### promise
一般来说，不要在then方法里面定义失败状态的回调函数(即then的第二个参数)，总是使用catch方法
```
// bad
promise
  .then(function(data) {
    // success
  }, function(err) {
    // error
  });

// good
promise
  .then(function(data) { //cb
    // success
  })
  .catch(function(err) {
    // error
  });

```