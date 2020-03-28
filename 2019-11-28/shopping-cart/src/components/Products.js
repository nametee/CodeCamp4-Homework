import React, { Component } from 'react' 
import { Row, Col } from "antd";
import Product from "./Product";

export class Products extends Component { 
    render() {
        const {products , handlerAddToCart, handleSaveProduct,handleDeleteProduct } = this.props
        return (
            <Row> 
                {
                    products.map(item => 
                        <Col span={8} key = { item.id }>
                            <Product 
                                product={ item } 
                                handlerAdd = { handlerAddToCart } 
                                handleSave = { handleSaveProduct }
                                handleDelete = { handleDeleteProduct }
                            />
                        </Col>    
                    )
                }
            </Row>
        )
    }
}

export default Products
