import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, CalendarClock, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(80),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  website: z.string().trim().max(200).optional().or(z.literal("")),
  email: z.string().trim().email("Invalid email").max(160),
  phone: z.string().trim().min(6, "Phone required").max(20),
  service: z.string().min(1, "Select a service"),
  meeting: z.string().min(1, "Select a preference"),
  message: z.string().trim().max(800).optional().or(z.literal("")),
});
type FormValues = z.infer<typeof schema>;

export function Contact() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", company: "", website: "", email: "", phone: "", service: "", meeting: "", message: "" },
  });

  const onSubmit = (values: FormValues) => {
    console.log("consultation request", values);
    toast.success("Request received — our experts will reach out within 24 hours.");
    form.reset();
  };

  return (
    <section id="contact" className="relative bg-muted/30 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Talk to us</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Get expert consultation</h2>
          <p className="mt-3 text-muted-foreground">Choose how you'd like to connect — direct, scheduled, or in person.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-lg font-semibold">VAPT — Direct contact</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li><a href="tel:+910000000000" className="flex items-center gap-3 rounded-lg border border-border p-3 transition hover:bg-muted/50">
                  <Phone className="h-4 w-4 text-primary" /> +91 00000 00000
                </a></li>
                <li><a href="mailto:hello@meitcyber.com" className="flex items-center gap-3 rounded-lg border border-border p-3 transition hover:bg-muted/50">
                  <Mail className="h-4 w-4 text-primary" /> hello@meitcyber.com
                </a></li>
                <li><a href="#contact" className="flex items-center gap-3 rounded-lg border border-border p-3 transition hover:bg-muted/50">
                  <CalendarClock className="h-4 w-4 text-primary" /> Schedule online meeting
                </a></li>
                <li><a href="#contact" className="flex items-center gap-3 rounded-lg border border-border p-3 transition hover:bg-muted/50">
                  <MapPin className="h-4 w-4 text-primary" /> Request offline meeting
                </a></li>
              </ul>
            </div>
            <div className="mt-6 rounded-2xl border border-dashed border-border bg-card/60 p-6">
              <p className="text-sm font-semibold">SEO Audit Services</p>
              <p className="mt-1 text-sm text-muted-foreground">Use the form to request your full audit or a free strategy consultation with our SEO + security experts.</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-elegant sm:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 sm:grid-cols-2">
                  <FormField name="name" control={form.control} render={({ field }) => (
                    <FormItem><FormLabel>Name</FormLabel><FormControl><Input placeholder="Jane Doe" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField name="company" control={form.control} render={({ field }) => (
                    <FormItem><FormLabel>Company</FormLabel><FormControl><Input placeholder="Acme Inc." {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField name="website" control={form.control} render={({ field }) => (
                    <FormItem><FormLabel>Website URL</FormLabel><FormControl><Input placeholder="https://example.com" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField name="email" control={form.control} render={({ field }) => (
                    <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="you@company.com" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField name="phone" control={form.control} render={({ field }) => (
                    <FormItem><FormLabel>Phone</FormLabel><FormControl><Input placeholder="+91 00000 00000" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField name="service" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service required</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl><SelectTrigger><SelectValue placeholder="Choose a service" /></SelectTrigger></FormControl>
                        <SelectContent>
                          <SelectItem value="vapt-web">VAPT — Web Application</SelectItem>
                          <SelectItem value="vapt-api">VAPT — API</SelectItem>
                          <SelectItem value="vapt-network">VAPT — Network</SelectItem>
                          <SelectItem value="seo-full">Full SEO Audit</SelectItem>
                          <SelectItem value="consultation">General consultation</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField name="meeting" control={form.control} render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel>Preferred meeting type</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl><SelectTrigger><SelectValue placeholder="Online or offline" /></SelectTrigger></FormControl>
                        <SelectContent>
                          <SelectItem value="online">Online (Google Meet / Zoom)</SelectItem>
                          <SelectItem value="call">Phone call</SelectItem>
                          <SelectItem value="offline">Offline meeting</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField name="message" control={form.control} render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel>Message</FormLabel>
                      <FormControl><Textarea rows={4} placeholder="Tell us briefly about your needs…" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <div className="sm:col-span-2">
                    <Button type="submit" size="lg" className="w-full bg-gradient-primary text-primary-foreground hover:opacity-95">
                      <Send className="mr-2 h-4 w-4" /> Get Expert Consultation
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
