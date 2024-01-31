'use client';

import { clsx } from 'clsx/lite';
import SiteGrid from '../components/SiteGrid';
import ThemeSwitcher from '@/site/ThemeSwitcher';
import Link from 'next/link';
import { SHOW_REPO_LINK, SITE_TITLE } from '@/site/config';
import RepoLink from '../components/RepoLink';
import { usePathname } from 'next/navigation';
import { isPathAdmin, isPathSignIn, pathForAdminPhotos } from './paths';
import SubmitButtonWithStatus from '@/components/SubmitButtonWithStatus';
import { signOutAction } from '@/auth/actions';
import Spinner from '@/components/Spinner';
import AnimateItems from '@/components/AnimateItems';
import { FaRegCopyright } from 'react-icons/fa6';
import NavSns from './NavSns';

export default function FooterClient({
  userEmail,
}: {
  userEmail?: string | null | undefined
}) {
  const pathname = usePathname();

  const showFooter = !isPathSignIn(pathname);

  const shouldAnimate = !isPathAdmin(pathname);

  return (
    <SiteGrid
      contentMain={
        <AnimateItems
          animateOnFirstLoadOnly
          type={!shouldAnimate ? 'none' : 'bottom'}
          distanceOffset={10}
          items={showFooter
            ? [<div
              key="footer"
              className={clsx(
                'flex items-center',
                'text-dim min-h-[4rem]',
              )}>
              <div className="flex gap-x-4 gap-y-1 flex-grow flex-wrap h-4">
                {isPathAdmin(pathname)
                  ? <>
                    {userEmail === undefined &&
                      <Spinner />}
                    {userEmail && <>
                      <div>{userEmail}</div>
                      {/* @ts-ignore */}
                      <form action={signOutAction}>
                        <SubmitButtonWithStatus styleAsLink>
                          Sign out
                        </SubmitButtonWithStatus>
                      </form>
                    </>}
                  </>
                  : <>
                    <Link href={pathForAdminPhotos()}>
                      Admin
                    </Link>
                    {SHOW_REPO_LINK &&
                      <RepoLink />}
                  </>}
              </div>
              <div className="flex items-center h-4">
                <ThemeSwitcher />
              </div>
            </div>, 
            <NavSns key={'nav-sns'} />,
            <div key="title" className={clsx(
              'flex items-center gap-2',
              'min-h-[4rem]',
              'font-roboto'
            )}>
              <FaRegCopyright />
              <h1>{SITE_TITLE}</h1>
            </div>]
            : []}
        />}
    />
  );
}
