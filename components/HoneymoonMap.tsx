'use client'

import { useState, useEffect } from 'react'
import Map, { Marker, NavigationControl, Popup } from 'react-map-gl/mapbox'
import 'mapbox-gl/dist/mapbox-gl.css'
import { MapPin, Heart } from 'lucide-react'

interface LocationPin {
  id: string
  latitude: number
  longitude: number
  title: string
  date: string
  description: string
}

export default function HoneymoonMap() {
  const [viewport, setViewport] = useState({
    latitude: 39.0, // Center to show full route from Redwood to San Diego
    longitude: -120.0,
    zoom: 5
  })
  
  const [pins, setPins] = useState<LocationPin[]>([])
  const [selectedPin, setSelectedPin] = useState<LocationPin | null>(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  // Load pins from local storage (in real app, would fetch from API)
  useEffect(() => {
    const savedPins = localStorage.getItem('honeymoonPins')
    if (savedPins) {
      setPins(JSON.parse(savedPins))
    } else {
      // Default pins for Redwood to San Diego route
      setPins([
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
      ])
    }
  }, [])

  // Save pins to local storage when updated
  useEffect(() => {
    if (pins.length > 0) {
      localStorage.setItem('honeymoonPins', JSON.stringify(pins))
    }
  }, [pins])

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN || ''}
        initialViewState={viewport}
        onMove={(evt) => setViewport(evt.viewState)}
        onLoad={() => setMapLoaded(true)}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        <NavigationControl position="top-right" />
        
        {mapLoaded && pins.map((pin) => (
          <Marker
            key={pin.id}
            latitude={pin.latitude}
            longitude={pin.longitude}
            onClick={(e) => {
              e.originalEvent.stopPropagation()
              setSelectedPin(pin)
            }}
          >
            <div className="cursor-pointer transform hover:scale-110 transition-transform">
              <Heart className="w-8 h-8 text-red-500 fill-current" />
            </div>
          </Marker>
        ))}

        {selectedPin && (
          <Popup
            latitude={selectedPin.latitude}
            longitude={selectedPin.longitude}
            onClose={() => setSelectedPin(null)}
            closeOnClick={false}
            anchor="top"
          >
            <div className="p-2">
              <h3 className="font-bold text-lg">{selectedPin.title}</h3>
              <p className="text-sm text-gray-600">{selectedPin.date}</p>
              <p className="mt-1">{selectedPin.description}</p>
            </div>
          </Popup>
        )}
      </Map>

      {!process.env.NEXT_PUBLIC_MAPBOX_TOKEN && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-center p-4">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Map requires Mapbox token</p>
            <p className="text-sm text-gray-500 mt-2">Contact Trent & Lisa for map access</p>
          </div>
        </div>
      )}
      
      {process.env.NEXT_PUBLIC_MAPBOX_TOKEN && (
        <div className="absolute bottom-4 left-4 z-10">
          <button 
            onClick={() => {
              localStorage.removeItem('honeymoonPins')
              window.location.reload()
            }}
            className="bg-white px-3 py-1 rounded shadow text-sm hover:bg-gray-100"
          >
            Reset Route
          </button>
        </div>
      )}
    </div>
  )
}