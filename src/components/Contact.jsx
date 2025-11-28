import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';

import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch("https://formsubmit.co/ajax/rubeshkumardev@gmail.com", {
          method: "POST",
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _subject: `New Contact: ${formData.subject}`,
            _replyto: formData.email,
            _template: 'table'
          })
        });

        if (response.ok) {
          toast.success("Message sent successfully!");
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          toast.error("Failed to send message. Please try again.");
        }
      } catch (error) {
        toast.error("Something went wrong. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Let's Work <span className="text-primary">Together</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm currently open to new opportunities and collaborations.
                Whether you have a project in mind or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-card rounded-2xl shadow-sm border border-border/50 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(97,175,239,0.3)] transition-all">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">rubeshkumardev@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-card rounded-2xl shadow-sm border border-border/50 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(97,175,239,0.3)] transition-all">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">Available Remote & Relocation</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-card rounded-2xl shadow-sm border border-border/50 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(97,175,239,0.3)] transition-all">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">+91 63837 47961</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-card p-8 rounded-3xl shadow-lg border border-border/50"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium ml-1">Name</label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-xl border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && <span className="text-xs text-red-500 ml-1">{errors.name}</span>}
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium ml-1">Email</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 rounded-xl border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <span className="text-xs text-red-500 ml-1">{errors.email}</span>}
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium ml-1">Subject</label>
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                className={`w-full px-4 py-3 rounded-xl border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${errors.subject ? 'border-red-500' : ''}`}
              />
              {errors.subject && <span className="text-xs text-red-500 ml-1">{errors.subject}</span>}
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className={`w-full px-4 py-3 rounded-xl border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none ${errors.message ? 'border-red-500' : ''}`}
              ></textarea>
              {errors.message && <span className="text-xs text-red-500 ml-1">{errors.message}</span>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 flex items-center justify-center gap-2 shadow-lg shadow-primary/25 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
