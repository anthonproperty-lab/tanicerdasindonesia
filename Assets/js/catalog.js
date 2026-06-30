/* ==========================================================
   TANI CERDAS INDONESIA
   SOLUTION CATALOG ENGINE
========================================================== */

let activeSolution = null;


/* ---------------------------
   Format Rupiah
---------------------------- */

function formatPrice(value){

    return new Intl.NumberFormat("id-ID",{

        style:"currency",

        currency:"IDR",

        maximumFractionDigits:0

    }).format(value);

}

/* ---------------------------
   Cari Produk
---------------------------- */

function getSolution(id){

    return Solutions.find(item=>item.slug===id);

}

function renderCategories(){

    const container =
        document.getElementById("solutionCategories");

    container.innerHTML="";

    Object.values(Categories).forEach(category=>{

        const card=document.createElement("button");

        card.className="category-card";

        card.innerHTML=`

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

function backToCategories(){

    document.getElementById("catalogCategorySection")
        .style.display="block";

    document.getElementById("catalogProductSection")
        .style.display="none";

    document.getElementById("catalogDetailSection")
        .style.display="none";

}

function backToProducts(){

    document.getElementById("catalogProductSection")
        .style.display="block";

    document.getElementById("catalogDetailSection")
        .style.display="none";

}

function renderSolution(slug){

   activeSolution = getSolution(slug);

    if(!activeSolution) return;

    document.getElementById("solutionTitle").innerHTML =
        activeSolution.product.name;

    document.getElementById("solutionMarketingName").innerHTML =
        activeSolution.product.slogan;

    document.getElementById("solutionOverview").innerHTML =
        activeSolution.product.description;

    document.getElementById("solutionHero").src =
        activeSolution.media.hero;

    document.getElementById("solutionPrice").innerHTML =
        formatPrice(activeSolution.pricing.startingPrice);

    renderBadges();

    renderHighlights();

    renderFeatures();

    renderBenefits();

    renderWorkflow();

    renderPackage();

    renderFaq();

    

}

function renderBadges(){

    const box=document.getElementById("solutionBadges");

    box.innerHTML="";

    activeSolution.badges.forEach(item=>{

        box.innerHTML+=`
            <span>${item}</span>
        `;

    });

}

function renderHighlights(){

    const box=
    document.getElementById("solutionHighlights");

    box.innerHTML="";

    activeSolution.highlights.forEach(item=>{

        box.innerHTML+=`
            <div>${item}</div>
        `;

    });

}

function renderFeatures(){

    const box =
        document.getElementById("solutionFeatures");

    box.innerHTML="";

    activeSolution.features.forEach(item=>{

        box.innerHTML += `
            <div class="catalog-item">
                ✅ ${item}
            </div>
        `;

    });

}

function renderBenefits(){

    const box =
        document.getElementById("solutionBenefits");

    box.innerHTML="";

    activeSolution.benefits.forEach(item=>{

        box.innerHTML += `
            <div class="catalog-item">
                🌿 ${item}
            </div>
        `;

    });

}

function renderWorkflow(){

    const box =
        document.getElementById("solutionWorkflow");

    box.innerHTML="";

    activeSolution.workflow.forEach(item=>{

        box.innerHTML += `
            <div class="catalog-item">
                ➜ ${item}
            </div>
        `;

    });

}

function renderPackage(){

    const section =
        document.getElementById("packageSection");

    const box =
        document.getElementById("solutionPackage");

    box.innerHTML="";

    if(
        !activeSolution.package ||
        activeSolution.package.length===0
    ){
        section.style.display="none";
        return;
    }

    section.style.display="block";

    activeSolution.package.forEach(item=>{

        box.innerHTML += `
            <div class="catalog-item">
                📦 ${item}
            </div>
        `;

    });

}

function renderFaq(){

    const section =
        document.getElementById("faqSection");

    const box =
        document.getElementById("solutionFaq");

    box.innerHTML="";

    if(
        !activeSolution.faq ||
        activeSolution.faq.length===0
    ){
        section.style.display="none";
        return;
    }

    section.style.display="block";

    activeSolution.faq.forEach(item=>{

        box.innerHTML += `

        <div class="faq-item">

            <h4>${item.question}</h4>

            <p>${item.answer}</p>

        </div>

        `;

    });

}

window.addEventListener("DOMContentLoaded",()=>{

    renderCategories();

});
