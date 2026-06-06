'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('user');
    if (!isAuthenticated) {
      router.push('/(auth)/login');
    }
  }, [router]);

  return <AdminLayout>{children}</AdminLayout>;
}
