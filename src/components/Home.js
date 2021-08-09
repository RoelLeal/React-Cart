import React, { Fragment } from 'react';
import Itemcard from './Itemcard'
import data from '../Data'

const Home = () => {
  return (
    <Fragment>
      <h1 className="text-center mt-3">All items</h1>
      <section className="py-4 container">
          <div className="row justify-content-center">
            {data.productData.map((item, index) => {
              return(
                <Itemcard //Component item card with props of Data.js
                    title={item.title}
                    desc={item.desc} 
                    img={item.img} 
                    price={item.price} 
                    alt={item.alt} 
                    item={item}
                    key={index} 
                />                 
              )          
            })}        
                     
          </div>
      </section>                          
    </Fragment>
  )
}

export default Home;