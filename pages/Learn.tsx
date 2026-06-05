import React, { useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { DOC_DATA } from '../constants';
import { BookOpen, ChevronRight } from 'lucide-react';
import { LEARN_PAGES } from '../learnPages';

export const Learn: React.FC = () => {
  const { hash } = useLocation();
  const { pageSlug } = useParams();

  const currentPage =
    LEARN_PAGES.find(page => page.slug === pageSlug) ??
    LEARN_PAGES[0];

  const pageDocs = DOC_DATA.filter(doc =>
    currentPage.docs.includes(doc.id)
  );

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');

      setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pageSlug]);

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      
      {/* Sidebar */}
      <aside className="lg:w-64 flex-shrink-0">
        <div className="sticky top-24 space-y-8">

          {/* Getting Started */}
          <div>
            <h5 className="font-bold text-white mb-3 flex items-center gap-2">
              <BookOpen size={16} className="text-brand-500" />
              Getting Started
            </h5>

            <ul className="space-y-1 border-l border-gray-800 ml-2">
              <li>
                <Link
                  to="/learn/getting-started"
                  className={`block pl-4 py-1 text-sm border-l-2 transition-colors ${
                    pageSlug === 'getting-started'
                      ? 'border-brand-500 text-brand-400'
                      : 'border-transparent text-gray-400 hover:text-white hover:border-gray-600'
                  }`}
                >
                  Introduction & Terminology
                </Link>
              </li>
              <li>
                <Link
                  to="/learn/installation-setup"
                  className={`block pl-4 py-1 text-sm border-l-2 transition-colors ${
                    pageSlug === 'installation-setup'
                      ? 'border-brand-500 text-brand-400'
                      : 'border-transparent text-gray-400 hover:text-white hover:border-gray-600'
                  }`}
                >
                  Installation & Setup
                </Link>
              </li>
            </ul>
          </div>

          {/* Hardware I/O */}
          <div>
            <h5 className="font-bold text-white mb-3 flex items-center gap-2">
              <BookOpen size={16} className="text-brand-500" />
              Hardware I/O
            </h5>

            <ul className="space-y-1 border-l border-gray-800 ml-2">
              <li>
                <Link
                  to="/learn/digital-io"
                  className={`block pl-4 py-1 text-sm border-l-2 transition-colors ${
                    pageSlug === 'digital-io'
                      ? 'border-brand-500 text-brand-400'
                      : 'border-transparent text-gray-400 hover:text-white hover:border-gray-600'
                  }`}
                >
                  Digital Input / Output
                </Link>
              </li>

              <li>
                <Link
                  to="/learn/analog"
                  className={`block pl-4 py-1 text-sm border-l-2 transition-colors ${
                    pageSlug === 'analog'
                      ? 'border-brand-500 text-brand-400'
                      : 'border-transparent text-gray-400 hover:text-white hover:border-gray-600'
                  }`}
                >
                  Analog Input (ADC)
                </Link>
              </li>

              <li>
                <Link
                  to="/learn/pwm"
                  className={`block pl-4 py-1 text-sm border-l-2 transition-colors ${
                    pageSlug === 'pwm'
                      ? 'border-brand-500 text-brand-400'
                      : 'border-transparent text-gray-400 hover:text-white hover:border-gray-600'
                  }`}
                >
                  Pulse Width Modulation (PWM)
                </Link>
              </li>
            </ul>
          </div>

          {/* Advanced Control */}
          <div>
            <h5 className="font-bold text-white mb-3 flex items-center gap-2">
              <BookOpen size={16} className="text-brand-500" />
              Advanced Control
            </h5>

            <ul className="space-y-1 border-l border-gray-800 ml-2">
              <li>
                <Link
                  to="/learn/interrupts"
                  className={`block pl-4 py-1 text-sm border-l-2 transition-colors ${
                    pageSlug === 'interrupts'
                      ? 'border-brand-500 text-brand-400'
                      : 'border-transparent text-gray-400 hover:text-white hover:border-gray-600'
                  }`}
                >
                  Interrupts & Debouncing
                </Link>
              </li>

              <li>
                <Link
                  to="/learn/ticker"
                  className={`block pl-4 py-1 text-sm border-l-2 transition-colors ${
                    pageSlug === 'ticker'
                      ? 'border-brand-500 text-brand-400'
                      : 'border-transparent text-gray-400 hover:text-white hover:border-gray-600'
                  }`}
                >
                  Task Scheduling (Ticker)
                </Link>
              </li>
            </ul>
          </div>

          {/* Communication */}
          <div>
            <h5 className="font-bold text-white mb-3 flex items-center gap-2">
              <BookOpen size={16} className="text-brand-500" />
              Communication
            </h5>

            <ul className="space-y-1 border-l border-gray-800 ml-2">
              <li>
                <Link
                  to="/learn/comms"
                  className={`block pl-4 py-1 text-sm border-l-2 transition-colors ${
                    pageSlug === 'comms'
                      ? 'border-brand-500 text-brand-400'
                      : 'border-transparent text-gray-400 hover:text-white hover:border-gray-600'
                  }`}
                >
                  Communication (SPI & UART)
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        <div className="max-w-4xl">

          <h1 className="text-4xl font-bold text-white mb-6">
            {currentPage.title}
          </h1>

          <p className="text-xl text-gray-400 mb-12 border-b border-gray-800 pb-8">
            Complete technical reference and tutorials for the DarkLight microcontroller ecosystem.
          </p>

          <div className="space-y-20">
            {pageDocs.map(doc => (
              <section
                key={doc.id}
                id={doc.id}
                className="scroll-mt-24"
              >
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-brand-500 text-sm font-mono uppercase tracking-wider">
                    {doc.category}
                  </span>

                  <ChevronRight
                    size={14}
                    className="text-gray-600"
                  />
                </div>

                <h2 className="text-3xl font-bold text-white mb-6">
                  {doc.title}
                </h2>

                <div className="prose prose-invert prose-brand max-w-none">
                  {doc.content}
                </div>
              </section>
            ))}
          </div>

          <div className="flex justify-between mt-16 border-t border-gray-800 pt-8">
            {currentPage.previous ? (
              <Link
                to={`/learn/${currentPage.previous}`}
                className="px-5 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
              >
                ← Previous
              </Link>
            ) : (
              <div />
            )}

            {currentPage.next && (
              <Link
                to={`/learn/${currentPage.next}`}
                className="px-5 py-3 rounded-lg bg-brand-600 hover:bg-brand-500 text-white transition"
              >
                Next →
              </Link>
            )}
          </div>

        </div>
      </main>
    </div>
  );
};