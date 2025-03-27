import Image from "next/image";
const Footer = () => {
  return (
    <div className="container mx-auto w-[90%] md:w-[85%]">
      <div className="bg-white pt-[50px]">
  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 text-gray-700">
    
   
    <div>
      <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
      <p>Uzbekistan</p>
      <p>+998 91 101 01 01</p>
      <p>demo@exampledemo.com</p>
      <p>Dji Demo Store</p>
      <p>No, 12345 Freedom Tashkent</p>
    </div>

    <div>
      <h3 className="font-semibold text-lg mb-3">Information</h3>
      <p>Product Support</p>
      <p>Checkout</p>
      <p>License Policy</p>
      <p>Affiliate</p>
    </div>

    
    <div>
      <h3 className="font-semibold text-lg mb-3">Customer Service</h3>
      <p>Help Centre</p>
      <p>Raddem Voucher</p>
      <p>Contact Us</p>
      <p>Policies & Rules</p>
    </div>

    <div>
      <h3 className="font-semibold text-lg mb-3">Download Our App</h3>
      <p>Download our App & get extra 20% Discount on your first Order...!</p>
      <div className="flex gap-3 mt-4">
        <Image src="/assets/images/play.png" alt="Google Play" width={120} height={40} />
        <Image src="/assets/images/store.png" alt="App Store" width={120} height={40} />
      </div>
    </div>

  </div>

 
  <div className="border-t mt-6 py-4 text-center flex flex-col md:flex-row justify-center items-center px-4 text-gray-500">
    <p>© Copyright Team90Degree | Built with Dji by Team90Degree.</p>
  </div>
</div>

    </div>
  )
}

export default Footer