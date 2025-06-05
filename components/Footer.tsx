import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-2xl font-bold">T</span>
          <Heart className="footer-heart" />
          <span className="text-2xl font-bold">L</span>
        </div>
        
        <p className="text-lg mb-4">
          August 1st, 2025 • Lilly Lake, RMNP
        </p>
        
        <div className="space-y-2 mb-8">
          <p>Questions? Email us at:</p>
          <a href="mailto:hello@trentlisa.com" style={{ color: 'var(--lake-blue)' }} className="hover:text-white transition-colors">
            hello@trentlisa.com
          </a>
        </div>
        
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-sm opacity-75">
              © 2025 Trent & Lisa. Made with love in the Rocky Mountains.
            </p>
            <a 
              href="/admin/honeymoon" 
              className="text-xs opacity-50 hover:opacity-75 transition-opacity"
              style={{ color: 'var(--warm-beige)' }}
            >
              Admin
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}