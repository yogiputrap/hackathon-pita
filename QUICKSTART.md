# Quick Start Guide - Logi+

Get up and running with Logi+ in 5 minutes! 🚀

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Basic knowledge of React/Next.js (optional)

---

## 🏃 Quick Start

### 1. Clone & Install

```bash
# Clone the repository
git clone <repository-url>
cd logi-plus

# Install dependencies
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Explore Features

Navigate through the 3 main tabs:

1. **3D Load Planning** - Interactive truck visualization
2. **Dynamic Pricing** - Indonesia heatmap with pricing tiers
3. **Network Balancing** - 7-day predictive analytics

---

## 📁 Project Overview

### Main Files

```
logi-plus/
├── app/
│   ├── page.tsx           # Main application
│   └── layout.tsx         # Root layout
├── components/
│   ├── 3d-load-plan/      # 3D features
│   ├── pricing-heatmap/   # Pricing features
│   └── layout/            # UI layout
└── lib/
    └── utils.ts           # Helper functions
```

### Key Technologies

- **Next.js 16**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Three.js**: 3D rendering
- **Framer Motion**: Animations

---

## 🎮 Interactive Guide

### Tab 1: 3D Load Planning

**What you see:**
- Interactive 3D truck model
- Animated package loading
- Real-time statistics

**Try this:**
1. Drag to rotate the view
2. Scroll to zoom
3. Watch packages animate into position
4. Check the stats: 98% utilization!

### Tab 2: Dynamic Pricing

**What you see:**
- Indonesia map with city markers
- Color-coded pricing tiers
- Real-time capacity data

**Try this:**
1. Click on city markers
2. Look for red areas (high discounts)
3. Check utilization percentages
4. See automatic flash deal recommendations

### Tab 3: Network Balancing

**What you see:**
- Route predictions (7 days ahead)
- Priority alerts
- Recommended actions

**Try this:**
1. Review high-priority routes
2. Check trend indicators (up/down)
3. Read AI-generated recommendations
4. Monitor active routes count

---

## 🎨 Customization

### Change Colors

Edit `lib/utils.ts`:

```typescript
const colors = [
  "#FF6B6B",  // Your brand color here
  "#4ECDC4",
  // Add more colors
];
```

### Add New City

Edit `lib/utils.ts` → `generateNetworkData()`:

```typescript
{
  city: "Yogyakarta",
  lat: -7.7956,
  lng: 110.3695,
  capacity: 45,
  demand: 55,
  pricing: "medium"
}
```

### Modify Metrics

Edit `components/3d-load-plan/LoadPlanStats.tsx`:

```typescript
setUtilization(prev => prev < 98 ? prev + 2 : 98);
// Change 98 to your target utilization
```

---

## 🚀 Production Build

### Build for Production

```bash
npm run build
```

### Test Production Build

```bash
npm run start
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

---

## 🔧 Common Customizations

### 1. Change Header Title

Edit `components/layout/Header.tsx`:

```typescript
<h1>Your Company Name</h1>
```

### 2. Modify Hero Text

Edit `app/page.tsx`:

```typescript
<h1>Transform Your Logistics</h1>
// Change to your tagline
```

### 3. Add More Stats

Edit `components/3d-load-plan/LoadPlanStats.tsx` and add to the `stats` array.

### 4. Customize Map

Edit `components/pricing-heatmap/IndonesiaMap.tsx` to add your routes.

---

## 📊 Understanding the Data

### Load Plan Stats
- **Space Utilization**: % of truck space used
- **Packages Loaded**: Number of items
- **Total Weight**: Combined weight in kg
- **Efficiency Gain**: Improvement over manual

### Pricing Tiers
- **Red (< 50% utilization)**: 35% discount
- **Orange (50-70%)**: 20% discount
- **Yellow (70-85%)**: 10% discount
- **Green (> 85%)**: No discount needed

### Network Predictions
- **Up Trend**: Demand increasing
- **Down Trend**: Demand decreasing
- **High Priority**: Immediate action required
- **Medium/Low**: Monitor and optimize

---

## 🐛 Troubleshooting

### Issue: 3D not loading

**Solution**: Check browser console for errors. Try clearing cache.

### Issue: Build fails

**Solution**: Delete `.next` folder and `node_modules`, then:
```bash
npm install
npm run build
```

### Issue: Slow performance

**Solution**: 
- Close other browser tabs
- Update your GPU drivers
- Use Chrome/Edge for better 3D performance

---

## 💡 Tips & Tricks

### Performance Tips
1. Use Chrome DevTools Performance tab
2. Monitor Network tab for slow requests
3. Check Lighthouse scores

### Development Tips
1. Use React DevTools extension
2. Enable TypeScript strict mode
3. Follow component structure patterns

### UI Tips
1. Test on different screen sizes
2. Check dark/light mode compatibility
3. Verify accessibility with screen readers

---

## 📚 Learning Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Three.js Docs](https://threejs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

### Tutorials
- React Three Fiber: [pmnd.rs](https://docs.pmnd.rs/)
- Yield Management: Revenue optimization concepts
- Bin Packing: Algorithm explanation

---

## 🎯 Next Steps

1. ✅ Run the app locally
2. ✅ Explore all features
3. ✅ Customize branding
4. ✅ Add your data
5. ✅ Deploy to production
6. ✅ Share with your team

---

## 🆘 Need Help?

- **Documentation**: Check `README.md` and `FEATURES.md`
- **Issues**: Open a GitHub issue
- **Email**: support@optima-pos.com
- **Contributing**: See `CONTRIBUTING.md`

---

## 🎉 Congratulations!

You're now ready to use Logi+ for your logistics operations!

**Happy optimizing! 🚛📦✨**

---

**Version**: 1.0.0  
**Last Updated**: 2024  
**Status**: Production Ready
