import { Link } from 'react-router';
import { TreePine, TrendingUp, Sprout, PlusCircle, Map, Award } from 'lucide-react';
import { motion } from 'motion/react';

const mockTrees = [
  {
    id: 1,
    type: 'Oak Tree',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400',
    location: 'Central Park, NY',
    date: '2026-01-15',
    growth: 65,
  },
  {
    id: 2,
    type: 'Pine Tree',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400',
    location: 'Green Valley',
    date: '2026-02-20',
    growth: 45,
  },
  {
    id: 3,
    type: 'Maple Tree',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=400',
    location: 'City Garden',
    date: '2026-03-10',
    growth: 30,
  },
];

export function Dashboard() {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl mb-2 text-[var(--forest-dark)]">My Dashboard</h1>
        <p className="text-[var(--muted-foreground)]">Track your environmental impact</p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-6 shadow-lg border-2 border-[var(--border)]"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-14 h-14 bg-[var(--forest-dark)] rounded-2xl flex items-center justify-center">
              <TreePine className="w-7 h-7 text-[var(--sage)]" />
            </div>
            <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
              +12% this month
            </span>
          </div>
          <h3 className="text-3xl mb-1 text-[var(--forest-dark)]">24</h3>
          <p className="text-[var(--muted-foreground)]">Total Trees Planted</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-6 shadow-lg border-2 border-[var(--border)]"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-14 h-14 bg-[var(--sage)] rounded-2xl flex items-center justify-center">
              <Sprout className="w-7 h-7 text-white" />
            </div>
            <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              Active
            </span>
          </div>
          <h3 className="text-3xl mb-1 text-[var(--forest-dark)]">21</h3>
          <p className="text-[var(--muted-foreground)]">Growing Trees</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl p-6 shadow-lg border-2 border-[var(--border)]"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-14 h-14 bg-[var(--earth)] rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
              Avg. 58%
            </span>
          </div>
          <h3 className="text-3xl mb-1 text-[var(--forest-dark)]">58%</h3>
          <p className="text-[var(--muted-foreground)]">Growth Progress</p>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
      >
        <Link to="/app/add-tree">
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            className="bg-gradient-to-br from-[var(--forest-dark)] to-[var(--forest-medium)] text-white rounded-3xl p-6 shadow-lg cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <PlusCircle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl mb-1">Add New Tree</h3>
                <p className="text-white/80">Plant and register a new tree</p>
              </div>
            </div>
          </motion.div>
        </Link>

        <Link to="/app/map">
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            className="bg-gradient-to-br from-[var(--sage)] to-[var(--sage-light)] text-white rounded-3xl p-6 shadow-lg cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Map className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl mb-1">View Map</h3>
                <p className="text-white/80">See all your planted trees</p>
              </div>
            </div>
          </motion.div>
        </Link>
      </motion.div>

      {/* Recent Trees */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl text-[var(--forest-dark)]">Recent Trees</h2>
          <Link to="/app/map" className="text-[var(--sage)] hover:underline">
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockTrees.map((tree, index) => (
            <Link key={tree.id} to={`/app/tree/${tree.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-[var(--border)] cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={tree.image}
                    alt={tree.type}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2 text-[var(--forest-dark)]">{tree.type}</h3>
                  <p className="text-sm text-[var(--muted-foreground)] mb-3">
                    📍 {tree.location}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[var(--muted-foreground)]">
                      Planted {tree.date}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2 w-16">
                        <div
                          className="bg-[var(--sage)] h-2 rounded-full"
                          style={{ width: `${tree.growth}%` }}
                        />
                      </div>
                      <span className="text-sm text-[var(--sage)]">{tree.growth}%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="mt-8 bg-gradient-to-r from-[var(--earth)]/10 to-[var(--sage)]/10 rounded-3xl p-6 border-2 border-[var(--border)]"
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-[var(--earth)] rounded-2xl flex items-center justify-center">
            <Award className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl mb-1 text-[var(--forest-dark)]">Tree Planter Badge</h3>
            <p className="text-[var(--muted-foreground)]">
              You've planted 24 trees! Keep going to unlock the next badge.
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl text-[var(--forest-dark)]">6</p>
            <p className="text-sm text-[var(--muted-foreground)]">more to go</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
