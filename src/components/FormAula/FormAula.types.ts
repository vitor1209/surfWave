export interface LessonsScheduleProps {
  className?: string
}

export interface LessonType {
  id: string
  title: string
  subtitle: string
  description: string
  duration: string
  price: number
  includes: string[]
  schedule: string[]
  color: string
}

export interface LessonFormData {
  name: string
  email: string
  phone: string
  experience: string
}
