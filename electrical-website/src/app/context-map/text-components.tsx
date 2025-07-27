// portableTextComponents.tsx
import type { PortableTextComponents } from '@portabletext/react';

export const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-6 text-lg md:text-xl text-gray-600">{children}</p>,
    strong: ({ children }) => <strong className="mb-6 text-black">{children}</strong>,
    h1: ({ children }) => (
      <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-bold pb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-black text-3xl md:text-4xl font-semibold pb-5">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-black text-2xl md:text-3xl font-semibold pb-4">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-black md:text-2xl font-semibold pb-3">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-black text-lg md:text-xl font-semibold pb-3">
        {children}
      </h5>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="pt-3 text-gray-600 list-disc list-inside space-y-2 mb-6 text-lg md:text-xl">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="text-gray-600 list-decimal list-inside space-y-2 mb-6 text-lg md:text-xl">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="text-gray-600 ml-3 text-lg mb-5 md:text-xl">{children}</li>,
    number: ({ children }) => <li className="text-gray-600 ml-3 text-lg md:text-xl">{children}</li>,
  },
  marks: {
    underline: ({ children }) => <span className="underline">{children}</span>,
    link: ({ children, value }) => {
      const { href } = value;
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 underline hover:text-red-800 transition-colors"
        >
          {children}
        </a>
      );
    },
  }
};
