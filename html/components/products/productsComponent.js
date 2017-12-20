import React from 'react'
// import DataGrid from '../datagrid/datagridComponent'

export default class ProductsComponent extends React.Component{
    render(){
        // return <DataGrid url="products.php"></DataGrid>
        const style = {color:'#ddd','font-size':'.25rem'}
        return (
            <div>
                <h2 style={style}>
                    这里是ProductComponent，可以按需引入其他组件(如注释了的代码)。<br/>
                    DataGrid  属于 老师上课演示的内容  由于需要连接数据库内的表，DataGrid 就不显示出，其他 组件 格式就如 DataGrid (位置：component文件夹内) 整理
                </h2>
            </div>
        )
    }
}