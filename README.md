# Logi+ | AI-Driven Yield & Capacity Engine

<div align="center">
  <h3>Transform Your Logistics with AI-Powered Intelligence</h3>
  <p>3D Load Planning • Dynamic Pricing • Predictive Network Balancing</p>
</div>

## 🚀 Overview

**Logi+** adalah sistem AI canggih yang dirancang untuk meningkatkan efisiensi operasional logistik. Sistem ini terintegrasi dengan GLID (OPTIMA-POS) untuk memberikan keputusan cerdas dalam manajemen kapasitas dan profitabilitas.

### 🎯 Fitur Utama

#### 1. **3D Load Planning & Digital Twin** 📦
- **Metodologi:** Terinspirasi dari DHL Digital Twin
- **Teknologi:** Bin Packing Algorithm & Computer Vision
- **Fitur:**
  - Visualisasi 3D real-time penyusunan barang di truk
  - Simulasi "Tetris-style" untuk optimasi ruang
  - Instruksi visual untuk petugas gudang
- **Impact:** Meningkatkan Fill Rate truk sebesar **15-20%**

#### 2. **Dynamic Spot Pricing / Yield Manager** 💰
- **Metodologi:** Terinspirasi dari Uber Freight
- **Konsep:** Revenue Management & Dynamic Pricing
- **Fitur:**
  - Harga berubah real-time berdasarkan supply & demand
  - Flash Deal B2B otomatis untuk kapasitas kosong
  - Heatmap Indonesia dengan opportunity pricing
- **Impact:** Mengubah ruang kosong menjadi revenue maksimal

#### 3. **Predictive Network Balancing** 🧠
- **Metodologi:** Terinspirasi dari UPS ORION
- **Teknologi:** Prescriptive Analytics & Machine Learning
- **Fitur:**
  - Prediksi ketimpangan muatan 1 minggu ke depan
  - Rekomendasi proaktif untuk sales team
  - Konsolidasi lintas-moda otomatis
- **Impact:** Optimasi biaya total, bukan hanya jarak

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **3D Rendering:** Three.js + React Three Fiber
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Charts:** Recharts

## 📦 Installation

```bash
# Clone repository
git clone <repository-url>
cd logi-plus

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Project Structure

```
logi-plus/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main application page
│   └── globals.css         # Global styles
├── components/
│   ├── 3d-load-plan/       # 3D visualization components
│   │   ├── TruckViewer.tsx
│   │   ├── TruckModel.tsx
│   │   ├── PackageBoxes.tsx
│   │   └── LoadPlanStats.tsx
│   ├── pricing-heatmap/    # Pricing & network components
│   │   ├── IndonesiaMap.tsx
│   │   └── NetworkBalance.tsx
│   ├── layout/             # Layout components
│   │   ├── Header.tsx
│   │   └── TabNavigation.tsx
│   └── ui/                 # Reusable UI components
│       └── Button.tsx
└── lib/
    └── utils.ts            # Utility functions
```

## 🎨 Features & UI/UX

### Micro Interactions
- ✨ Smooth page transitions with Framer Motion
- 🎯 Interactive 3D truck visualization with orbit controls
- 📊 Animated statistics counters
- 🌊 Pulse effects on high-priority areas
- 🎭 Hover effects on all interactive elements
- 🎪 Tab switching with spring animations

### Design Philosophy
- **Dark Theme:** Professional and modern aesthetic
- **Gradient Accents:** Blue-cyan for primary, vibrant colors for stats
- **Glass Morphism:** Backdrop blur effects for depth
- **Responsive:** Fully responsive design for all screen sizes

## 📊 Key Metrics Displayed

### 3D Load Planning
- Space Utilization: **98%**
- Packages Loaded: **18**
- Total Weight: **2,450 kg**
- Efficiency Gain: **+15.8%**

### Dynamic Pricing
- Real-time capacity vs demand visualization
- Discount opportunities: **up to 35%**
- 8 major cities coverage across Indonesia

### Network Balance
- Active Routes: **24**
- Average Utilization: **72%**
- High Priority Alerts: **2**

## 🔧 Development

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🚀 Deployment

This application is optimized for deployment on Vercel:

```bash
# Deploy to Vercel
vercel
```

Or any other Next.js-compatible hosting platform.

## 📝 Integration with GLID

Logi+ dirancang untuk ditanam di dalam GLID (Global Logistics Intelligence Dashboard) sebagai modul AI-powered. Integrasi dapat dilakukan melalui:

1. **API Integration:** REST/GraphQL endpoints untuk data exchange
2. **Webhook Events:** Real-time updates untuk order dan capacity
3. **SSO Integration:** Single Sign-On dengan OPTIMA-POS
4. **Embedded Mode:** iframe atau micro-frontend architecture

## 🎓 Inspired By

- **DHL:** Digital Twin methodology for load planning
- **Uber Freight:** Dynamic spot pricing and yield management
- **UPS ORION:** Predictive network balancing and route optimization

## 📄 License

Built for OPTIMA-POS GLID System

---

<div align="center">
  <p>Made with ❤️ for better logistics management</p>
  <p><strong>Logi+</strong> - Where AI Meets Logistics Excellence</p>
</div>
