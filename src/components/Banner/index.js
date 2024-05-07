import React, { useState } from 'react';
import { Cookies } from 'react-cookie';
import { Link } from 'react-router-dom'

const Banner = () => {
	const cookies = new Cookies();
  	const token = cookies.get('userid');

	return (
		<div className='top-sm flex flex-row  border-2 p-lg shadow-xl border-PrimaryCyan rounded-full md:w-[50%] sm:w-[80%] m-auto'>
			<div className='m-auto'>
				<Link to="/"><img src="/assets/images/logo_transparent.a07fd24a828c4bd3e973.png" width="80" height="80"/></Link>
			</div>
			<div className='m-auto'>
				{token ? <Link to='/fillform' className='m-base text-lg text-PrimaryCyan hover:bg-PrimaryCyan hover:text-white hover:rounded-full hover:shadow-lg p-sm'>My Form</Link> : <p></p>}
				{token ? <Link to='/signin' className='m-base text-lg text-PrimaryCyan hover:bg-PrimaryCyan hover:text-white hover:rounded-full hover:shadow-lg p-sm'>My Account</Link> : <Link to='/signin' className='m-base text-lg text-PrimaryCyan hover:bg-PrimaryCyan hover:text-white hover:rounded-full hover:shadow-lg p-sm'>Sign In</Link> }
				<Link to='/fillform' className='m-base text-lg text-PrimaryCyan hover:bg-PrimaryCyan hover:text-white hover:rounded-full hover:shadow-lg p-sm'>About Us</Link>
			</div>
		</div>
	);
}

export default Banner;
