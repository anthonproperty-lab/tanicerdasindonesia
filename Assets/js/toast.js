// ========================================================
// FUNGSI 1: MEMUNCUKKAN TOAST WARNING (Kuning - Pojok Kanan Bawah)
// ========================================================
function showToastWarning(message) {
    const toast = document.getElementById('toastWarning');
    toast.innerHTML = message;
    toast.classList.add('show');
    toast.style.pointerEvents = 'auto'; // Mengaktifkan interaksi jika diperlukan
    
    if (window.warningTimeout) {
        clearTimeout(window.warningTimeout);
    }
    
    window.warningTimeout = setTimeout(() => {
        toast.classList.remove('show');
        toast.style.pointerEvents = 'none';
    }, 3000);
}

// ========================================================
// FUNGSI 2: MEMUNCUKKAN TOAST NOTIFIKASI SISTEM (Hijau - Pojok Kiri Bawah)
// ========================================================
function showToastNotif(text) {
    const toast = document.getElementById('toastNotif');
    document.getElementById('toastText').innerText = text;
    toast.classList.add('active'); // Perbaikan metode pemanggilan classList
    
    if (window.notifTimeout) {
        clearTimeout(window.notifTimeout);
    }

    window.notifTimeout = setTimeout(() => { 
        toast.classList.remove('active'); 
    }, 4000);
}
