'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Heart, Gift } from 'lucide-react'

export default function RegistryPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-24">
        <section className="section">
          <div className="section-container">
            <h1 className="section-title">
              Gift Registry
            </h1>
            
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-12">
                <div className="inline-flex items-center justify-center mb-6">
                  <Heart className="w-12 h-12 text-red-500 mx-2" fill="currentColor" />
                  <Gift className="w-16 h-16" style={{ color: 'var(--mountain-blue)' }} />
                  <Heart className="w-12 h-12 text-red-500 mx-2" fill="currentColor" />
                </div>
                
                <p className="text-xl mb-8" style={{ color: 'var(--deep-navy)' }}>
                  Your presence is enough of a present to us! But for those of you who are stubborn, we've requested you donate to our Honeymoon here on the website below.
                </p>
                
                <a
                  href="https://withjoy.com/trent-and-lisa/registry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 text-white font-medium text-lg rounded-full shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl"
                  style={{ 
                    backgroundColor: 'var(--mountain-blue)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--forest-green)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--mountain-blue)';
                  }}
                >
                  View Our Registry on WithJoy
                </a>
              </div>

              <div className="card max-w-2xl mx-auto">
                <h3 className="card-title">Our Honeymoon Fund</h3>
                <p className="text-lg mb-4" style={{ color: 'var(--deep-navy)' }}>
                  We're saving for our honeymoon adventure! Your generous contributions will help make our post-wedding getaway truly special.
                </p>
                <div className="text-sm" style={{ color: 'var(--rock-gray)' }}>
                  All contributions can be made through our WithJoy registry
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}