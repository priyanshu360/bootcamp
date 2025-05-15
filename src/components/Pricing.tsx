import { FileDown, CheckCircle2 } from 'lucide-react';

const Pricing = () => {

  return (
    <section className="py-24 px-4 relative" id="pricing">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
          <span className="text-cyan-400">&lt;</span>
          SUMMER SPECIAL OFFER
          <span className="text-cyan-400">/&gt;</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Invest in your future with our limited-time summer discount
        </p>

        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 mb-8">
          <div className="flex flex-col items-center">
            <div className="text-gray-400 line-through text-xl mb-2">
              Original Price: ₹5,000
            </div>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              ₹1,499
            </div>
            <div className="text-fuchsia-400 font-mono mb-6">
              Limited-time summer offer – save ₹3,501!
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
              <div className="space-y-3">
                {[
                  '4 Weeks Intensive Training',
                  'Practice Problems',
                  'No Payment During Registration',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-400 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {[
                  'Certificate of Completion',
                  'Live Doubt Sessions',
                  'Beginner-Friendly Curriculum',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-400 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center w-full max-w-md">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
