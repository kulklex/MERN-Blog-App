export interface Post{
    _id: string
    _v?: number
    category: string
    desc: string
    email: string
    name?: string
    photo?: string
    title: string
    createdAt: string
    updatedAt: string
}

export interface Category{
    _id: string
    _v?:number
    name: string
    createdAt: string
    updatedAt: string
}