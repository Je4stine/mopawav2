
import './Cards.css'

function Cards() {
    return (
      <div className=' my-10 flex flex-col items-center'>
            <h1 className=' font-bold lg:text-4xl text-xl text-center my-10'> To earn money, just need <span className=" lg:text-[100px] text-[50px]">3</span> steps</h1>
        <ol>
          <li style={{ '--accent-color': '#FF6F00' }}>
            <div className="icon"><i className="fa-light fa-lightbulb-exclamation-on"></i></div>
            <div className="title">Make inquiry</div>
            <div className="descr">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</div>
          </li>
          <li style={{ '--accent-color': '#008DC2' }}>
            <div className="icon"><i className="fa-light fa-flower-daffodil"></i></div>
            <div className="title">Make payment</div>
            <div className="descr">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</div>
          </li>
          <li style={{ '--accent-color': '#0B456A' }}>
            <div className="icon"><i className="fa-light fa-chart-line-up"></i></div>
            <div className="title">Get your cabinet and open account</div>
            <div className="descr">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</div>
          </li>
        </ol>
      </div>
    );
  }
  

export default Cards