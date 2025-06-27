import React from 'react';
import { MdFavoriteBorder, MdPersonOutline } from "react-icons/md";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='container flex justify-around items-center h-16 bg-white'>
      <div className='webName-icon flex justify-between items-center'>
        <div className='text-2xl mr-2'>🍽️</div>
        <h1 className='text-2xl font-bold'>FlavorFind</h1>
      </div>

      <div className='navbars'>
        <ul className='flex justify-between items-center gap-3 text-gray-500'>
          <NavLink to="/Food-Recipe-App/">
            <li className='px-3 py-2 hover:cursor-pointer text-orange-400 font-semibold'>Home</li>
          </NavLink>
          <li className='px-3 py-2 hover:cursor-pointer'>Recipes</li>
          <NavLink to='/Food-Recipe-App/categories'>
            <li className='px-3 py-2 hover:cursor-pointer'>Categories</li>
          </NavLink>
          <li className='px-3 py-2 hover:cursor-pointer'>My Kitchen</li>
        </ul>
      </div>

      <div className='fav-profile flex justify-between items-center'>
        <div className='p-3 rounded-xl mr-4 hover:bg-green-500'>
          <MdFavoriteBorder color='gray' />
        </div>
        <div className='p-3 border-2 rounded-full bg-orange-500'>
          <MdPersonOutline color='white' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
