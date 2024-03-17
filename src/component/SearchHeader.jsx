import React, { useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from "react-icons/bs";
import { useNavigate, Link, useParams } from 'react-router-dom';

export default function SearchHeader() {
  const [text, setText] = useState('');
  const { keyword } = useParams(); //keyword가 변경될 때마다 text를 업데이트해주는 것이 필요하다.
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault(); //새로고침 실행 방지
    navigate(`/videos/${text}`);
  }

  useEffect(()=>{
    setText(keyword || '');
  }, [keyword]); //keyword가 업데이트될 때마다 화면에 보여져야 한다.


  return (
    <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
      <Link to='/' className='flex items-center'>
        <BsYoutube className='text-4xl text-brand'/>
        <h1 className='font-bold ml-2 text-3xl'>Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit} className='w-full flex justify-center'>
        <input 
          className='w-7/12 p-2 outline-none bg-black text-gray-50'
          type="text" 
          placeholder='Search...' 
          value={text} 
          onChange={(e)=>setText(e.target.value)}
        />
        <button className='bg-zinc-600 px-4'><BsSearch /></button>
      </form>
    </header>

  );
}

