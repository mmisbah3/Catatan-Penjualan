document.getElementById('nota-form').addEventListener('submit', function(event) {
    // Mencegah form dari reload halaman
    event.preventDefault();

    // 1. Mengambil nilai dari setiap input
    const nama = document.getElementById('nama').value;
    const nomorHp = document.getElementById('nomorHp').value;
    const jenisBarang = document.getElementById('jenisBarang').value.replace(/\n/g, '<br>'); // Ganti baris baru dengan tag <br>
    const harga = document.getElementById('harga').value;
    
    // 2. Format data
    // Format tanggal ke format Indonesia
    const tanggal = new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    // Format harga ke format Rupiah
    const hargaRp = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(harga);

    // 3. Menampilkan data ke dalam elemen nota
    document.getElementById('nota-tanggal').innerText = tanggal;
    document.getElementById('nota-nama').innerText = nama;
    document.getElementById('nota-nomorHp').innerText = nomorHp;
    document.getElementById('nota-jenisBarang').innerHTML = jenisBarang;
    document.getElementById('nota-harga').innerText = hargaRp;

    // 4. Menampilkan area nota yang tadinya tersembunyi
    const areaNota = document.getElementById('area-nota');
    areaNota.classList.remove('hidden');
    // Gulir ke area nota agar langsung terlihat
    areaNota.scrollIntoView({ behavior: 'smooth' });

    // Kosongkan form setelah submit
    document.getElementById('nota-form').reset();
});