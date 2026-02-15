const fetchProducts = async () => { 
            const res = await fetch('https://fakestoreapi.com/products/categories');
            const data = await res.json(); 

            displayProducts(data);
        
    };

    const displayProducts = (products) => { 
    console.log(products);
    const container=document.getElementById('categories');
    products.forEach(product => {
        const card=document.createElement('div');
        card.classList.add('card','bg-base-100','shadow-xl','border','border-gray-200');
        card.innerHTML= `
        <p class="btn btn-outline  border-radius-lg">${product}</p>`;
        container.appendChild(card);
    });






        
    };
fetchProducts();