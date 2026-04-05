import React, { useState } from 'react';

const faqs = [
  {
    question: "What is the expected service life of Mangalam HDPE pipes?",
    answer: "Our HDPE pipes are designed for a service life of 50+ years under standard operating conditions, thanks to their exceptional resistance to environmental stress and corrosion."
  },
  {
    question: "Are your pipes suitable for potable water distribution?",
    answer: "Yes, Mangalam HDPE pipes are manufactured using food-grade PE100 material and are BIS certified (IS 4984), making them perfectly safe for drinking water supply."
  },
  {
    question: "What pressure ratings do you offer?",
    answer: "We provide a wide range of pressure ratings from PN 2.5 to PN 16, ensuring suitability for everything from low-pressure irrigation to high-pressure industrial applications."
  },
  {
    question: "Can HDPE pipes be used for underground gas distribution?",
    answer: "Absolutely. Our specialized PE-RT and gas-grade HDPE pipes are ideal for natural gas distribution due to their flexibility and leak-proof electrofusion joints."
  },
  {
    question: "How do HDPE pipes compare to traditional metal pipes?",
    answer: "HDPE pipes are significantly lighter, more flexible, and entirely immune to corrosion and scaling, which makes them easier to install and maintenance-free compared to GI or DI pipes."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq bg-light">
      <div className="container faq__container">
        <h2 className="section-title" style={{ color: 'var(--color-text)' }}>
          <span style={{ color: 'var(--color-primary)' }}>Frequently</span> Asked Questions
        </h2>

        <div className="accordion">
          {faqs.map((faq, index) => (
            <div key={index} className={`accordion__item ${openIndex === index ? 'active' : ''}`}>
              <button 
                className="accordion__header" 
                aria-expanded={openIndex === index}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="accordion__icon"></span>
              </button>
              <div 
                className="accordion__content" 
                style={{ maxHeight: openIndex === index ? '500px' : '0' }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq__cta text-center mt-xl">
          <p className="mb-sm text-gray" style={{ marginBottom: '1rem', color: '#64748b' }}>Still have questions?</p>
          <a href="#contact" className="btn btn--outline">Contact Our Experts</a>
        </div>
      </div>
    </section>
  );
}
