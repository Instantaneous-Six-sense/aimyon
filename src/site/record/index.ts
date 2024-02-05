import { Records } from '@/contents';
import { stripHtml } from '@/utility/string';

export const IGNORE_SIDE = 'NONE';

export const descriptionForRecord = (record: Records) => {
  return stripHtml(record.description || '').split('\n')[0];
};