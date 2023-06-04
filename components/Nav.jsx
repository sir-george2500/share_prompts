"use client"
import Link from "next/link";
import Image from "next/image";
import{useState,useEffect}from 'react'
import {signOut,signIn,useSession,getProviders} from 'next-auth/react'

const Nav = () => {

  const { data:session } = useSession();
   const [providers,setProviders] = useState(null);

   const [toggleDropDown,setToggleDropDown]=useState(false);

   useEffect(()=>{
    const setUpProviders = async ()=>{
      const response = await getProviders();

      setProviders(response)
    }
    setUpProviders();
   },[])
  return (
    <nav className="flex-between w-full mb-16 pt-3">
     <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          alt='logo'
          width={37}
          height={37}
          className='object-contain'
        />
        <p className='logo_text'>Prompt-Space</p>

      </Link>
       {/* Desk top Navigation */}
       <div className="sm:flex hidden">
        {session?.user ?(
         <div className="flex gap-3 md:gap-5">
          <Link href="/create-prompts" className='black_btn'>
             Create Post
          </Link>
          <button type="button" onClick={signOut} class="outline_btn">
            SingOut
          </button>
          <Link href="/profile">
              <Image
              src={session?.user.image}
              alt='profile'
              width={30}
              height={30}
              className='object-contain'
            />
          </Link>
         </div>   
        ):(
         <>
         {
          providers && Object.
          values(providers).
          map((provider) => (
            <button 
            type="button"
            key={provider.name}
            onClick={()=>signIn(provider.id)} className="black_btn">
             Sign In
            </button>
           )
          )
         }
         </>
        )}
       </div>
     {/* Mobile Navigation*/}
     <div className="sm:hidden flex relative">
     {session?.user ?(
         <div className="flex ">
          <Link href="/">
              <Image
              src={session?.user.image}
              width={30}
              height={30}
              className='object-contain' 
              alt="profile"
              onClick={()=> setToggleDropDown((prev) =>!prev)}
            />
          </Link>
          {toggleDropDown && (
            <div className="dropdown">
              <Link
               href="/profile"
               className="dropdown_link"
               onClick={()=>setToggleDropDown(false)}
              >
               My Profile
              </Link>
              <Link
               href="/create-prompts"
               className="dropdown_link"
               onClick={()=>setToggleDropDown(false)}
              >
               Create Prompt
              </Link>
              <button
               type="button"
               onClick={()=>{
                setToggleDropDown(false)
                signOut();
               }}
               className="mt-5 w-full black_btn"
              >
              Sign Out
              </button>
            </div>
          )}
         </div>   
        ):(
         <>
         {
          providers && Object.
          values(providers).
          map((provider) => (
            <button 
            type="button"
            key={provider.name}
            onClick={()=>signIn(provider.id)} className="black_btn">
             Sign In
            </button>
           )
          )
         }
         </>
        )}
     </div>
    </nav>
  )
}

export default Nav