'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Plus, Trash2, MapPin, Save, Upload, Camera, Image, Lock, Eye, EyeOff } from 'lucide-react'

interface LocationPin {
  id: string
  latitude: number
  longitude: number
  title: string
  date: string
  description: string
}

export default function HoneymoonAdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loginError, setLoginError] = useState('')
  const [pins, setPins] = useState<LocationPin[]>([])
  const [newPin, setNewPin] = useState<Partial<LocationPin>>({
    title: '',
    date: '',
    description: '',
    latitude: 0,
    longitude: 0
  })
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([])
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)

  useEffect(() => {
    // Check if already authenticated
    const authStatus = sessionStorage.getItem('adminAuthenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      // Load pins from local storage
      const savedPins = localStorage.getItem('honeymoonPins')
      if (savedPins) {
        setPins(JSON.parse(savedPins))
      }
    }
  }, [isAuthenticated])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple password check - in production, use proper authentication
    if (password === 'TrentLisa2025!') {
      setIsAuthenticated(true)
      sessionStorage.setItem('adminAuthenticated', 'true')
      setLoginError('')
    } else {
      setLoginError('Invalid password. Please try again.')
      setPassword('')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem('adminAuthenticated')
    setPassword('')
  }

  const saveToLocalStorage = (updatedPins: LocationPin[]) => {
    localStorage.setItem('honeymoonPins', JSON.stringify(updatedPins))
    setPins(updatedPins)
  }

  const addPin = () => {
    if (!newPin.title || !newPin.date || !newPin.latitude || !newPin.longitude) {
      alert('Please fill in all required fields')
      return
    }

    const pin: LocationPin = {
      id: Date.now().toString(),
      title: newPin.title!,
      date: newPin.date!,
      description: newPin.description || '',
      latitude: Number(newPin.latitude),
      longitude: Number(newPin.longitude)
    }

    const updatedPins = [...pins, pin]
    saveToLocalStorage(updatedPins)

    // Reset form
    setNewPin({
      title: '',
      date: '',
      description: '',
      latitude: 0,
      longitude: 0
    })
  }

  const deletePin = (id: string) => {
    const updatedPins = pins.filter(pin => pin.id !== id)
    saveToLocalStorage(updatedPins)
  }

  // Login Form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-warm-beige">
        <Navigation />
        
        <main className="main-content" style={{paddingTop: '120px'}}>
          <div className="container mx-auto px-6 py-12">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <Lock className="w-12 h-12 text-mountain-blue mx-auto mb-4" />
                <h1 className="text-2xl font-bold" style={{color: 'var(--deep-navy)'}}>Admin Access</h1>
                <p className="text-gray-600 mt-2">Enter password to access honeymoon dashboard</p>
              </div>
              
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{color: 'var(--deep-navy)'}}>
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lake-blue focus:border-transparent"
                      placeholder="Enter admin password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                
                {loginError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    {loginError}
                  </div>
                )}
                
                <button
                  type="submit"
                  className="w-full bg-mountain-blue text-white py-3 px-4 rounded-lg hover:opacity-90 transition-opacity font-medium"
                  style={{backgroundColor: 'var(--mountain-blue)'}}
                >
                  Access Dashboard
                </button>
              </form>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>For Trent & Lisa:</strong> Use your wedding admin password
                </p>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-warm-beige">
      <Navigation />
      
      <main className="main-content" style={{paddingTop: '120px'}}>
        <div className="container mx-auto px-6 py-12">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold" style={{color: 'var(--deep-navy)'}}>Honeymoon Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors text-sm"
            >
              Logout
            </button>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-r from-forest-green to-mountain-blue text-white rounded-lg p-6">
              <Camera className="w-8 h-8 mb-2" />
              <h3 className="text-xl font-bold mb-2">Quick Photo Upload</h3>
              <p className="text-sm opacity-90">Upload photos directly from your phone</p>
            </div>
            <div className="bg-gradient-to-r from-lake-blue to-mountain-blue text-white rounded-lg p-6">
              <MapPin className="w-8 h-8 mb-2" />
              <h3 className="text-xl font-bold mb-2">Add Location Pin</h3>
              <p className="text-sm opacity-90">Drop pins as you travel</p>
            </div>
          </div>
          
          {/* Photo Upload Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-mountain-blue flex items-center">
              <Camera className="w-6 h-6 mr-2" />
              Photo Upload
            </h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-lake-blue transition-colors">
              <input
                type="file"
                id="photo-upload"
                multiple
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const files = Array.from(e.target.files || [])
                  files.forEach(file => {
                    const reader = new FileReader()
                    reader.onload = (e) => {
                      const result = e.target?.result as string
                      setUploadedPhotos(prev => [...prev, result])
                    }
                    reader.readAsDataURL(file)
                  })
                }}
              />
              <label htmlFor="photo-upload" className="cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-700">Click to upload photos</p>
                <p className="text-sm text-gray-500 mt-1">or drag and drop files here</p>
              </label>
            </div>
            
            {uploadedPhotos.length > 0 && (
              <div className="mt-6">
                <h3 className="font-semibold mb-3">Recently Uploaded ({uploadedPhotos.length})</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {uploadedPhotos.map((photo, index) => (
                    <div key={index} className="relative group">
                      <img 
                        src={photo} 
                        alt={`Upload ${index + 1}`}
                        className="w-full h-24 object-cover rounded cursor-pointer hover:opacity-75 transition-opacity"
                        onClick={() => setSelectedPhoto(photo)}
                      />
                      <button
                        onClick={() => setUploadedPhotos(prev => prev.filter((_, i) => i !== index))}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Add New Pin Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-mountain-blue flex items-center">
              <MapPin className="w-6 h-6 mr-2" />
              Add New Location
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Location Name*</label>
                <input
                  type="text"
                  value={newPin.title || ''}
                  onChange={(e) => setNewPin({...newPin, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="e.g., Monterey Bay"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Date*</label>
                <input
                  type="text"
                  value={newPin.date || ''}
                  onChange={(e) => setNewPin({...newPin, date: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="e.g., August 4, 2025"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Latitude*</label>
                <input
                  type="number"
                  step="0.0001"
                  value={newPin.latitude || ''}
                  onChange={(e) => setNewPin({...newPin, latitude: parseFloat(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="e.g., 36.6177"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Longitude*</label>
                <input
                  type="number"
                  step="0.0001"
                  value={newPin.longitude || ''}
                  onChange={(e) => setNewPin({...newPin, longitude: parseFloat(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="e.g., -121.9166"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  value={newPin.description || ''}
                  onChange={(e) => setNewPin({...newPin, description: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  rows={3}
                  placeholder="What are you doing at this location?"
                />
              </div>
              <div className="md:col-span-2 flex space-x-4">
                <button
                  onClick={addPin}
                  className="btn-primary flex items-center space-x-2"
                >
                  <Plus className="w-5 h-5" />
                  <span>Add Location</span>
                </button>
                <button
                  onClick={() => {
                    if (navigator.geolocation) {
                      navigator.geolocation.getCurrentPosition((position) => {
                        setNewPin({
                          ...newPin,
                          latitude: position.coords.latitude,
                          longitude: position.coords.longitude
                        })
                      })
                    }
                  }}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors flex items-center space-x-2"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Use Current Location</span>
                </button>
              </div>
            </div>
          </div>

          {/* Current Pins List */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-forest-green">Current Locations</h2>
            {pins.length === 0 ? (
              <p className="text-gray-500">No locations added yet</p>
            ) : (
              <div className="space-y-4">
                {pins.map((pin, index) => (
                  <div key={pin.id} className="border-l-4 border-lake-blue pl-4 py-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">{index + 1}. {pin.title}</h3>
                        <p className="text-sm text-gray-600">{pin.date}</p>
                        <p className="text-sm mt-1">{pin.description}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          Lat: {pin.latitude}, Lng: {pin.longitude}
                        </p>
                      </div>
                      <button
                        onClick={() => deletePin(pin.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-2">How to find coordinates:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Go to Google Maps and search for your location</li>
              <li>Right-click on the exact spot on the map</li>
              <li>Click on the latitude/longitude numbers that appear</li>
              <li>Copy and paste them into the form above</li>
            </ol>
          </div>
        </div>
      </main>

      <Footer />
      
      {/* Photo Preview Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedPhoto(null)}>
          <div className="max-w-4xl max-h-4xl p-4">
            <img src={selectedPhoto} alt="Preview" className="max-w-full max-h-full object-contain rounded" />
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
}