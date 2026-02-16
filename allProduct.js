const fetchCategory = async () => { 
            const res = await fetch('https://fakestoreapi.com/products/categories');
            const data = await res.json(); 
            const allCategory = ['All', ...data];

            displayProducts(allCategory);
        
    };

    const displayProducts = (products) => { 
    console.log(products);
    if (!products) return;
    const container=document.getElementById('categories');
    products.forEach(product => {
        const btn=document.createElement('button');
        btn.textContent=product;
        btn.classList.add('btn', 'btn-outline', 'border-gray-300', 'capitalize', 'px-6','hover:bg-[#4a7ec7]', 'hover:text-white', 'hover:border-none'
        )
        btn.innerText=product;
        container.appendChild(btn);
        btn.addEventListener('click', () => {
            const buttons = container.querySelectorAll('.btn');
            buttons.forEach(button => button.classList.remove('btn-active','bg-[#4a7ec7]', 'text-white'));
            btn.classList.add('btn-active','bg-[#4a7ec7]', 'text-white');
            if (product === 'All') {
                displayProduct();// Fetch and display all products bad ase
            } else {
                fetchCategoryProducts(product);
            }
        }); 
    });  
    };

    const fetchCategoryProducts = async (category) => {
        const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        const data = await res.json();
        console.log(data);
        displayALLProducts(data);
    }

    const displayProduct= async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
         console.log(data);
        displayALLProducts(data);
       
    }
       const displayALLProducts = (products) => {
    console.log(products);
    const productContainer = document.getElementById('category_container');
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
                    <button onclick="showProductDetails(${product.id})"class="btn btn-outline border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-black flex-1">
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

const showProductDetails = async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    
    const modalContainer = document.getElementById('modal-content');
    modalContainer.innerHTML = `
        <div class="flex flex-col md:flex-row gap-6">
            <div class="flex-1 bg-gray-100 p-4 rounded-xl flex items-center justify-center">
                <img src="${data.image}" class="max-h-60 object-contain mix-blend-multiply" />
            </div>
            <div class="flex-1">
                <h3 class="font-bold text-2xl mb-2">${data.title}</h3>
                <span class="badge badge-primary bg-[#4a7ec7] border-none mb-4 capitalize">${data.category}</span>
                <p class="text-gray-600 mb-4 text-sm leading-relaxed">${data.description}</p>
                <div class="flex items-center gap-4 mb-6">
                    <p class="text-3xl font-bold text-gray-900">$${data.price}</p>
                    <div class="badge badge-outline border-yellow-400 text-yellow-600 font-bold gap-1">
                        <i class="fa-solid fa-star"></i> ${data.rating.rate}
                    </div>
                </div>
                <button class="btn bg-[#5b4eff] text-white w-full hover:bg-[#483bee]">
                    <i class="fa-solid fa-cart-shopping"></i> Add to Cart
                </button>
            </div>
        </div>
    `;

    // Open the modal
    product_details_modal.showModal();
};
fetchCategory();