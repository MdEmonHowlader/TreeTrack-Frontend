import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Upload, MapPin, Camera, TreePine } from 'lucide-react';
import { motion } from 'motion/react';

const treeTypes = [
  'Oak Tree',
  'Pine Tree',
  'Maple Tree',
  'Birch Tree',
  'Willow Tree',
  'Cedar Tree',
  'Redwood',
  'Spruce Tree',
  'Elm Tree',
  'Ash Tree',
];

export function AddTree() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [location] = useState({ lat: 40.7128, lng: -74.006 });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      navigate('/app');
    }, 500);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl mb-2 text-[var(--forest-dark)]">Add New Tree</h1>
        <p className="text-[var(--muted-foreground)]">
          Register a new tree and track its growth
        </p>
      </motion.div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Form Fields */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-[var(--border)]">
              <h2 className="text-xl mb-4 text-[var(--forest-dark)]">Tree Information</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2 text-[var(--forest-dark)]">
                    Tree Type
                  </label>
                  <div className="relative">
                    <TreePine className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted-foreground)]" />
                    <select className="w-full pl-12 pr-4 py-3 bg-[var(--sand)] border-2 border-[var(--border)] rounded-2xl focus:border-[var(--sage)] focus:outline-none transition-colors appearance-none">
                      <option value="">Select tree type</option>
                      {treeTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-[var(--forest-dark)]">
                    Upload Photo
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                      id="tree-image"
                    />
                    <label
                      htmlFor="tree-image"
                      className="flex items-center gap-3 w-full px-4 py-3 bg-[var(--sand)] border-2 border-[var(--border)] rounded-2xl cursor-pointer hover:border-[var(--sage)] transition-colors"
                    >
                      <Camera className="w-5 h-5 text-[var(--muted-foreground)]" />
                      <span className="text-[var(--muted-foreground)]">
                        {selectedImage ? 'Image selected' : 'Choose an image'}
                      </span>
                      <Upload className="w-5 h-5 text-[var(--muted-foreground)] ml-auto" />
                    </label>
                  </div>
                  {selectedImage && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-4 rounded-2xl overflow-hidden"
                    >
                      <img
                        src={selectedImage}
                        alt="Selected tree"
                        className="w-full h-48 object-cover"
                      />
                    </motion.div>
                  )}
                </div>

                <div>
                  <label className="block text-sm mb-2 text-[var(--forest-dark)]">
                    Location Address
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted-foreground)]" />
                    <input
                      type="text"
                      placeholder="Enter location address"
                      className="w-full pl-12 pr-4 py-3 bg-[var(--sand)] border-2 border-[var(--border)] rounded-2xl focus:border-[var(--sage)] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-[var(--forest-dark)]">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Add any notes about this tree..."
                    className="w-full px-4 py-3 bg-[var(--sand)] border-2 border-[var(--border)] rounded-2xl focus:border-[var(--sage)] focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Map Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-[var(--border)]">
              <h2 className="text-xl mb-4 text-[var(--forest-dark)]">GPS Location</h2>
              <div className="bg-[var(--sand)] rounded-2xl h-64 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--forest-dark)]/5 to-[var(--sage)]/10" />
                <div className="text-center z-10">
                  <MapPin className="w-16 h-16 text-[var(--sage)] mx-auto mb-4" />
                  <p className="text-[var(--forest-dark)] mb-2">Current Location</p>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    className="mt-4 px-6 py-2 bg-[var(--sage)] text-white rounded-xl hover:bg-[var(--forest-medium)] transition-colors"
                  >
                    Detect GPS
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[var(--sage)]/20 to-[var(--earth)]/20 rounded-3xl p-6 border-2 border-[var(--border)]">
              <h3 className="text-lg mb-2 text-[var(--forest-dark)]">Quick Tips</h3>
              <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                <li>• Take a clear photo of the tree</li>
                <li>• Enable GPS for accurate location</li>
                <li>• Note any unique features</li>
                <li>• Update growth progress regularly</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="flex-1 py-4 bg-[var(--forest-dark)] text-white rounded-2xl hover:bg-[var(--forest-medium)] transition-colors"
          >
            Submit Tree
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => navigate('/app')}
            className="px-8 py-4 bg-white border-2 border-[var(--border)] text-[var(--forest-dark)] rounded-2xl hover:bg-[var(--sand)] transition-colors"
          >
            Cancel
          </motion.button>
        </motion.div>
      </form>
    </div>
  );
}
