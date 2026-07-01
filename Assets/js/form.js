function submitOrder() {
    const check = document.getElementById('agreementCheck').checked;
    const nama = document.getElementById('formNama').value.trim();
    const wa = document.getElementById('formWA').value.trim();

    // 1. Validasi Input Form
    if (!check) {
        showToastWarning("Anda wajib menyetujui Nota Kesepahaman (MoU) terlebih dahulu!");
        return;
    }
    if (nama === "" || wa === "") {
        showToastWarning("Nama dan nomor WhatsApp aktif wajib diisi!");
        return;
    }

    // Tampilkan notifikasi proses dimulai
    showToastNotif("Mengompilasi & menyimpan berkas pengajuan Anda...");

    // Ambil data produk dan skema kemitraan aktif
    const produkData = activeSolution;
    let modelText = selectedModelKemitraan === 'jual' ? 'Jual Putus' : (selectedModelKemitraan === 'sewa' ? 'Sewa Alat' : 'Investor');
    const namaSistemBersih = produkData.product.name.replace(/<[^>]*>?/gm, ''); // Membersihkan tag HTML/badge premium

    // 2. Siapkan Objek Data untuk Google Sheets
    const dataKeSheets = {
        nama: nama,
        whatsapp: wa,
        sistem: namaSistemBersih,
        skema: modelText,
        nilai: formatPrice(
    produkData.pricing.startingPrice
)
    };

    // GANTI INI dengan URL Web App Google Apps Script Anda dari Langkah 1
    const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwNE_HIwNSa3yA3JGcNAHxgi1ZJOgPLiFxV7J2tqmb7vjuKKXTw6xDrpnPlMwsfWmEe/exec";

    // 3. Mengirim data ke Google Sheets menggunakan Fetch API secara asynchronous
    fetch(WEB_APP_URL, {
        method: "POST",
        mode: "no-cors", // Mengatasi masalah CORS kebijakan browser cross-origin
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataKeSheets)
    })
    .then(() => {
        // 4. Setelah data berhasil terkirim ke latar belakang (Google Sheets), picu redirect WhatsApp
        showToastNotif("Data tersinkronisasi! Mengalihkan ke WhatsApp...");
        
        setTimeout(() => {
            const waMessage = `Halo Tim Tani Cerdas Indonesia,\r\n\r\nSaya telah menyetujui MoU Digital di website.\r\n\r\n*Detail Pengajuan:*\r\n- Nama/Instansi: ${nama}\r\n- WhatsApp: ${wa}\r\n- Sistem Dipilih: ${namaSistemBersih}\r\n- Skema Kemitraan: ${modelText}\r\n- Nilai Produk: ${formatPrice(
    produkData.pricing.startingPrice)}\r\n\r\nMohon proses pengajuan resmi saya, terima kasih.`;
            
            window.open(`https://wa.me/6283177799511?text=${encodeURIComponent(waMessage)}`, '_blank');
        }, 1000);
    })
    .catch(error => {
        console.error("Gagal sinkronisasi data:", error);
        showToastWarning("Terjadi gangguan koneksi server, silakan coba lagi.");
    });
}
