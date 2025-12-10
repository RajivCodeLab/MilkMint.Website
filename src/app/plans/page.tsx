"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import Header from '../components/Header'
import Footer from '../components/Footer'

const plans = [
  {
    planId: 'trial',
    name: 'Trial Plan',
    description: '14-days free trial to test all features',
    price: 0,
    interval: 'monthly',
    popular: false,
    features: [
      'Full feature access',
      'No credit card required',
      'Cancel anytime',
      'Perfect for testing'
    ]
  },
  {
    planId: 'basic_monthly',
    name: 'Basic Monthly',
    description: 'Essential features for small vendors',
    price: 99,
    interval: 'monthly',
    popular: true,
    features: [
      'Up to 50 customers',
      'Daily delivery tracking',
      'Monthly bill generation',
      'WhatsApp bill sharing',
      'Payment tracking'
    ]
  },
  {
    planId: 'basic_yearly',
    name: 'Basic Yearly',
    description: 'Basic plan with 2 months free',
    price: 999,
    interval: 'yearly',
    popular: false,
    savings: '₹189 savings',
    features: [
      'All Basic Monthly features',
      '2 months free',
      'Priority email support',
      'Annual billing discount'
    ]
  },
  {
    planId: 'pro_monthly',
    name: 'Pro Monthly',
    description: 'Advanced features for growing businesses',
    price: 149,
    interval: 'monthly',
    popular: false,
    features: [
      'Unlimited customers',
      'Advanced analytics',
      'Multiple delivery boys',
      'SMS notifications',
      'Priority support',
      'Custom branding'
    ]
  },
  {
    planId: 'pro_yearly',
    name: 'Pro Yearly',
    description: 'Pro plan with 2 months free',
    price: 1499,
    interval: 'yearly',
    popular: false,
    savings: '₹289 savings',
    features: [
      'All Pro Monthly features',
      '2 months free',
      'Dedicated support',
      'Early access to new features'
    ]
  },
  {
    planId: 'enterprise_monthly',
    name: 'Enterprise Monthly',
    description: 'Full features for large-scale operations',
    price: 199,
    interval: 'monthly',
    popular: false,
    features: [
      'Everything in Pro',
      'Multi-location support',
      'API access',
      'Custom integrations',
      'Dedicated account manager',
      'Training & onboarding'
    ]
  },
  {
    planId: 'enterprise_yearly',
    name: 'Enterprise Yearly',
    description: 'Enterprise plan with 2 months free',
    price: 1999,
    interval: 'yearly',
    popular: false,
    savings: '₹389 savings',
    features: [
      'All Enterprise Monthly features',
      '2 months free',
      '24/7 priority support',
      'Custom development options'
    ]
  }
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}

const card = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function PlansPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen py-20 bg-gradient-to-br from-[#E6F7F4] via-[#D1F5D3]/30 to-[#E6F7F4]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Choose Your <span className="text-primary">Perfect Plan</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple, transparent pricing for milk vendors of all sizes. Start free, scale as you grow.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={container} 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {plans.map((plan, idx) => (
              <motion.div 
                key={plan.planId} 
                variants={card}
                className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col ${
                  plan.popular ? 'border-2 border-primary transform md:scale-105' : 'border border-gray-100'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-600 min-h-[40px]">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price === 0 ? 'Free' : `₹${plan.price}`}
                    </span>
                    {plan.price > 0 && (
                      <span className="text-gray-500">/{plan.interval}</span>
                    )}
                  </div>
                  {plan.savings && (
                    <div className="mt-2 inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {plan.savings}
                    </div>
                  )}
                </div>

                <ul className="mb-8 space-y-3 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => (window.location.href = '/early-access')}
                  className={`w-full py-4 px-6 rounded-2xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.price === 0 ? 'Start Free Trial' : 'Get Started'}
                </button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Not sure which plan is right for you?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Start with our free 7-day trial to explore all features. No credit card required. Our team is here to help you choose the perfect plan for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://wa.me/917899301122', '_blank')}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Talk to Sales
              </button>
              <button
                onClick={() => (window.location.href = '/early-access')}
                className="bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
              >
                Start Free Trial
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}

