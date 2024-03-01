import React from 'react'
import Header from '../Components/Header'
import heroLogo from '../Images/herosection_img.png'
import product_2 from '../Images/product_02.jpg'
import product_3 from '../Images/product_03.jpg'
import product_4 from '../Images/product_04.jpg'
import product_5 from '../Images/product_05.jpg'
import product_6 from '../Images/product_06.jpg'
import product_7 from '../Images/product_07.jpg'
import product_8 from '../Images/product_08.jpg'
import ProductCart from '../Components/ProductCart'


export default function Home() {
    return (
        <div className='container mx-auto '>
            {/* hero sectiion  */}
            <div className='relative pb-36'>
                <h1 className='text-19xl  leading-snug 
              text-center font-rakkas text-hero-color '>Delicious<br></br> Burgers</h1>
                <img className='absolute top-20  right-11 w-5/6' src={heroLogo} />
            </div>

            {/* card section  */}
            <h1 className='font-rakkas text-center text-hero-color text-6xl pb-8'> Bestsellers</h1>
            <div className='grid grid-cols-3 gap-8 px-8 '>
                <ProductCart name={"BaconBacon Cheeseburger"} img={product_5} bg={false} />
                <ProductCart name={"Bacon+Cheese +Green Burger"} img={product_2} bg={false} />
                <ProductCart name={"Black Angus Burger"} img={product_3} bg={true} />
                <div className="col-span-2">
                    <ProductCart name={"Bøfsandwich"} img={product_4} bg={true} />
                </div>
                <ProductCart name={"ShroomBacon Burger"} img={product_6} bg={false} />
                <ProductCart name={"CrazyBeefTuna Burger"} img={product_6} bg={false} />
                {/* <ProductCart name={"#stayhome kit: 6 mini burger + 6 Pack Kraft beer"} img={product_7} bg={false} />

<ProductCart name={"#stayhome kit: 6 mini burger + 6 Pack Kraft beer"} img={product_5} bg={false} /> */}

                <div className="col-span-2">
                    <ProductCart name={"Bøfsandwich"} img={product_8} bg={true} />
                </div>
            </div>
          

        </div>
    )
}
