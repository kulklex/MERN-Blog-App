export interface Post{
    _id: string
    _v?: number
    categories: [string]
    desc: string
    email: string
    name: string
    photo?: string
    title: string
    createdAt: string
    updatedAt: string
}