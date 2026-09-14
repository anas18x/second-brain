export type Brain = {
  _id: string
  owner: string
  title: string
  body: string | null
  url: string | null
  tags: string[]
  createdAt: string
  updatedAt: string
}


export type BrainPagination = {
  page: number
  limit: number
  total: number
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
}


export type SharedBrain = {
  owner: {
    username: string
  }
  brains: {
    _id: string
    title: string
    body: string | null
    url: string | null
    tags: string[]
    createdAt: string
  }[]
}


export type BrainShareView = {
  _id: string
  owner: string
  viewer: {
    _id: string
    username: string
  }
  createdAt: string
  updatedAt: string
}