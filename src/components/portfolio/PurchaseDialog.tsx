import { useEffect, useMemo, useRef, useState, type DragEvent, type ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle2, ImagePlus, Loader2, Upload } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { MagneticButton } from '@/components/lab/MagneticButton';
import { cn } from '@/lib/utils';
import type { Project } from '@/types';

const purchaseSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: 'Full name is required' })
    .max(100, { message: 'Name must be less than 100 characters' }),
  contactNumber: z
    .string()
    .trim()
    .min(8, { message: 'Contact number is required' })
    .max(20, { message: 'Contact number is too long' })
    .regex(/^[+\d\s()-]+$/, { message: 'Enter a valid contact number' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Enter a valid email address' })
    .max(255, { message: 'Email must be less than 255 characters' }),
  screenshot: z
    .instanceof(File, { message: 'Payment screenshot is required' })
    .refine((f) => f.type.startsWith('image/'), { message: 'Only image files are accepted' })
    .refine((f) => f.size <= 8 * 1024 * 1024, { message: 'Image must be under 8MB' }),
});

type PurchaseFormValues = z.infer<typeof purchaseSchema>;

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: Project;
};

export function PurchaseDialog({ open, onOpenChange, project }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const form = useForm<PurchaseFormValues>({
    resolver: zodResolver(purchaseSchema),
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      contactNumber: '',
      email: '',
      screenshot: undefined,
    },
  });

  const screenshot = form.watch('screenshot');
  const values = form.watch();

  const isComplete = useMemo(() => {
    return Boolean(
      values.fullName?.trim() &&
        values.contactNumber?.trim() &&
        values.email?.trim() &&
        values.screenshot instanceof File &&
        form.formState.isValid
    );
  }, [values, form.formState.isValid]);

  useEffect(() => {
    if (!(screenshot instanceof File)) {
      setPreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(screenshot);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [screenshot]);

  useEffect(() => {
    if (!open) {
      const t = window.setTimeout(() => {
        form.reset();
        setIsSuccess(false);
        setIsSubmitting(false);
        setDragActive(false);
        setPreviewUrl(null);
      }, 200);
      return () => window.clearTimeout(t);
    }
  }, [open, form]);

  const assignFile = (file: File | undefined) => {
    if (!file) return;
    form.setValue('screenshot', file, { shouldValidate: true, shouldDirty: true });
  };

  const onFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    assignFile(e.target.files?.[0]);
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) assignFile(file);
  };

  const onSubmit = async (data: PurchaseFormValues) => {
    setIsSubmitting(true);
    try {
      // Mock submission only — no backend / payment gateway
      await new Promise((r) => setTimeout(r, 900));
      console.log('[Purchase submission]', {
        indicator: project.title,
        slug: project.slug,
        price: project.price,
        fullName: data.fullName,
        contactNumber: data.contactNumber,
        email: data.email,
        screenshot: {
          name: data.screenshot.name,
          type: data.screenshot.type,
          size: data.screenshot.size,
        },
      });
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const priceLabel =
    typeof project.price === 'number'
      ? `₹${project.price.toLocaleString('en-IN')}`
      : '₹4,999';

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-lg overflow-y-auto border-border bg-background sm:rounded-2xl">
        {isSuccess ? (
          <div className="space-y-5 py-2 text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
              <CheckCircle2 className="size-7 text-primary" />
            </div>
            <DialogHeader className="space-y-2">
              <DialogTitle className="font-display text-2xl">
                Payment Submitted Successfully
              </DialogTitle>
              <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
                Thank you for your purchase.
                <br />
                Your payment screenshot has been received.
                <br />
                <br />
                Our team will verify your payment and send your indicator access shortly.
              </DialogDescription>
            </DialogHeader>
            <div className="rounded-xl border border-border bg-card/50 px-4 py-3 text-sm">
              <div className="lab-label mb-1">Need help?</div>
              <a
                href="mailto:support@example.com"
                className="font-medium text-primary hover:underline"
              >
                support@example.com
              </a>
            </div>
            <MagneticButton onClick={() => onOpenChange(false)} className="w-full">
              Done
            </MagneticButton>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">Purchase {project.title}</DialogTitle>
              <DialogDescription>
                {priceLabel} · {project.accessLabel || 'Lifetime Access'} · One-time Payment
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card/40 p-5 text-center">
                <div className="lab-label mb-3 !text-foreground/70">Scan QR Code</div>
                <div className="mx-auto flex size-[200px] items-center justify-center overflow-hidden rounded-xl border border-border bg-white p-3">
                  <img
                    src="/qr-placeholder.svg"
                    alt="Payment QR code placeholder"
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Scan the QR code to complete payment.
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" autoComplete="name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="contactNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="+91 98765 43210"
                            autoComplete="tel"
                            inputMode="tel"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="you@email.com"
                            autoComplete="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="screenshot"
                    render={() => (
                      <FormItem>
                        <FormLabel>Upload Payment Screenshot</FormLabel>
                        <FormControl>
                          <div
                            role="button"
                            tabIndex={0}
                            onClick={() => inputRef.current?.click()}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') inputRef.current?.click();
                            }}
                            onDragEnter={(e) => {
                              e.preventDefault();
                              setDragActive(true);
                            }}
                            onDragOver={(e) => {
                              e.preventDefault();
                              setDragActive(true);
                            }}
                            onDragLeave={(e) => {
                              e.preventDefault();
                              setDragActive(false);
                            }}
                            onDrop={onDrop}
                            className={cn(
                              'cursor-pointer rounded-xl border border-dashed px-4 py-6 text-center transition',
                              dragActive
                                ? 'border-primary bg-primary/10'
                                : 'border-border bg-card/30 hover:border-primary/40'
                            )}
                          >
                            <input
                              ref={inputRef}
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={onFileInput}
                            />
                            {previewUrl ? (
                              <div className="space-y-3">
                                <img
                                  src={previewUrl}
                                  alt="Payment screenshot preview"
                                  className="mx-auto max-h-36 rounded-lg border border-border object-contain"
                                />
                                <p className="truncate text-sm text-foreground">
                                  {screenshot instanceof File ? screenshot.name : 'Selected image'}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  Click or drop to replace
                                </p>
                              </div>
                            ) : (
                              <div className="space-y-2">
                                <div className="mx-auto flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                  {dragActive ? (
                                    <Upload className="size-5" />
                                  ) : (
                                    <ImagePlus className="size-5" />
                                  )}
                                </div>
                                <p className="text-sm text-foreground">
                                  Drag & drop or click to upload
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  Image files only (PNG, JPG, WEBP)
                                </p>
                              </div>
                            )}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={!isComplete || isSubmitting}
                      className="w-full disabled:pointer-events-none disabled:opacity-50"
                    >
                      <span
                        className={cn(
                          'relative inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium tracking-tight transition-colors',
                          'bg-primary text-primary-foreground shadow-glow hover:bg-primary-glow'
                        )}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="size-4 animate-spin" /> Submitting…
                          </>
                        ) : (
                          'Submit Payment Proof'
                        )}
                      </span>
                    </button>
                  </div>
                </form>
              </Form>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
