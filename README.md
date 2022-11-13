### 使用canvas绘制爱心

------

## 注意，直接访问index.html是不行的，你必须开启一个web服务


> 颜色是随机生成的

> config要自己配置，我写了，很简单哒

> 核心没啥，其实就是笛卡尔爱心坐标系

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
