/* ==========================================================
   TANI CERDAS INDONESIA
   PRODUCT DETAIL MODULE
========================================================== */

/* ==========================================================
   RENDER PRODUCT
========================================================== */

function renderSolution(slug) {

    activeSolution = getSolution(slug);

    if (!activeSolution) return;

    // Hero
    $("solutionHero").src = activeSolution.media.hero;
    $("solutionHero").alt = activeSolution.product.marketingName;

    // Category
    $("solutionCategory").textContent =
        Categories[activeSolution.category].name;

    // Title
    $("solutionTitle").textContent =
        activeSolution.product.name;

    // Marketing Name
    $("solutionMarketingName").textContent =
        activeSolution.product.slogan;

    // Overview
    $("solutionOverview").textContent =
        activeSolution.product.description;

    // Price
    $("solutionPrice").textContent =
        formatPrice(activeSolution.pricing.startingPrice);

    // Components
    renderBadges();

    renderHighlights();

    renderList(
        "solutionFeatures",
        activeSolution.features,
        "✅"
    );

    renderList(
        "solutionBenefits",
        activeSolution.benefits,
        "🌿"
    );

    renderList(
        "solutionWorkflow",
        activeSolution.workflow,
        "➜"
    );

    renderSection(
        "packageSection",
        "solutionPackage",
        activeSolution.package,
        "📦"
    );

    renderFAQ();

}


/* ==========================================================
   BADGES
========================================================== */

function renderBadges() {

    $("solutionBadges").innerHTML =
        activeSolution.badges
            .map(item => `<span>${item}</span>`)
            .join("");

}


/* ==========================================================
   HIGHLIGHTS
========================================================== */

function renderHighlights() {

    $("solutionHighlights").innerHTML =
        activeSolution.highlights
            .map(item => `
                <div>${item}</div>
            `)
            .join("");

}


/* ==========================================================
   GENERIC LIST
========================================================== */

function renderList(targetId, data, icon) {

    const target = $(targetId);

    if (!target) return;

    target.innerHTML =
        (data || [])
            .map(item => `
                <div class="catalog-item">
                    ${icon} ${item}
                </div>
            `)
            .join("");

}


/* ==========================================================
   OPTIONAL SECTION
========================================================== */

function renderSection(
    sectionId,
    targetId,
    data,
    icon
) {

    const section = $(sectionId);

    if (!section) return;

    if (!data || data.length === 0) {

        section.style.display = "none";

        return;

    }

    section.style.display = "block";

    renderList(
        targetId,
        data,
        icon
    );

}


/* ==========================================================
   FAQ
========================================================== */

function renderFAQ() {

    const section = $("faqSection");

    const target = $("solutionFaq");

    const faq = activeSolution.faq;

    if (!faq || faq.length === 0) {

        section.style.display = "none";

        return;

    }

    section.style.display = "block";

    target.innerHTML =
        faq.map(item => `

            <div class="faq-item">

                <h4>
                    ${item.question}
                </h4>

                <p>
                    ${item.answer}
                </p>

            </div>

        `).join("");

}
