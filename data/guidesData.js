const guidesData = {
    techkit: {
        image: "guide-techkit.png",
        alt: "Panduan Techkit",
        faqs: [
            {
                q: "Cara mengelola PDF di Techkit?",
                a: "Pilih menu \"Literatur\", kemudian klik ikon \"+\" untuk membuat struktur folder baru (misalnya berdasarkan model alat berat). Anda dapat memindahkan, mengganti nama, atau menghapus file dengan menahan (long press) pada file tersebut untuk memunculkan menu konteks manajemen file."
            },
            {
                q: "Cara menambahkan pekerjaan di halaman ToolKit?",
                a: "Buka halaman ToolKit, ketuk ikon \"+\" atau tombol \"Tambah Pekerjaan\" di pojok kanan bawah. Isi formulir nama pekerjaan, tanggal, serta deskripsi tugas, lalu klik \"Simpan\"."
            },
            {
                q: "Cara mengedit pekerjaan yang sudah ada di history pekerjaan?",
                a: "Akses menu \"History Pekerjaan\", cari daftar tugas yang ingin diedit, lalu ketuk tombol \"Edit\" (ikon pensil) atau tahan item pekerjaan tersebut untuk membuka opsi edit, lalu perbarui datanya."
            },
            {
                q: "Cara menambahkan peralatan yang dibutuhkan di pekerjaan tersebut?",
                a: "Pilih pekerjaan aktif, lalu masuk ke tab \"Daftar Peralatan/Tools\". Klik tombol \"Tambah Peralatan\", cari alat yang dibutuhkan dari database, isi jumlah unitnya, kemudian klik \"Tambahkan\"."
            },
            {
                q: "Cara melakukan checklist pada pekerjaan?",
                a: "Buka tugas aktif Anda di ToolKit. Di bawah daftar periksa langkah kerja, cukup centang kotak di sebelah setiap item pekerjaan yang telah diselesaikan untuk menandai kemajuannya secara real-time."
            },
            {
                q: "Cara melakukan Backup untuk history pekerjaan yang ada?",
                a: "Masuk ke menu \"Pengaturan\" di dalam aplikasi, pilih opsi \"Pencadangan & Pemulihan\", lalu klik \"Ekspor Data (Backup)\" untuk mengamankan riwayat kerja ke memori eksternal atau penyimpanan cloud."
            },
            {
                q: "Cara membagikan List Tools untuk pekerjaan tersebut?",
                a: "Pada halaman detail pekerjaan, pilih ikon \"Bagikan\" di bagian kanan atas. Anda dapat memilih membagikannya dalam format file dokumen PDF atau pesan teks langsung via WhatsApp atau Email."
            },
            {
                q: "Cara menggunakan fitur Konversi Satuan?",
                a: "Pilih menu \"Konversi Satuan\" di dashboard. Pilih kategori konversi (seperti Tekanan, Torsi, Panjang, atau Suhu), masukkan nilai angka awal, dan sistem akan langsung menampilkan hasil konversi ke berbagai unit lain."
            },
            {
                q: "Cara menggunakan fitur Kalkulator Kelistrikan?",
                a: "Akses fitur \"Kalkulator Kelistrikan\". Masukkan nilai parameter kelistrikan yang tersedia (seperti Tegangan, Arus, atau Hambatan) untuk menghitung Hukum Ohm atau Daya Listrik secara otomatis dan cepat."
            },
            {
                q: "Cara menggunakan fitur Stopwatch Pengukuran?",
                a: "Buka fitur \"Stopwatch Pengukuran\" saat melakukan pengetesan unit. Tekan tombol \"Mulai\" untuk merekam waktu, gunakan tombol \"Lap\" untuk menandai tahapan, dan \"Simpan\" hasil catatan waktu tersebut ke dalam log."
            },
            {
                q: "Cara menggunakan fitur Kamera Dokumentasi?",
                a: "Gunakan fitur \"Kamera Dokumentasi\" terintegrasi untuk mengambil foto temuan visual. Kamera akan secara otomatis menempelkan informasi tanggal, waktu, nomor unit, dan koordinat secara langsung pada foto (watermark)."
            },
            {
                q: "Cara menggunakan fitur Mainstep Prosedur Kerja?",
                a: "Masuk ke menu \"Mainstep Prosedur\". Cari dan pilih panduan SOP yang Anda butuhkan. Ikuti panduan visual langkah demi langkah utama yang wajib dilakukan guna menghindari kesalahan pengerjaan."
            },
            {
                q: "Cara menggunakan fitur List Asset?",
                a: "Buka menu \"List Asset\" untuk melihat daftar seluruh mesin dan peralatan terdaftar. Anda dapat memindai barcode asset atau mencari menggunakan nomor lambung/ID untuk melihat spesifikasi detail dan statusnya."
            },
            {
                q: "Cara menggunakan fitur Tabel Referensi?",
                a: "Masuk ke menu \"Tabel Referensi\" untuk mencari data spesifikasi penting secara instan, seperti tabel torsi pengencangan baut standar, tabel kapasitas oli, serta kode error standar industri."
            },
            {
                q: "Cara menggunakan fitur Literatur PDF?",
                a: "Buka menu \"Literatur PDF\", telusuri folder manual book atau dokumen teknis yang tersedia di sana. Klik pada file PDF yang Anda inginkan untuk membukanya secara instan dengan penampil dokumen bawaan aplikasi."
            }
        ]
    },
    techform: {
        image: "guide-techform.png",
        alt: "Panduan Techform",
        faqs: [
            {
                q: "Bagaimana cara export JSEA ke Excel dengan presisi?",
                a: "Setelah selesai mengisi seluruh langkah JSEA beserta mitigasinya, pastikan bagian \"Tanda Tangan\" telah diisi. Klik tombol \"Export\", lalu pilih \"Format Excel Corporate\". Sistem secara otomatis akan memisahkan penomoran (misal: 1.1) dengan deskripsi dalam kolom berbeda sesuai format korporat."
            }
        ]
    },
    techcam: {
        image: "guide-techcam.png",
        alt: "Panduan Techcam",
        faqs: [
            {
                q: "Konfigurasi Auto-Watermark Berkelanjutan",
                a: "Masuk ke menu \"Pengaturan Watermark\". Centang opsi \"Pertahankan Metadata (Auto)\". Dengan pengaturan ini, nama unit, lokasi, dan jenis temuan akan otomatis disalin ke foto-foto berikutnya tanpa perlu mengetik ulang, sangat mempercepat inspeksi massal."
            }
        ]
    }
};
