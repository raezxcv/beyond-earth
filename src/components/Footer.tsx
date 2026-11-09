import React from 'react';
import { Link } from 'react-router-dom';
import { Orbit, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { CELESTIAL_OBJECTS } from '../data/celestialObjects';

export const Footer: React.FC = () => {
  const featuredObjects = CELESTIAL_OBJECTS.slice(0, 6);

  return (
    <footer className="relative z-10 bg-midnight hairline-t mt-24">
      <div className="mx-auto max-w-editorial px-6 py-16 lg:px-12 lg:py-24">
        {/* Top Editorial Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 pb-16 hairline-b">
          {/* Column 1: Publication Identity & Manifesto */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center hairline-box bg-void">
                <Orbit className="h-4 w-4 text-amber" aria-hidden="true" />
              </span>
              <span className="font-editorial text-xl text-starlight">
                BEYOND EARTH
              </span>
            </div>
            <p className="font-editorial text-2xl text-starlight leading-snug max-w-md">
              We are only beginning to understand what lies beyond our thin blue atmospheric horizon.
            </p>
            <p className="text-sm text-silver leading-relaxed max-w-md">
              An independent astronomical publication and deep-space archive documenting planetary geology, relativistic astrophysics, and robotic reconnaissance across the cosmos. All coordinates referenced to the International Celestial Reference System (ICRS / Epoch J2000.0).
            </p>
          </div>

          {/* Column 2: Archive Architecture (5 Pages) */}
          <div className="sm:col-span-6 lg:col-span-3 space-y-3">
            <h2 className="font-sans text-sm font-semibold text-starlight">
              Publication Architecture
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-silver hover:text-amber transition-colors inline-flex items-center gap-1">
                  Home — Issue XVII Cover
                </Link>
              </li>
              <li>
                <Link to="/explore" className="text-silver hover:text-amber transition-colors inline-flex items-center gap-1">
                  Explore the Universe (14 Objects)
                </Link>
              </li>
              <li>
                <Link to="/celestial/saturn" className="text-silver hover:text-amber transition-colors inline-flex items-center gap-1">
                  Celestial Detail Dossiers
                </Link>
              </li>
              <li>
                <Link to="/missions" className="text-silver hover:text-amber transition-colors inline-flex items-center gap-1">
                  Missions &amp; Discoveries (1977–2035)
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-silver hover:text-amber transition-colors inline-flex items-center gap-1">
                  The Journal — 5 Monographs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Celestial Dossier Index */}
          <div className="sm:col-span-6 lg:col-span-4 space-y-3">
            <h2 className="font-sans text-sm font-semibold text-starlight">
              Selected Celestial Specimens
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
              {featuredObjects.map((obj) => (
                <li key={obj.id}>
                  <Link
                    to={`/celestial/${obj.id}`}
                    className="group flex items-center justify-between bg-void/60 px-3 py-2 hairline-box hover:border-amber transition-colors"
                  >
                    <span className="text-silver group-hover:text-starlight truncate">
                      {obj.name.split(' (')[0]}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-regolith group-hover:text-amber shrink-0" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Scientific Integrity & Visual Provenance Charter */}
        <div className="py-8 hairline-b grid grid-cols-1 gap-6 lg:grid-cols-12 items-start">
          <div className="lg:col-span-4 flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-amber shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="font-sans text-sm font-semibold text-starlight">
                Scientific &amp; Visual Provenance Charter
              </h3>
              <p className="text-xs text-regolith mt-1">
                Strict separation of conceptual art direction and public-domain space telemetry.
              </p>
            </div>
          </div>
          <div className="lg:col-span-8 text-xs text-silver leading-relaxed space-y-2">
            <p>
              In accordance with scientific editorial standards, every visual plate in <em>Beyond Earth</em> carries an explicit provenance classification badge. Twelve original plates (<code>nebula</code>, <code>planetary-surface</code>, <code>saturn-rings</code>, <code>lunar-surface</code>, <code>distant-galaxy</code>, <code>star-forming-region</code>, <code>astronaut-silhouette</code>, <code>spacecraft</code>, <code>eclipse</code>, <code>observatory</code>, <code>earth-from-space</code>, and <code>star-field</code>) are art-directed AI conceptual visualizations created specifically for this issue and are never presented as raw spacecraft camera frames.
            </p>
            <p>
              Four archival reference plates (Curiosity Gale Crater <code>PIA24937</code>, Galileo Europa <code>PIA19048</code>, NuSTAR/JPL Relativistic Accretion Corona <code>PIA16695</code>, and Spitzer/JPL Exoplanet <code>PIA21423</code>) are authentic NASA/JPL-Caltech public-domain datasets credited directly in situ. Physical measurements, distances, and orbital ephemerides are verified against NASA JPL Horizons, the NASA Exoplanet Archive, and peer-reviewed astrophysical literature.
            </p>
          </div>
        </div>

        {/* Designed Full-Width Wordmark Close */}
        <div className="pt-12 flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs tabular-data text-regolith">
            <span>BEYOND EARTH · ISSUE XVII · AUTUMN/WINTER 2026</span>
            <span>EPOCH J2000.0 / ICRS · ISSN 2994-810X (DIGITAL MONOGRAPH)</span>
          </div>
          <div
            aria-hidden="true"
            className="font-editorial text-[11vw] xl:text-[148px] leading-[0.86] tracking-[-0.03em] text-starlight/90 select-none pt-2"
          >
            BEYOND EARTH
          </div>
        </div>
      </div>
    </footer>
  );
};

