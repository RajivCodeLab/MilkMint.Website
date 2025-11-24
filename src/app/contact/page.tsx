"use client"

import React, { useState } from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <>
      <Header />
      <div className="min-h-screen py-12 bg-background">
        <div className="max-w-2xl mx-auto px-6 bg-white/80 rounded-2xl shadow-md py-10">
          <h1 className="text-3xl font-heading mb-2">Contact Us</h1>
          <p className="mb-6 text-gray-700">Users can reach MilkMint support for delivery, subscription, or payment issues.</p>

          <div className="mb-6 space-y-1 text-sm">
            <div><span className="font-semibold">Support Email:</span> <a href="mailto:support@milkmint.app" className="text-primary underline">support@milkmint.app</a></div>
            <div><span className="font-semibold">Business Name:</span> Ragini Innovations</div>
            <div><span className="font-semibold">Address:</span> 123 Placeholder Street, City, State, ZIP</div>
            <div><span className="font-semibold">Phone:</span> (555) 123-4567</div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium" htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary bg-white min-h-[100px]"
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                placeholder="How can we help you?"
              />
            </div>
            <button type="button" className="bg-primary text-white px-6 py-2 rounded-2xl font-semibold btn-scale mt-2" disabled>
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}