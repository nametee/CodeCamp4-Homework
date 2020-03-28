import React, { Component } from 'react'
import { Row, Col, Icon } from "antd"
import Categories from "./components/Categories"
import Products from "./components/Products"
import Cart from "./components/Cart"  
import { uniqueId } from "lodash"
import 'antd/dist/antd.css'
import axios from "axios"

export class ShoppingCart extends Component {
     /* categories: [ { id: 1, name: "Tents", createdAt: "2020-02-16T16:05:05.000Z", updatedAt: "2020-02-16T16:05:05.000Z" },
            { id: 2, name: "Stove", createdAt: "2020-02-16T16:05:05.000Z", updatedAt: "2020-02-16T16:05:05.000Z" },
            { id: 3, name: "Lanterns", createdAt: "2020-02-16T16:05:05.000Z", updatedAt: "2020-02-16T16:05:05.000Z" }] */
    /* productList: [ 
            { 
                id: 1, 
                ProductCategoryId: 1,
                name: "Nordisk Ydun 5.5", 
                image: "https://cdn-s3.touchofmodern.com/products/000/422/869/466bfe7d563d2b181d332a2757313971_large.jpg?1461092640", 
                description: "The Ydun 5.5 // Cotton Tent is a real family tent which sleeps 4 people. Very easy to pitch with one pole front and rear, it has a double entrance which opens up for full access to the outdoor. Windows on each side have curtains that are adjustable from inside. The built in floor unfolds for an easy clean, the cotton fabric provides excellent inner climate and the large opening provides full panoramic views of the outside.",
                price: 25000,
                createdAt: "2020-02-16T16:05:05.000Z", 
                updatedAt: "2020-02-16T16:05:05.000Z" 
            },
            { 
                id: 2, 
                ProductCategoryId: 1,
                name: "Nordisk Alfheim 12.6", 
                image: "https://cdn-trekvogel.brickfox.net/products/14xxxx-Alfheim-12.6-10.jpg", 
                description: "The Alfheim 12.6 is a true signature tent with its classic tepee construction. With its simple one pole construction it is very easy to pitch making it ideal for camping, glamping, group trips or simply as a show off tent with room enough for 6-8 people. The tepee construction offers optimal ventilation and it even has an integrated internal ventilation system allowing you to adjust the rooftop with a simple string pull from inside the tent. The Alfheim can be equipped with an additional zip-in groundsheet and tailored cabins, which are equipped with mesh in the top, allowing you to stargaze if you also open the rooftop.",
                price: 25000,
                createdAt: "2020-02-16T16:05:05.000Z", 
                updatedAt: "2020-02-16T16:05:05.000Z" 
            },
            { 
                id: 3, 
                ProductCategoryId: 1,
                name: "Nordisk Asgard 7.1", 
                image: "https://dn.lnwfile.com/_/dn/_raw/nk/z6/w8.jpg", 
                description: "The Asgard 7.1 is a classic bell tent but in a smaller size. A great tent for 2-3 people, it is very easy to pitch thanks to the single central pole construction. The framed door keeps the large opening in place and the vertical sides offer full utilisation of the ground area which has an integrated groundsheet. In spite of its relatively small size, it also offers ground level windows equipped with mosquito net which can be opened for better view and ventilation, the front door also has a built-in mosquito net. The Asgard 7.1 can also be upgraded with a tailored cabin. A tent that really stands out.",
                price: 25000,
                createdAt: "2020-02-16T16:05:05.000Z", 
                updatedAt: "2020-02-16T16:05:05.000Z" 
            },
            { 
                id: 4, 
                ProductCategoryId: 1,
                name: "Nordisk Utgard 13.2", 
                image: "https://thailandoutdoorshop.com/blog/wp-content/uploads/2018/10/utgard-13-2-m2-142010-nordisk-classic-retro-square-tent-technical-cotton-glamping-by-etnythjem-denmark-2017-8.jpg", 
                description: "The Utgard 13.2 has room for up to 6 people and the square shape makes it ideal for glamping décor and furniture. A door and two large windows at each end combined with two small windows at ground level at each side ensure great ventilation, visibility and light, all windows and doors are also equipped with mosquito nets. The breathable cotton fabric keeps the tent cool even on a hot summer's day. The Utgard can be equipped with accessories such as the tailored zip-in floor and two detachable cabins.",
                price: 45500,
                createdAt: "2020-02-16T16:05:05.000Z", 
                updatedAt: "2020-02-16T16:05:05.000Z" 
            }, 
            { 
                id: 5, 
                ProductCategoryId: 2,
                name: "Coleman GUIDE SERIES® COMPACT DUAL FUEL™ STOVE", 
                image: "https://i.pinimg.com/originals/3c/fe/84/3cfe84f53bc9ee945517b272b9e845bb.jpg", 
                description: "Cook breakfast, lunch and dinner in any weather on your backpacking trip with the Coleman® Guide Series® Compact Dual Fuel™ Stove. The cooking surface fits a 6-in. pan above a Band-a-Blu™ burner that delivers 10,000 BTUs of cooking power. With Dual Fuel™ Technology, which gives you the option of using Coleman® Liquid Fuel or unleaded gasoline, you can take less fuel with you to save money and packing space. Wind baffles help shield your flame from the wind so the most heat possible goes into making your meal.",
                price: 3300,
                createdAt: "2020-02-16T16:05:05.000Z", 
                updatedAt: "2020-02-16T16:05:05.000Z" 
            },
            { 
                id: 6, 
                ProductCategoryId: 2,
                name: "Coleman GUIDE SERIES® POWERHOUSE™ 414 STOVE", 
                image: "https://i5.walmartimages.com/asr/2f34dde6-5ee1-465e-8741-0ac13b82fb19_1.6b9943cea0433245602610d2428c0b1e.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff", 
                description: "Cook breakfast, lunch and dinner for the entire camp in any weather on the Coleman® Guide Series® Powerhouse™ Dual Fuel™ Stove. The cooking surface offers plenty of room for a 12-in. and 10-in. pan to simultaneously sit above two Band-a-Blu™ burners that deliver a total 17,000 BTUs of cooking power. With Dual Fuel™ Technology, which gives you the option of using Coleman® Liquid Fuel or unleaded gasoline, you can take less fuel with you to save money and packing space. WindBlock™ panels help shield your flame from wind and can adjust in and out to fit various pan sizes. When the meal is over, the chrome-plated grate removes for simple and quick cleanup.",
                price: 8900,
                createdAt: "2020-02-16T16:05:05.000Z", 
                updatedAt: "2020-02-16T16:05:05.000Z" 
            },
            { 
                id: 7, 
                ProductCategoryId: 2,
                name: "MSR PocketRocket® Deluxe Stove", 
                image: "https://www.msrgear.com/dw/image/v2/BDJM_PRD/on/demandware.static/-/Sites-msr-master-catalog/default/dw41464e4c/images/large/10955-msr-pocketrocket-deluxe-lifestyle-01.jpg?sw=400&sh=300&sm=fit", 
                description: "This enhanced PocketRocket stove boasts premium features, including a pressure regulator that makes it ideal for all-condition environments, offering consistently faster boil times than non-regulated canister-mounted stoves. Just a smidge heavier (10 g/ 0.3 oz, or the weight of two nickels) than the PocketRocket 2 stove, this ultralight deluxe version features the most durable push-start Piezo Igniter we've ever built and a broad burner head for better heat distribution and simmering. For backpackers traveling fast & light on the trail, or a quick weekend in the Cascade Range, this deluxe model offers one of the best overall cooking experiences in its ultralight class.",
                price: 6800,
                createdAt: "2020-02-16T16:05:05.000Z", 
                updatedAt: "2020-02-16T16:05:05.000Z" 
            },
            { 
                id: 8, 
                ProductCategoryId: 3,
                name: "Coleman SEASONS LIMITED-EDITION FUEL-POWERED LANTERN", 
                image: "https://i.pinimg.com/474x/7c/75/ca/7c75ca1e93e9f0a17297b2de910ed6bd.jpg", 
                description: "With gorgeous retro design and cinema-themed graphics, the limited-edition Coleman Seasons Lantern makes for an eye-catching collector's item, but it's so much more than décor. This versatile, fuel-powered lantern can provide up to 800 lumens of bright, long-lasting light for your outdoor activities. Coleman Camp Fuel uses less fuel than propane-powered lanterns, so you'll save money and get up to 7 hours of run time on a single tank. The brightness can be adjusted via a dimmer knob to emit the ideal amount of light in any setting—from camping excursions to backyard parties. Plus, the lantern is built All-Season Strong, so you can trust it to stay lit in frigid conditions. When not in use, your Seasons Lantern can be stored in the included hardshell carrying case, ensuring flawless operation for years to come.",
                price: 13000,
                createdAt: "2020-02-16T16:05:05.000Z", 
                updatedAt: "2020-02-16T16:05:05.000Z" 
            },
            { 
                id: 9, 
                ProductCategoryId: 3,
                name: "Coleman POWERHOUSE® DUAL FUEL™ LANTERN", 
                image: "https://dn.lnwfile.com/_resize_images/600/600/bk/xz/y5.jpg", 
                description: "Light up the campsite in any weather with the efficient Coleman® Powerhouse® Dual Fuel™ Lantern. Dual Fuel™ technology gives you the convenience of using Coleman® Liquid Fuel or unleaded gasoline. And since one gallon of Coleman® Liquid Fuel lasts as long as 4.5 cylinders of propane, you can take less fuel with you to save money and packing space. The 2-mantle design of this lantern creates a steady, bright glow of up to 800 lumens of light that reaches up to 22 meters away. A quick match strike is all you need to get your lantern started, then simply dial in the perfect brightness with the adjustable control knob. Once your lantern is lit, the fuel tank provides a steady base when placed on a table, and the bail handle allows for easy hanging. When you're ready to head home, so is this lantern since it doesn't require any disassembly, which means it's always ready to go with you on your next bright adventure.",
                price: 4500,
                createdAt: "2020-02-16T16:05:05.000Z", 
                updatedAt: "2020-02-16T16:05:05.000Z" 
            }
        ]*/
    state = {
        categories: [],
        productList: [],
        cart: { 
            totalPrice: 0,
            productList: []
        },
        selectedCategoryId : null, 
    }

    handlerCategoryClick =(id) => () =>{
        this.setState({ selectedCategoryId: id })
    }

    handlerAddToCart = (product) => () =>{  
        this.setState(state => {
            return state.cart.productList.find( item => item.product.id === product.id  ) ?  
                {
                    cart:{
                        totalPrice: +state.cart.totalPrice + +product.price ,
                        productList: state.cart.productList.map(item => 
                            item.product.id === product.id ? 
                            { ...item, amount: item.amount + 1 } : 
                            item 
                        )
                    }
                }
            :
                {
                    cart:{
                        totalPrice: +state.cart.totalPrice + +product.price ,
                        productList: [ ...state.cart.productList, { product, uid: uniqueId(), amount: 1 } ]   
                    }
                }
        } ) 
    }

    handlerRemoveOrderProduct = (product) => () =>{ 
        this.setState(state => {
            const item = state.cart.productList.find( item => item.product.id === product.id  ) 
            return  {
                cart: { 
                    totalPrice: +state.cart.totalPrice - (+item.amount * +item.product.price) ,
                    productList: state.cart.productList.filter(item =>  item.product.id !== product.id  )
                }
                   
            } 
        })
    }

    saveProduct = async (product) => {
        let result = await axios.put('http://localhost:3030/edit-product/' + product.id,
        {
            name: product.name,
            description: product.description,
            price: product.price,
            image: product.image
        })
        console.log(result)
    }

    deleteProduct = async (product) => {
        let result = await axios.delete('http://localhost:3030/delete-product/' + product.id)
        console.log(result)
    }

    handleSaveProduct = (product) =>{ 
        this.setState(state => ({
            productList: state.productList.map( item => 
                item.id === product.id ? 
                { ...item, name: product.name, description: product.description, price: product.price, image: product.image }  :
                { ...item } 
             )
        }),() => {  
            this.saveProduct(product) 
        })
    }

    handleDeleteProduct = (product) =>{ 
        this.setState(state => ({
            productList: state.productList.filter( item =>  item.id !== product.id )
        }),() => {  
            this.deleteProduct(product) 
        })
    }


    handlerSaveOrder = async () =>{ 
        const  { totalPrice,  productList }   = this.state.cart 
        let orderTotalPrice = totalPrice
        let result = await axios.post('http://localhost:3030/add-order',{ 
            totalPrice: orderTotalPrice,
            orderList: productList 
        })
        console.log(result)
    }
    
    componentDidMount = async () => {
        const resultCategoies = await axios.get('http://localhost:3030/product-category')  
        const resultProducts = await axios.get('http://localhost:3030/product')  
        this.setState({
            categories: resultCategoies.data ,
            productList: resultProducts.data,
            selectedCategoryId: resultCategoies.data[0].id 
        })
    }

    render() {
        const { categories , productList , selectedCategoryId,cart } = this.state
        return (
            <Row type="flex"  >
                <Col span={4}>
                    <Categories 
                        categories = {categories} 
                        handlerClick={ this.handlerCategoryClick } 
                    />
                </Col>
                <Col span={12}>
                    <Products 
                        products = { productList.filter( product => product.ProductCategoryId === selectedCategoryId )}
                        handlerAddToCart = { this.handlerAddToCart }
                        handleSaveProduct = { this.handleSaveProduct }
                        handleDeleteProduct = { this.handleDeleteProduct }
                    /> 
                </Col>
                <Col span={8}>
                    <Cart 
                        totalPrice = { cart.totalPrice } 
                        productList = { cart.productList } 
                        handlerRemove = {  this.handlerRemoveOrderProduct }
                        handlerSave = {  this.handlerSaveOrder }
                    />
                </Col>
            </Row>
        )
    }
}

export default ShoppingCart
