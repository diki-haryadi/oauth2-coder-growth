import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/DashboardSidebar';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout({ children }: { children?: ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 pt-14">
          {children}
          <Outlet />
        </main>
      </div>
    </>
  );
}