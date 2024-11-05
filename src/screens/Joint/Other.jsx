import Budget from '../../assets/images/stat2.png'
import Total from '../../assets/images/stat3.png'


function Other() {
  return (
    <div>

    <div className=' py-10 px-10'>
      </div>
      <div className=' p-5'>
        <h1 className=' font-bold text-center text-3xl'>How much money can you make from a powerbank?</h1>
        
        <div className=' mt-10 '>
          <p className=' text-center mb-10'>
            It is estimated that one powerbank can be used for 2 hours daily at Ksh. 100 per hour. <br/>The income of 1 powerbank is Ksh. 200, and one machine per day is 200 * 6 = Ksh. 1200
          </p>

          <div className=' flex lg:flex-row flex-col items-center lg:justify-around'>
                        
            <div className=''>
                <img src={Budget} alt="usage time" className='h-[250px]'/>
                <h1 className=' font-bold text-5xl'>Ksh. 200 </h1>
                <p className=' '>One Powerbank</p>
            </div>

            <div className=''>
                <img src={Total} alt="usage time" className='h-[250px]'/>
                <h1 className=' font-bold text-5xl'>Ksh. 1200 </h1>
                <p className=' '>One machine</p>
            </div>
          </div>
        </div>
      </div>

      
    
      
    </div>
  )
}

export default Other