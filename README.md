# Elaina — Developer Portfolio

Portfolio website modern bertema **Elaina (The Ashen Witch)** yang dibangun menggunakan **TanStack Start**, **React 19**, **Tailwind CSS v4**, dan **GSAP**.

---

## 🛠️ Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (Full-stack React)
- **UI & Runtime:** React 19, TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animasi:** [GSAP](https://gsap.com/)
- **Bundler & Tooling:** [Vite](https://vite.dev/), Vitest, ESLint, Prettier

---

## 🚀 Memulai (Getting Started)

### Prasyarat
- [Node.js](https://nodejs.org/) (versi 20 atau lebih baru)
- npm (bawaan Node.js)

### Instalasi & Menjalankan Proyek

1. **Clone repository:**
   ```bash
   git clone <repository-url>
   cd elaina-dev
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   ```
   Buka [http://localhost:8080](http://localhost:8080) di browser Anda.

---

## 📜 Skrip yang Tersedia

| Command | Deskripsi |
| --- | --- |
| `npm run dev` | Menjalankan development server lokal |
| `npm run build` | Melakukan build aplikasi untuk production |
| `npm run preview` | Menjalankan preview lokal dari hasil build |
| `npm test` | Menjalankan unit tests dengan Vitest |
| `npm run lint` | Menjalankan linter ESLint |
| `npm run format` | Menjalankan pemformatan kode dengan Prettier |

---

## 📁 Struktur Direktori

```text
├── src/
│   ├── components/     # Komponen UI (Tailwind & Radix UI primitives)
│   ├── lib/            # Utility functions dan error handling
│   ├── routes/         # File-based routing TanStack Router
│   ├── test/           # Unit & routing tests
│   ├── router.tsx      # Konfigurasi router TanStack
│   ├── server.ts       # Server entry point
│   ├── start.ts        # TanStack Start middleware & instance
│   └── styles.css      # Style utama & konfigurasi tema
├── public/             # File statis (favicon, dll.)
├── vite.config.ts      # Konfigurasi Vite
└── package.json        # Manifest proyek & dependencies
```

---

## 📄 Lisensi & Kredit

Dibuat dengan ❤️ untuk Elaina.
Kunjungi juga [iyasz.dev](https://iyasz.dev).
