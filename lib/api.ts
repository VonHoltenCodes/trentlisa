export interface RSVPData {
  name: string
  email: string
  attending: 'yes' | 'no'
  guests: number
  dietary: string
  message: string
}

export async function submitRSVP(data: RSVPData): Promise<{ success: boolean; message: string }> {
  // In production, this would make an API call to your backend
  // For now, we'll simulate an API call
  
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('RSVP submitted:', data)
      resolve({
        success: true,
        message: 'RSVP submitted successfully!'
      })
    }, 1000)
  })
}

export interface ContactData {
  name: string
  email: string
  message: string
}

export async function submitContact(data: ContactData): Promise<{ success: boolean; message: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Contact form submitted:', data)
      resolve({
        success: true,
        message: 'Message sent successfully!'
      })
    }, 1000)
  })
}