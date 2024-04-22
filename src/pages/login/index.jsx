import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router' 

const Login = () => {
    const router = useRouter()
    /* Unused */
    // const [user, setUser] = useState({
    //     email: "",
    //     password: "",
    // })

    const handleSignIn = async (event) => {
        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')
        /** Template **/
        // try {
        //     const result = await fetch('/api/auth/login', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json'},
        //     body: JSON.stringify({ email, password }),
        //     })
        //     if (result.ok) {
        //         router.push('/home')
        //     }
        // } catch(err) {
        //     console.error(err)
        // }
        console.log("user: ", {email, password}, "\n Ok!")
    }

  return (
    <div className='flex min-h-screen bg-greenbg'>
        <div className='flex flex-col justify-center xl:w-[50vw] w-screen gap-3'>
            <div className='grid grid-cols-5 gap-8'>
                <div className='col-start-2 flex'>
                    <Image
                        src="/LOGO2.png"
                        alt="Your Company"
                        width={48} 
                        height={48} 
                    />
                    <Image
                        className='ml-3'
                        src="/LOGO1.png"
                        alt="Your Company"
                        width={48} 
                        height={48} 
                    />
                </div>
            </div>
            <div className='grid grid-cols-5 gap-8 content-center'>
                <h1 className='col-span-5 text-[#9CB97B] text-xxxl font-bold flex justify-center'>
                    SIGN IN
                </h1>
                <div className='col-start-2 col-span-3 bg-white px-8 pt-12 pb-6'>
                    <form action={handleSignIn} className='grid md:grid-cols-4 grid-cols-1 md:gap-14 gap-5'>
                        <div className='flex items-center'>
                            <label htmlFor='email' className='text-[#202020] font-semibold'>Email</label>
                        </div>
                        <input
                            className='md:col-span-3 p-1 py-2 border border-[#9CB97B] rounded-lg
                            focus:outline-none focus:border-[#8FA477]'
                            id='email' 
                            type='email'
                            // value={user.email}
                            // onChange={(e) => setUser({...user, email: e.target.value})}
                            placeholder='Email'
                        />
                        <div className='flex items-center'>
                            <label htmlFor='password' className='text-[#202020] font-semibold'>Password</label>
                        </div>
                        <input
                            className='md:col-span-3 p-1 py-2 border border-[#9CB97B] rounded-lg
                            focus:outline-none focus:border-[#8FA477]'
                            id='password' 
                            type='password'
                            // value={user.password}
                            // onChange={(e) => setUser({...user, password: e.target.value})}
                            placeholder='Password'
                        />
                        <div className='md:col-span-4 flex justify-center mt-8'>
                            <button
                                className='px-14 py-2 bg-[#9CB97B] rounded-lg
                                hover:bg-green-900 en font-semibold
                                text-white' 
                                type='submit'
                            >
                                LOG IN
                            </button>
                        </div>
                    </form>
                </div>
                <div className='col-span-5 flex justify-center gap-2'>
                    <h2>Don{"'"}t have an account?</h2>
                    <Link 
                        className="text-[#9CB97B] hover:text-green-900" 
                        href={'/register'}
                    >
                        Register
                    </Link>
                </div>
            </div>
        </div>
        <div>
            <Image 
                src="https://img.freepik.com/free-photo/close-up-flannel-shirt-detail_23-2149575325.jpg"
                alt="shirt-background"
                width={0}
                height={0}
                sizes="100%"
                className="xl:flex hidden xl:w-[50vw] h-screen"
            />
        </div>
    </div>
  )
}

export default Login