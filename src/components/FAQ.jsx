import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqData = [
  {
    question: "Is Kudrat Villa pet-friendly?",
    answer: "Yes, we are 100% pet-friendly. Your dogs can roam free in our 2+ acres of fenced lawns. We do not charge any extra pet fees."
  },
  {
    question: "Is the swimming pool private?",
    answer: "Yes, the swimming pool is completely private. You get exclusive access to the pool and the entire property during your stay. There are no shared spaces."
  },
  {
    question: "Can we cook our own food?",
    answer: "Yes, we have a fully equipped kitchen with a stove, microwave, refrigerator, and basic utensils that you can use to prepare your own meals."
  },
  {
    question: "Is it suitable for families with kids?",
    answer: "Absolutely. The villa is spacious and safe, with huge lawns for kids to play. We also provide extra mattresses for larger families."
  },
  {
    question: "How far is it from Dehradun city center?",
    answer: "Kudrat Villa is located near UPES, which is about a 30-40 minute scenic drive from the main Dehradun city center."
  },
  {
    question: "Do you provide BBQ or bonfire?",
    answer: "Yes, we have a dedicated outdoor fire pit for bonfires and can arrange a BBQ setup upon request for cozy evenings."
  },
  {
    question: "Is parking available?",
    answer: "Yes, we offer secure on-site parking within the gated property for multiple vehicles."
  },
  {
    question: "What is the cancellation policy?",
    answer: "Please refer to our Cancellation & Refund Policy page for detailed terms regarding modifications and cancellations."
  },
  {
    question: "Are quiet hours enforced?",
    answer: "Yes, to respect the serene environment and our neighbors, we enforce quiet hours outdoors after 11 PM. Loud music is not permitted in the lawn area late at night."
  },
  {
    question: "Is outside food and alcohol permitted?",
    answer: "Yes, you are welcome to bring your own food, snacks, and alcohol."
  },
  {
    question: "Is there an on-site caretaker / host?",
    answer: "Yes, a caretaker is available on the property to assist you with check-in, cleaning, and basic requests during your stay."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" aria-labelledby="faq-title" id="faq">
      <div className="faq-container">
        <h2 id="faq-title" className="faq-title">Frequently Asked Questions</h2>
        
        {/* Hidden static Q&A list for AI search engine crawlers (ChatGPT, Perplexity, Claude, Gemini) */}
        <div className="ai-crawler-faq-list" style={{ display: 'none' }} aria-hidden="true">
          {faqData.map((item, idx) => (
            <article key={idx} className="ai-faq-item">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>

        <div className="faq-list" role="region" aria-label="FAQ accordion">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="faq-item">
                <button
                  className="faq-question-btn"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <ChevronDown
                    className={`faq-chevron ${isOpen ? 'open' : ''}`}
                    size={20}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      className="faq-answer-container"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                    >
                      <div className="faq-answer-text">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
