'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HoneymoonMap from '@/components/HoneymoonMap'
import LocationList from '@/components/LocationList'
import { Map, Heart, Camera, Calendar } from 'lucide-react'

interface LocationPin {
  id: string
  latitude: number
  longitude: number
  title: string
  date: string
  description: string
}

export default function TravelPage() {
  const [pins, setPins] = useState<LocationPin[]>([])
  const [selectedPin, setSelectedPin] = useState<LocationPin | null>(null)

  useEffect(() => {
    // Load pins from local storage
    const savedPins = localStorage.getItem('honeymoonPins')
    if (savedPins) {
      setPins(JSON.parse(savedPins))
    } else {
      // Default pins for Redwood to San Diego route
      const defaultPins = [
        {
          id: '1',
          latitude: 41.2132,
          longitude: -124.0046,
          title: 'Redwood National Forest',
          date: 'August 2, 2025',
          description: 'Starting our honeymoon adventure among the giants!'
        },
        {
          id: '2',
          latitude: 40.8021,
          longitude: -124.1637,
          title: 'Eureka, CA',
          date: 'August 3, 2025',
          description: 'Exploring the Victorian seaport'
        },
        {
          id: '3',
          latitude: 39.7391,
          longitude: -123.8034,
          title: 'Mendocino, CA',
          date: 'August 4, 2025',
          description: 'Charming coastal village'
        },
        {
          id: '4',
          latitude: 37.7749,
          longitude: -122.4194,
          title: 'San Francisco, CA',
          date: 'August 5-6, 2025',
          description: 'Golden Gate City stop before heading inland'
        },
        {
          id: '5',
          latitude: 37.8651,
          longitude: -119.5383,
          title: 'Yosemite National Park',
          date: 'August 7-9, 2025',
          description: 'Detour to see waterfalls and granite cliffs!'
        },
        {
          id: '6',
          latitude: 32.7157,
          longitude: -117.1611,
          title: 'San Diego, CA',
          date: 'August 10-12, 2025',
          description: 'Ending our journey at America\'s Finest City!'
        }
      ]
      setPins(defaultPins)
      localStorage.setItem('honeymoonPins', JSON.stringify(defaultPins))
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-warm-beige">
      <Navigation />
      
      <main className="main-content">
        {/* Hero Section */}
        <div className="text-center py-20 px-6 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="max-w-4xl mx-auto">
            <Heart className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-white mb-4">Our Honeymoon Adventure</h1>
            <p className="text-xl text-white/90">
              From Redwood forests to San Diego beaches, with a Yosemite detour!
            </p>
            <div className="flex items-center justify-center space-x-6 mt-8">
              <div className="flex items-center text-white">
                <Map className="w-5 h-5 mr-2" />
                <span>West Coast Road Trip</span>
              </div>
              <div className="flex items-center text-white">
                <Calendar className="w-5 h-5 mr-2" />
                <span>August 2-12, 2025</span>
              </div>
              <div className="flex items-center text-white">
                <Camera className="w-5 h-5 mr-2" />
                <span>Live Updates</span>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <section className="section py-12">
          <div className="container mx-auto px-6">
            <div className="mb-4 text-center">
              <button 
                onClick={() => {
                  localStorage.removeItem('honeymoonPins')
                  window.location.reload()
                }}
                className="bg-forest-green text-warm-beige px-6 py-3 rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 flex items-center space-x-2 mx-auto font-medium"
                style={{backgroundColor: 'var(--forest-green)', color: 'var(--warm-beige)'}}
              >
                <span>🌲</span>
                <span>Refresh</span>
                <span>🏔️</span>
              </button>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <HoneymoonMap />
              </div>
              <div className="lg:col-span-1">
                <LocationList pins={pins} onSelectPin={setSelectedPin} />
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="section bg-white py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="section-title">Follow Along</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-lake-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Map className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Live Updates</h3>
                  <p className="text-gray-600">We'll pin our locations as we travel from Redwood to San Diego</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Photo Sharing</h3>
                  <p className="text-gray-600">Check back for photos from each destination</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-mountain-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Send Love</h3>
                  <p className="text-gray-600">Leave us messages along our journey</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}