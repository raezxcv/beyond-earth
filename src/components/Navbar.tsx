import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Search,
  Sparkles,
  Menu,
  X,
  Compass,
  Telescope,
  BookOpen,
  Orbit,
  ArrowUpRight,
} from 'lucide-react';
import { CELESTIAL_OBJECTS } from '../data/celestialObjects';
import { MISSIONS_DATA } from '../data/missionsData';
import { JOURNAL_ARTICLES } from '../data/journalArticles';

interface NavbarProps {
  starfieldEnabled: boolean;
  onToggleStarfield: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  starfieldEnabled,
  onToggleStarfield,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [utcTime, setUtcTime] = useState('2026-11-09 09:00:00 UTC');
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const iso = now.toISOString().replace('T', ' ').slice(0, 19) + ' UTC';
      setUtcTime(iso);
    };
    updateClock();
    const timer = window.setInterval(updateClock, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setSearchOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const trimmed = searchQuery.trim().toLowerCase();
  const matchedObjects = trimmed
    ? CELESTIAL_OBJECTS.filter(
        (obj) =>
          obj.name.toLowerCase().includes(trimmed) ||
          obj.catalogDesignation.toLowerCase().includes(trimmed) ||
          obj.category.toLowerCase().includes(trimmed) ||
          obj.constellationOrSystem.toLowerCase().includes(trimmed)
      ).slice(0, 5)
    : CELESTIAL_OBJECTS.slice(0, 4);

  const matchedMissions = trimmed
    ? MISSIONS_DATA.filter(
        (m) =>
          m.name.toLowerCase().includes(trimmed) ||
          m.agency.toLowerCase().includes(trimmed) ||
          m.targetOrRegime.toLowerCase().includes(trimmed)
      ).slice(0, 3)
    : [];

  const matchedArticles = trimmed
    ? JOURNAL_ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(trimmed) ||
          a.topic.toLowerCase().includes(trimmed) ||
          a.author.toLowerCase().includes(trimmed)
      ).slice(0, 3)
    : [];

  const navItems = [
    { to: '/', label: 'Home', end: true },
    { to: '/explore', label: 'Explore the Universe', end: false },
    { to: '/celestial/saturn', label: 'Celestial Detail', matchPrefix: '/celestial' },
    { to: '/missions', label: 'Missions & Discoveries', end: false },
    { to: '/journal', label: 'The Journal', end: false },
  ];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-amber focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-void"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 w-full bg-void/90 backdrop-blur-md hairline-b">
        {/* Observatory Ephemeris Telemetry Bar */}
        <div className="hidden lg:block hairline-b bg-midnight/60">
          <div className="mx-auto flex max-w-editorial items-center justify-between px-8 py-1.5 text-xs text-regolith">
            <div className="flex items-center gap-6">
              <span className="tabular-data text-silver">
                ISSUE XVII · EPOCH J2026.8
              </span>
              <span>·</span>
              <span className="tabular-data">
                OBSERVATORY EPHEMERIS: {utcTime}
              </span>
              <span>·</span>
              <span className="tabular-data">
                HELIOCENTRIC REF: ICRS / J2000.0
              </span>
            </div>
            <div className="flex items-center gap-5">
              <span className="text-silver">
                14 Verified Celestial Objects · 10 Flagship Missions · 5 Peer-Reviewed Monographs
              </span>
            </div>
          </div>
        </div>

        {/* Main Publication Masthead */}
        <div className="mx-auto flex max-w-editorial items-center justify-between px-6 py-4 lg:px-12">
          <Link
            to="/"
            className="group flex items-center gap-3.5 text-starlight focus-visible:outline-amber"
            aria-label="Beyond Earth — Return to Home Cover"
          >
            <span className="relative flex h-9 w-9 items-center justify-center hairline-box bg-midnight group-hover:border-amber transition-colors">
              <Orbit className="h-4 w-4 text-amber" aria-hidden="true" />
            </span>
            <div className="flex flex-col">
              <span className="font-editorial text-xl tracking-tight text-starlight font-medium leading-none">
                BEYOND EARTH
              </span>
              <span className="tabular-data mt-1 text-[10px] text-regolith">
                ASTRONOMICAL &amp; DEEP-SPACE ARCHIVE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main Publication Navigation" className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isCelestialMatch =
                item.matchPrefix && location.pathname.startsWith(item.matchPrefix);

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => {
                    const active = isActive || isCelestialMatch;
                    return `px-3.5 py-2 text-sm transition-colors ${
                      active
                        ? 'text-amber font-medium bg-stratosphere/70 hairline-box'
                        : 'text-silver hover:text-starlight'
                    }`;
                  }}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Controls: Search & Starfield Toggle */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search celestial objects, missions, and articles"
              className="inline-flex min-h-[38px] items-center gap-2.5 bg-midnight px-3.5 py-1.5 text-xs text-silver hairline-box hover:border-amber hover:text-starlight transition-colors"
            >
              <Search className="h-3.5 w-3.5 text-amber" aria-hidden="true" />
              <span className="hidden sm:inline">Search Archive</span>
              <kbd className="hidden md:inline-block bg-void px-1.5 py-0.5 text-[10px] tabular-data text-regolith hairline-box">
                Ctrl K
              </kbd>
            </button>

            <button
              type="button"
              onClick={onToggleStarfield}
              aria-pressed={starfieldEnabled}
              aria-label={starfieldEnabled ? 'Pause star-field drift' : 'Enable star-field drift'}
              title="Toggle background orbital star-field visualization"
              className={`inline-flex min-h-[38px] items-center gap-2 px-3 py-1.5 text-xs hairline-box transition-colors ${
                starfieldEnabled
                  ? 'bg-midnight text-starlight border-amber/40 hover:border-amber'
                  : 'bg-void text-regolith hover:text-silver'
              }`}
            >
              <Sparkles
                className={`h-3.5 w-3.5 ${starfieldEnabled ? 'text-amber' : 'text-regolith'}`}
                aria-hidden="true"
              />
              <span className="hidden md:inline tabular-data">
                {starfieldEnabled ? 'Sky Drift: On' : 'Sky Drift: Still'}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex xl:hidden min-h-[38px] min-w-[38px] items-center justify-center bg-midnight text-starlight hairline-box hover:border-amber"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Navigation Drawer */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile Navigation"
            className="xl:hidden bg-midnight hairline-t px-6 py-6 space-y-4"
          >
            <div className="grid grid-cols-1 gap-2">
              {navItems.map((item) => {
                const isCelestialMatch =
                  item.matchPrefix && location.pathname.startsWith(item.matchPrefix);
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) => {
                      const active = isActive || isCelestialMatch;
                      return `flex items-center justify-between px-4 py-3 text-base hairline-box ${
                        active
                          ? 'bg-stratosphere text-amber font-medium border-amber/40'
                          : 'bg-void/60 text-starlight hover:bg-stratosphere/50'
                      }`;
                    }}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-4 w-4 text-regolith" aria-hidden="true" />
                  </NavLink>
                );
              })}
            </div>

            <div className="pt-3 hairline-t flex flex-wrap items-center justify-between gap-2 text-xs text-regolith">
              <span className="tabular-data">ISSUE XVII · EPOCH J2026.8</span>
              <span className="tabular-data">{utcTime}</span>
            </div>
          </nav>
        )}
      </header>

      {/* Instant Quick-Search Command Palette (No sluggish entrance animation per animate skill) */}
      {searchOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Search Beyond Earth Archive"
          className="fixed inset-0 z-50 flex items-start justify-center bg-void/90 pt-16 px-4 backdrop-blur-sm"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-2xl bg-midnight hairline-box overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-3.5 hairline-b bg-void">
              <Search className="h-4 w-4 text-amber shrink-0" aria-hidden="true" />
              <label htmlFor="global-archive-search" className="sr-only">
                Search celestial objects, missions, or journal essays
              </label>
              <input
                id="global-archive-search"
                ref={searchInputRef}
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search planets, moons, black holes, missions, or monographs (e.g., Saturn, M87*, JWST, Europa)..."
                className="w-full bg-transparent text-sm text-starlight placeholder:text-regolith focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
                className="px-2 py-1 text-xs tabular-data text-regolith hover:text-starlight hairline-box"
              >
                ESC
              </button>
            </div>

            <div className="max-h-[68vh] overflow-y-auto p-4 space-y-5">
              {/* Celestial Objects Results */}
              <div>
                <div className="flex items-center justify-between mb-2 px-2">
                  <span className="text-xs font-medium text-regolith flex items-center gap-1.5">
                    <Compass className="h-3.5 w-3.5 text-amber" aria-hidden="true" />
                    {trimmed ? 'Matching Celestial Objects' : 'Featured Celestial Specimens'}
                  </span>
                  <Link
                    to="/explore"
                    onClick={() => setSearchOpen(false)}
                    className="text-xs text-amber hover:underline"
                  >
                    View all 14 objects →
                  </Link>
                </div>
                {matchedObjects.length === 0 ? (
                  <p className="px-2 py-2 text-xs text-regolith">
                    No celestial objects matching "{searchQuery}".
                  </p>
                ) : (
                  <div className="grid grid-cols-1 gap-1.5">
                    {matchedObjects.map((obj) => (
                      <button
                        key={obj.id}
                        type="button"
                        onClick={() => {
                          navigate(`/celestial/${obj.id}`);
                          setSearchOpen(false);
                        }}
                        className="flex items-center justify-between w-full px-3 py-2.5 text-left bg-void/60 hover:bg-stratosphere hairline-box transition-colors"
                      >
                        <div>
                          <div className="text-sm font-medium text-starlight">
                            {obj.name}{' '}
                            <span className="tabular-data text-xs text-regolith ml-1.5">
                              {obj.catalogDesignation}
                            </span>
                          </div>
                          <div className="text-xs text-silver mt-0.5">
                            {obj.category} · {obj.distanceDisplay}
                          </div>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-amber shrink-0" aria-hidden="true" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Missions Results */}
              {matchedMissions.length > 0 && (
                <div>
                  <div className="mb-2 px-2 text-xs font-medium text-regolith flex items-center gap-1.5">
                    <Telescope className="h-3.5 w-3.5 text-cyan" aria-hidden="true" />
                    Matching Space Missions &amp; Observatories
                  </div>
                  <div className="grid grid-cols-1 gap-1.5">
                    {matchedMissions.map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => {
                          navigate(`/missions?mission=${m.id}`);
                          setSearchOpen(false);
                        }}
                        className="flex items-center justify-between w-full px-3 py-2.5 text-left bg-void/60 hover:bg-stratosphere hairline-box transition-colors"
                      >
                        <div>
                          <div className="text-sm font-medium text-starlight">{m.name}</div>
                          <div className="text-xs text-silver mt-0.5">
                            {m.agency} · {m.operationalWindow}
                          </div>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-cyan shrink-0" aria-hidden="true" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Journal Results */}
              {matchedArticles.length > 0 && (
                <div>
                  <div className="mb-2 px-2 text-xs font-medium text-regolith flex items-center gap-1.5">
                    <BookOpen className="h-3.5 w-3.5 text-violet-soft" aria-hidden="true" />
                    Matching Journal Monographs
                  </div>
                  <div className="grid grid-cols-1 gap-1.5">
                    {matchedArticles.map((art) => (
                      <button
                        key={art.id}
                        type="button"
                        onClick={() => {
                          navigate(`/journal?article=${art.id}`);
                          setSearchOpen(false);
                        }}
                        className="flex items-center justify-between w-full px-3 py-2.5 text-left bg-void/60 hover:bg-stratosphere hairline-box transition-colors"
                      >
                        <div>
                          <div className="text-sm font-medium text-starlight">{art.title}</div>
                          <div className="text-xs text-silver mt-0.5">
                            {art.topic} · {art.author} ({art.readingTimeMinutes} min read)
                          </div>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-violet-soft shrink-0" aria-hidden="true" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

