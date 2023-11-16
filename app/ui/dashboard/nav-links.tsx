'use client';
import {HomeIcon,} from '@heroicons/react/24/outline';
import { UserPlusIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const links = [
  { name: 'Acceuil', href: '/dashboard', icon: HomeIcon },
  { name: 'AJoutez contact', href: '/dashboard/addcontact', icon: UserPlusIcon },
];

const NavLinks=()=> {
  const pathName = usePathname()
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3", {
              'bg-sky-100 text-blue-600': pathName === link.href
            })}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

export default NavLinks
