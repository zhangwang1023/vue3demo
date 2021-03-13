class Girl{
  content:string | undefined
  sayHi(){
    return this.content
  }
}

class Lady extends Girl{
  sayHi(){   //重写父类方法
    return super.sayHi()+'闸种'
  }
  sayLove(){
    return '是兄弟就来砍我'
  }
}
let girl = new Lady()
girl.content='你好'
console.log(girl.sayHi(),girl.sayLove())