import React from 'react';
import {
  BookOpen,
  Download,
  Package,
  Wrench,
  Cpu,
  FileText,
  Library,
  FolderGit2,
} from 'lucide-react';

export const Downloads: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const DownloadCard = ({
    title,
    description,
    link,
    actionText,
    icon,
  }: {
    title: string;
    description: string;
    link: string;
    actionText: string;
    icon: React.ReactNode;
  }) => (
    <div className="border border-slate-800 overflow-hidden hover:border-brand-500/50 transition-all duration-300 h-full">
      {/* Top Section */}
      <div className="bg-slate-900/50 border-b border-slate-800 h-44 flex items-center justify-center">
        <div className="text-brand-500">{icon}</div>
      </div>

      {/* Bottom Section */}
      <div className="p-6 flex flex-col h-[220px]">
        <h3 className="text-lg font-semibold text-white mb-3">
          {title}
        </h3>

        <p className="text-gray-400 text-sm flex-grow">
          {description}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 text-brand-400 hover:text-brand-300 underline font-medium"
        >
          {actionText}
        </a>
      </div>
    </div>
  );

  const softwareTools = [
    {
      title: 'SEGGER Embedded Studio',
      description:
        "Use the link below to download the latest version of Segger Embedded Studio on Segger's website.",
      actionText: 'Visit SEGGER',
      link: 'https://www.segger.com/downloads/embedded-studio/',
      icon: <Wrench size={72} strokeWidth={1.5} />,
    },
    {
      title: 'J-Link Software Pack',
      description:
        "Use the link below to download the latest version of the J-Link Software Pack on Segger's website.",
      actionText: 'Visit SEGGER',
      link: 'https://www.segger.com/downloads/jlink/',
      icon: <Cpu size={72} strokeWidth={1.5} />,
    },
    {
      title: 'USB Driver Package',
      description:
        'Required USB communication drivers for supported DARKLight hardware.',
      actionText: 'Download',
      link: '#',
      icon: <Download size={72} strokeWidth={1.5} />,
    },
    {
      title: 'CPU Support Package',
      description:
        'Device definitions, startup files and toolchain support packages.',
      actionText: 'Download',
      link: '#',
      icon: <Package size={72} strokeWidth={1.5} />,
    },
  ];

  const libraries = [
    {
      title: 'lib_ws2812b',
      description:
        'WS2812B addressable RGB LED driver library.',
      actionText: 'View Repository',
      link: '#',
      icon: <Library size={72} strokeWidth={1.5} />,
    },
    {
      title: 'lib_apa102',
      description:
        'APA102 LED strip driver library.',
      actionText: 'View Repository',
      link: '#',
      icon: <Library size={72} strokeWidth={1.5} />,
    },
  ];

  const uhuruDownloads = [
    {
      title: 'CPU Support Package',
      description:
        'Official CPU support package for DARKLight Uhuru.',
      actionText: 'Download',
      link: '#',
      icon: <Cpu size={72} strokeWidth={1.5} />,
    },
    {
      title: 'Datasheet',
      description:
        'Hardware specifications and electrical characteristics.',
      actionText: 'View PDF',
      link: '#',
      icon: <FileText size={72} strokeWidth={1.5} />,
    },
    {
      title: 'FreeRTOS Template',
      description:
        'Starter project configured with FreeRTOS.',
      actionText: 'Download ZIP',
      link: '#',
      icon: <FolderGit2 size={72} strokeWidth={1.5} />,
    },
    {
      title: 'EmbOS Template',
      description:
        'Starter project configured with SEGGER EmbOS.',
      actionText: 'Download ZIP',
      link: '#',
      icon: <FolderGit2 size={72} strokeWidth={1.5} />,
    },
    {
      title: 'Baremetal Template',
      description:
        'Minimal firmware template without RTOS.',
      actionText: 'Download ZIP',
      link: '#',
      icon: <FolderGit2 size={72} strokeWidth={1.5} />,
    },
    {
      title: 'Example Projects',
      description:
        'Collection of firmware examples demonstrating peripheral usage.',
      actionText: 'View Project Gallery',
      link: '#',
      icon: <FolderGit2 size={72} strokeWidth={1.5} />,
    },
  ];

  const katanaDownloads = [
    {
      title: 'CPU Support Package',
      description:
        'Official CPU support package for DARKLight Katana.',
      actionText: 'Download',
      link: '#',
      icon: <Cpu size={72} strokeWidth={1.5} />,
    },
    {
      title: 'Datasheet',
      description:
        'Hardware specifications and electrical characteristics.',
      actionText: 'View PDF',
      link: '#',
      icon: <FileText size={72} strokeWidth={1.5} />,
    },
    {
      title: 'FreeRTOS Template',
      description:
        'Starter project configured with FreeRTOS.',
      actionText: 'Download ZIP',
      link: '#',
      icon: <FolderGit2 size={72} strokeWidth={1.5} />,
    },
    {
      title: 'EmbOS Template',
      description:
        'Starter project configured with SEGGER EmbOS.',
      actionText: 'Download ZIP',
      link: '#',
      icon: <FolderGit2 size={72} strokeWidth={1.5} />,
    },
    {
      title: 'Baremetal Template',
      description:
        'Minimal firmware template without RTOS.',
      actionText: 'Download ZIP',
      link: '#',
      icon: <FolderGit2 size={72} strokeWidth={1.5} />,
    },
    {
      title: 'Example Projects',
      description:
        'Collection of firmware examples demonstrating peripheral usage.',
      actionText: 'View Project Gallery',
      link: '#',
      icon: <FolderGit2 size={72} strokeWidth={1.5} />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      {/* Sidebar */}
      <aside className="lg:w-64 flex-shrink-0">
        <div className="sticky top-24 space-y-8">
          <div>
            <h5 className="font-bold text-white mb-3 flex items-center gap-2">
              <BookOpen
                size={16}
                className="text-brand-500"
              />
              Downloads
            </h5>

            <ul className="space-y-1 border-l border-gray-800 ml-2">
              <li>
                <button
                  onClick={() =>
                    scrollToSection('software-tools')
                  }
                  className="w-full text-left pl-4 py-1 text-sm border-l-2 border-transparent text-gray-400 hover:text-white hover:border-gray-600 transition-colors"
                >
                  Software Tools
                </button>
              </li>

              <li>
                <button
                  onClick={() =>
                    scrollToSection('libraries')
                  }
                  className="w-full text-left pl-4 py-1 text-sm border-l-2 border-transparent text-gray-400 hover:text-white hover:border-gray-600 transition-colors"
                >
                  Libraries
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection('uhuru')}
                  className="w-full text-left pl-4 py-1 text-sm border-l-2 border-transparent text-gray-400 hover:text-white hover:border-gray-600 transition-colors"
                >
                  DARKLight Uhuru
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection('katana')}
                  className="w-full text-left pl-4 py-1 text-sm border-l-2 border-transparent text-gray-400 hover:text-white hover:border-gray-600 transition-colors"
                >
                  DARKLight Katana
                </button>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        <div className="max-w-7xl">
          <h1 className="text-4xl font-bold text-white mb-6">
            Downloads
          </h1>

          <p className="text-xl text-gray-400 mb-12 border-b border-gray-800 pb-8">
            Download SDKs, software tools, libraries,
            templates, datasheets and development
            resources for the DARKLight ecosystem.
          </p>

          {/* Software Tools */}
          <section
            id="software-tools"
            className="scroll-mt-24 mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <Wrench className="text-brand-500" />
              <h2 className="text-3xl font-bold text-white">
                Software Tools
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {softwareTools.map((item) => (
                <DownloadCard
                  key={item.title}
                  {...item}
                />
              ))}
            </div>
          </section>

          {/* Libraries */}
          <section
            id="libraries"
            className="scroll-mt-24 mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <Library className="text-brand-500" />
              <h2 className="text-3xl font-bold text-white">
                Libraries
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {libraries.map((item) => (
                <DownloadCard
                  key={item.title}
                  {...item}
                />
              ))}
            </div>
          </section>

          {/* Uhuru */}
          <section
            id="uhuru"
            className="scroll-mt-24 mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <Cpu className="text-brand-500" />
              <h2 className="text-3xl font-bold text-white">
                DARKLight Uhuru
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {uhuruDownloads.map((item) => (
                <DownloadCard
                  key={item.title}
                  {...item}
                />
              ))}
            </div>
          </section>

          {/* Katana */}
          <section
            id="katana"
            className="scroll-mt-24 mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <Cpu className="text-brand-500" />
              <h2 className="text-3xl font-bold text-white">
                DARKLight Katana
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {katanaDownloads.map((item) => (
                <DownloadCard
                  key={item.title}
                  {...item}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Downloads;