"use client"
import React, { ReactNode, useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Search } from 'lucide-react';

// Brisbane and surrounding locations data
const locations = [
  // Greater Sydney
  { name: "Sydney", slug: "sydney" },
  { name: "Parramatta", slug: "parramatta" },
  { name: "Liverpool", slug: "liverpool" },
  { name: "Blacktown", slug: "blacktown" },
  { name: "Penrith", slug: "penrith" },
  { name: "Campbelltown", slug: "campbelltown" },
  { name: "Camden", slug: "camden" },
  { name: "Oran Park", slug: "oran-park" },
  { name: "Narellan", slug: "narellan" },
  { name: "Glenmore Park", slug: "glenmore-park" },
  { name: "St Marys", slug: "st-marys" },
  { name: "Narellan Vale", slug: "narellan-vale" },

  // Inner West
  { name: "Newtown", slug: "newtown" },
  { name: "Ashfield", slug: "ashfield" },
  { name: "Leichhardt", slug: "leichhardt" },
  { name: "Marrickville", slug: "marrickville" },

  // Eastern Suburbs
  { name: "Bondi", slug: "bondi" },
  { name: "Randwick", slug: "randwick" },
  { name: "Maroubra", slug: "maroubra" },
  { name: "Coogee", slug: "coogee" },

  // Western Sydney
  { name: "Mount Druitt", slug: "mount-druitt" },
  { name: "Rooty Hill", slug: "rooty-hill" },
  { name: "Doonside", slug: "doonside" },
  { name: "Fairfield", slug: "fairfield" },
  { name: "Auburn", slug: "auburn" },
  { name: "Granville", slug: "granville" },
  { name: "Blacktown", slug: "blacktown" },
  { name: "Quakers Hill", slug: "quakers-hill" },
  { name: "Schofields", slug: "schofields" },

  // Hills District
  { name: "Castle Hill", slug: "castle-hill" },
  { name: "Baulkham Hills", slug: "baulkham-hills" },
  { name: "Kellyville", slug: "kellyville" },
  { name: "Rouse Hill", slug: "rouse-hill" },
  { name: "The Ponds", slug: "the-ponds" },

  // South West Sydney
  { name: "Leppington", slug: "leppington" },
  { name: "Edmondson Park", slug: "edmondson-park" },
  { name: "Cecil Hills", slug: "cecil-hills" },
  { name: "Badgerys Creek", slug: "badgerys-creek" },

  // Wollongong / Illawarra
  { name: "Wollongong", slug: "wollongong" },
  { name: "Fairy Meadow", slug: "fairy-meadow" },
  { name: "Shellharbour", slug: "shellharbour" },
  { name: "Dapto", slug: "dapto" },
  { name: "Corrimal", slug: "corrimal" },
  { name: "Figtree", slug: "figtree" },

  // Blue Mountains
  { name: "Katoomba", slug: "katoomba" },
  { name: "Springwood", slug: "springwood" },
  { name: "Blaxland", slug: "blaxland" },
  { name: "Glenbrook", slug: "glenbrook" },
  { name: "Lawson", slug: "lawson" },
];

const groupedLocations = {
  "Greater Sydney": [
    "Sydney", "Parramatta", "Liverpool", "Blacktown", "Penrith", "Campbelltown", "Camden", "Oran Park", "Narellan", "Glenmore Park", "St Marys", "Narellan Vale"
  ],
  "Inner West Sydney": [
    "Newtown", "Ashfield", "Leichhardt", "Marrickville"
  ],
  "Eastern Suburbs": [
    "Bondi", "Randwick", "Maroubra", "Coogee"
  ],
  "Western Sydney": [
    "Mount Druitt", "Rooty Hill", "Doonside", "Fairfield", "Auburn", "Granville", "Quakers Hill", "Schofields"
  ],
  "Hills District": [
    "Castle Hill", "Baulkham Hills", "Kellyville", "Rouse Hill", "The Ponds"
  ],
  "South West Sydney": [
    "Leppington", "Edmondson Park", "Cecil Hills", "Badgerys Creek"
  ],
  "Wollongong & Illawarra": [
    "Wollongong", "Fairy Meadow", "Shellharbour", "Dapto", "Corrimal", "Figtree"
  ],
  "Blue Mountains": [
    "Katoomba", "Springwood", "Blaxland", "Glenbrook", "Lawson"
  ]
};


type Region = "Greater Sydney" | "Inner West Sydney" | "Eastern Suburbs" | "Western Sydney" |  "Hills District" | "Wollongong & Illawarra" | "Blue Mountains";

export default function MobileLocationService() {
  // Use Partial<Record<Region, boolean>> so keys are optional
  const [expandedRegions, setExpandedRegions] = useState<Partial<Record<Region, boolean>>>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'accordion' | 'grid'>('accordion');

  const toggleRegion = (region: Region) => {
    setExpandedRegions(prev => ({
      ...prev,
      [region]: !prev[region],
    }));
  };

  const filteredGroupedLocations = searchTerm
  ? Object.entries(groupedLocations).reduce((acc, [region, cities]) => {
      const regionMatches = region.toLowerCase().includes(searchTerm.toLowerCase());
      const matchedCities = cities.filter(city =>
        city.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (regionMatches || matchedCities.length > 0) {
        acc[region] = regionMatches ? cities : matchedCities;
      }

      return acc;
    }, {} as Record<string, string[]>)
  : groupedLocations;


  type LinkProps = {
    href: string;
    children: ReactNode;
    className?: string;
  };

  const Link = ({ href, children, className }: LinkProps) => (
    <a href={href} className={className}>
      {children}
    </a>
  );

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Header with search and view toggle */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search locations or regions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('accordion')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              viewMode === 'accordion'
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Accordion View
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              viewMode === 'grid'
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Grid View
          </button>
        </div>
      </div>

      {/* Accordion View */}
      {viewMode === 'accordion' && (
        <div className="space-y-3">
          {Object.entries(filteredGroupedLocations).map(([region, cities]) => (
            <div key={region} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleRegion(region as Region)}
                className="w-full px-4 py-4 bg-white hover:bg-gray-50 flex items-center justify-between transition-colors"
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-600 rounded-full mr-3"></div>
                  <h3 className="text-lg font-semibold text-gray-900">{region}</h3>
                  <span className="ml-2 text-sm text-gray-500">({cities.length})</span>
                </div>
                {expandedRegions[region as Region] ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>

              {expandedRegions[region as Region] && (
                <div className="px-4 pb-4 bg-gray-50 border-t border-gray-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                    {cities.map(city => {
                      const location = locations.find(loc => loc.name === city);
                      return location ? (
                        <Link
                          key={location.slug}
                          href={`all-services/${location.slug}`}
                          className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-red-600 hover:text-white border border-gray-200 hover:border-red-600 transition-all duration-200 hover:shadow-sm"
                        >
                          <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                          {location.name}
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Grid View */}
      {viewMode === 'grid' && (
        <div className="space-y-6">
          {Object.entries(filteredGroupedLocations).map(([region, cities]) => (
            <div key={region}>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-red-600 rounded-full mr-3"></div>
                <h3 className="text-lg font-semibold text-gray-900">{region}</h3>
                <span className="ml-2 text-sm text-gray-500">({cities.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {cities.map(city => {
                  const location = locations.find(loc => loc.name === city);
                  return location ? (
                    <Link
                      key={location.slug}
                      href={`/all-services/${location.slug}`}
                      className="flex items-center px-4 py-3 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-red-600 hover:text-white border border-gray-200 hover:border-red-600 transition-all duration-200 hover:shadow-sm"
                    >
                      <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                      {location.name}
                    </Link>
                  ) : null;
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No results message */}
      {Object.keys(filteredGroupedLocations).length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-2">
            <Search className="w-12 h-12 mx-auto" />
          </div>
          <p className="text-gray-500">No locations found matching &rdquo;{searchTerm}&ldquo;</p>
        </div>
      )}
    </div>
  );
}