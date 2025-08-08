import Link from "next/link";
import Image from "next/image";
import { client } from "@/app/sanity/client";
import { urlFor } from "@/app/sanity/imagebuilder";
import type { SanityDocument } from "next-sanity";

const POSTS_PER_PAGE = 9;

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)]|order(publishedAt desc)[$start...$end]{
  _id,
  title,
  slug,
  publishedAt,
  image,
}`;

const TOTAL_POSTS_QUERY = `count(*[_type == "post" && defined(slug.current)])`;

const options = { next: { revalidate: 30 } };

export const metadata = {
  title: 'Everything Electrical Sydney Blog — Electrical Tips & Industry Insights',
  description:
    'Stay informed with expert electrical tips, safety advice, and industry updates from Everything Electrical Sydney. Helping homeowners, strata managers, and businesses across Sydney.',
  alternates: {
    canonical: 'https://everythingelectricalsydney.com.au/blog',
  },
  openGraph: {
    url: 'https://everythingelectricalsydney.com.au/blog',
    title: 'Everything Electrical Sydney Blog — Electrical Tips & Industry Insights',
    description:
      'Stay informed with expert electrical tips, safety advice, and industry updates from Everything Electrical Sydney. Helping homeowners, strata managers, and businesses across Sydney.',
    images: [
      {
        url: 'https://everythingelectricalsydney.com.au/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Everything Electrical Sydney - Electrical Tips and Industry Insights',
        type: 'image/png',
      },
    ],
    siteName: 'Everything Electrical Sydney',
  },
  keywords: [
    'Sydney electrician blog',
    'electrical safety tips',
    'strata electrical advice',
    'residential electrical services Sydney',
    'commercial electrician Sydney',
    'Everything Electrical Sydney blog',
  ],
  authors: [{ name: 'Everything Electrical Sydney' }],
};

interface PageProps {
  searchParams?: Promise<{ page?: string }>;
}


export default async function IndexPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const currentPage = parseInt(params?.page ?? '1', 10);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const [posts, totalPosts] = await Promise.all([
    client.fetch<SanityDocument[]>(POSTS_QUERY, { start, end }, options),
    client.fetch<number>(TOTAL_POSTS_QUERY, {}, options)
  ]);

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const hasNextPage = currentPage < totalPages;
  const hasPrevPage = currentPage > 1;
  
  
  return (
    
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full text-red-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
            Industry Insights & Expert Knowledge
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Everything Electrical Sydney
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-slate-300 mt-2">
              Professional Insights & Updates
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with expert electrical advice, safety protocols, and industry developments from Sydney&apos;s trusted electrical professionals.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-8 rounded-full"></div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Latest Articles & Updates
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive electrical guidance for homeowners, strata managers, and businesses across Sydney.
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => {
              const imageUrl = post.image ? urlFor(post.image).width(800).height(600).url() : null;
              const date = new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              });

              return (
                <article 
                  key={post._id} 
                  className="group h-full flex flex-col"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="flex-1 flex flex-col bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300/60 hover:-translate-y-1">
                    {/* Image Container */}
                    {imageUrl && (
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                        <Image
                          src={imageUrl}
                          alt={post.title}
                          width={800}
                          height={600}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        />
                        {post.category && (
                          <div className="absolute top-4 left-4 z-20">
                            <span className="inline-flex items-center px-3 py-1.5 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-semibold rounded-full border border-white/20 shadow-sm">
                              {post.category}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="p-6 flex flex-col h-1/2">
                      {/* Date */}
                      <div className="flex items-center text-sm text-slate-500 mb-3">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <time dateTime={post.publishedAt} className="font-medium">
                          {date}
                        </time>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-slate-700 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      {/* CTA */}
                      <Link 
                        href={`/blog/${post.slug.current}`}
                        className="mt-auto inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group/cta text-sm"
                      >
                        <span>Read Full Article</span>
                        <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/cta:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16" id="posts">
              <PaginationComponent 
                currentPage={currentPage}
                totalPages={totalPages}
                hasNextPage={hasNextPage}
                hasPrevPage={hasPrevPage}
              />
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA Section */}
      {/* <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Stay Informed with Industry Updates
          </h3>
          <p className="text-xl text-slate-300 mb-8">
            Get the latest electrical safety tips and industry insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl border border-slate-600 bg-slate-800/50 text-white placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
            />
            <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}

// Pagination Component
function PaginationComponent({ 
  currentPage, 
  totalPages, 
  hasNextPage, 
  hasPrevPage 
}: {
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}) {
  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      // Show ellipsis or second page
      if (currentPage > 3) {
        pages.push('ellipsis-left');
      } else {
        pages.push(2);
      }
      
      // Show current page and neighbors
      const start = Math.max(2, Math.min(currentPage - 1, totalPages - 3));
      const end = Math.min(totalPages - 1, Math.max(currentPage + 1, 3));
      
      for (let i = start; i <= end; i++) {
        if (i !== 1 && i !== totalPages) {
          pages.push(i);
        }
      }
      
      // Show ellipsis or second last page
      if (currentPage < totalPages - 2) {
        pages.push('ellipsis-right');
      } else if (totalPages > 3) {
        pages.push(totalPages - 1);
      }
      
      // Always show last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Page Info */}
      <div className="text-sm text-slate-600">
        Page <span className="font-semibold text-slate-900">{currentPage}</span> of{' '}
        <span className="font-semibold text-slate-900">{totalPages}</span>
      </div>

      {/* Pagination Controls */}
      <nav className="flex items-center space-x-1 sm:space-x-2" aria-label="Pagination">
        {/* Previous Button */}
        <Link
          href={hasPrevPage ? `?page=${currentPage - 1}#posts` : '#posts'}
          scroll={false}
          className={`inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
            hasPrevPage
              ? 'text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400'
              : 'text-slate-400 bg-slate-50 border border-slate-200 cursor-not-allowed'
          }`}
          aria-disabled={!hasPrevPage}
        >
          <svg className="w-4 h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="hidden sm:inline">Previous</span>
        </Link>

        {/* Page Numbers */}
        <div className="flex items-center space-x-1">
          {pageNumbers.map((page, index) => {
            if (page === 'ellipsis-left' || page === 'ellipsis-right') {
              return (
                <span key={`ellipsis-${index}`} className="px-2.5 py-1 text-slate-500">
                  ...
                </span>
              );
            }

            const isCurrentPage = page === currentPage;
            
            return (
              <Link
                key={page}
                href={`?page=${page}#posts`}
                scroll={false}
                className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isCurrentPage
                    ? 'text-white bg-gradient-to-r from-red-600 to-red-700 shadow-md'
                    : 'text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400'
                }`}
                aria-current={isCurrentPage ? 'page' : undefined}
              >
                {page}
              </Link>
            );
          })}
        </div>

        {/* Next Button */}
        <Link
          href={hasNextPage ? `?page=${currentPage + 1}#posts` : '#posts'}
          scroll={false}
          className={`inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
            hasNextPage
              ? 'text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400'
              : 'text-slate-400 bg-slate-50 border border-slate-200 cursor-not-allowed'
          }`}
          aria-disabled={!hasNextPage}
        >
          <span className="hidden sm:inline">Next</span>
          <svg className="w-4 h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </nav>
    </div>
  );
}