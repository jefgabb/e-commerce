# E-Commerce (MERN) 🛒

Monorepo berisi tiga aplikasi:
- `backend/` – REST API Express + MongoDB (Cloudinary untuk upload gambar).
- `frontend/` – Storefront React + Vite + Tailwind.
- `admin/` – Admin panel React + Vite untuk kelola produk & pesanan.

> Catatan: Integrasi pembayaran Razorpay/Stripe belum diaktifkan sesuai permintaan, jadi alur checkout masih dummy sampai payment gateway dihubungkan.

## Link Deploy
- Frontend (storefront): https://e-commercefrontend-qhnf7mmuf-jefgabs-projects.vercel.app/
- Admin panel: https://e-commerceadmin-b57ee966a-jefgabs-projects.vercel.app/
- Backend API: https://e-commercebackend-dlcsq7y6n-jefgabs-projects.vercel.app/

## Teknologi Utama
- Backend: Node.js, Express, MongoDB (Mongoose), Cloudinary upload, JWT auth.
- Frontend & Admin: React (Vite), React Router, Tailwind, Axios, React Toastify.

## Struktur Folder
```
backend/     # API, model, controller, middleware
frontend/    # Storefront
admin/       # Admin dashboard
```

## Fitur Singkat
- Storefront: home dengan hero, koleksi terbaru, best seller, filter kategori/subkategori, detail produk, cart, checkout placeholder, orders.
- Admin: login admin, tambah produk (multi-image ke Cloudinary), list & hapus produk, lihat pesanan.
- Backend: CRUD produk, auth admin/user, penyimpanan gambar Cloudinary.

## Alur Data Produk
- Admin menambah produk → gambar diupload ke Cloudinary → disimpan ke MongoDB dengan field `bestSeller`, `category`, `subCategory`, `sizes`, `image[]`.
- Storefront mengambil `/api/product/list` (public) dan mem-filter di sisi klien (best seller, kategori, subkategori, pencarian).

## Catatan Deployment
- `VITE_BACKEND_URL` di frontend & admin diarahkan ke URL backend di atas.
- Payment gateway dibiarkan non-aktif; aktifkan hanya jika sudah menyiapkan credential & webhook.

## Troubleshooting Singkat
- Produk tidak muncul: pastikan backend live dan endpoint `/api/product/list` mengembalikan 200 dengan data.
- Best seller kosong: pastikan field `bestSeller` di DB bernilai `true`.
- Filter subkategori: nilai `subCategory` produk harus cocok dengan opsi filter (mis. `Outerwear`, `Topwear`, `Bottomwear`).

