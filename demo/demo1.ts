class Greeter {
  constructor(public str: string) {} //构造函数 创建对象自动执行
  greet() {
      return "Hello, " + this.str
  }
  get _str(){return this.str+'111'}  //包装输出
  set _str(str:string){this.str=str+'222'} 
}

let g = new Greeter("world")
console.log(g.greet())
console.log(g._str)