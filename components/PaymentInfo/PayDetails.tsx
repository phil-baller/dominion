import Image from "next/image"
import UbaLogo from "../../public/ubaLogo.png"
import Paypal from "../../public/paypal.jpg"

export default function PaymentDetails() {
    return (
        <div className="w-full bg-white py-6  relative">
            <div className="flex flex-col justify-start p-4 border-1px-32 lg:items-center">
                <div className="font-medium text-xl lg:text-3xl text-neutral-900 py-3 text-center">Donation Details</div>
                <div className="w-fit h-auto border border-1 border-gray-300 rounded-[8px] p-8 justify-start flex flex-col shadow-sm shadow-gray-200">
                    <div className="font-semibold text-lg text-neutral-900 lg:text-left text-center">Payment Methods</div>
                    <div className="text-lg lg:text-4xl text-neutral-800 font-base flex flex-col lg:flex-row items-center my-2 gap-2">
                        <span><Image src={UbaLogo} width={70} height={40} alt="UBA Logo" /></span> &nbsp;
                        10031000194
                    </div>
                    <div className="text-lg lg:text-4xl text-neutral-800 font-base flex flex-col lg:flex-row items-center my-2 gap-2">
                        <span><Image src={Paypal} width={80} height={50} alt="UBA Logo" /></span> &nbsp;
                        generalgustave1994@gmail.com
                    </div>
                </div>
            </div>
        </div>
    )
}