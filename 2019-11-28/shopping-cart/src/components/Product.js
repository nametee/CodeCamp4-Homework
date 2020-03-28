import React, { Component } from 'react' 
import { Card, Typography, Row, Col, Button, Modal, Tooltip, Input  } from "antd";  
const { TextArea } = Input
const { Title , Paragraph, Text } = Typography
const { Meta } = Card


export class Product extends Component { 
    state = {
        visible: false,
        id: '',
        name: '',
        description: '',
        price: 0,
        image: '',
        expand: false,
        counter: 0
    }

    showModal = (product) => () => { 
        this.setState({
          id:  product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          image: product.image,
          visible: true,
        });
      };

    handleOk = () => { 
        this.setState({
            visible: false,
        },() => { 
            const pro = {
                id: this.state.id,
                name: this.state.name,
                description: this.state.description,
                price: this.state.price,
                image: this.state.image
            }
            this.props.handleSave(pro)
        });
        
    };

    handleCancel = () => { 
        this.setState({
            visible: false,
        });
    };

    handleNameChange = ({ target: { value } }) => { 
        this.setState({
            name: value,
        });
    }

    handleDescriptionChange = ({ target: { value } }) => { 
        this.setState({
            description: value,
        });
    }

    handlePriceChange = ({ target: { value } }) => { 
        this.setState({
            price: value,
        });
    }

    handleImageChange = ({ target: { value } }) => { 
        this.setState({
            image: value,
        });
    }

    handleDeleteProduct = (product) => () => {
        //console.log(product)
        this.props.handleDelete(product) 

    }

    typoExpand = () => { 
        this.setState({
            expand: true,
            counter: !this.state.expand
                ? this.state.counter + 0
                : this.state.counter + 1
        })
    };

    typoClose = () => { 
        this.setState({
            expand: false,
            counter: !this.state.expand
                ? this.state.counter + 0
                : this.state.counter + 1
        })
    };

    render() {
        const { product, handlerAdd  } = this.props
        return (
            <Card
                key={ this.state.counter }
                size='small'
                hoverable  
                cover={ <img 
                            src = { product.image } 
                            width = { 200 } 
                            height = { 200 } 
                            
                        /> }
            >   
                <div style={ { width: 200, height: 80 }} > 
                    <Text type="warning" >{ product.name }</Text> 
                    <Tooltip title="Edit">
                        <Button type="primary" shape="circle" size={'small'} onClick= { this.showModal(product) }>...</Button> 
                    </Tooltip> 
                    <Tooltip title="Delete">
                        <Button type="danger" shape="circle" size={'small'} icon="delete" onClick= { this.handleDeleteProduct(product) } /> 
                    </Tooltip>
                    <Modal
                        title= { "Edit Product : "  +  product.name}
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                    <Text> Name :  </Text> 
                    <Input 
                        placeholder="Product name" 
                        value={ this.state.name } 
                        onChange={ this.handleNameChange}
                    />
                    <Text> Description :  </Text> 
                    <TextArea 
                        placeholder="Product Description" 
                        value={ this.state.description } 
                        autoSize={{ minRows: 3, maxRows: 10 }}
                        onChange={ this.handleDescriptionChange}
                    /> 
                    <Text> Price :  </Text> 
                    <Input 
                        placeholder="Product price" 
                        value={ this.state.price } 
                        onChange={ this.handlePriceChange}
                    />
                    <Text> Image :  </Text> 
                    <TextArea 
                        placeholder="Product image" 
                        value={ this.state.image } 
                        autoSize={{ minRows: 3, maxRows: 5 }}
                        onChange={ this.handleImageChange}
                    />
                    </Modal>
                </div>
                <Paragraph ellipsis={{
                    rows: 3,
                    expandable: true,
                    onExpand: this.typoExpand
                }}>
                    { product.description }
                </Paragraph>
                {this.state.expand && <a onClick={this.typoClose}>Close</a>}
                <Row type="flex" >
                    <Col span={12}>
                        <Text mark>
                            Price : {product.price}
                        </Text>
                    </Col>
                    <Col span={12}>
                        <Button 
                            type = "primary" 
                            size = "small" 
                            onClick = { handlerAdd(product) } 
                        >
                            Add to cart
                        </Button>
                    </Col>
                </Row>
            </Card>
        )
    }
}

export default Product
