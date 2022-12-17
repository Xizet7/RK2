const apiUrl = 'https://dummyjson.com';

async function fetchProducts(){
    try{
        const response = await fetch(`${apiUrl}/products`);
        
    
        if(!response.ok){
           throw new Error(`Failed to fetch: ${response.status}`);
        }

       
        return await response.json();
        
    } catch(e){
        console.log(e);
    }
    

}

async function fetchPosts(){
    try{
        const response = await fetch(`${apiUrl}/posts`);
    
        if(!response.ok){
           throw new Error(`Failed to fetch: ${response.status}`);
        }

       
        return await response.json();
        
    } catch(e){
        console.log(e);
    }
    

}

async function listProducts(productContainerElementId){
    const productContainerElement = document.getElementById(productContainerElementId);
    if(!productContainerElement){
        return;
    }

    fetchProducts()
    .then((p) => {
        products = p.products;
        
        if(!products){
            productContainerElement.innerHTML='No products fetched.';
            return;
        }

        for(const product of products){
            productContainerElement.appendChild(productElement(product));
        }

    })
    .catch((e) => {
        console.log(e);
    });
}


async function listPosts(postContainerElementId){
    const postContainerElement = document.getElementById(postContainerElementId);
    if(!postContainerElement){
        return;
    }

    fetchPosts()
    .then((p) => {
        posts = p.posts;
        
        if(!posts){
            postContainerElement.innerHTML='No posts fetched.';
            return;
        }

        for(const post of posts){
            postContainerElement.appendChild(postElement(post));
        }

    })
    .catch((e) => {
        console.log(e);
    });
}
function productElement(product){
    const anchorElement = document.createElement('div');
    anchorElement.className = "block";
    anchorElement.setAttribute('href', `${apiUrl}/products/${product.id}` );
    anchorElement.innerHTML = '<h2>'+product.title+'</h2><br><img src="'+product.images[0]+'"/><br><p>'+product.description+'</p>';


    const productTitleElement = document.createElement('div');
    productTitleElement.className = "inside";
    productTitleElement.appendChild(anchorElement);
    
    return productTitleElement;
}


function postElement(post){

    const anch = document.createElement('div');
    anch.className = "block";
    anch.setAttribute('href', `${apiUrl}/posts/${post.id}` );
    anch.innerHTML = '<h2>'+post.title+'</h2><br><p>'+post.body+'</p>';


    const productTitleElement = document.createElement('div');
    productTitleElement.className = "inside";
    productTitleElement.appendChild(anch);
    
    return productTitleElement;
}

function logout(){
    sessionStorage.clear();
    window.location.href = "login.html";
}