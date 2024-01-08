import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

const sidebarMenu = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Photos', href: '/photos' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Docs', href: '/docs' },
];

const Sidebar = () => {
  return (
    <aside className="hidden sm:block  sm:w-1/4 md:w-[240px] h-full">
      <div className="sticky top-0 p-4 w-full h-full bg-primary">
        <ul>
          {sidebarMenu.map((link) => (
            <li key={link.href}>
              <Link className="text-slate-200" href={link.href}>
                {link.label}
              </Link>
              <Separator />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
