"use client";
import { usePathname, useRouter } from 'next/navigation'
import { parseJwt } from '@/app/helpers/parseJwt';


const Authcheck = () => {
    const router = useRouter();
    const path = usePathname();
    let log = localStorage.getItem('logininfo');
    if(log){
        let logstr = JSON.parse(log);
        if(logstr){
        let token = parseJwt(logstr.token);
        
        if(token.exp*1000>Date.now()){
            if(path !== ('/')){
                router.push('/');
            }
        }else{
            router.push('/components/login');
        }
    }
    }else{
        router.push('/components/login');
    }

}

export default Authcheck
