import Switcher from '@/components/Switcher';
import SwitcherItem from '@/components/SwitcherItem';
import IconFullFrame from '@/site/IconFullFrame';
import IconGrid from '@/site/IconGrid';
import {
  PATH_ADMIN_PHOTOS, PATH_GALLERY, PATH_GRID, PATH_RECORD, PATH_ROOT, PATH_SETS,
} from '@/site/paths';
import { BiLockAlt } from 'react-icons/bi';
import IconSets from './IconSets';
import IconCake from './IconCake';
import { LuListMusic } from 'react-icons/lu';

export type SwitcherSelection =
  'home' | 'full-frame' | 'grid' | 'sets' | 'record' | 'admin';

export default function ViewSwitcher({
  currentSelection,
  showAdmin,
}: {
  currentSelection?: SwitcherSelection
  showAdmin?: boolean
}) {
  return (
    <Switcher>
      <SwitcherItem
        icon={<IconCake />}
        href={PATH_ROOT}
        active={currentSelection === 'home'}
      />
      <SwitcherItem
        icon={<IconFullFrame />}
        href={PATH_GALLERY}
        active={currentSelection === 'full-frame'}
        noPadding
      />
      <SwitcherItem
        icon={<IconGrid />}
        href={PATH_GRID}
        active={currentSelection === 'grid'}
        noPadding
      />
      <SwitcherItem
        icon={<LuListMusic className={'w-[28px] h-[24px]'} strokeWidth={1.2} />}
        href={PATH_RECORD}
        active={currentSelection === 'record'}
        noPadding
      />
      <SwitcherItem
        className="md:hidden"
        icon={<IconSets />}
        href={PATH_SETS}
        active={currentSelection === 'sets'}
        noPadding
      />
      {showAdmin &&
        <SwitcherItem
          icon={<BiLockAlt size={16} className="translate-y-[-0.5px]" />}
          href={PATH_ADMIN_PHOTOS}
          active={currentSelection === 'admin'}
        />}
    </Switcher>
  );
}
