import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen?: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen = false, onToggle }: FAQItemProps) => (
  <div className="border-b border-gray-800">
    <button
      className="w-full py-6 flex justify-between items-center text-left"
      onClick={onToggle}
    >
      <span className="text-white text-lg">{question}</span>
      <span className="text-gray-400 ml-4">
        <svg
          className={`w-6 h-6 transform transition-transform ${
            isOpen ? 'rotate-45' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          )}
        </svg>
      </span>
    </button>
    {isOpen && (
      <div className="pb-6 text-gray-400">
        {answer}
      </div>
    )}
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Why should I trust Auth0 with my users?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      question: "What happens if I stop using Auth0? How do I know my user's data is safe?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "If I surpass the 25,000 users Free Plan do I need to select a Paid Plan with a higher MAU Quota?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      question: "What are the different deployment models?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      question: "What's Auth0's uptime and status?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    },
    {
      question: "How long does my trial last?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
    },
    {
      question: "Do you have any special offer for Startups?",
      answer: (
        <div>
          Yes, Auth0 and our network of partners want to see you succeed! We provide a special plan for Startups that includes 100K monthly external active users, Enterprise Identity Providers, Pro MFA & Password Protection and SSO for Auth0 Dashboard free for a whole year. You can also apply for $5,000 in AWS credits. Check the requirements and{' '}
          <a href="#" className="text-[#635DFF] hover:text-[#8983FF]">
            apply here!
          </a>
        </div>
      )
    },
    {
      question: "How do I get Special Pricing and Services for Nonprofits and Charitable Organizations?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur."
    }
  ];

  return (
    <div className="w-full bg-[#0A1122] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-bold text-white mb-6">
              Frequently asked questions
            </h2>
            <p className="text-gray-400 mb-4">
              Can't find the question you're looking for? Post on our{' '}
              <a href="#" className="text-[#635DFF] hover:text-[#8983FF]">
                community forum
              </a>{' '}
              to receive help from our developer support team and the community.
            </p>
            <p className="text-gray-400">
              For enterprise question, you can{' '}
              <a href="#" className="text-[#635DFF] hover:text-[#8983FF]">
                contact an expert
              </a>
              .
            </p>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="lg:col-span-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection; 