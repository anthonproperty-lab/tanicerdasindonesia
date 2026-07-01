/* ==========================================================
   TANI CERDAS INDONESIA
   CATALOG MODULE
========================================================== */

let activeSolution = null;

/* ==========================================================
   HELPER
========================================================== */

const $ = (id) => document.getElementById(id);

function showSection(sectionId) {

    $("catalogCategorySection").style.display = "none";
    $("catalogProductSection").style.display = "none";
    $("catalogDetailSection").style.display = "none";

    $(sectionId).style.display = "block";

}

/* ==========================================================
   CATEGORY
========================================================== */

function renderCategories() {

    const container = $("solutionCategories");

    container.innerHTML = "";

    Object.values(Categories).forEach(category => {

        container.insertAdjacentHTML(
            "beforeend",

            `
            <button
                class="category-card"
                onclick="renderProducts('${category.id}')">

                <div class="category-icon">
                    ${category.icon}
                </div>

                <div class="category-title">
                    ${category.name}
                </div>

                <div class="category-desc">
                    ${category.description}
                </div>

            </button>
            `
        );

    });

}

/* ==========================================================
   PRODUCT LIST
========================================================== */

function renderProducts(categoryId) {

    showSection("catalogProductSection");

    const category = Categories[categoryId];

    $("productSectionTitle").textContent =
        "Produk " + category.name;

    const list = $("solutionProductList");

    list.innerHTML = "";

    const products = Solutions.filter(item =>
        item.category === categoryId
    );

    products.forEach(product => {

        list.insertAdjacentHTML(
            "beforeend",
            createProductCard(product)
        );

    });

}

/* ==========================================================
   PRODUCT CARD
========================================================== */

function createProductCard(product) {

    return `

    <div
        class="catalog-product-card"
        onclick="openProduct('${product.slug}')">

        <div style="position:relative">

            <img
                src="${product.media.thumbnail}"
                class="catalog-thumb"
                alt="${product.product.marketingName}">

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

}

/* ==========================================================
   PRODUCT DETAIL
========================================================== */

function openProduct(slug) {

    showSection("catalogDetailSection");

    renderSolution(slug);

}

/* ==========================================================
   NAVIGATION
========================================================== */

function backToCategories() {

    showSection("catalogCategorySection");

}

function backToProducts() {

    showSection("catalogProductSection");

}

/* ==========================================================
   INITIALIZE
========================================================== */

window.addEventListener("DOMContentLoaded", () => {

    renderCategories();

});

