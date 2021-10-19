export interface ProductCharacteristic {
  value: string
  name: string
}

export interface ReviewModel {
  _id: string
  name: string
  title: string
  description: string
  rting: number
  createdAt: Date
}

export interface ProductModel {
  tags: string[]
  _id: string
  categories: string[]
  title: string
  link: string
  price: number
  credit: number
  oldPrice: number
  description: string
  characteristics: ProductCharacteristic []
  createdAt: Date
  updatedAt: Date
  image: string
  initialRating: number
  reviews: ReviewModel[]
  reviewCount: number
  reviewAvg?: number
  advantages: string
  disadvantages?: string
}
