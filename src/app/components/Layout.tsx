import { Outlet, Link, useLocation } from 'react-router';
import { Home, Map, PlusCircle, Shield, Leaf, LogOut } from 'lucide-react';
import { motion } from 'motion/react';

export function Layout() {
  const location = useLocation();
  const isAdmin = location.pathname.includes('/admin');

  const navItems = isAdmin
    ? [
        { path: '/app/admin', icon: Shield, label: 'Admin Dashboard' },
        { path: '/app/map', icon: Map, label: 'All Trees' },
      ]
    : [
        { path: '/app', icon: Home, label: 'Dashboard' },
        { path: '/app/add-tree', icon: PlusCircle, label: 'Add Tree' },
        { path: '/app/map', icon: Map, label: 'Map View' },
      ];

  return (
    <div className="min-h-screen bg-[var(--sand)] flex">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className="w-72 bg-[var(--forest-dark)] text-white p-6 flex flex-col"
      >
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-12 bg-[var(--sage)] rounded-2xl flex items-center justify-center">
            <Leaf className="w-7 h-7 text-[var(--forest-dark)]" />
          </div>
          <div>
            <h1 className="text-xl tracking-tight">TreeTrack</h1>
            <p className="text-[var(--sage-light)] text-sm">Growing Together</p>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link key={item.path} to={item.path}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    isActive
                      ? 'bg-[var(--sage)] text-white'
                      : 'text-[var(--sage-light)] hover:bg-[var(--forest-medium)]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </motion.div>
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-white/10 pt-6 mt-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[var(--sage)] rounded-full flex items-center justify-center">
              <span className="text-[var(--forest-dark)]">JD</span>
            </div>
            <div>
              <p className="text-sm">John Doe</p>
              <p className="text-xs text-[var(--sage-light)]">john@example.com</p>
            </div>
          </div>
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center gap-2 justify-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm">Logout</span>
            </motion.button>
          </Link>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
