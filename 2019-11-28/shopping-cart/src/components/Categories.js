import React, { Component } from 'react' 
import { Menu, Icon, Button } from 'antd'; 

export class Categories extends Component {  
    render() {
        const { categories , handlerClick } = this.props
        return (
        <div> 
            <Menu 
                mode="inline"
                theme="dark" 
            >
                {categories.map(category => 
                    <Menu.Item 
                        key={ category.id } 
                        onClick={ handlerClick(category.id) } 
                    > 
                        <span>{category.name}</span>
                    </Menu.Item>
                )} 
            </Menu>
      </div>
        )
    }
}

export default Categories
