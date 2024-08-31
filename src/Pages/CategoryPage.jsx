import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import Header from '../components/Header';
const CategoryPage = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const category = location.pathname.split('/').at(-1);
    return (
        <div className='max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px] pl-2 bg-slate-400 mx-auto'>
            <Header />
            <div>
                <div>
                    <button onClick={() => navigation(-1)} className="text-black font-semibold underline">Back</button>
                </div>
                <h2 className=' text-black pl-8 pt-3 text-2xl'>
                    Blogs On <span className=' text-black pl-8 pt-3 text-2xl mb-1 capitalize'>{category}</span>
                </h2>
            </div>
            <Blogs />
            <Pagination />
        </div>
    )
}

export default CategoryPage