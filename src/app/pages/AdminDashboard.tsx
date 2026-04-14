import { TreePine, Users, MapPin, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const regionData = [
  { id: 'north', region: 'North', treeCount: 1250 },
  { id: 'south', region: 'South', treeCount: 980 },
  { id: 'east', region: 'East', treeCount: 1450 },
  { id: 'west', region: 'West', treeCount: 1120 },
  { id: 'central', region: 'Central', treeCount: 1680 },
];

const treeTypeData = [
  { id: 'oak', name: 'Oak', value: 1200, color: '#064E3B' },
  { id: 'pine', name: 'Pine', value: 980, color: '#86A789' },
  { id: 'maple', name: 'Maple', value: 850, color: '#D97757' },
  { id: 'birch', name: 'Birch', value: 720, color: '#10B981' },
  { id: 'other', name: 'Other', value: 1730, color: '#059669' },
];

const monthlyGrowth = [
  { id: 'jan', month: 'Jan', planted: 320 },
  { id: 'feb', month: 'Feb', planted: 450 },
  { id: 'mar', month: 'Mar', planted: 580 },
  { id: 'apr', month: 'Apr', planted: 720 },
];

const recentActivity = [
  { id: 'act-1', user: 'John Doe', action: 'Planted Oak Tree', location: 'Central Park', time: '2 hours ago' },
  { id: 'act-2', user: 'Jane Smith', action: 'Updated Pine Tree', location: 'Green Valley', time: '3 hours ago' },
  { id: 'act-3', user: 'Mike Johnson', action: 'Planted Maple Tree', location: 'City Garden', time: '5 hours ago' },
  { id: 'act-4', user: 'Sarah Williams', action: 'Planted Birch Tree', location: 'Riverside', time: '6 hours ago' },
  { id: 'act-5', user: 'Tom Brown', action: 'Updated Willow Tree', location: 'Park Avenue', time: '8 hours ago' },
];

export function AdminDashboard() {
  const totalTrees = regionData.reduce((sum, item) => sum + item.treeCount, 0);

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl mb-2 text-[var(--forest-dark)]">Admin Dashboard</h1>
        <p className="text-[var(--muted-foreground)]">Monitor and manage tree plantation projects</p>
      </motion.div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-[var(--forest-dark)] to-[var(--forest-medium)] text-white rounded-3xl p-6 shadow-lg"
        >
          <TreePine className="w-10 h-10 mb-4 opacity-80" />
          <h3 className="text-4xl mb-2">{totalTrees.toLocaleString()}</h3>
          <p className="text-white/80">Total Trees</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-[var(--sage)] to-[var(--sage-light)] text-white rounded-3xl p-6 shadow-lg"
        >
          <Users className="w-10 h-10 mb-4 opacity-80" />
          <h3 className="text-4xl mb-2">12,450</h3>
          <p className="text-white/80">Active Users</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-[var(--earth)] to-orange-400 text-white rounded-3xl p-6 shadow-lg"
        >
          <MapPin className="w-10 h-10 mb-4 opacity-80" />
          <h3 className="text-4xl mb-2">8</h3>
          <p className="text-white/80">Regions</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-green-600 to-green-400 text-white rounded-3xl p-6 shadow-lg"
        >
          <TrendingUp className="w-10 h-10 mb-4 opacity-80" />
          <h3 className="text-4xl mb-2">+24%</h3>
          <p className="text-white/80">Growth This Month</p>
        </motion.div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Regional Distribution */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-3xl p-6 shadow-lg border-2 border-[var(--border)]"
        >
          <h2 className="text-2xl mb-6 text-[var(--forest-dark)]">Regional Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={regionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="region" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#FFFFFF',
                  border: '2px solid var(--border)',
                  borderRadius: '16px',
                  padding: '12px',
                }}
              />
              <Bar dataKey="treeCount" name="Trees by Region" fill="var(--forest-dark)" radius={[12, 12, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Tree Types Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-3xl p-6 shadow-lg border-2 border-[var(--border)]"
        >
          <h2 className="text-2xl mb-6 text-[var(--forest-dark)]">Tree Types</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={treeTypeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {treeTypeData.map((entry) => (
                  <Cell key={`cell-${entry.id}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#FFFFFF',
                  border: '2px solid var(--border)',
                  borderRadius: '16px',
                  padding: '12px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Monthly Growth Trend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-white rounded-3xl p-6 shadow-lg border-2 border-[var(--border)] mb-8"
      >
        <h2 className="text-2xl mb-6 text-[var(--forest-dark)]">Monthly Growth Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyGrowth}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="month" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#FFFFFF',
                border: '2px solid var(--border)',
                borderRadius: '16px',
                padding: '12px',
              }}
            />
            <Line
              type="monotone"
              dataKey="planted"
              name="Trees Planted"
              stroke="var(--sage)"
              strokeWidth={3}
              dot={{ fill: 'var(--forest-dark)', r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-white rounded-3xl p-6 shadow-lg border-2 border-[var(--border)]"
      >
        <h2 className="text-2xl mb-6 text-[var(--forest-dark)]">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + activity.id.split('-')[1] * 0.05 }}
              className="flex items-center gap-4 p-4 bg-[var(--sand)] rounded-2xl"
            >
              <div className="w-12 h-12 bg-[var(--sage)] rounded-full flex items-center justify-center">
                <span className="text-white">{activity.user.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div className="flex-1">
                <p className="text-[var(--forest-dark)]">
                  <span className="font-medium">{activity.user}</span> {activity.action}
                </p>
                <p className="text-sm text-[var(--muted-foreground)]">
                  📍 {activity.location} • {activity.time}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}