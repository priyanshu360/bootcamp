import React, { useState } from 'react';
import { X, Download } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface CurriculumFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const CurriculumForm: React.FC<CurriculumFormProps> = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validatePhone(phone)) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    setLoading(true);

    try {
      const { error: supabaseError } = await supabase
        .from('curriculum_downloads')
        .insert([{ phone }]);

      if (supabaseError) throw supabaseError;

      // Trigger PDF download
      const pdfUrl = '../../public/static/C++ & DSA Summer Bootcamp Curriculum.pdf'; // Replace with actual PDF URL
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'DSA_Bootcamp_Curriculum.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      onClose();
    } catch (err) {
      setError('Failed to submit. Please try again.');
      console.error('Submission error:', err);
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
            Download Curriculum
            <span className="text-cyan-400">/&gt;</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-1 font-mono text-sm">Mobile Number</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                placeholder="Enter 10-digit mobile number"
                className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-4 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-2 px-6 rounded-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-6 flex items-center justify-center gap-2"
            >
              {loading ? 'Processing...' : (
                <>
                  <Download className="w-5 h-5" />
                  Download PDF
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CurriculumForm;
