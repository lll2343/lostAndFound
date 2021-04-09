// knex操作数据库

const {mysql} = require('./../qcloud')

module.exports = async(ctx) => {
    const {lost_or_found } = ctx.request.query
    
    console.log("======lost_or_find======",lost_or_found)

    console.log(ctx.request.body)
    try{
        // 获取数据
        const itemlist = await mysql('item_list')
                                .where('lost_or_found',lost_or_found)
        
        console.log(lost_or_found)
        console.log(itemlist)

        // 向前端传递
        ctx.state.data = {
            code: 0,
            msg:"success",
            itemlist:itemlist
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