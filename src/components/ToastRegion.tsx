import { AnimatePresence, motion } from 'motion/react';
import { CheckCircle2, X } from 'lucide-react';

export type ToastMessage = {
  id: number;
  title: string;
  body: string;
};

type ToastRegionProps = {
  toasts: ToastMessage[];
  onDismiss: (id: number) => void;
};

export function ToastRegion({ toasts, onDismiss }: ToastRegionProps) {
  return (
    <div className="pointer-events-none fixed right-4 top-24 z-[120] flex w-[min(92vw,380px)] flex-col gap-3">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 32, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 24, scale: 0.96 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className="pointer-events-auto rounded-3xl border border-emerald-100 bg-white/95 p-4 shadow-[0_20px_60px_-24px_rgba(15,23,42,0.35)] backdrop-blur"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-full bg-emerald-50 p-2 text-emerald-600">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-slate-950">{toast.title}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{toast.body}</p>
              </div>
              <button
                type="button"
                onClick={() => onDismiss(toast.id)}
                className="rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                aria-label="Dismiss notification"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
