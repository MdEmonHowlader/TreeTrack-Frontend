import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, MapPin, Calendar, Droplet, Sun, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

const mockTree = {
  id: 1,
  type: 'Oak Tree',
  location: 'Central Park, New York',
  plantedDate: '2026-01-15',
  currentHeight: '2.5m',
  health: 'Excellent',
  growth: 65,
  timeline: [
    {
      date: '2026-01-15',
      image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400',
      note: 'Planted the sapling',
      height: '0.5m',
    },
    {
      date: '2026-02-15',
      image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400',
      note: 'First month growth',
      height: '0.8m',
    },
    {
      date: '2026-03-15',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400',
      note: 'Healthy development',
      height: '1.2m',
    },
    {
      date: '2026-04-14',
      image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=400',
      note: 'Strong growth observed',
      height: '2.5m',
    },
  ],
};

export function TreeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[var(--sand)]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border-b-2 border-[var(--border)] p-6"
      >
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-[var(--sand)] rounded-xl flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-[var(--forest-dark)]" />
          </motion.button>
          <div>
            <h1 className="text-3xl text-[var(--forest-dark)]">{mockTree.type}</h1>
            <p className="text-[var(--muted-foreground)]">Tree ID: #{id}</p>
          </div>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-6 shadow-lg border-2 border-[var(--border)]"
            >
              <h2 className="text-xl mb-4 text-[var(--forest-dark)]">Tree Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[var(--sage)] mt-1" />
                  <div>
                    <p className="text-sm text-[var(--muted-foreground)]">Location</p>
                    <p className="text-[var(--forest-dark)]">{mockTree.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-[var(--sage)] mt-1" />
                  <div>
                    <p className="text-sm text-[var(--muted-foreground)]">Planted Date</p>
                    <p className="text-[var(--forest-dark)]">{mockTree.plantedDate}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-[var(--sage)] mt-1" />
                  <div>
                    <p className="text-sm text-[var(--muted-foreground)]">Current Height</p>
                    <p className="text-[var(--forest-dark)]">{mockTree.currentHeight}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-6 shadow-lg border-2 border-[var(--border)]"
            >
              <h2 className="text-xl mb-4 text-[var(--forest-dark)]">Growth Progress</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[var(--muted-foreground)]">Overall Growth</span>
                    <span className="text-lg text-[var(--sage)]">{mockTree.growth}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${mockTree.growth}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-gradient-to-r from-[var(--sage)] to-[var(--forest-dark)] h-3 rounded-full"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t-2 border-[var(--border)]">
                  <div className="text-center p-3 bg-[var(--sand)] rounded-2xl">
                    <Droplet className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                    <p className="text-xs text-[var(--muted-foreground)]">Water Level</p>
                    <p className="text-sm text-[var(--forest-dark)]">Good</p>
                  </div>
                  <div className="text-center p-3 bg-[var(--sand)] rounded-2xl">
                    <Sun className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                    <p className="text-xs text-[var(--muted-foreground)]">Sunlight</p>
                    <p className="text-sm text-[var(--forest-dark)]">Optimal</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-[var(--sage)]/20 to-[var(--earth)]/20 rounded-3xl p-6 border-2 border-[var(--border)]"
            >
              <h3 className="text-lg mb-2 text-[var(--forest-dark)]">Health Status</h3>
              <p className="text-3xl text-[var(--sage)] mb-2">{mockTree.health}</p>
              <p className="text-sm text-[var(--muted-foreground)]">
                Last checked on April 14, 2026
              </p>
            </motion.div>
          </div>

          {/* Right Column - Growth Timeline */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-6 shadow-lg border-2 border-[var(--border)]"
            >
              <h2 className="text-2xl mb-6 text-[var(--forest-dark)]">Growth Timeline</h2>
              <div className="space-y-6">
                {mockTree.timeline.map((entry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-[var(--sage)] rounded-full border-4 border-white shadow" />
                      {index < mockTree.timeline.length - 1 && (
                        <div className="w-0.5 h-full bg-[var(--sage)]/30 my-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden">
                          <img
                            src={entry.image}
                            alt={`Growth on ${entry.date}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-[var(--sage)] mb-1">{entry.date}</p>
                          <h3 className="text-lg mb-2 text-[var(--forest-dark)]">
                            {entry.note}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)]">
                            <div className="flex items-center gap-2">
                              <TrendingUp className="w-4 h-4" />
                              <span>Height: {entry.height}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 py-3 bg-[var(--forest-dark)] text-white rounded-2xl hover:bg-[var(--forest-medium)] transition-colors"
              >
                Add Growth Update
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
