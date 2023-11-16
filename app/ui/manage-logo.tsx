import { UserGroupIcon } from '@heroicons/react/24/solid';
import { lusitana } from '@/app/ui/fonts';

export default function ManageLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <UserGroupIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[36px]">Manage</p>
    </div>
  );
}
