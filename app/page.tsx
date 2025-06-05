import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import Countdown from '@/components/Countdown'
import Photos from '@/components/Photos'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Countdown />
        
        <section id="our-story" className="section">
          <div className="section-container">
            <h2 className="section-title">
              Our Story
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-[var(--deep-navy)]">
                  Trent and Lisa's love was like something out of a classic romance novel. It started with a simple meeting at Clara's Restaurant, where their eyes met across the room, and time stood still. From that moment, they knew they were meant for each other.
                </p>
                <p className="text-lg text-[var(--deep-navy)]">
                  Their love deepened through shared adventures in nature, where the mountains became their sanctuary. Now, as they prepare to wed, their story is not just about two people falling in love, but about two souls finding their forever.
                </p>
                <p className="text-lg text-[var(--deep-navy)]">
                  Together, they've built a life filled with passion for the outdoors, a family with a son and a daughter, and now, a promise to navigate the future hand in hand.
                </p>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src="/our_story.png" 
                  alt="Trent and Lisa's story photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="details" className="section" style={{backgroundColor: '#f9fafb'}}>
          <div className="section-container">
            <h2 className="section-title">
              Wedding Details
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card">
                <h3 className="card-title">Ceremony</h3>
                <p className="text-lg text-[var(--deep-navy)] mb-2">5:30 PM</p>
                <p className="text-lg text-[var(--deep-navy)]">Lilly Lake Picnic Area</p>
                <p className="text-lg text-[var(--deep-navy)]">Estes Park, Colorado</p>
              </div>
              <div className="card">
                <h3 className="card-title">Reception</h3>
                <p className="text-lg text-[var(--deep-navy)] mb-2">6:00 PM - 9:00 PM</p>
                <p className="text-lg text-[var(--deep-navy)]">Twin Owls Steakhouse</p>
                <p className="text-lg text-[var(--deep-navy)]">Taharaa Mountain Lodge</p>
              </div>
              <div className="card">
                <h3 className="card-title">Attire</h3>
                <p className="text-lg text-[var(--deep-navy)] mb-2">Cocktail Attire</p>
                <p className="text-lg text-[var(--deep-navy)]">Consider soft ground for heels</p>
                <p className="text-lg text-[var(--deep-navy)]">Light hiking may be required for photos</p>
              </div>
            </div>
          </div>
        </section>

        <section id="schedule" className="section">
          <div className="section-container">
            <h2 className="section-title">
              Weekend Schedule
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="border-l-4 border-[var(--lake-blue)] pl-8">
                <h3 className="text-2xl font-bold text-[var(--mountain-blue)] mb-2">Friday, August 1st</h3>
                <p className="text-lg text-[var(--deep-navy)] mb-2">5:30 PM - Ceremony</p>
                <p className="text-lg text-[var(--rock-gray)] mb-4">Lilly Lake Picnic Area, Estes Park</p>
                <p className="text-lg text-[var(--deep-navy)] mb-2">5:45 PM - Wedding Party Photos</p>
                <p className="text-lg text-[var(--rock-gray)] mb-4">Lilly Lake Area</p>
                <p className="text-lg text-[var(--deep-navy)] mb-2">6:00 PM - 9:00 PM - Reception</p>
                <p className="text-lg text-[var(--rock-gray)]">Twin Owls Steakhouse, Taharaa Mountain Lodge</p>
              </div>
              <div className="border-l-4 border-[var(--lake-blue)] pl-8">
                <h3 className="text-2xl font-bold text-[var(--mountain-blue)] mb-2">Saturday, August 2nd</h3>
                <p className="text-lg text-[var(--deep-navy)] mb-2">TBA - Post-Wedding Brunch</p>
                <p className="text-lg text-[var(--rock-gray)]">Location & Time To Be Announced</p>
              </div>
            </div>
          </div>
        </section>

        <Photos />
        <Footer />
      </main>
    </>
  )
}