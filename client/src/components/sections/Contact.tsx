import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@shared/routes";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useCreateEnquiry } from "@/hooks/use-enquiries";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";

export function Contact() {
  const { toast } = useToast();
  const createEnquiry = useCreateEnquiry();
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Fallback to a basic schema if api input schema is somehow unavailable during render
  // though we expect it to be there.
  const schema = api.enquiries?.create?.input || z.object({
    studentName: z.string().min(2, "Name is required"),
    parentName: z.string().min(2, "Parent name is required"),
    phone: z.string().min(10, "Valid phone number required"),
    grade: z.string().min(1, "Grade is required"),
    subject: z.string().min(1, "Subject is required"),
    message: z.string().min(5, "Please leave a short message"),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      studentName: "",
      parentName: "",
      phone: "",
      grade: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    setIsRedirecting(true);
    
    try {
      // 1. Try to post to our backend API for records
      await createEnquiry.mutateAsync(data).catch(err => {
        console.warn("API save failed, but we will still proceed to WhatsApp", err);
      });

      // 2. Format the message for WhatsApp
      const waText = `*New Enquiry*\n\nStudent: ${data.studentName}\nParent: ${data.parentName}\nGrade: ${data.grade}\nSubject: ${data.subject}\nPhone: ${data.phone}\nMessage: ${data.message}`;
      
      // 3. Open WhatsApp
      window.open(`https://wa.me/919022204761?text=${encodeURIComponent(waText)}`, '_blank');
      
      toast({
        title: "Redirecting to WhatsApp...",
        description: "Your enquiry details have been prepared.",
      });
      
      form.reset();
    } finally {
      setIsRedirecting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">Fill the form below to start your child's academic journey.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-2xl shadow-black/5 border border-slate-100">
          
          {/* Form Side */}
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">Enquiry Form</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="studentName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Student Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-slate-50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="parentName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Parent Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" className="bg-slate-50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 98765 43210" className="bg-slate-50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="grade"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Grade/Class</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. 10th Standard" className="bg-slate-50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject(s) Required</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Science & Maths, Biology" className="bg-slate-50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us more about your requirements..." 
                          className="resize-none bg-slate-50 h-24" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full h-14 text-base rounded-xl font-bold bg-primary hover:bg-primary/90"
                  disabled={createEnquiry.isPending || isRedirecting}
                >
                  {createEnquiry.isPending || isRedirecting ? (
                    <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Processing...</>
                  ) : (
                    <><Send className="w-5 h-5 mr-2" /> Send Enquiry via WhatsApp</>
                  )}
                </Button>
              </form>
            </Form>
          </div>

          {/* Map Side */}
          <div className="relative h-64 lg:h-auto min-h-[400px] bg-slate-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.8913035665437!2d72.8486408!3d19.1562347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b73111694c6f%3A0x22bde388254c42a9!2sVidyasetu%20home%20tution!5e0!3m2!1sen!2sin!4v1772209125068!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full border-0" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Vidyasetu Home Tuition Location Map"
            />
            <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-xl">
              <h4 className="font-bold text-slate-800 mb-1">Our Locations</h4>
              <p className="text-sm text-slate-600">Goregaon & Malad, Mumbai.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
