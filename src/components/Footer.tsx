import Link from "next/link";
import { Settings, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-16 pb-8 border-t border-primary-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                                <Settings className="text-white w-6 h-6" />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-white">
                                GURU BEARING
                            </span>
                        </div>
                        <p className="text-steel-light/80 text-sm leading-relaxed max-w-sm">
                            Premium quality bearings for industrial, automotive, and heavy-duty
                            manufacturing applications. Reliable, durable, and engineered to perform.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/products" className="text-steel-light/80 hover:text-white transition-colors text-sm">
                                    Our Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-steel-light/80 hover:text-white transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/quote" className="text-steel-light/80 hover:text-white transition-colors text-sm">
                                    Request a Quote
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-steel-light/80 hover:text-white transition-colors text-sm">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span className="text-steel-light/80">
                                    No. 2800 C, Ashok Gali,<br />
                                    Mori Gate, New Delhi-110006,<br />
                                    Delhi, India
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                                <span className="text-steel-light/80">+91 98183 94355, +91 92123 10957</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                                <span className="text-steel-light/80">gurubearingcompany@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Business Hours */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Business Hours</h3>
                        <ul className="space-y-4 text-sm text-steel-light/80">
                            <li className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-white">Mon - Sat</p>
                                    <p>10:00 AM - 7:00 PM</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-transparent flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-white">Sunday</p>
                                    <p>Closed</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-primary-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-steel-light/60 text-sm">
                        &copy; {new Date().getFullYear()} Guru Bearing Company. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <span className="text-steel-light/60 text-sm hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="text-steel-light/60 text-sm hover:text-white cursor-pointer transition-colors">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
