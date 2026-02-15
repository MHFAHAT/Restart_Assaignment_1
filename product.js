const fetchProducts = async () => { 
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
   
            const sortedData = data.sort((a, b) => b.rating.rate - a.rating.rate);
 
            const topProducts = sortedData.slice(0, 4); 
            console.log(topProducts);
            displayProducts(topProducts);
        
    };

   const displayProducts = (products) => {
    console.log(products);
    const productContainer = document.getElementById('trending-products');
    productContainer.innerHTML = '';  

    products.forEach(product => { 
        const card = document.createElement('div'); 
        card.classList.add(
            'card', 
            'bg-base-100', 
            'shadow-xl', 
            'border', 
            'border-gray-200'
        ); 
        card.innerHTML = `
            <figure class="px-10 pt-10 bg-[#f3f4f6] h-64 flex items-center justify-center">
                <img src="${product.image}" alt="${product.title}" class="h-full object-contain mix-blend-multiply" />
            </figure>
            <div class="card-body">
                <div class="flex justify-between items-center mb-2">
                    <span class="badge badge-ghost text-[#4a7ec7] bg-blue-50 p-3 font-bold uppercase text-xs">${product.category}</span>
                    <div class="flex items-center gap-1 text-gray-500 text-sm font-semibold">
                         <i class="fa-solid fa-star text-yellow-400"></i>
                         <span>${product.rating.rate}</span>
                    </div>
                </div>

                <h2 class="card-title text-lg font-bold text-gray-800   overflow-hidden" title="${product.title}">
                    ${product.title.length > 40 ? product.title.slice(0, 40) + '...' : product.title}
                </h2>

                <p class="text-2xl font-bold text-gray-900">$${product.price}</p>

                <div class="card-actions justify-end mt-4">
                    <button class="btn btn-outline border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-black flex-1">
                        <i class="fa-regular fa-eye"></i> Details
                    </button>
                    <button class="btn bg-[#5b4eff] hover:bg-[#483bee] text-white border-none flex-1">
                        <i class="fa-solid fa-cart-shopping"></i> Add
                    </button>
                </div>
            </div>
        `; 
        productContainer.appendChild(card);
    });
};
fetchProducts();