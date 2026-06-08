import React, { useEffect } from 'react';
import { PinoutDiagram } from '../components/PinoutDiagram';
import { CodeGenerator } from '../components/CodeGenerator';
import { Cpu, Download, Terminal, Package } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export const Tools: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(
        location.hash.replace('#', '')
      );

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Interactive Tools
          </h1>
          <p className="text-xl text-gray-400">
            Visualize hardware configurations and generate boilerplate code
            instantly.
          </p>
        </div>

        {/* Pinout Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-brand-900/30 rounded-lg text-brand-400">
              <Cpu size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">
                Interactive Pinout
              </h2>
              <p className="text-gray-400 text-sm">
                Explore the 49 Digital I/O pins and their multiplexed
                capabilities.
              </p>
            </div>
          </div>

          <PinoutDiagram />
        </section>

        {/* Code Generator Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-blue-900/30 rounded-lg text-blue-400">
              <Terminal size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">
                Code Generator
              </h2>
              <p className="text-gray-400 text-sm">
                Configure peripherals and generate C++ boilerplate code.
              </p>
            </div>
          </div>

          <CodeGenerator />
        </section>

        {/* Third-Party Tools Section */}
        <section id="third-party-tools" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-emerald-900/30 rounded-lg text-emerald-400">
              <Package size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">
                Downloads
              </h2>
              <p className="text-gray-400 text-sm">
                Essential software packages required for the DARKLight SDK
                development environment.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                name: 'SEGGER Embedded Studio',
                description:
                  'Integrated development environment (IDE) used for editing, building, and debugging firmware projects.',
                version: 'Latest',
                link: '#',
              },
              {
                name: 'J-Link Software & Documentation Pack',
                description:
                  'Provides J-Link drivers, flashing utilities, and debugging tools required for programming target devices.',
                version: 'Latest',
                link: '#',
              },
              {
                name: 'USB Driver Package',
                description:
                  'Installs the required USB communication drivers for device detection and programming.',
                version: 'Latest',
                link: '#',
              },
              {
                name: 'CPU Support Packages',
                description:
                  'Adds device definitions, startup files, and toolchain support for supported microcontrollers.',
                version: 'Latest',
                link: '#',
              },
            ].map((tool) => (
              <div
                key={tool.name}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/40 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-white">
                    {tool.name}
                  </h3>

                  <span className="text-xs px-2 py-1 rounded bg-slate-800 text-gray-400">
                    {tool.version}
                  </span>
                </div>

                <p className="text-sm text-gray-400 mb-4">
                  {tool.description}
                </p>

                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-colors"
                >
                  <Download size={16} />
                  Download
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};