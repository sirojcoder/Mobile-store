import Image from "next/image";
import Link from "next/link";
const categories = [
    { name: "Iphone", src: "/assets/images/iphone.png" },
    { name: "Mini Speakers", src: "/assets/images/mini speakers.png" },
    { name: "Ipad mini Pro", src: "/assets/images/Ipad.png" },
    { name: "Apple Mackbook ", src: "/assets/images/Laptop1.png" },
    { name: "Laptop", src: "/assets/images/mackbook.png" },
    { name: "Accessories", src: "/assets/images/AirPods.png" },
  ];

  


  const getProducts = async () => {
    try {
        const res = await fetch('https://dummyjson.com/products', {
            method: "GET"
        });
       
        return res.json();
    } catch (error) {
        console.log(error.message);
    }
};

const Category = async () => {
  const products_list  = await getProducts()
  console.log(products_list);
  
  return (
    <div className="container mx-auto w-[90%] md:w-[85%] py-10">
    <h3 className="text-2xl font-semibold  mb-6">Trending Categories</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex h-[200px] flex-col items-center p-4  rounded-md shadow-sm hover:shadow-md transition-all"
        >
          <Image  src={category.src} alt={category.name} width={100} height={50}  className="object-contain" />
          <p className="mt-6 text-md text-gray-600 ">{category.name}</p>
        </div>
      ))}
    </div>
    <div className="flex justify-between mt-9 gap-3 flex-wrap md:flex-nowrap">
    <div className="flex items-center justify-center flex-col bg-gray-100 rounded-md p-6 h-[324px] w-[630px] shadow-md">
        <div className="flex flex-col items-center pt-4 gap-2">
            <p className="text-gray-700 font-semibold">ENTERTAINMENT & GAMES</p>
            <p className="text-lg font-bold">Just starting at $450</p>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-4xl">Shop Now</button>
        </div>
        <Image src='/assets/images/Games.png' alt="games" width={200} height={100} className="object-contain mt-4" />
    </div>

    <div className="flex items-center justify-center flex-col bg-gray-100 rounded-md p-6 h-[324px] w-[630px] shadow-md">
        <div className="flex flex-col items-center pt-4 gap-2">
            <p className="text-gray-700 font-semibold">ENTERTAINMENT & GAMES</p>
            <p className="text-lg font-bold">Just starting at $450</p>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-3xl">Shop Now</button>
        </div>
        <Image src='/assets/images/Games.png' alt="games" width={200} height={100} className="object-contain mt-4" />
    </div>
</div>
     <div className="pt-11">
        <div className="flex justify-between">
            <p>Latest Produts</p>
            <p>View all Products <span className="text-xl text-[#FF5B00]"> →</span></p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-between gap-4 mt-6">
  {[
    { img: "/assets/images/Latest watch.png", title: "Latest Smart Watch", price: "$90.00", oldPrice: "$100.00" },
    { img: "/assets/images/Laptop1.png", title: "Apple Macbook Air M3", price: "$1099.00", oldPrice: "$1199.00" },
    { img: "/assets/images/speakers.png", title: "Homepod mini", price: "$54.00", oldPrice: "$68.00" },
    { img: "/assets/images/charger.png", title: "Drou safe charger", price: "$34.00", oldPrice: "$52.00" },
    { img: "/assets/images/Entertainment.png", title: "Home Entertainment", price: "$94.00", oldPrice: "$113.00" },
  ].map((item, index) => (
    <div key={index} className="bg-white rounded-lg p-4 w-[230px] h-[330px] shadow-md text-center ">
      <Image src={item.img} alt={item.title} width={200} height={150} className="object-contain mx-auto" />
      <p className="mt-4 text-gray-500">{item.title}</p>
      <div className="flex justify-center gap-2 mt-4">
        <p className="text-[#FF5B00] font-bold">{item.price}</p>
        <p className="text-gray-400 line-through">{item.oldPrice}</p>
      </div>
    </div>
  ))}
</div>
     </div>

     <div className="mt-7 bg-[#F1F6FF] p-6">
     <div className="flex flex-col-reverse lg:flex-row items-center justify-around gap-11 h-auto lg:h-[370px]">
     
       {/* Matn qismi */}
       <div className="max-w-md flex flex-col items-center justify-center text-center">
         <button className="bg-orange-500 text-white px-4 py-2 rounded-md mb-4">Hurry Up!</button>
         <h2 className="text-3xl font-bold">Up To 20% Discount</h2>
         <h3 className="text-3xl font-bold">Check it Out</h3>
   
         <div className="flex gap-3 mt-6">
           {[
             { time: "310", label: "DAYS" },
             { time: "06", label: "HRS" },
             { time: "34", label: "MINS" },
             { time: "08", label: "SEC" },
           ].map((item, index) => (
             <div key={index} className="bg-white shadow-md p-4 text-center rounded-md w-20">
               <p className="text-2xl font-bold">{item.time}</p>
               <p className="text-gray-500 text-sm">{item.label}</p>
             </div>
           ))}
         </div>
   
         <button className="mt-6 text-lg font-semibold">Shop Now</button>
       </div>
   
       {/* Rasm qismi */}
       <div className="flex items-end gap-4">
         <Image src="/assets/images/Small iphone.png" width={160} height={300} alt="img" className="object-contain" />
         <Image src="/assets/images/Big iphone.png" width={300} height={350} alt="img" className="object-contain" />
       </div>
   
     </div>
   </div>
   

   <div className="pt-11 px-4">
   {/* Sarlavha va kategoriya tugmalari */}
   <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
     <p className="text-lg font-semibold">Popular Products</p>
     <div className="flex gap-4 mt-3 md:mt-0">
       <p className="text-[#FF5B00] cursor-pointer">Accessories</p>
       <p className="cursor-pointer">iPhone</p>
       <p className="cursor-pointer">Laptop</p>
     </div>
   </div>
 
   {/* Mahsulotlar grid */}
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-9 px-">
    {
    products_list.products.map((item) => {
      return (
        <div key={item?.id} className="bg-white p-4 rounded-lg shadow-md hover:scale-105 transition-transform">
        <Link href={`/${item.id}`}>

            <Image src={item?.thumbnail} alt="foto" width={240} height={240} className="rounded-lg"/>
            <p className="text-lg text-center text-gray-500  mt-4">{item?.title}</p>
            <p className="text-gray-600  mt-4 font-medium">Narxi: <span className="text-[#FF5B00] font-bold">${item?.price}</span></p>
          </Link>
        </div>
      )
    })
    }
</div>

 </div>

<div className="py-9 px-4">

<div className="flex justify-between items-center">
  <p className="text-xl font-semibold">Blog & Events</p>
  <p className="text-lg cursor-pointer">
    View all Events <span className="text-[#FF5B00] text-xl">→</span>
  </p>
</div>


<div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-11">
  {[
    { img: "/assets/images/rasm.png", title: "Music magnate headphone" },
    { img: "/assets/images/nootbuk.png", title: "Macbook air labore at dolore" },
    { img: "/assets/images/klav.png", title: "Ipsum available but the majority" },
  ].map((item, index) => (
    <div key={index} className="bg-white rounded-lg p-2 ">
     
      <Image
        src={item.img}
        alt={item.title}
        width={420}
        height={200}
        className="object-contain rounded-md mx-auto"
      />
      <div className="mt-7">
        <p className="flex items-center  text-gray-400">
          <span className="mr-2">📅</span> March 15 2025
        </p>
        <p className="mt-2 text-lg text-gray-700 ">{item.title}</p>
      </div>
    </div>
  ))}
</div>
</div>

<div className="bg-[#F8F8F8] h-[300px] p-8 ">
<div className="flex flex-col  md:flex-row items-center justify-center">

  <div className="w-full md:w-1/2 flex justify-center">
    <Image
      src="/assets/images/Apple devices.png"
      alt="Apple Devices"
      width={450}
      height={380}
      className="object-contain"
    />
  </div>


  <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:text-left mt-6 md:mt-0">
    <p className="text-gray-500 text-sm uppercase font-semibold">Big Discount</p>
    <h2 className="text-2xl font-bold mt-2">Must Buying Apple Devices</h2>
    <p className="text-[#FF5B00] text-2xl font-bold mt-4">$450.00</p>
    <button className="mt-4 px-6 py-3 bg-[#FF5B00] text-white font-semibold rounded-3xl">
      Shop Now
    </button>
  </div>
</div>
</div>



  </div>
  )
}

export default Category