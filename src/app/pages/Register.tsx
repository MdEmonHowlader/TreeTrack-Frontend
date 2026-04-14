import { Link } from 'react-router';
import { Leaf, Mail, Lock, User, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export function Register() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:block lg:w-1/2 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--sage)] to-[var(--forest-dark)]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1200')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <h2 className="text-5xl mb-4">Start Your Journey</h2>
            <p className="text-xl text-white/90 max-w-md">
              Every tree you plant is a step towards a greener tomorrow
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-[var(--sand)]"
      >
        <div className="w-full max-w-md">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 bg-[var(--forest-dark)] rounded-2xl flex items-center justify-center">
              <Leaf className="w-8 h-8 text-[var(--sage)]" />
            </div>
            <div>
              <h1 className="text-3xl text-[var(--forest-dark)]">TreeTrack</h1>
              <p className="text-[var(--forest-medium)]">Growing Together</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl mb-2 text-[var(--forest-dark)]">Create Account</h2>
            <p className="text-[var(--muted-foreground)] mb-8">
              Join our community of tree planters
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-2 text-[var(--forest-dark)]">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted-foreground)]" />
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full pl-12 pr-4 py-3 bg-white border-2 border-[var(--border)] rounded-2xl focus:border-[var(--sage)] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2 text-[var(--forest-dark)]">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted-foreground)]" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-3 bg-white border-2 border-[var(--border)] rounded-2xl focus:border-[var(--sage)] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2 text-[var(--forest-dark)]">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted-foreground)]" />
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full pl-12 pr-4 py-3 bg-white border-2 border-[var(--border)] rounded-2xl focus:border-[var(--sage)] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2 text-[var(--forest-dark)]">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted-foreground)]" />
                  <input
                    type="password"
                    placeholder="Create a password"
                    className="w-full pl-12 pr-4 py-3 bg-white border-2 border-[var(--border)] rounded-2xl focus:border-[var(--sage)] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded mt-1" />
                <span className="text-sm text-[var(--muted-foreground)]">
                  I agree to the Terms of Service and Privacy Policy
                </span>
              </label>

              <Link to="/app">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="w-full py-4 bg-[var(--forest-dark)] text-white rounded-2xl hover:bg-[var(--forest-medium)] transition-colors"
                >
                  Create Account
                </motion.button>
              </Link>

              <p className="text-center text-sm text-[var(--muted-foreground)]">
                Already have an account?{' '}
                <Link to="/" className="text-[var(--sage)] hover:underline">
                  Sign In
                </Link>
              </p>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
