import React from 'react';
import { Link } from 'react-router-dom';
const UserDashborad = () => {
  return (
    <div>
        <div className='flex ml-[350px]'>
            <div>
            <div className='bg-green-600 p-[40px] m-[20px] h-[30px] flex justify-center items-center text-gray-100 text-[30px]'>30</div>
            <p className='ml-[40px]'>Payed days</p>
            </div>
            <div>
            <div className='bg-green-600 p-[40px] m-[20px] h-[30px] flex justify-center items-center text-gray-100 text-[30px] '>15</div>
            <p className='ml-[40px]'>Used days</p>
            </div>
            <div>
            <div className='bg-green-600 p-[40px] m-[20px] h-[30px] flex justify-center items-center text-gray-100 text-[30px]'>15</div>
            <p className='ml-[25px]'>Remaining days</p>
            </div>
        </div>
        <div className='flex justify-center items-center'>
                <div className='m-[80px]'>
                    <p  style={{ marginTop: '15px' }}>Firstname : Jean</p>
                    <p  style={{ marginTop: '15px' }}>lastname : Iradukunda</p>
                </div>
                <div className='m-[80px]'>
                    <p  style={{ marginTop: '15px' }}>Email : jean@gmail.com</p>
                    <p  style={{ marginTop: '15px' }}>Phone number : 078698724</p>
                </div>
            </div>
            <div className='flex'>
            <div className='bg-green-600 p-[90px] h-[500px] text-gray-100 flex justify-center items-center rounded-[30px] ml-[0px] '> 
                    <nav className=' justify-center items-center'>
                    <ul>
                        <Link className='text-[18px] p-[10px]' to=""><li>Home</li></Link>
                        <Link className='text-[18px] p-[10px]' to=""><li>About</li></Link>
                        <Link className='text-[18px] p-[10px]' to=""><li>Contact </li></Link>
                        <Link className='text-[18px] p-[10px]' to=""><li>Logout</li></Link>
                    </ul>
                </nav>
                </div>
                <div>
                    <p className='ml-[250px] font-medium text-[20px]'>Time of payment days</p>
                    {/* <hr className='w-[200px] ml-[250px] border-gray-500'></hr> */}
                  <div className='ml-[0px] mt-[20px]'>
                    <table className=" w-full h-full">
                        <tr className='border-b border-gray-200'>
                            <th  className="px-[50px] py-[10px]">Day</th>
                            <th className="px-[50px] py-[10px]">Month</th>
                            <th className="px-[50px] py-[10px]">Year</th>
                            <th className="px-[50px] py-[10px]">Time</th>
                            <th className="px-[50px] py-[10px]">Status</th>
                        </tr>
                        <tr className="border-b border-gray-9000">
                            <td className="px-[90px] py-[10px]">Monday</td>
                            <td className="px-[90px] py-[10px]">January</td>
                            <td className="px-[90px] py-[10px]">2023</td>
                            <td className="px-[90px] py-[10px]">19:30PM</td>
                            <td className="px-[90px] py-[10px]">Payed</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="px-[90px] py-[10px]">Monday</td>
                            <td className="px-[90px] py-[10px]">May</td>
                            <td className="px-[90px] py-[10px]">2023</td>
                            <td className="px-[90px] py-[10px]">19:30PM</td>
                            <td className="px-[90px] py-[10px]">Payed</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="px-[90px] py-[10px]">Monday</td>
                            <td className="px-[90px] py-[10px]">August</td>
                            <td className="px-[90px] py-[10px]">2023</td>
                            <td className="px-[90px] py-[10px]">19:30PM</td>
                            <td className="px-[90px] py-[10px]">Payed</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="px-[90px] py-[10px]">Monday</td>
                            <td className="px-[90px] py-[10px]">July</td>
                            <td className="px-[90px] py-[10px]">2023</td>
                            <td className="px-[90px] py-[10px]" >19:30PM</td>
                            <td  className="px-[90px] py-[10px]">Payed</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="px-[90px] py-[10px]">Monday</td>
                            <td className="px-[90px] py-[10px]">October</td>
                            <td className="px-[90px] py-[10px]">2023</td>
                            <td className="px-[90px] py-[10px]">19:30PM</td>
                            <td className="px-[90px] py-[10px]">Payed</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="px-[90px] py-[10px]">Monday</td>
                            <td className="px-[90px] py-[10px]">June</td>
                            <td className="px-[90px] py-[10px]">2023</td>
                            <td className="px-[90px] py-[10px]">19:30PM</td>
                            <td className="px-[90px] py-[10px]">Payed</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="px-[90px] py-[10px]">Monday</td>
                            <td className="px-[90px] py-[10px]">March</td>
                            <td  className="px-[90px] py-[10px]">2023</td>
                            <td className="px-[90px] py-[10px]">19:30PM</td>
                            <td className="px-[90px] py-[10px]">Payed</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="px-[90px] py-[10px]">Monday</td>
                            <td className="px-[90px] py-[10px]">January</td>
                            <td className="px-[90px] py-[10px]">2023</td>
                            <td className="px-[90px] py-[10px]">19:30PM</td>
                            <td className="px-[90px] py-[10px]">Payed</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="px-[90px] py-[10px]">Monday</td>
                            <td className="px-[90px] py-[10px]">February</td>
                            <td className="px-[90px] py-[10px]">2023</td>
                            <td className="px-[90px] py-[10px]">19:30PM</td>
                            <td className="px-[90px] py-[10px]">Payed</td>
                        </tr>
                    </table>
                  </div>
                </div>
            </div>
    </div>
  );
}

export default UserDashborad;
