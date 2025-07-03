```bash
npm run build
```
```bash
tsc
```
```bash
npx tsc
```
```bash
npx tsc --noEmit
```
```bash
npx tsc --noEmit --pretty false 2>&1 | tee tsc-error.log
```
```bash
npx tsc --noEmit --pretty false
```
Build di Vercel gagal karena proses TypeScript (`tsc`) keluar dengan status error, **namun tidak ada pesan error TypeScript yang muncul di output**. Ini biasanya terjadi jika:

1. **Ada file import yang tidak ditemukan** (missing file/module).
2. **Ada error di file yang tidak terlintas di output** karena TypeScript tidak bisa resolve file.
3. **Ada masalah konfigurasi tsconfig.json** (misal include/exclude, rootDir, atau paths).

**Solusi & langkah pengecekan:**

1. **Pastikan semua file yang di-import benar-benar ada.**
   - Dari riwayat, beberapa file seperti `src/pages/OrganizationsListPage.tsx`, `src/pages/OrganizationsCreatePage.tsx`, `src/pages/UsersPage.tsx`, `src/pages/RolesPage.tsx`, dan `src/pages/OrganizationsOverviewPage.tsx` harus benar-benar ada di repo dan tidak terhapus/ter-rename.
   - Jika file hilang, TypeScript tidak akan bisa build dan tidak selalu menampilkan error yang jelas.

2. **Cek tsconfig.json**:
   - Pastikan `include` dan `exclude` sudah benar, dan tidak ada masalah path.

3. **Cek import di App.tsx dan Sidebar**:
   - Pastikan semua import file yang baru ditambahkan tidak typo dan file-nya ada.

4. **Cek di local:**
   - Jalankan `npx tsc --noEmit` di local, dan pastikan semua file yang di-import benar-benar ada.

---

### Langkah perbaikan cepat

- **Pastikan file berikut ADA di repo:**
  - `src/pages/OrganizationsListPage.tsx`
  - `src/pages/OrganizationsCreatePage.tsx`
  - `src/pages/UsersPage.tsx`
  - `src/pages/RolesPage.tsx`
  - `src/pages/OrganizationsOverviewPage.tsx`

Jika ada yang hilang, buat file kosong dengan export default component, lalu commit & push ulang.

---

Jika sudah, coba build ulang. Jika masih error, kirimkan isi file `tsconfig.json` dan hasil lengkap dari `npx tsc --noEmit` jika ada error baru.

**Summary:**  
Error ini hampir pasti karena ada file yang di-import tapi tidak ada di repo (missing file/module). Pastikan semua file yang di-import benar-benar ada di repo sebelum deploy ke Vercel!