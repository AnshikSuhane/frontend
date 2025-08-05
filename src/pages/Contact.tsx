import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Get In <span className="text-gold">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="animate-fade-in-left">
              <h2 className="text-3xl font-bold mb-8 text-gold">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Visit Our Boutique</h3>
                    <p className="text-gray-300 leading-relaxed">
                      123 Luxury Avenue<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-gray-400 text-sm">Monday - Friday, 9AM - 6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                    <p className="text-gray-300">info@luxescent.com</p>
                    <p className="text-gray-300">support@luxescent.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                    <div className="text-gray-300 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                      <p>Saturday: 10:00 AM - 6:00 PM</p>
                      <p>Sunday: 12:00 PM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 bg-gray-800 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-400">Interactive Map</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-right">
              <div className="bg-white/5 rounded-lg p-8 backdrop-blur-sm border border-gold/20">
                <h2 className="text-3xl font-bold mb-8 text-gold">Send Us A Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-gold/30 rounded-lg focus:outline-none focus:border-gold text-white placeholder-gray-400"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-gold/30 rounded-lg focus:outline-none focus:border-gold text-white placeholder-gray-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-gold/30 rounded-lg focus:outline-none focus:border-gold text-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="product">Product Information</option>
                      <option value="order">Order Support</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="press">Press & Media</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-gold/30 rounded-lg focus:outline-none focus:border-gold text-white placeholder-gray-400 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send size={18} />
                  </button>
                </form>

                <div className="mt-8 p-4 bg-gold/10 rounded-lg border border-gold/20">
                  <p className="text-sm text-gray-300">
                    <strong className="text-gold">Note:</strong> We typically respond to all inquiries within 24 hours during business days. 
                    For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">
              Frequently Asked <span className="text-gold">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How do I choose the right fragrance for me?",
                answer: "We recommend visiting our boutique for a personalized consultation, or exploring our online fragrance finder tool. Our experts can help you discover scents that match your personality and preferences."
              },
              {
                question: "Do you offer fragrance customization?",
                answer: "Yes! We offer bespoke fragrance creation services for special occasions. Our master perfumers will work with you to create a unique scent that's exclusively yours."
              },
              {
                question: "What is your return policy?",
                answer: "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund or exchange."
              },
              {
                question: "Do you ship internationally?",
                answer: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location. Please check our shipping page for detailed information."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-6 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-xl font-semibold text-gold mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;