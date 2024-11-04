import PowerBank from '../../assets/images/newpowerbank.png'

const Product =()=>{
    return (
        <div className=' p-5 w-full flex flex-col items-center'>
            <h1 className=' font-bold text-2xl text-center'>Our power banks have all 3 cables Micro/Type-C/iOS</h1>
            <h2 className=' text-center my-5 '>Compatible with 99% of commonly used mobile devices in the market</h2>
            <img src={PowerBank} alt="labled powerbank" className=' lg:h-[800px] object-cover'/>
        </div>
    )
}

export default Product

