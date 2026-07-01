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

function scrollToModels() {
    const section =
        document.querySelector(".model-grid");

    if(section){

        section.scrollIntoView({
            behavior:"smooth"
        });

    }
    showToastNotif("Silakan pilih Model Kemitraan di bawah ini.");
}

function resetNavigation() {
    document.getElementById('level-instrumen').style.display = 'grid';
    document.getElementById('level-tipe').style.display = 'none';
    document.getElementById('level-detail').style.display = 'none';
    document.getElementById('back-btn').style.display = 'none';
    document.getElementById('catalog-title').innerText = 'Pilih Kategori Sistem Tani';
}
