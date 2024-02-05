/**
 * 이 파일은 웹사이트의 사이트맵을 생성하는 기능을 구현합니다.
 * 사이트맵은 웹사이트의 모든 페이지를 나열하는 XML 파일로, 검색 엔진이 웹사이트를 크롤링하는 데 도움이 됩니다.
 * 이 파일에서는 블로그 게시물과 정적 라우트를 모두 사이트맵에 포함시킵니다.
 *
 * `Sitemap` 타입은 사이트맵 항목의 형식을 정의합니다.
 * `sitemap` 함수는 사이트맵을 생성하고 반환합니다.
 * `blogs` 상수는 블로그 게시물의 사이트맵 항목을 생성합니다.
 * `routes` 상수는 정적 라우트의 사이트맵 항목을 생성합니다.
 */

import { getRecords, getSitemapInfos } from '@/services/vercel-postgres';
import { SITE_CREATED_AT, SITE_TAGS } from '@/site/config';
import {
  PATH_ADMIN,
  PATH_GALLERY,
  PATH_GRID,
  PATH_OG,
  PATH_RECORD,
  PATH_SETS,
  PATH_SIGN_IN,
  PREFIX_PHOTO,
  PREFIX_RECORD,
  PREFIX_TAG,
} from '@/site/paths';
import type { MetadataRoute } from 'next';

type Sitemap = MetadataRoute.Sitemap;

export default async function sitemap(): Promise<Sitemap> {
  const photos: Sitemap = (await getSitemapInfos()).map((sitemapInfo) => ({
    url: `https://ai-myon.com${PREFIX_PHOTO}/${sitemapInfo.id}`,
    lastModified: sitemapInfo.taken_at_naive.replace(' ', 'T') + '+09:00',
    priority: 0.8,
  }));
  const records: Sitemap = (await getRecords()).map((sitemapInfo) => ({
    url: `https://ai-myon.com${PREFIX_RECORD}/${sitemapInfo.title}`,
    lastModified: sitemapInfo.release_at,
    priority: 0.8,
  }));
  const tags: Sitemap = SITE_TAGS.map((tag) => ({
    url: `https://ai-myon.com${PREFIX_TAG}/${tag}`,
    lastModified: SITE_CREATED_AT,
    priority: 0.8,
  }));

  const routes: Sitemap =
  [
    '',
    PATH_GALLERY,
    PATH_GRID,
    PATH_RECORD,
    PATH_SETS,
    PATH_OG,
    PATH_ADMIN,
    PATH_SIGN_IN,
  ]
    .map(
      (route) => ({
        url: 'https://ai-myon.com' + route,
        lastModified: SITE_CREATED_AT,
        priority: 1,
      })
    );

  return [...routes,  ...tags, ...photos, ...records];
}
