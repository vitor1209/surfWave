export interface SocialContactBarProps {
  className?: string
}

export interface ContactInfo {
  whatsappNumber: string
  instagramHandle: string
  address: string
  hours: string
  email: string
  phone: string
}

export interface SocialLink {
  id: string
  label: string
  icon: React.ReactNode
  href?: string
  onClick?: () => void
  background: string
  boxShadow: string
}
