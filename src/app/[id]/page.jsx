import React from 'react';

const getProductId = async (id) => {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    return res.json();
  } catch (error) {
    console.error("Xatolik yuz berdi:", error);
    return null;
  }
};

const ProductPage = async ({ params }) => {
  const { id } = params;  // ID ni URL'dan olish
  const dataById = await getProductId(id); // API chaqirish
  console.log(dataById); // Tekshirish uchun console.log
  
  if (!dataById) {
    return <div>Xatolik yuz berdi, ma'lumot topilmadi!</div>;
  }

  return (
    <div className="max-w-2xl mx-auto py-7 p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-lg">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">{dataById.title}</h1>
      <img className="w-72 mx-auto rounded-lg mb-4" src={dataById.thumbnail} alt={dataById.title} />
      <p className="text-lg text-gray-600 mb-4">{dataById.description}</p>
      <p className="text-xl font-bold text-red-500">Narxi: ${dataById.price}</p>
    </div>
  );
  
};

export default ProductPage;
