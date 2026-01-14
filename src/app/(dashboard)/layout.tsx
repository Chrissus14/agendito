import React from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  FileText,
  BarChart3,
  Settings,
  LogOut,
  Bell,
  Search,
  MessageSquare,
  Menu
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {

  const navItems = [
    { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard", active: true },
    { label: "Users", icon: Users, href: "/users" },
    { label: "Reports", icon: FileText, href: "/reports" },
    { label: "Analytics", icon: BarChart3, href: "/analytics" },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-white border-r">
      <div className="p-6 flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
          <span className="text-white font-bold text-xl">E</span>
        </div>
        <span className="font-bold text-xl tracking-tight">Esqueleto Admin</span>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => (
          <Link key={item.label} href={item.href}>
            <Button
              variant={item.active ? "secondary" : "ghost"}
              className={`w-full justify-start gap-3 mb-1 ${item.active ? "bg-blue-50 text-blue-700 hover:bg-blue-100" : "text-slate-600"}`}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Button>
          </Link>
        ))}

        <div className="pt-4 pb-2">
          <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">System</p>
        </div>

        <Link href="/settings">
          <Button variant="ghost" className="w-full justify-start gap-3 text-slate-600">
            <Settings className="h-5 w-5" />
            Settings
          </Button>
        </Link>
      </nav>

      <div className="p-4 border-t">
        <Button variant="ghost" className="w-full justify-start gap-3 text-slate-600 hover:text-red-600 hover:bg-red-50">
          <LogOut className="h-5 w-5" />
          Logout
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen w-full bg-slate-50/50">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex w-64 flex-col fixed inset-y-0">
        <SidebarContent />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:pl-64">
        {/* Header */}
        {/* <header className="h-16 border-b bg-white flex items-center justify-between px-4 md:px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4 flex-1">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-64">
                <SidebarContent />
              </SheetContent>
            </Sheet>

            <h2 className="font-semibold text-lg hidden sm:block">Dashboard Overview</h2>

            <div className="relative w-full max-w-md ml-4">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
              <Input
                type="search"
                placeholder="Search data, users or reports..."
                className="pl-9 bg-slate-100 border-none focus-visible:ring-1"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-slate-600" />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </Button>
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5 text-slate-600" />
            </Button>

            <div className="flex items-center gap-3 pl-2 border-l">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold leading-none">John Doe</p>
                <p className="text-xs text-slate-500 mt-1">Super Admin</p>
              </div>
              <Avatar className="h-9 w-9 border">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>
 */}
        {/* Content */}
        <main className="p-4 md:p-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-auto border-t p-6 text-sm text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white/50">
          <p>© 2024 Esqueleto Admin Layout. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Terms of Service</Link>
            <Link href="#" className="hover:underline">Documentation</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}