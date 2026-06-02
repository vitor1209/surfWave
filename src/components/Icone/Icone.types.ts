export interface ContactInfoItem {
    icon: React.ReactNode
    label: string
    value: string
  }
  
  export interface FloatingContactItem {
    label: string
    color: string
    action: (() => void) | "modal"
  }


  