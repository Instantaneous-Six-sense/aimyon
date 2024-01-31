export type Contents = {
  contents_no: 1
  type: 'media' | 'live' | 'news'
  sub_type: string
  title: string
  contents: string
  published_at: Date
}
export type Records = {
  record_no: number
  title: string
  description?: string
  type: string
  release_at: Date
  vocalist: string
  catalogue_no: string
  price: number
  image: string
  track?: RecordsTrack[]
}
export type RecordsTrack = {
  record_no: number
  index: number
  title: string
}