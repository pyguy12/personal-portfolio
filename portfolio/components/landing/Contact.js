import React from 'react';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import ResumeDownload from '../landing/ResumeDownload';

const ContactSection = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Let's Connect</h2>
                    <p className="text-lg text-slate-600">
                        I'm always interested in hearing about new projects and opportunities.
                    </p>
                </div>

                <div className="max-w-xl mx-auto">
                    {/* Contact Methods */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                        <a
                            href="mailto:wuwarren73600@gmail.com"
                            className="flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-600/20 transition-colors"
                        >
                            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                <Mail className="w-5 h-5 text-blue-600" />
                            </div>
                            <div className="text-left">
                                <div className="text-sm font-medium text-slate-900">Email</div>
                                <div className="text-sm text-slate-500">Get in touch</div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400 ml-auto" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/warren-ste-wu/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-600/20 transition-colors"
                        >
                            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                <Linkedin className="w-5 h-5 text-blue-600" />
                            </div>
                            <div className="text-left">
                                <div className="text-sm font-medium text-slate-900">LinkedIn</div>
                                <div className="text-sm text-slate-500">Connect with me</div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400 ml-auto" />
                        </a>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors"
                                placeholder="How can I help you?"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Send Message
                            </button>
                        </div>
                        <ResumeDownload />
                    </form>

                    {/* GitHub Link */}
                    <div className="mt-8 text-center">
                        <a
                            href="https://github.com/pyguy12"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
                        >
                            <Github className="w-5 h-5" />
                            <span>Check out my GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
