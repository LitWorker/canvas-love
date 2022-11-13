> 大家都是直男，直来直去就好了，要什么花里胡哨?

### 使用canvas绘制爱心
###### 虽然有点报看(小声bb)

------

## 注意，直接访问index.html是不行的，你必须开启一个web服务


> 颜色是随机生成的

> config要自己配置，我写了，很简单哒

> 核心没啥，其实就是笛卡尔爱心坐标系:

```js
/**
* 生成笛卡尔爱心坐标系
* @param deg
*/
createCoordinate(deg){
	// 笛卡尔爱心公式
	let x = this.scale * (16 * Math.sin(deg) * Math.sin(deg) * Math.sin(deg))
	let y = this.scale * (13 * Math.cos(deg) - 5 * Math.cos(2 * deg) - 2 * Math.cos(3 * deg) - Math.cos(4 * deg))
	return {x,y}
}
```


## 涉及知识点:

+ es6 使用类思想
+ 使用模块引入，不适用`vite`、`webpack`等工具打包，没必要的
+ 面向对象开发
+ 每个事件是独立的，互不干扰
+ 优良的写代码写注释的好习惯......

> 配置设置

```js
// 配置编写
const config = {
    // 放大系数
    scale:30,
    // 半径
    r:2,
    // 弧度变量
    change:0.03,
    // 数量,越大越密集，当然，也会越卡...
    count:10
}
love.setConfig(config)
```

> 运行

```js
requestAnimationFrame(()=>love.setup())

//或者定时器...一秒刷新60次

setInterval(() => {
	love.setup()
}, 1000 / 60);
```			
