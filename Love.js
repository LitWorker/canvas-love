/**
 * 爱心实现
 * By.烟雨 Litworke
 */

export class Love{

    constructor(){
        this.can = document.querySelector("canvas")
        this.ctx = this.can.getContext("2d")

        this.w = window.innerWidth
        this.h = window.innerHeight

        this.can.width = this.w
        this.can.height = this.h

        this.ctx.translate(this.w / 2, this.h / 2)
        // 存放的容器池
        this.list = []
        this.deg = Math.PI
    }

    /**
     * 生成配置...
     * @param {*} param0 
     */
    setConfig({
            // 放大系数
            scale=20,
            // 半径
            r=3,
            // 弧度变量
            change=0.025,
            // 数量
            count=10
        })
    {
        this.scale = scale
        this.r = r
        this.change = change
        this.count = count
    }
    /**
     * 创建关联信息
     * @param {*} x 
     * @param {*} y 
     */
    create(x,y){
        let count = this.count
        for (let i = 0; i < count; i++) {
            const deg = Math.PI * 2 * Math.random()
			const sx = Math.cos(deg) * Math.random() * 0.4
			const sy = Math.sin(deg) * Math.random() * 0.4
			const len = 20 + Math.random() * 130
            this.list.push({
                x:x,
                y:y,
                sx:sx,
                sy:sy,
                len:len,
                r:this.r,
                color:this.createColor()
            })
        }
    }
    /**
     * 更新节点...
     */
    update(){
        if (this.deg > 0) {
			this.deg -= this.change
            let {x,y} = this.createCoordinate(this.deg)
            // 爱心创建...
			this.create(x, -y)
			this.create(-x, -y)
		}
		this.list.forEach(item => {
			item.x += item.sx
			item.y += item.sy
			if (this.deg <= 0) { // 如果心已经画完，这些点就逐渐消失
				item.len -= 1
			}
		})
		this.list = this.list.filter(item => item.len > 0)
    }

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
    /**
     * 绘制
     */
    draw(){
        let ctx = this.ctx
        ctx.clearRect(-this.w / 2, -this.h / 2, this.w, this.h)
		this.list.forEach(function (item) {
			ctx.beginPath()
			ctx.arc(item.x, item.y, item.r, 0, Math.PI * 2)
			ctx.fillStyle = item.color
			ctx.fill()
		})
    }
    // 走你...
    setup(){
        this.update()
        this.draw()
        if (this.list.length === 0) {
			setTimeout(()=> {
				// 重新开始下一个心
				this.deg = Math.PI
				this.setup()
			}, 100)
		} else {
			requestAnimationFrame(()=>this.setup())
		}
    }
    // 随机颜色生成器...写法比较low逼
    createColor(){
        let str="#";
        for(let i=0; i<3; i++){
            str += Math.floor(Math.random()*256).toString(16).padStart(2,"0");
        }
        return str;
    }
}
