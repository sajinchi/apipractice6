"use client";
import { useRouter, usePathname } from 'next/navigation';
import React from 'react'

const Logout = () => {
    const router = useRouter();
    const path = usePathname();
    const out = () =>{
        localStorage.removeItem('logininfo');
        router.push('/components/login')
    }
  return (
    <div>
        <button onClick={()=>out()}className=" bg-violet-400 rounded-md py-1 px-3 hover:bg-violet-500 hover:text-white">Logout</button>
    </div>
  )
}

export default Logout
