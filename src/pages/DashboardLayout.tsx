import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/DashboardSidebar';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout({ children }: { children?: ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex pt-14">
        <Sidebar />
        <main className="flex-1">
          {children}
          <Outlet />
        </main>
      </div>
    </>
  );
}