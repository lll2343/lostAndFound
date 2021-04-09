// knex操作数据库

const {mysql} = require('./../qcloud')

module.exports = async(ctx) => {
    const {lost_or_found,user_name,item_name,get_pics,
        get_date,get_position,more_detail,tel } = ctx.request.body
        
    
    console.log("======lost_or_find======",lost_or_found)
    console.log("======user_name======",user_name)
    console.log("======item_name======",item_name)
    console.log("======get_pics======",get_pics)
    console.log("======get_date======",get_date)
    console.log("======get_position======",get_position)
    console.log("======more_detail======",more_detail)
    console.log("======tel======",tel)

    console.log(ctx.request.body)
    try{
        // 插入到数据库
        await mysql('item_list').insert({
            lost_or_found,user_name,item_name,get_pics,
            get_date,get_position,more_detail,tel
        })
        
        // 向前端传递
        ctx.state.data = {
            code: 0,
            msg:"success"
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