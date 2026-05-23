export interface ProductCardComponentProps {
    title: string
    farm: string
    price: number
    id: number
    quantity: number
    imageUrl: string
    onIncrease?: () => void
    onDecrease: (id: string) => void
    onDelete?: () => void
}
