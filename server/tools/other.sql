-- itemList表
-- 1. id 依次递增
-- 2. lost_or_found 1 for lost 0 for found
-- 3. 什么时候提价的
-- 4. 用户名
-- 5. 失物名称
-- 6. 图片 字符串类型,以','分割，传回去重新转数组
-- 7. 日期
-- 8. 地点
-- 9. 更多
-- 10. 联系方式

drop Table if exists `item_list`;

create table `item_list`(
    `id` int not null auto_increment,
    `lost_or_found` tinyint not null,
    `create_time` timestamp not null default CURRENT_TIMESTAMP,
    `user_name` varchar(100) not null,
    `item_name` varchar(100) not null,
    `get_pics` text not null,
    `get_date` varchar(100) not null,
    `get_position` text not null,
    `more_detail` text not null,
    `tel` varchar(100) not null,
    primary key(`id`)
)default charset=`utf8`;