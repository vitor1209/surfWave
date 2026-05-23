export interface FooterLink {
  label: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface FooterContact {
  address: string
  email: string
  phone: string
}

export interface FooterSocialIcon {
  name: string
  icon: string
  url: string
}
