import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { LabBackground } from '@/components/lab/LabBackground';
import { MagneticButton } from '@/components/lab/MagneticButton';
import { SEOHead } from '@/components/seo/SEOHead';

export default function NotFound() {
  return (
    <>
      <SEOHead title="404" description="Page not found" />
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-5">
        <LabBackground variant="dense" />
        <div className="relative z-10 mx-auto max-w-lg text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="font-display text-[7rem] font-semibold leading-none gradient-text-signal opacity-40 md:text-[10rem]">
              404
            </div>
            <h1 className="font-display text-3xl font-semibold md:text-4xl">Signal lost</h1>
            <p className="text-muted-foreground">
              This route is not on the map. Return to the lab and continue from the main desk.
            </p>
            <MagneticButton to="/">
              <ArrowLeft className="size-4" /> Back to Lab
            </MagneticButton>
            <div className="pt-2">
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">
                Or contact the operator
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
