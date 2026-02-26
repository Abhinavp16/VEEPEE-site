'use client';

import { usePathname } from 'next/navigation';

export default function RouteMain({ children }) {
    const pathname = usePathname();

    return (
        <main className={pathname === '/' ? 'pt-20' : 'pt-0'}>
            {children}
        </main>
    );
}
