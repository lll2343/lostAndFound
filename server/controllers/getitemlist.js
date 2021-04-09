// knex操作数据库

const {mysql} = require('./../qcloud')

module.exports = async(ctx) => {
<<<<<<< HEAD
<<<<<<< HEAD
    const {lost_or_found} = ctx.request.query
    
    console.log("======lost_or_find======",lost_or_found)

    console.log(ctx.request.body)
    try{
        // 获取数据
        const itemlist = await mysql('item_list')
                                .where('lost_or_found',lost_or_found)
        
        console.log(lost_or_found)
        console.log(itemlist)

=======
=======
>>>>>>> 570e55abb70dc8b54c9dc0f202f33dac7d90d0d3
    const { lost_or_found } = ctx.request.query
    
    console.log("======lost_or_find======",lost_or_found)

    console.log(ctx.request.query)

    try{
        // 通过 lost_or_found进行查找
        const res = await mysql('item_list')
                          .where('lost_or_found',lost_or_found)

        console.log(res)

        
<<<<<<< HEAD
>>>>>>> 570e55abb70dc8b54c9dc0f202f33dac7d90d0d3
=======
>>>>>>> 570e55abb70dc8b54c9dc0f202f33dac7d90d0d3
        // 向前端传递
        ctx.state.data = {
            code: 0,
            msg:"success",
<<<<<<< HEAD
<<<<<<< HEAD
            itemlist:itemlist
=======
            itemList: res
>>>>>>> 570e55abb70dc8b54c9dc0f202f33dac7d90d0d3
=======
            itemList: res
>>>>>>> 570e55abb70dc8b54c9dc0f202f33dac7d90d0d3
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