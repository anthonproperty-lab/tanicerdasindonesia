// Fungsi Memilih Model Kemitraan & Memunculkan Form MoU
function selectModel(model){

    if(!activeSolution){

        showToastWarning(
            "Silakan pilih salah satu produk terlebih dahulu."
        );

        document
        .getElementById("catalogCategorySection")
        .scrollIntoView({
            behavior:"smooth"
        });

        return;
    }

      
    // 2. Jika validasi lolos, set model kemitraan yang dipilih
    selectedModelKemitraan = model;
    const formSection = document.getElementById('registrationSection');
    const formTitle = document.getElementById('form-type-title');
    
    formSection.style.display = 'block';
    formSection.scrollIntoView({ behavior: 'smooth' });

    let modelText = "";
    if (model === 'jual') modelText = "Jual Putus";
    if (model === 'sewa') modelText = "Sewa Alat IoT";
    if (model === 'investor') modelText = "Kemitraan Investor";

    formTitle.innerHTML = `<i class="fa-solid fa-file-signature"></i> Formulir MoU Digital - Skema ${modelText}`;
}
