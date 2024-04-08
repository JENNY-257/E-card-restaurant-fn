import React from 'react';
// import rest from '../images/rest.jpg'
const WelcomeLogin = () => {
  return (
    <div>
      <div className='flex' >
        {/* <img src={rest}/> */}
        <div className='bg-green-600 w-[400px] h-[600px] flex flex-col justify-center items-center'>
        <p className='text-yellow-400 text-[40px]'>Welcome</p>
        <p className='text-gray-100 text-[20px] h-[10px]'>E-card restaurant management system</p>
        </div>
        <div>
          <nav>
            <ul className='flex ml-[400px]'>
              <a href="#" className='p-[15px]'><li>Home</li></a>
              <a href="#" className='p-[15px]'><li>About</li></a>
              <a href="#" className='p-[15px]'><li>ContactUs</li></a>
              <a href="#" className='p-[2px] bg-green-600  text-gray-100 mt-[10px] w-[70px] h-[40px] items-center'><li>Signup</li></a>

            </ul>
          </nav>
          <p className='ml-[70px] font-medium text-[20px] mt-[60px]'>Login</p>
          <p className='ml-[70px]'>Login with your valid cridetuals</p>
          <form className='ml-[70px] mt-[50px]'>
            <p><label for="email">Email</label></p>
            
            <p><input className='bg-gray-200 w-[350px] h-[40px] rounded-[10px] px-4' type="email" id="email" placeholder='yournameexample@gmail.com'/></p>
            <p className=' mt-[30px]'><label for="password">Password</label></p>
            <p><input className='bg-gray-200 w-[350px] h-[40px] rounded-[10px] px-4' type="password" placeholder='password'></input></p>
            <p className='mt-[10px]'><a className='text-yellow-400 ml-[200px] ' href="#">Forgot password?</a></p>
            <button className='bg-gray-200 w-[350px] h-[40px] mt-[20px] bg' type="submit">Signin</button>
            <hr className='mt-[40px] font-medium  w-[350px] border-t border-gray-900'></hr>
            <p className='mt-[20px] ml-[40px]'>Don't have account?<a className='text-yellow-400'>Signup</a></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WelcomeLogin;
