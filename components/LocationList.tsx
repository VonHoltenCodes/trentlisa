'use client'

import { MapPin, Calendar, Heart } from 'lucide-react'

interface LocationPin {
  id: string
  latitude: number
  longitude: number
  title: string
  date: string
  description: string
}

interface LocationListProps {
  pins: LocationPin[]
  onSelectPin?: (pin: LocationPin) => void
}

export default function LocationList({ pins, onSelectPin }: LocationListProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-mountain-blue mb-4">Our Journey</h3>
      <div className="space-y-3">
        {pins.map((pin, index) => (
          <div
            key={pin.id}
            className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-lake-blue"
            onClick={() => onSelectPin?.(pin)}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-lake-blue flex items-center justify-center">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="font-semibold text-lg text-deep-navy">{pin.title}</h4>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {pin.date}
                  </span>
                </div>
                <p className="text-gray-700 mt-2">{pin.description}</p>
              </div>
              <Heart className="w-5 h-5 text-red-400 flex-shrink-0" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}