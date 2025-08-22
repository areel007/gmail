"use client";

export default function Error() {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <p className="text-[20px] md:text-[24px] font-[600] text-center leading-[1.1] text-gray-600 mb-[10px]">Something went wrong</p>
            <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={() => window.location.href = "/"}>Go Back</button>
        </div>
    )
}