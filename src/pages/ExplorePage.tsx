import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Search,
  ArrowUpRight,
  LayoutGrid,
  Table2,
  SlidersHorizontal,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import {
  CELESTIAL_OBJECTS,
  CelestialCategory,
} from '../data/celestialObjects';

const CATEGORIES: ('All' | CelestialCategory)[] = [
  'All',
  'Planet',
  'Moon',
  'Star',
  'Nebula',
  'Galaxy',
  'Black Hole',
];

type SortOrder = 'distance-asc' | 'distance-desc' | 'name-asc';
type ViewMode = 'plates' | 'telemetry';

const CATEGORY_PLURAL_LABELS: Record<'All' | CelestialCategory, string> = {
  All: 'All Specimens',
  Planet: 'Planets',
  Moon: 'Moons',
  Star: 'Stars',
  Nebula: 'Nebulae',
  Galaxy: 'Galaxies',
  'Black Hole': 'Black Holes',
};

export const ExplorePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get('category') as 'All' | CelestialCategory) || 'All';

  const [selectedCategory, setSelectedCategory] = useState<'All' | CelestialCategory>(
    CATEGORIES.includes(initialCategory) ? initialCategory : 'All'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<SortOrder>('distance-asc');
  const [viewMode, setViewMode] = useState<ViewMode>('plates');
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  const handleCategoryChange = (cat: 'All' | CelestialCategory) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: CELESTIAL_OBJECTS.length };
    for (const obj of CELESTIAL_OBJECTS) {
      counts[obj.category] = (counts[obj.category] || 0) + 1;
    }
    return counts;
  }, []);

  const filteredObjects = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return CELESTIAL_OBJECTS.filter((obj) => {
      const matchesCat =
        selectedCategory === 'All' || obj.category === selectedCategory;
      const matchesSearch =
        !q ||
        obj.name.toLowerCase().includes(q) ||
        obj.catalogDesignation.toLowerCase().includes(q) ||
        obj.subtype.toLowerCase().includes(q) ||
        obj.constellationOrSystem.toLowerCase().includes(q) ||
        obj.summary.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    }).sort((a, b) => {
      if (sortOrder === 'distance-asc') {
        return a.distanceLightYears - b.distanceLightYears;
      }
      if (sortOrder === 'distance-desc') {
        return b.distanceLightYears - a.distanceLightYears;
      }
      return a.name.localeCompare(b.name);
    });
  }, [selectedCategory, searchQuery, sortOrder]);

  const resetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSortOrder('distance-asc');
    searchParams.delete('category');
    setSearchParams(searchParams, { replace: true });
  };

  // Ordered objects for the Logarithmic Distance Ladder
  const distanceLadderObjects = useMemo(
    () =>
      [...CELESTIAL_OBJECTS].sort(
        (a, b) => a.distanceLightYears - b.distanceLightYears
      ),
    []
  );

  return (
    <div className="relative z-10 animate-editorial-enter">
      {/* SECTION 1: SURVEY HEADER & LOGARITHMIC COSMIC DISTANCE LADDER */}
      <section className="mx-auto max-w-editorial px-6 pt-10 pb-12 lg:px-12 lg:pt-14 lg:pb-16 hairline-b">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-end">
          <div className="lg:col-span-8 space-y-3">
            <div className="tabular-data text-xs text-amber">
              ICRS / J2000.0 CELESTIAL SURVEY · 14 VERIFIED SPECIMENS
            </div>
            <h1 className="font-editorial text-4xl sm:text-5xl text-starlight leading-tight">
              Explore the Universe
            </h1>
            <p className="text-base text-silver leading-relaxed max-w-2xl">
              An indexed astronomical catalog spanning fifteen orders of magnitude in cosmic distance—from the Permanently Shadowed Craters of the Lunar South Pole (1.28 light-seconds) to the relativistic shadow of M87* in the Virgo Cluster (53.5 million light-years).
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-2 text-xs tabular-data text-regolith">
            <span>EPOCH: J2026.8 CALIBRATED</span>
            <span>SPECTRAL BANDS: RADIO TO X-RAY</span>
            <span className="text-silver">
              SHOWING {filteredObjects.length} OF {CELESTIAL_OBJECTS.length} OBJECTS
            </span>
          </div>
        </div>

        {/* Interactive Logarithmic Cosmic Distance Scale Bar */}
        <div className="mt-10 bg-midnight p-5 sm:p-6 hairline-box space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-starlight">
              Logarithmic Cosmic Distance Ladder (log₁₀ Light-Years from Geocenter)
            </span>
            <span className="tabular-data text-regolith">
              Select any node to preview coordinates or open its dossier
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-7 lg:grid-cols-14 gap-1.5 pt-1">
            {distanceLadderObjects.map((obj, index) => {
              const isHighlighted = highlightedId === obj.id;
              const isFilteredIn = filteredObjects.some((f) => f.id === obj.id);
              return (
                <button
                  key={obj.id}
                  type="button"
                  onClick={() =>
                    setHighlightedId(isHighlighted ? null : obj.id)
                  }
                  className={`p-2.5 text-left transition-colors hairline-box flex flex-col justify-between min-h-[76px] ${
                    isHighlighted
                      ? 'bg-stratosphere border-amber text-amber'
                      : isFilteredIn
                      ? 'bg-void/70 text-starlight hover:border-silver/40'
                      : 'bg-void/25 text-regolith opacity-45'
                  }`}
                >
                  <span className="tabular-data text-[10px] text-regolith">
                    #{String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xs font-medium leading-tight truncate block mt-1">
                    {obj.name.split(' (')[0]}
                  </span>
                  <span className="tabular-data text-[10px] text-amber truncate block mt-1">
                    {obj.lightTravelTime
                      .replace(' years', ' yr')
                      .replace(' million', 'M')
                      .replace(' seconds', 's')}
                  </span>
                </button>
              );
            })}
          </div>

          {highlightedId && (() => {
            const sel = CELESTIAL_OBJECTS.find((o) => o.id === highlightedId);
            if (!sel) return null;
            return (
              <div className="bg-void p-4 hairline-box flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-starlight text-sm">{sel.name}</span>
                    <span className="tabular-data text-amber">{sel.catalogDesignation}</span>
                    <span className="text-regolith">·</span>
                    <span className="text-silver">{sel.category}</span>
                  </div>
                  <p className="text-silver max-w-3xl">{sel.summary}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <Link
                    to={`/celestial/${sel.id}`}
                    className="inline-flex items-center gap-1.5 bg-amber px-4 py-2 text-void font-semibold hover:bg-amber-bright transition-colors"
                  >
                    <span>Open Dossier</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* SECTION 2: FILTER, SEARCH & VIEW CONTROLS */}
      <section className="sticky top-[71px] z-30 bg-void/95 backdrop-blur-md hairline-b">
        <div className="mx-auto max-w-editorial px-6 py-4 lg:px-12 flex flex-col gap-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div
              role="group"
              aria-label="Filter celestial objects by category"
              className="flex flex-wrap items-center gap-1.5"
            >
              {CATEGORIES.map((category) => {
                const active = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategoryChange(category)}
                    aria-pressed={active}
                    className={`min-h-[36px] px-3.5 py-1.5 text-xs transition-colors hairline-box inline-flex items-center gap-2 ${
                      active
                        ? 'bg-amber text-void font-semibold border-amber'
                        : 'bg-midnight text-silver hover:text-starlight hover:border-silver/30'
                    }`}
                  >
                    <span>{CATEGORY_PLURAL_LABELS[category]}</span>
                    <span
                      className={`tabular-data text-[11px] px-1.5 py-0.2 ${
                        active ? 'bg-void/20 text-void' : 'bg-void text-regolith'
                      }`}
                    >
                      {categoryCounts[category] || 0}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search, Sort & View Mode Controls */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Search Box */}
              <div className="relative flex-1 sm:flex-initial sm:w-64">
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-regolith"
                  aria-hidden="true"
                />
                <label htmlFor="catalog-search-input" className="sr-only">
                  Search celestial objects
                </label>
                <input
                  id="catalog-search-input"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by name, NGC/Messier, system..."
                  className="min-h-[36px] w-full bg-midnight pl-9 pr-3 py-1.5 text-xs text-starlight placeholder:text-regolith hairline-box focus:border-amber focus:outline-none"
                />
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2 bg-midnight px-3 min-h-[36px] hairline-box">
                <SlidersHorizontal className="h-3.5 w-3.5 text-amber" aria-hidden="true" />
                <label htmlFor="catalog-sort-select" className="sr-only">
                  Sort celestial objects
                </label>
                <select
                  id="catalog-sort-select"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as SortOrder)}
                  className="bg-midnight text-xs text-starlight focus:outline-none py-1.5"
                >
                  <option value="distance-asc">Sort: Nearest to Earth First</option>
                  <option value="distance-desc">Sort: Farthest Deep-Space First</option>
                  <option value="name-asc">Sort: Designation (A–Z)</option>
                </select>
              </div>

              {/* View Mode Switcher */}
              <div
                role="group"
                aria-label="Catalog display mode"
                className="inline-flex hairline-box bg-midnight"
              >
                <button
                  type="button"
                  onClick={() => setViewMode('plates')}
                  aria-pressed={viewMode === 'plates'}
                  className={`min-h-[36px] px-3 py-1.5 text-xs inline-flex items-center gap-1.5 ${
                    viewMode === 'plates'
                      ? 'bg-stratosphere text-amber font-medium'
                      : 'text-regolith hover:text-starlight'
                  }`}
                >
                  <LayoutGrid className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Plates</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('telemetry')}
                  aria-pressed={viewMode === 'telemetry'}
                  className={`min-h-[36px] px-3 py-1.5 text-xs inline-flex items-center gap-1.5 border-l border-silver/15 ${
                    viewMode === 'telemetry'
                      ? 'bg-stratosphere text-amber font-medium'
                      : 'text-regolith hover:text-starlight'
                  }`}
                >
                  <Table2 className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Telemetry</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CATALOG RESULTS */}
      <section className="mx-auto max-w-editorial px-6 py-12 lg:px-12 lg:py-16">
        {filteredObjects.length === 0 ? (
          <div className="bg-midnight p-12 hairline-box text-center max-w-xl mx-auto space-y-4">
            <p className="font-editorial text-2xl text-starlight">
              No Celestial Specimens Match Your Current Filter
            </p>
            <p className="text-sm text-silver">
              No objects matched category <strong>{selectedCategory}</strong> and query{' '}
              <strong>“{searchQuery}”</strong>. Try clearing your search filter or viewing all 14 celestial objects.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-2 bg-amber px-5 py-2.5 text-xs font-semibold text-void hover:bg-amber-bright transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Reset All Catalog Filters</span>
            </button>
          </div>
        ) : viewMode === 'plates' ? (
          /* EDITORIAL SPECIMEN PLATES VIEW (Alternating Architectural Pairs & Rows) */
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredObjects.map((obj) => {
              const isAuthentic =
                obj.imageProvenance.toLowerCase().includes('authentic') ||
                obj.imageProvenance.toLowerCase().includes('public domain');

              return (
                <article
                  key={obj.id}
                  className="bg-midnight hairline-box flex flex-col justify-between overflow-hidden group hover:border-silver/35 transition-colors"
                >
                  <div>
                    {/* Image Container */}
                    <Link
                      to={`/celestial/${obj.id}`}
                      className="relative block aspect-[16/10] w-full overflow-hidden bg-void"
                    >
                      <img
                        src={obj.image}
                        alt={obj.imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover plate-zoom"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-void/90 px-2.5 py-1 text-[11px] tabular-data text-amber hairline-box">
                        <span>{obj.category.toUpperCase()}</span>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-void/90 px-2.5 py-1 text-[10px] tabular-data text-silver hairline-box">
                        {obj.lightTravelTime}
                      </div>
                    </Link>

                    {/* Body */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between gap-2 text-xs tabular-data text-regolith">
                        <span className="truncate">{obj.catalogDesignation}</span>
                        <span className="shrink-0">{obj.ra.split(' ')[0]} {obj.dec.split(' ')[0]}</span>
                      </div>

                      <h2 className="font-editorial text-2xl text-starlight leading-snug">
                        <Link
                          to={`/celestial/${obj.id}`}
                          className="hover:text-amber transition-colors"
                        >
                          {obj.name}
                        </Link>
                      </h2>

                      <p className="text-xs font-medium text-violet-soft">
                        {obj.subtype} · {obj.constellationOrSystem}
                      </p>

                      <p className="text-xs sm:text-sm text-silver leading-relaxed line-clamp-3">
                        {obj.summary}
                      </p>
                    </div>
                  </div>

                  {/* Technical Footer */}
                  <div className="px-6 py-4 bg-void/65 hairline-t space-y-3 text-xs">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-[11px] text-regolith block">Distance</span>
                        <span className="tabular-data text-starlight font-medium truncate block">
                          {obj.distanceDisplay.split(' (')[0]}
                        </span>
                      </div>
                      <div>
                        <span className="text-[11px] text-regolith block">Radius / Scale</span>
                        <span className="tabular-data text-silver truncate block">
                          {obj.measurements.radiusOrSpan.split(' ·')[0]}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 hairline-t flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1 text-[11px] text-regolith truncate">
                        <Sparkles
                          className={`h-3 w-3 shrink-0 ${
                            isAuthentic ? 'text-cyan' : 'text-amber'
                          }`}
                          aria-hidden="true"
                        />
                        <span className="truncate">
                          {isAuthentic ? 'NASA/JPL Public Domain Plate' : 'AI Conceptual Plate'}
                        </span>
                      </span>

                      <Link
                        to={`/celestial/${obj.id}`}
                        className="inline-flex items-center gap-1 text-amber font-medium hover:underline shrink-0"
                      >
                        <span>Inspect Dossier</span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* OBSERVATORY TELEMETRY TABLE VIEW */
          <div className="bg-midnight hairline-box overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="hairline-b bg-void/80 text-regolith tabular-data">
                  <th className="py-3.5 px-4 font-medium">SPECIMEN / DESIGNATION</th>
                  <th className="py-3.5 px-4 font-medium">CLASS</th>
                  <th className="py-3.5 px-4 font-medium">RA / DEC (J2000)</th>
                  <th className="py-3.5 px-4 font-medium">DISTANCE</th>
                  <th className="py-3.5 px-4 font-medium">LIGHT-TIME</th>
                  <th className="py-3.5 px-4 font-medium">MASS</th>
                  <th className="py-3.5 px-4 font-medium text-right">DOSSIER</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-silver/10">
                {filteredObjects.map((obj) => (
                  <tr
                    key={obj.id}
                    className="hover:bg-stratosphere/50 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <Link
                        to={`/celestial/${obj.id}`}
                        className="font-editorial text-base text-starlight hover:text-amber font-medium block"
                      >
                        {obj.name}
                      </Link>
                      <span className="tabular-data text-[11px] text-regolith">
                        {obj.catalogDesignation}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-block bg-void px-2 py-0.5 tabular-data text-amber hairline-box">
                        {obj.category}
                      </span>
                    </td>
                    <td className="py-4 px-4 tabular-data text-silver">
                      <div>{obj.ra}</div>
                      <div className="text-regolith">{obj.dec}</div>
                    </td>
                    <td className="py-4 px-4 tabular-data text-starlight">
                      {obj.distanceDisplay.split(' (')[0]}
                    </td>
                    <td className="py-4 px-4 tabular-data text-amber">
                      {obj.lightTravelTime}
                    </td>
                    <td className="py-4 px-4 tabular-data text-silver">
                      {obj.measurements.mass.split(' (')[0]}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <Link
                        to={`/celestial/${obj.id}`}
                        className="inline-flex items-center gap-1 bg-void px-3 py-1.5 text-starlight hairline-box hover:border-amber hover:text-amber transition-colors"
                      >
                        <span>Open</span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
};
