import Eight from '../../assets/images/8.png';
import Twelve from '../../assets/images/12.png';
import Stand from '../../assets/images/Stand.png';
import Handshake from '../../assets/images/handshake.png'

export default function Deposit() {
  return (
    <div>
        <h1 className=' font-bold text-green-700 lg:text-3xl text-2xl text-center my-[50px]'>DEPOSIT POLICY</h1>
        <div className=' lg:flex flex-1 justify-around'>
            <div className=' flex flex-col items-center'>
                <div className=' h-[280px] w-[280px] rounded-full bg-[#F5F5F5] flex flex-col justify-center items-center'>
                    <img src={Eight} alt='Eight Slot Cabinet' className=' h-[250px] w-[250px]'/>
                </div>
                <p className='font-bold text-green-700 lg:text-2xl text-xl text-center'>8 Slot at</p>
                <p className='font-bold text-green-700 lg:text-2xl text-xl text-center'>Ksh. 30,000</p>
            </div>

            <div className=' flex flex-col items-center'>
                <div className=' h-[280px] w-[280px] rounded-full bg-[#F5F5F5] flex flex-col justify-center items-center'>
                    <img src={Twelve} alt='Twelve slot Cabinet' className=' h-[250px] w-[250px]'/>
                </div>
                <p className='font-bold text-green-700 lg:text-2xl text-xl text-center'>12 Slot at</p>
                <p className='font-bold text-green-700 lg:text-2xl text-xl text-center'>Ksh. 40,000</p>
            </div>

            <div className=' flex flex-col items-center'>
                <div className=' h-[280px] w-[280px] rounded-full bg-[#F5F5F5] flex flex-col justify-center items-center'>
                    <img src={Stand} alt='A stand' className=' h-[250px] w-[250px]'/>
                </div>
                <p className='font-bold text-green-700 lg:text-2xl text-xl text-center'>Cabinet Stand </p>
                <p className='font-bold text-green-700 lg:text-2xl text-xl text-center'>at Ksh. 5,000</p>
            </div>
        </div>


        <div className=' bg-[#faf5ee] flex flex-1 justify-around mt-10 items-center'>
            <div>
                <div className=' mt-10 lg:h-[180px] h-[120px] w-[120px] lg:w-[180px] bg-[#fbac43] rounded-full lg:text-[80px] text-[50px] flex flex-col justify-center items-center text-white' >70%</div>
                <p className='font-bold text-green-700 lg:text-2xl text-xl text-center'>Partner</p>
            </div>
            <div>
                <img src={Handshake} alt='Handshake' className=' lg:w-[250px] lg:h-[250px] mt-10'/>
            </div>
            <div>
                <div className='mt-10 lg:h-[180px] lg:w-[180px] h-[120px] w-[120px] bg-[#fbac43] rounded-full lg:text-[80px] text-[50px] flex flex-col justify-center items-center text-white'>30%</div>
                <p className='font-bold text-green-700  lg:text-2xl text-xl text-center'>Mopawa</p>
            </div>
        </div>

        <div className=' lg:flex flex-1 justify-around my-10 items-center'>
            <div className='flex items-center'>
                <div className=' bg-green-800 h-[20px] w-[20px] rounded-full mb-10 mr-2'></div>
                <p className=' text-[20px] mb-10 text-center'>
                    Mopawa should refill power bank lost by customer's use.
                </p>
            </div>

            <div className='flex items-center'>
                <div className=' bg-green-800 h-[20px] w-[20px] rounded-full mb-10 mr-2'></div>
                <p className=' text-[20px] mb-10 text-center'>
                    Revenue distribution should be after VAT deductions.
                </p>
            </div>
        </div>
    </div>
  )
};
