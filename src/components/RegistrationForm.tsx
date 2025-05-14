import React, { useState } from 'react';
import { X } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface RegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience_level: 'beginner'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error: supabaseError } = await supabase
        .from('registrations')
        .insert([formData]);

      if (supabaseError) throw supabaseError;

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        education: '',
        experience_level: 'beginner'
      });
    } catch (err) {
      setError('Failed to submit registration. Please try again.');
      console.error('Registration error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-bold font-mono mb-6 text-center">
            <span className="text-cyan-400">&lt;</span>
            Register Now
            <span className="text-cyan-400">/&gt;</span>
          </h2>

          {success ? (
            <div className="text-center">
              <p className="text-green-400 mb-4">Registration successful! 🎉</p>
              <p className="text-gray-300 mb-6">We'll contact you soon with further details.</p>
              <button
                onClick={onClose}
                className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-2 px-6 rounded-md transition-all duration-300 w-full"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-1 font-mono text-sm">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-4 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1 font-mono text-sm">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-4 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1 font-mono text-sm">Phone</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-4 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1 font-mono text-sm">Education</label>
                <input
                  type="text"
                  required
                  value={formData.education}
                  onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                  className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-4 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1 font-mono text-sm">Experience Level</label>
                <select
                  value={formData.experience_level}
                  onChange={(e) => setFormData({ ...formData, experience_level: e.target.value })}
                  className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-4 text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-2 px-6 rounded-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
              >
                {loading ? 'Submitting...' : 'Submit Registration'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
