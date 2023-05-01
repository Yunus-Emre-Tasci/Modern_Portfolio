import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from "react";


const NavItem:React.FC<{
    active:string
    setActive:Function
    name:string
    route:string
}>=({active,setActive,name,route})=>{
    return active!==name?(
        <Link href={route}>
            <span className='mx-2 font-bold hover:border-b-4 hover:text-orange' onClick={()=>setActive(name)}>
              {name}
            </span>
        </Link>
    ):null
}

const Navbar = () => {
    const {pathname}=useRouter()
    const [active, setActive] = useState<string>("")

    useEffect(() => {
      if(pathname==="/") setActive("About")
      if(pathname==="/projects") setActive("Projects")
      if(pathname==="/resume") setActive("Resume")
      if (pathname === "/certificates") setActive("Certificates");
    }, [])
    

  return (
    <div className="flex items-center justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 border-orange md:text-2xl">
        {active}
      </span>
      <div>
        <NavItem active={active} setActive={setActive} name="About" route="/" />
        <NavItem
          active={active}
          setActive={setActive}
          name="Resume"
          route="/resume"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="Certificates"
          route="/certificates"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="Projects"
          route="/projects"
        />
      </div>
    </div>
  );
}

export default Navbar