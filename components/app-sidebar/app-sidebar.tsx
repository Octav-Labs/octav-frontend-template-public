'use client';

import * as React from 'react';
import { Home } from 'lucide-react';

import { NavItem, NavItems } from '@/components/app-sidebar/nav-items';

import { Sidebar, SidebarContent, SidebarHeader, SidebarRail, SidebarTrigger, useSidebar } from '../ui/sidebar';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();

  const isExpanded = state === 'expanded';

  const navItems: NavItem[] = [
    {
      name: 'Home',
      url: '/',
      pathname: '/',
      icon: <Home width={20} height={20} className="stroke-[1.5]" />,
    },
  ];

  return (
    <Sidebar className="bg-background relative" collapsible="icon" {...props}>
      <SidebarHeader>
        <div className={cn('flex items-center gap-3 px-2 my-6', isExpanded ? 'flex-row' : 'flex-col')}>
          <Image src="/logo.svg" alt="Template Logo" width={30} height={30} />
          {isExpanded && <p className="text-foreground font-semibold text-lg">Template</p>}
        </div>
      </SidebarHeader>

      <SidebarContent className="mt-6">
        <NavItems items={navItems} />
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
