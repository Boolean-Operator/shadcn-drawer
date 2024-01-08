'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import { RxTextAlignJustify } from 'react-icons/rx';

const sidebarMenu = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Photos', href: '/photos' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Docs', href: '/docs' },
];

export default function Drawer() {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-2">
        <Sheet key={'left'}>
          <SheetTrigger asChild>
            <Button className="bg-transparent text-3xl">
              <RxTextAlignJustify />
            </Button>
          </SheetTrigger>
          <SheetContent
            side={'left'}
            className="w-[240px] text-slate-50 bg-primary"
          >
            <SheetHeader>
              <SheetTitle className="text-slate-50">Logo</SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <ul>
                {sidebarMenu.map((link) => (
                  <li key={link.href}>
                    <SheetClose asChild>
                      <Link className="text-slate-50" href={link.href}>
                        {link.label}
                      </Link>
                    </SheetClose>
                    <Separator />
                  </li>
                ))}
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
