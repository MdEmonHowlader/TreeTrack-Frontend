import { useState } from 'react';
import { MapPin, X, Calendar, User, TreePine } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';

const mockTreeMarkers = [
  {
    id: 1,
    type: 'Oak Tree',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400',
    user: 'John Doe',
    date: '2026-01-15',
    position: { top: '20%', left: '25%' },
  },
  {
    id: 2,
    type: 'Pine Tree',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400',
    user: 'Jane Smith',
    date: '2026-02-20',
    position: { top: '45%', left: '60%' },
  },
  {
    id: 3,
    type: 'Maple Tree',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=400',
    user: 'John Doe',
    date: '2026-03-10',
    position: { top: '65%', left: '35%' },
  },
  {
    id: 4,
    type: 'Birch Tree',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400',
    user: 'Mike Johnson',
    date: '2026-03-25',
    position: { top: '30%', left: '75%' },
  },
  {
    id: 5,
    type: 'Willow Tree',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400',
    user: 'Sarah Williams',
    date: '2026-04-05',
    position: { top: '55%', left: '15%' },
  },
];

export function MapView() {
  const [selectedTree, setSelectedTree] = useState<(typeof mockTreeMarkers)[0] | null>(null);

  return (
    <div className="relative h-screen">
      {/* Map Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--sage)]/20 to-[var(--forest-dark)]/10">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, var(--sage) 0px, transparent 50%),
                           radial-gradient(circle at 80% 70%, var(--forest-dark) 0px, transparent 50%),
                           radial-gradient(circle at 40% 80%, var(--earth) 0px, transparent 50%)`,
        }} />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(var(--forest-dark) 1px, transparent 1px), linear-gradient(90deg, var(--forest-dark) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Map Controls */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-8 left-8 right-8 z-10"
      >
        <div className="bg-white rounded-3xl p-4 shadow-lg border-2 border-[var(--border)] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[var(--forest-dark)] rounded-2xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-[var(--sage)]" />
            </div>
            <div>
              <h2 className="text-xl text-[var(--forest-dark)]">Tree Map</h2>
              <p className="text-sm text-[var(--muted-foreground)]">
                {mockTreeMarkers.length} trees planted
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-[var(--forest-dark)] text-white rounded-xl hover:bg-[var(--forest-medium)] transition-colors"
            >
              My Trees
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-white border-2 border-[var(--border)] text-[var(--forest-dark)] rounded-xl hover:bg-[var(--sand)] transition-colors"
            >
              All Trees
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Tree Markers */}
      {mockTreeMarkers.map((tree, index) => (
        <motion.div
          key={tree.id}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          style={{
            position: 'absolute',
            top: tree.position.top,
            left: tree.position.left,
          }}
          className="cursor-pointer z-20"
          onClick={() => setSelectedTree(tree)}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            <div className="w-12 h-12 bg-[var(--forest-dark)] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <TreePine className="w-6 h-6 text-[var(--sage)]" />
            </div>
            {/* Pulse animation */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-[var(--sage)] rounded-full"
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-8 right-8 bg-white rounded-3xl p-6 shadow-lg border-2 border-[var(--border)] z-10"
      >
        <h3 className="text-lg mb-4 text-[var(--forest-dark)]">Legend</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-[var(--forest-dark)] rounded-full" />
            <span className="text-sm text-[var(--muted-foreground)]">Your Trees</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-[var(--sage)] rounded-full" />
            <span className="text-sm text-[var(--muted-foreground)]">Community Trees</span>
          </div>
        </div>
      </motion.div>

      {/* Tree Details Popup */}
      <AnimatePresence>
        {selectedTree && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/30 z-30"
              onClick={() => setSelectedTree(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-40"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-[var(--border)]">
                <div className="relative h-64">
                  <img
                    src={selectedTree.image}
                    alt={selectedTree.type}
                    className="w-full h-full object-cover"
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedTree(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
                  >
                    <X className="w-5 h-5 text-[var(--forest-dark)]" />
                  </motion.button>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-4 text-[var(--forest-dark)]">
                    {selectedTree.type}
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-[var(--muted-foreground)]">
                      <User className="w-5 h-5" />
                      <span>Planted by {selectedTree.user}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[var(--muted-foreground)]">
                      <Calendar className="w-5 h-5" />
                      <span>{selectedTree.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[var(--muted-foreground)]">
                      <MapPin className="w-5 h-5" />
                      <span>Location tracked</span>
                    </div>
                  </div>
                  <Link to={`/app/tree/${selectedTree.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-[var(--forest-dark)] text-white rounded-2xl hover:bg-[var(--forest-medium)] transition-colors"
                    >
                      View Details
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
