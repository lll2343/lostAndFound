// knex操作数据库

const {mysql} = require('./../qcloud')

module.exports = async(ctx) => {

    const {id} = ctx.request.query
    
    console.log("======id======",id)

    console.log(ctx.request.body)
    try{
        // 获取数据
        const item = await mysql('item_list')
                                .where('id',id)
        
        console.log("----id-----",id)
        console.log(item)

        // 向前端传递
        ctx.state.data = {
            code: 0,
            msg:"success",

            item:item
        }
        console.log("执行成功")
    }catch(e){
        ctx.state = {
            code: -1,
            data: {
                msg:"添加失败"+e.sqlMessage
            }
        }
        console.log("执行错误")
    }
}