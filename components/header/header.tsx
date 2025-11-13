import { SidebarTrigger } from '@/components/ui/sidebar';
import Image from 'next/image';

export const Header = () => {
  return (
    <div className="flex justify-between items-center border-b border-border p-4 fixed top-0 left-0 right-0 bg-background z-10 lg:hidden">
      <Image src="/logo.svg" alt="Template Logo" width={30} height={30} />
      <SidebarTrigger />
    </div>
  );
};
