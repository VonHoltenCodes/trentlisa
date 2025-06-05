# Trent & Lisa Wedding Website

A beautiful Next.js wedding website featuring countdown timer, photo galleries, registry information, and travel details for guests.

## 🌟 Features

- **Wedding Countdown Timer** - Live countdown to the special day
- **Photo Gallery** - Beautiful wedding and engagement photos
- **Registry Information** - Wedding gift registry details for guests
- **Travel & Accommodations** - Information for out-of-town guests
- **Honeymoon Tracker** - Admin panel for honeymoon planning and tracking
- **Responsive Design** - Mobile-friendly design with Tailwind CSS
- **Interactive Maps** - Location information with Mapbox integration

## 🚀 Technology Stack

- **Framework**: Next.js 15.3.2 with App Router
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Maps**: Mapbox GL with React Map GL
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Countdown**: React Countdown

## 🏗️ Project Structure

```
trentlisa/
├── app/                    # Next.js app router pages
│   ├── admin/             # Admin panel for honeymoon tracking
│   ├── registry/          # Gift registry page
│   ├── travel/            # Travel information page
│   └── page.tsx           # Homepage with countdown
├── components/            # Reusable React components
├── lib/                   # Utility functions
├── public/                # Static assets
├── photos/                # Wedding and engagement photos
└── utils/                 # Helper utilities
```

## 🛠️ Development

### Prerequisites
- Node.js 18.20.8 (via NVM)
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

## 🌐 Deployment

This website is deployed and running on:
- **URL**: https://trentlisa.com
- **Server**: Custom server with PM2 process management
- **Port**: 3002 (proxied through Apache)
- **SSL**: Let's Encrypt certificate

### Deployment Commands
```bash
# Build the application
npm run build

# Start with PM2
pm2 start --name "trentlisa" npm -- start

# Deploy script
./deploy.sh
```

## 📝 Configuration

The website includes several configuration files:
- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `.env.local` - Environment variables (not included in repo)

## 🎨 Customization

The website features a beautiful wedding theme with:
- Custom color palette
- Elegant typography
- Smooth animations
- Interactive components
- Mobile-responsive design

## 📸 Photo Management

Wedding photos are stored in the `/photos` directory and automatically optimized by Next.js for web delivery.

## 🔒 Privacy

This is a private wedding website repository. **Not for public use or distribution.**

## 📞 Support

For technical issues or questions, contact the development team.

---

Built with ❤️ for Trent & Lisa's Special Day