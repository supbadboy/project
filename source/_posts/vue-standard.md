---
title: vue 开发规范

date: 2018.12.25

tags: [Hexo,Sample]

categories: 基本规范
---


### 组件命名规范:

组件名为多个单词，并且用连接线（-）连接，避免与 HTML 标签冲突，并且结构更加清晰。

示例：

```
// bad
export default {
    name: 'item'
}

// good
export default {
    name: 'page-article-item'
}

```
### vue单文件放置顺序
单文件组件应该总是让`<script>`、`<template>` 和 `<style>` 标签的顺序保持一致。且 `<style>` 要放在最后，因为另外两个标签至少要有一个。
```
<!-- ComponentA.vue -->

<template>...</template>

<script>/* ... */</script>

<style>/* ... */</style>

```


### vue方法放置顺序


1. components    

2. props        

3. data         

4. created       

5. mounted    

6. methods

7. filter

8. computed

9. watch

### 引入组件components规范

在本组件中需要引入其他vue组件那么

1. 首先使用import 引入组件
2. 在components中引入组件

例如:

```
  import part1 from './part/part1.vue';
  import part2 from './part/part2.vue';
  import part3 from './part/part3.vue';

  export default {
    name:"app",
    components:{part1,part2,part3},
    data(){
      return {

      }
    }
  
  }
```


### props规范

1. 定义 Prop 的时候应该始终以驼峰格式命名,例如:

  ```
	//bad //报错
	    props: {
	      user-name: {
	        type:String,
	        default:'张三'
	      }
	    }
	
	//good
	    props: {
	      userName: {
	        type:String,
	        default:'张三'
	      }
	    }

  ```

2. Prop 的定义应该尽量详细的指定其类型、默认值和验证,例如:

   ```
     //bad
      props:['userName','userSex']
      
     //good
      props: {
	      userName: {
	        type:String,
	        default:'张三'
	      },
	      userSex:{
	        type:Boolean
	      }
      }
   
   ```

### data书写规范

1. 组件的 data 必须是一个函数。当在组件中使用 data 属性的时候 (除了 new Vue 外的任何地方)，它的值必须是返回一个对象的函数。

   ```
    //在.vue文件中,必须是一个函数,并且必须返回一个对象 
	export default {	
	 data () {	
		 return {		
		 foo: 'bar'		
		 }	
	 }	
	}
	
	// 在一个 Vue 的根实例上直接使用对象是可以的，	
	// 因为只存在一个这样的实例。	
	new Vue({	
	 data: {	
	 foo: 'bar'	
	 }	
	})

   ```
2. 所有初始化数据放在data(或者created)中处理 然后返回,不能放在在模块外面.例如:

  ```
     //bad  
      var  name='张三'
	  export default {
	    name: "project-module-one-part1",
	    props:{
	      num:{
	         type:Number
	      }
	    },
	    data(){
	      return{
	        name
	      }
	    }
	  }

    //good 
    export default {
	    name: "project-module-one-part1",
	    props:{
	      num:{
	         type:Number
	      }
	    },
	    data(){
	      //数据处理都在data中
	      let name='张三'
	      return{
	        name
	      }
	    }
	 }

  ```
3. data中主要实现数据初始化以及表单校验.

### created 方法规范

created方法中,el并没有被初始化完成,而data已经被创建,这里可以进行一些数据处理

1. 部分访问权限验证
2. 页面级插件数据初始化
3. 页面默认数据加载,数据初始化

### methods方法规范

- 命名规范
	1. 事件方法以on开头,例如(onNameChange,onUserClick)
	2. 使用驼峰命名
	3. 词意明确,见词知意
- 函数中统一使用_self=this来解决this的全局指向问题

### 部分写作规范

1. `v-for` 必须设置`key`, 在组件上_总是_必须用 `key` 配合` v-for`，以便维护内部组件及其子树的状态,甚至在元素上维护可预测的行为.
   
   ```
    //bad
	<ul>	
	 <li v-for="todo in todos">	
	 {{ todo.text }}	
	 </li>	
	</ul>

    //good
	<ul>	
	 <li	
	 v-for="todo in todos"	
	 :key="todo.id"	
	 >	
	 {{ todo.text }}	
	 </li>	
	</ul>
   ```

2. v-for 应该避免与 v-if 在同一个元素（例如：`<li>`）上使用，因为 v-for 的优先级比 v-if 更高，为了避免无效计算和渲染，应该尽量将 v-if 放到容器的父元素之上。例如:

   ```
	 // bad
	<ul>
	    <li v-for="item in list" :key="item.id" v-if="showList">
	        {{ item.title }}
	    </li>
	</ul>	
	// good
	<ul v-if="showList">
	    <li v-for="item in list" :key="item.id">
	        {{ item.title }}
	    </li>
	</ul>

   ```
3. v-if / v-else-if / v-else
若同一组 v-if 逻辑控制中的元素逻辑相同，Vue 为了更高效的元素切换，会复用相同的部分，例如：value。为了避免复用带来的不合理效果，应该在同种元素上加上 key 做标识。

   ```
	   // bad
	<div v-if="hasData">
	    <span>{{ mazeyData }}</span>
	</div>
	<div v-else>
	    <span>无数据</span>
	</div>
	
	// good
	<div v-if="hasData" key="mazey-data">
	    <span>{{ mazeyData }}</span>
	</div>
	<div v-else key="mazey-none">
	    <span>无数据</span>
	</div>

   ```

4. 模板中的表达式应该是简单的
   组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。
复杂表达式会让你的模板变得不那么声明式。我们应该尽量描述应该出现的是什么，而非如何计算那个值。而且计算属性和方法使得代码可以重用。

  ```
  //bad
  <span>
	{{
	
	 fullName.split(' ').map(function (word) {
	
	 return word[0].toUpperCase() + word.slice(1)
	
	 }).join(' ')
	
	}}
  </span>

   //good
	<!-- 在模板中 -->
	
	<span>{{ normalizedFullName }}</span>
	
	// 复杂表达式已经移入一个计算属性
	
	computed: {
	
	 normalizedFullName: function () {
	
	 return this.fullName.split(' ').map(function (word) {
	
	 return word[0].toUpperCase() + word.slice(1)
	
	 }).join(' ')
	
	 }
	
	}
  ```
5. 页面初始化需要的数据请求，一般在 `created`（或`beforeRouter`） 里面进行请求，如果涉及到需要页面加载完成之后的话就用 `mounted`。

   ```
      export default {
        data() {
            return {
            
            }
        },
        created(){
           //在created的时候，视图中的html并没有渲染出来，所以此时如果直接去操作html的dom节点，一定找不到相关的元素
           //有 data 无el
           this.getData()
        },
        mounted() {
            //在mounted中，由于此时html已经渲染出来了，所以可以直接操作dom节点，（此时document.getelementById 即可生效了）。
            this.getData()
        },
        methods: {
            getData() {
                // 请求数据
            }
        },
    }
   ```

6. 带引号的特性值

非空 HTML 特性值应该始终带引号 (单引号或双引号，选你 JS 里不用的那个)。

在 HTML 中不带空格的特性值是可以没有引号的，但这样做常常导致带空格的特征值被回避，导致其可读性变差。

   ```
   //bad //报错
   <button :style={width:sidebarWidth+'px'}></button>

   //good
   <button :style="{ width: sidebarWidth + 'px' }"></button>

   ```
7. 指令缩写
  
使用指令缩写 (用 `:` 表示 `v-bind:` 和用 `@` 表示 `v-on:`)

   ```
    //bad
	<input
	
	 v-bind:value="newTodoText"
	
	 :placeholder="newTodoInstructions"
	
	>
    //good
    <input
	
	 @input="onInput"
	
	 @focus="onFocus"
	
	>
   
  ```

### 注释规范

#### js注释

代码注释在一个项目的后期维护中显的尤为重要，所以我们要为每一个被复用的组件编写组件使用说明，为组件中每一个方法编写方法说明。
以下情况，务必添加注释


1. 公共组件使用说明
2. 各组件中重要函数或者类说明
3. 复杂的业务逻辑处理说明
4. 特殊情况的代码处理说明,对于代码中特殊用途的变量等需要进行注释描述
5. 注释块必须以/**（至少两个星号）开头**/；
6. 单行注释使用//；

 - 单行注释
   ```
   普通方法一般使用单行注释// 来说明该方法主要作用
   ```
 - 多行注释
   ```
   组件使用说明，和调用说明 
   <!--公用组件：数据表格
      /**
      * 组件名称
      * @module 组件存放位置
      * @desc 组件描述
      * @author 组件作者
      * @date 2017年12月05日17:22:43
      * @param {Object} [title]    - 参数说明
      * @param {String} [columns] - 参数说明
      * @example 调用示例
      *  <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
          */
       -->
    ```

#### scss注释
scss 支持两种注释

- 多行注释 - 这些使用 /*和*/ 写入。多行注释都保留在CSS输出。
- 单行注释 - 这些是使用//跟着注释。单行注释不会保留在CSS输出。

	```
	/* 这是
	 * 多行注释
	 * 多行注释
	 * 会在编译好的css中保留输出. */
	body { color: black; }
	
	// 这是单行注释
	// 单行注释不会在css中保留输出
	a { color: blue; }
	
	```