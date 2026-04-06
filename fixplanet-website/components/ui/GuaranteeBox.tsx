import { Shield, Clock, CheckCircle2 } from 'lucide-react';

export default function GuaranteeBox() {
  return (
    <div className="guarantee-box rounded-2xl p-8 md:p-10 text-white">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-teal-accent/20 flex items-center justify-center">
          <Shield className="text-teal-accent" size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold">The FIXplanet Zero-Risk Promise</h3>
          <p className="text-gray-400 text-sm">Every repair. Every time. No exceptions.</p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="text-teal-accent mt-0.5 shrink-0" size={20} />
          <div>
            <div className="font-semibold mb-1">Fixed or Free</div>
            <div className="text-sm text-gray-400">If we can&apos;t fix it, you pay nothing</div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="text-teal-accent mt-0.5 shrink-0" size={20} />
          <div>
            <div className="font-semibold mb-1">On Time or ₹500 Off</div>
            <div className="text-sm text-gray-400">Late arrival = automatic discount</div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Shield className="text-teal-accent mt-0.5 shrink-0" size={20} />
          <div>
            <div className="font-semibold mb-1">12-Month Warranty</div>
            <div className="text-sm text-gray-400">No questions asked, free re-repair</div>
          </div>
        </div>
      </div>
    </div>
  );
}
