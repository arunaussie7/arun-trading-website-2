import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle2, Loader2 } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const schema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().trim().email('Enter a valid email').max(255),
  platform: z.enum(['tradingview', 'mt4', 'mt5', 'other'], {
    required_error: 'Select a platform',
  }),
  markets: z.string().trim().min(2, 'Tell us the markets').max(200),
  brief: z
    .string()
    .trim()
    .min(20, 'Describe your idea in at least 20 characters')
    .max(2000),
});

type Values = z.infer<typeof schema>;

/**
 * Request form for traders who want a custom indicator / strategy built.
 */
export function CustomIndicatorForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      platform: undefined,
      markets: '',
      brief: '',
    },
  });

  const onSubmit = async (data: Values) => {
    setIsSubmitting(true);
    try {
      // Demo success — wire Formspree/backend when ready
      await new Promise((r) => setTimeout(r, 900));
      console.info('Custom indicator request', data);
      setIsSuccess(true);
      form.reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-primary/30 bg-primary/5 px-6 py-14 text-center">
        <CheckCircle2 className="size-10 text-primary" />
        <h3 className="mt-4 font-display text-xl font-semibold uppercase tracking-tight">
          Request received
        </h3>
        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          Thanks — I’ll review your custom indicator brief and get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="platform"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Platform</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="tradingview">TradingView (Pine)</SelectItem>
                    <SelectItem value="mt4">MT4</SelectItem>
                    <SelectItem value="mt5">MT5</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="markets"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Markets</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. XAUUSD, Nifty, EURUSD" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="brief"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Strategy / indicator brief</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder="Describe entries, exits, filters, timeframes, and any rules you already trade manually…"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" /> Sending…
            </>
          ) : (
            'Submit custom request'
          )}
        </Button>
      </form>
    </Form>
  );
}
