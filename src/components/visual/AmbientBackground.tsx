import { LabBackground } from '@/components/lab/LabBackground';

/** Back-compat wrapper — routes older imports to LabBackground. */
export function AmbientBackground({
  variant = 'default',
}: {
  variant?: 'default' | 'dense' | 'subtle';
}) {
  const map = {
    default: 'subtle',
    dense: 'dense',
    subtle: 'subtle',
  } as const;
  return <LabBackground variant={map[variant]} />;
}
