//几种对象类型
// let users:string[]=['1','2','3']

// class User{}
// let user:User = new User()

// let admin:()=>string = ()=>{return '123'}


//简单接口案例
interface User{
  name:string,
  age:number,
  sex?:string, //可选属性
  [propname:string]:any,  //任意属性
  say():string
}
interface Teacher extends User{
  weight:number
}
class girl1 implements User{
  name='古力娜扎';
  age=19;
  sex='女';
  height=170;
  say(){return '我是娜扎'}
}
let user1=new girl1()

let user={
  name:'迪丽热巴',
  age:18,
  sex:'女',
  height:170,
  say(){return '你好'}
}
const getName=(user:User):void=>{
  console.log('姓名:',user.name,',性别:',user.sex||'暂无',',身高是:',user.height||'暂无',',她说:',user.say());
}
const getName2=(user:Teacher):void=>{
  console.log('姓名:',user.name,',性别:',user.sex||'暂无',',身高是:',user.height||'暂无');
}
getName(user)
getName(user1)
// getName2(user)  报错 此方法需满足Teacher接口约束 缺少weight属性