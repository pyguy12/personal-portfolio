import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <div className="text-xl font-bold text-blue-600 mb-4">warren.wu</div>
                        <p className="text-sm text-slate-500">
                            Full Stack Engineer crafting thoughtful digital experiences in Fort Worth, Texas.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#work"
                                    className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
                                >
                                    Work
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#skills"
                                    className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
                                >
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/Warren_Wu_Resume.pdf"
                                    className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
                                    download
                                >
                                    Download Resume
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 mb-4">Connect</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/pyguy12"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-slate-100 text-slate-500 hover:text-blue-600 transition-colors"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/warren-ste-wu/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-slate-100 text-slate-500 hover:text-blue-600 transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:wuwarren73600@gmail.com"
                                className="p-2 rounded-lg bg-slate-100 text-slate-500 hover:text-blue-600 transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-slate-200">
                    <p className="text-sm text-slate-500 text-center">
                        © {new Date().getFullYear()} Warren Wu. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
