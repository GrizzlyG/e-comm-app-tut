import React, { Component } from 'react';

import Title from './Title';
import { ProductConsumer } from '../context';
import Product from './Product'

class Productlist extends Component {

    render() { 
        return ( 
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        <div className="row">
                         <ProductConsumer>
                             {(val) => {
                                return val.products.map((product) => {
                                    return <Product key={product.id} product={ product } />
                                })
                             }}
                         </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );

    }
}
 
export default Productlist;