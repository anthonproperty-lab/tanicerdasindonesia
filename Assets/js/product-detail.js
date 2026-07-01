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
