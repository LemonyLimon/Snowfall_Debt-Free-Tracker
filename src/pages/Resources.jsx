import React from 'react';
// This page provides users with educational resources and tips for effective debt management, 
// complementing the core functionality of the app.
const Resources = () => {
  const tips = [
    {
      title: "The Snowball Method",
      desc: "Pay off the smallest balance first. The quick win gives you the psychological momentum to keep going.",
      icon: "❄️"
    },
    {
      title: "The Avalanche Method",
      desc: "Pay off the debt with the highest interest rate first. This saves you the most money over time.",
      icon: "🏔️"
    },
    {
      title: "The 50/30/20 Rule",
      desc: "Allocate 50% of income to needs, 30% to wants, and 20% to debt repayment and savings.",
      icon: "📊"
    }
  ];
// The Resources page layout with a list of tips and a call-to-action for further learning
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-primary mb-6">Financial Resources</h2>
      
      <div className="grid gap-6 md:grid-cols-3 mb-10">
        {tips.map((tip, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="text-3xl mb-4">{tip.icon}</div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">{tip.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{tip.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-secondary bg-opacity-10 p-8 rounded-3xl border border-secondary border-opacity-20 text-center">
        <h3 className="text-xl font-bold text-secondary mb-2">Need more help?</h3>
        <p className="text-slate-600 mb-4">Check out reputable tools and calculators to speed up your journey.</p>
        <a 
          href="https://www.nerdwallet.com/finance/learn/money-management" // A trusted resource for financial education and tools
          target="_blank" 
          rel="noreferrer"
          className="inline-block bg-secondary text-white px-8 py-3 rounded-xl font-bold hover:brightness-110 transition-all"
        >
          Visit NerdWallet Guide
        </a>
      </div>
    </div>
  );
};

export default Resources;