/* ==========================================================
   TANI CERDAS INDONESIA
   SOLUTION CATALOG ENGINE
========================================================== */

let activeSolution = null;



function renderCategories(){

    const container =
        document.getElementById("solutionCategories");

    container.innerHTML="";

    Object.values(Categories).forEach(category=>{

        const card=document.createElement("button");

        card.className="category-card";

        card.innerHTML = `
<div class="category-icon">
    ${category.icon}
</div>

<div class="category-title">
    ${category.name}
</div>

<div class="category-desc">
    ${category.description}
</div>
`;

        card.onclick=()=>{

            renderProducts(category.id);

        };

        container.appendChild(card);

    });

}

function renderProducts(categoryId){

    const section =
        document.getElementById("catalogProductSection");

    const list =
        document.getElementById("solutionProductList");

    const title =
        document.getElementById("productSectionTitle");

    document.getElementById("catalogCategorySection")
        .style.display="none";

    document.getElementById("catalogDetailSection")
        .style.display="none";

    section.style.display="block";

    const category =
        Categories[categoryId];

    title.innerHTML =
        "Produk " + category.name;

    list.innerHTML="";

    const products =
        Solutions.filter(
            item=>item.category===categoryId
        );

    products.forEach(product=>{

    list.innerHTML += `

    <div class="catalog-product-card"
         onclick="openProduct('${product.slug}')">

        <div style="position:relative">

            <img
                src="${product.media.thumbnail}"
                class="catalog-thumb">

            <div class="catalog-badge">

                IoT

            </div>

            <div class="catalog-badge-premium">

                ${product.badges[0]}

            </div>

        </div>

        <div class="catalog-card-body">

            <div class="catalog-card-title">

                ${product.product.marketingName}

            </div>

            <div class="catalog-card-desc">

                ${product.product.overview}

            </div>

            <div class="catalog-price">

                <small>Mulai dari</small>

                ${formatPrice(product.pricing.startingPrice)}

            </div>

            <button class="catalog-detail-btn">

                Lihat Detail →

            </button>

        </div>

    </div>

    `;

});

}

function openProduct(slug){

    document.getElementById("catalogProductSection")
        .style.display="none";

    document.getElementById("catalogDetailSection")
        .style.display="block";

    renderSolution(slug);

}




