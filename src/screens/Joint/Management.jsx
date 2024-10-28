
import { FaChargingStation } from "react-icons/fa";

function Management() {
  return (
    <div className=" bg-green-600 p-5">
        <h1 className=" text-white font-bold text-3xl mb-10 text-center">
            Independent Management System
        </h1>
        <p className=" text-white text-center">
            The operation status of each device and the profits can be viewed and reflected in real time in the management system.
        </p>

        <div className="grid place-items-center min-w-screen">
            <div className=" lg:w-[50%] min-h-0 bg-white rounded-md p-10 my-10">
                <div className=" grid lg:grid-cols-3 grid-cols-2 lg:gap-5 gap-3 place-items-center">
                  <div className=" flex flex-col items-center">
                      <i className=" fa fa-bar-chart fa-3x"></i>
                      <h1 className=" text-center">Revenue data</h1>
                  </div>
                  <div className=" flex flex-col items-center">
                      <i className=" fa fa-user fa-3x"></i>
                      <h1 className=" text-center">Account management</h1>
                  </div>
                  <div className=" flex flex-col items-center">
                      <i className=" fa fa-pie-chart fa-3x"></i>
                      <h1 className=" text-center">Usage statistics</h1>
                  </div>
                  <div className=" flex flex-col items-center">
                      <i className=" fa fa-list-alt fa-3x"></i>
                      <h1 className=" text-center">Order management</h1>
                  </div>
                  <div className=" flex flex-col items-center">
                      <i className=" fa fa-laptop fa-3x"></i>
                      <h1 className=" text-center">Online devices</h1>
                  </div>
                  <div className=" flex flex-col items-center">
                      <FaChargingStation size={45}/>
                      <h1 className=" text-center">Device management</h1>
                  </div>

                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Management