import React, { useState } from 'react';
import './FAQSection.css';

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How does Osumare measure campaign success?',
      answer: 'We believe in measurable results. Our data-driven approach means that every campaign\'s performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.'
    },
    {
      question: 'How does Osumare measure campaign success?',
      answer: 'We believe in measurable results. Our data-driven approach means that every campaign\'s performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.'
    },
    {
      question: 'How does Osumare measure campaign success?',
      answer: 'We believe in measurable results. Our data-driven approach means that every campaign\'s performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.'
    },
    // Add more FAQs as needed
  ];

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <p>Pinpoint your audience with precision, ensuring your marketing efforts reach those most likely to engage with your brand.</p>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              {index + 1}. {faq.question}
              <span className="arrow">{activeIndex === index ? '▲' : '▼'}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
