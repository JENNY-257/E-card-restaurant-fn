import React from 'react';

const Signup = () => {
  return (
    <div>
        <p className='ml-[520px] mt-[50px] font-medium text-[25px]'>Signup</p>
       <form className='ml-[400px] mt-[50px]'>
            <p><label for="name">Firstname</label></p>
            <p><input className='bg-gray-200 w-[350px] h-[40px] rounded-[10px] px-4' type="name" id="name" placeholder='your first name'/></p>
            <p><label for="name">Lastname</label></p>
            <p><input className='bg-gray-200 w-[350px] h-[40px] rounded-[10px] px-4' type="name" id="name" placeholder='enter your lastname'/></p>
            <p><label for="phone">Phone number</label></p>
            <p><input className='bg-gray-200 w-[350px] h-[40px] rounded-[10px] px-4' type="email" id="phone" placeholder='your phone number'/></p>
            <p><label for="email">Email</label></p>

            <p><input className='bg-gray-200 w-[350px] h-[40px] rounded-[10px] px-4' type="email" id="email" placeholder='yournameexample@gmail.com'/></p>
            <p className=' mt-[10px]'><label for="password">Password</label></p>
            <p><input className='bg-gray-200 w-[350px] h-[40px] rounded-[10px] px-4' type="password" placeholder='password'></input></p>
            <button className='bg-gray-200 w-[350px] h-[40px] mt-[20px] bg' type="submit">SignUp</button>
            <hr className='mt-[40px] font-medium  w-[350px] border-t border-gray-900'></hr>
            <p className='mt-[20px] ml-[40px]'>Already have  an account?<a className='text-yellow-400'>Signin</a></p>
          </form>
    </div>
  );
}

export default Signup;
