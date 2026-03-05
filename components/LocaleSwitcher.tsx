'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function LocaleSwitcher() {
  const pathname = usePathname() || '/en';
  const isFi = pathname.startsWith('/fi');

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-zinc-300">
      <Link
        href={pathname.replace(/^\/(en|fi)(?=\/|$)/, '/en')}
        className={`px-2 py-1 rounded-full ${isFi ? 'text-zinc-400' : 'text-white bg-white/10'}`}
      >
        EN
      </Link>
      <Link
        href={pathname.replace(/^\/(en|fi)(?=\/|$)/, '/fi')}
        className={`px-2 py-1 rounded-full ${isFi ? 'text-white bg-white/10' : 'text-zinc-400'}`}
      >
        FI
      </Link>
    </div>
  );
}
