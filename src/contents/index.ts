/* eslint-disable max-len */

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
  track?: { [key in string]: RecordsTrack[] }
}
export type RecordsTrack = {
  record_no: number
  side: string
  index: number
  title: string
}

export const tracksInfo = {
  1: ['あのね','あのね (Instrumental)','die die die','die die die (Instrumental)'],
  2: ['ノット・オーケー'],
  3: ['愛の花','彼氏有無','愛の花(Instrumental)','彼氏有無(Instrumental)'],
  4: ['愛の花','彼氏有無','愛の花(Instrumental)','彼氏有無(Instrumental)'],
  5: ['双葉','スーパーガール','姿','初恋が泣いている','君のこゝろ','3636','強くなっちゃったんだ、ブルー','桜が降る夜は','ペルソナの記憶','神秘の領域へ','ハート','インタビュー','愛を知るまでは'],
};

export const findRecordByTrackName = (trackName: string) => {
  for (const [recordNo, tracks] of Object.entries(tracksInfo)) {
    if (tracks.includes(decodeURI(trackName))) {
      return parseInt(recordNo);
    }
  }

  return 0;
};