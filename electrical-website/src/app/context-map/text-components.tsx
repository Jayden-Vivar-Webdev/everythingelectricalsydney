// portableTextComponents.tsx
import type { PortableTextComponents } from "@portabletext/react";

export const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-6 text-lg md:text-xl text-gray-600">{children}</p>
    ),
    strong: ({ children }) => (
      <strong className="mb-6 text-black">{children}</strong>
    ),
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
      <h4 className="text-black md:text-2xl font-semibold pb-3">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-black text-lg md:text-xl font-semibold pb-3">
        {children}
      </h5>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="py-1 text-gray-600 list-disc list-inside space-y-2 mb-6 text-lg md:text-xl">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="text-gray-600 list-decimal list-inside space-y-2 mb-6 text-lg md:text-xl">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-2 text-lg md:text-xl mb-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-red-600 flex-shrink-0 mt-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="text-gray-600 ml-3 text-lg md:text-xl">{children}</li>
    ),
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
  },
};

export const portableTextComponentsBlog: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="pb-6 text-base md:text-lg text-gray-700 leading-relaxed">
        {children}
      </p>
    ),

    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 pb-6 mt-8 mb-4 leading-tight">
        {children}
      </h1>
    ),

    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 pb-5 mt-8 mb-4 border-b border-gray-200">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 pb-4 mt-6 mb-3">
        {children}
      </h3>
    ),

    h4: ({ children }) => (
      <h4 className="text-lg md:text-xl font-semibold text-gray-800 pb-3 mt-6 mb-2">
        {children}
      </h4>
    ),

    h5: ({ children }) => (
      <h5 className="text-base md:text-lg font-medium text-gray-700 pb-2 mt-4 mb-2">
        {children}
      </h5>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-5 mb-6 space-y-2 text-gray-700">
        {children}
      </ul>
    ),

    number: ({ children }) => (
      <ol className="list-decimal ml-5 mb-6 space-y-2 text-gray-700">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li className="pl-2 leading-relaxed">{children}</li>
    ),
    number: ({ children }) => (
      <li className="pl-2 leading-relaxed">{children}</li>
    ),
  },

  marks: {
    link: ({ children, value }) => {
      const href = value?.href;
      const isExternal = href?.startsWith("http");

      return (
        <a
          href={href}
          className="text-red-600 hover:text-red-800 underline transition-colors duration-200"
          {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
  },
};
