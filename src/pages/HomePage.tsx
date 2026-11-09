import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Compass,
  Telescope,
  BookOpen,
  Maximize2,
  Clock,
  Sparkles,
} from 'lucide-react';
import { CELESTIAL_OBJECTS, GalleryPlate } from '../data/celestialObjects';
import { ASTRONOMICAL_EVENTS } from '../data/missionsData';
import { JOURNAL_ARTICLES } from '../data/journalArticles';
import { ImageLightbox } from '../components/ImageLightbox';

interface HorizonStep {
  id: string;
  label: string;
  objectName: string;
  objectId: string;
  lightTime: string;
  distanceKmOrLy: string;
  lookbackContext: string;
  coordinates: string;
}

const HORIZON_STEPS: HorizonStep[] = [
  {
    id: 'luna',
    label: '1.28 Light-Seconds',
    objectName: 'Luna (Shackleton South Pole)',
    objectId: 'lunar-south-pole',
    lightTime: '1.282 seconds',
    distanceKmOrLy: '384,400 km (0.00257 AU)',
    lookbackContext:
      'Photons arriving now left the lunar south polar crater rims just over one heartbeat ago.',
    coordinates: '89.9°S 0.0°E · Sol-IIIa',
  },
  {
    id: 'saturn',
    label: '1.32 Light-Hours',
    objectName: 'Saturn & Main Ring System',
    objectId: 'saturn',
    lightTime: '1 hr 19 min 24 sec',
    distanceKmOrLy: '1.427 × 10⁹ km (9.58 AU)',
    lookbackContext:
      'Sunlight reflected off Saturn’s water-ice rings travels eighty minutes across the interplanetary vacuum before reaching Earth.',
    coordinates: 'RA 23h 14m · Dec −07° 11′',
  },
  {
    id: 'proxima',
    label: '4.25 Light-Years',
    objectName: 'Proxima Centauri b',
    objectId: 'proxima-b',
    lightTime: '4 years 89 days',
    distanceKmOrLy: '4.2465 ly (1.302 parsecs)',
    lookbackContext:
      'At Voyager 1’s interstellar speed of 17 km/s, reaching our nearest exoplanetary neighbor would require 74,800 human years.',
    coordinates: 'RA 14h 29m · Dec −62° 40′',
  },
  {
    id: 'carina',
    label: '8,500 Light-Years',
    objectName: 'Carina Nebula (NGC 3372)',
    objectId: 'carina-nebula',
    lightTime: '8,500 years',
    distanceKmOrLy: '8,500 ly (2.6 kiloparsecs)',
    lookbackContext:
      'Infrared photons captured tonight departed Carina’s molecular hydrogen cliffs during Earth’s Neolithic agricultural revolution (~6500 BCE).',
    coordinates: 'RA 10h 45m · Dec −59° 52′',
  },
  {
    id: 'andromeda',
    label: '2.54M Light-Years',
    objectName: 'Andromeda Galaxy (Messier 31)',
    objectId: 'andromeda-galaxy',
    lightTime: '2,537,000 years',
    distanceKmOrLy: '2.537 × 10⁶ ly (778 kpc)',
    lookbackContext:
      'Starlight from M31’s spiral arms began its intergalactic crossing at the dawn of the Pleistocene epoch, when early Homo habilis walked East Africa.',
    coordinates: 'RA 00h 42m · Dec +41° 16′',
  },
  {
    id: 'm87',
    label: '53.5M Light-Years',
    objectName: 'M87* Supermassive Black Hole',
    objectId: 'm87-star',
    lightTime: '53,500,000 years',
    distanceKmOrLy: '5.35 × 10⁷ ly (16.4 Mpc)',
    lookbackContext:
      'Millimeter synchrotron waves from the photon ring of M87* left the Virgo Cluster during the Early Eocene Climatic Optimum, 12 million years after the dinosaurs.',
    coordinates: 'RA 12h 30m · Dec +12° 23′',
  },
];

export const HomePage: React.FC = () => {
  const [selectedHorizonIndex, setSelectedHorizonIndex] = useState(3); // Default Carina 8,500 ly
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const activeHorizon = HORIZON_STEPS[selectedHorizonIndex];
  const featuredObjects = CELESTIAL_OBJECTS.filter((o) => o.featured);

  const heroPlates: GalleryPlate[] = [
    {
      src: '/images/nebula.png',
      title: 'Carina Nebula (NGC 3324 / NGC 3372) — Ionization Cliffs',
      caption:
        'Towering pillars of cold molecular hydrogen gas eroded by extreme ultraviolet radiation from massive O-type stars in the Carina-Sagittarius spiral arm.',
      provenance:
        'Original AI-Generated Conceptual Visualization · Inspired by JWST NIRCam/MIRI infrared spectroscopy',
      wavelengthBasis: 'Near/Mid-Infrared Conceptual Palette ([Fe II], H₂, PAH)',
    },
    {
      src: '/images/eclipse.png',
      title: 'Solar Corona & Magnetic Streamers During Totality',
      caption:
        'High-dynamic-range coronal architecture revealed during total lunar occultation of the solar photosphere.',
      provenance:
        'Original AI-Generated Conceptual Visualization · 600mm Apochromatic Solar Refractor Study',
      wavelengthBasis: 'White-Light Thomson-Scattered Corona & Hα Chromosphere',
    },
    {
      src: '/images/earth-from-space.png',
      title: 'Earth’s Atmospheric Limb at Orbital Sunrise',
      caption:
        'Viewed edge-on from low-Earth orbit, the breathable troposphere and blue stratospheric airglow form a razor-thin sanctuary against the cosmic void.',
      provenance:
        'Original AI-Generated Conceptual Visualization · Low-Earth Orbit Limb Study',
      wavelengthBasis: 'True-Color Photopic Optical (400–700 nm)',
    },
  ];

  return (
    <div className="relative z-10 animate-editorial-enter">
      {/* SECTION 1: IMMERSIVE ASYMMETRIC COVER HERO */}
      <section className="relative mx-auto max-w-editorial px-6 pt-8 pb-20 lg:px-12 lg:pt-14 lg:pb-28 hairline-b">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
          {/* Left 7 Columns: Editorial Headline, Thesis & Live Lookback Dial */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-xs tabular-data text-silver">
                <span className="bg-stratosphere px-2.5 py-1 text-amber hairline-box">
                  ISSUE XVII · AUTUMN/WINTER 2026
                </span>
                <span>DEEP-FIELD ASTROPHYSICS &amp; PLANETARY RECONNAISSANCE</span>
              </div>

              <h1 className="font-editorial text-4xl sm:text-5xl xl:text-[62px] font-normal tracking-[-0.025em] text-starlight leading-[1.04]">
                We Are Only Beginning to Understand What Lies Beyond
              </h1>

              <p className="text-base sm:text-lg text-silver leading-relaxed max-w-2xl">
                Every telescope is a time machine. Whether analyzing six-micron infrared starlight from galaxies born 290 million years after the Big Bang or sampling hydrothermal water plumes erupting from icy outer moons, modern astronomy reveals a cosmos far more dynamic than human intuition ever imagined.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/explore"
                  className="inline-flex min-h-[46px] items-center gap-2.5 bg-amber px-6 py-3 text-sm font-semibold text-void hover:bg-amber-bright transition-colors"
                >
                  <Compass className="h-4 w-4" aria-hidden="true" />
                  <span>Explore Celestial Catalog</span>
                </Link>
                <Link
                  to="/journal"
                  className="inline-flex min-h-[46px] items-center gap-2.5 bg-midnight px-6 py-3 text-sm font-medium text-starlight hairline-box hover:border-amber transition-colors"
                >
                  <BookOpen className="h-4 w-4 text-amber" aria-hidden="true" />
                  <span>Read Issue XVII Journal</span>
                </Link>
              </div>
            </div>

            {/* Interactive Live Thing: Cosmic Lookback & Light-Time Horizon Selector */}
            <div className="bg-midnight/90 p-5 sm:p-6 hairline-box space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 hairline-b pb-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-amber" aria-hidden="true" />
                  <h2 className="font-sans text-sm font-semibold text-starlight">
                    Interactive Light-Time &amp; Lookback Horizon
                  </h2>
                </div>
                <span className="tabular-data text-xs text-amber">
                  c = 299,792.458 km/s
                </span>
              </div>

              {/* Horizon Step Buttons */}
              <div
                role="group"
                aria-label="Select cosmic distance horizon"
                className="grid grid-cols-2 sm:grid-cols-3 gap-2"
              >
                {HORIZON_STEPS.map((step, idx) => {
                  const isSelected = idx === selectedHorizonIndex;
                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => setSelectedHorizonIndex(idx)}
                      aria-pressed={isSelected}
                      className={`px-3 py-2 text-left text-xs transition-colors hairline-box ${
                        isSelected
                          ? 'bg-stratosphere text-amber border-amber font-medium'
                          : 'bg-void/60 text-silver hover:text-starlight'
                      }`}
                    >
                      <span className="tabular-data block text-[11px]">{step.label}</span>
                      <span className="block truncate text-starlight/90 mt-0.5">
                        {step.objectName.split(' (')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Output Readout for Selected Horizon */}
              <div className="bg-void/80 p-4 hairline-box grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                <div className="sm:col-span-8 space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2 text-xs tabular-data text-regolith">
                    <span className="text-starlight font-medium">{activeHorizon.objectName}</span>
                    <span>·</span>
                    <span>{activeHorizon.coordinates}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-silver leading-relaxed">
                    {activeHorizon.lookbackContext}
                  </p>
                </div>
                <div className="sm:col-span-4 sm:border-l sm:border-silver/15 sm:pl-4 flex flex-col justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-regolith block">Light-Travel Time</span>
                    <span className="tabular-data text-sm font-medium text-amber">
                      {activeHorizon.lightTime}
                    </span>
                  </div>
                  <Link
                    to={`/celestial/${activeHorizon.objectId}`}
                    className="inline-flex items-center gap-1 text-xs text-starlight hover:text-amber transition-colors font-medium"
                  >
                    <span>Open Object Dossier</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-amber" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Cover Astronomical Plate with Ephemeris Overlay */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="group relative bg-midnight hairline-box overflow-hidden">
              <div className="aspect-[16/11] sm:aspect-[16/10] lg:aspect-[4/4.3] w-full overflow-hidden bg-void">
                <img
                  src="/images/nebula.png"
                  alt="Towering pillars of molecular hydrogen gas and cosmic dust in the Carina Nebula illuminated by young massive stars"
                  className="h-full w-full object-cover plate-zoom"
                />
              </div>

              {/* Subtle bottom gradient scrim for caption legibility */}
              <div className="bg-gradient-to-t from-void via-void/85 to-transparent p-5 pt-10 -mt-12 relative z-10 space-y-2">
                <div className="flex items-center justify-between gap-2 text-xs tabular-data">
                  <span className="text-amber">COVER PLATE 01 · NGC 3372 / CARINA</span>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(0)}
                    className="inline-flex items-center gap-1.5 bg-midnight/90 px-2.5 py-1 text-starlight hairline-box hover:border-amber transition-colors"
                  >
                    <Maximize2 className="h-3 w-3 text-amber" aria-hidden="true" />
                    <span>Inspect Plate</span>
                  </button>
                </div>
                <p className="text-xs text-silver leading-relaxed">
                  Ionization fronts along the Carina Nebula molecular cliffs (8,500 ly). Ultraviolet photons from O-type supergiants erode cold dust columns while triggering new protostellar collapse inside the pillars.
                </p>
                <div className="pt-1 flex items-center gap-1.5 text-[11px] text-regolith">
                  <Sparkles className="h-3 w-3 text-amber shrink-0" aria-hidden="true" />
                  <span>
                    Provenance: Original AI-Generated Conceptual Visualization (JWST NIRCam Spectral Basis)
                  </span>
                </div>
              </div>
            </div>

            {/* Secondary Telemetry Strip Below Cover Plate */}
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="bg-midnight p-3 hairline-box">
                <span className="text-regolith block text-[11px]">Right Ascension</span>
                <span className="tabular-data text-starlight font-medium mt-0.5 block">
                  10h 45m 08.5s
                </span>
              </div>
              <div className="bg-midnight p-3 hairline-box">
                <span className="text-regolith block text-[11px]">Declination</span>
                <span className="tabular-data text-starlight font-medium mt-0.5 block">
                  −59° 52′ 04″
                </span>
              </div>
              <div className="bg-midnight p-3 hairline-box">
                <span className="text-regolith block text-[11px]">Ionized Span</span>
                <span className="tabular-data text-amber font-medium mt-0.5 block">
                  ~300 Light-Years
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURED DISCOVERY DOSSIER (ASYMMETRIC 5/7 SPREAD) */}
      <section className="mx-auto max-w-editorial px-6 py-20 lg:px-12 lg:py-28 hairline-b">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          {/* Left 5 Columns: Narrative & Verified Spectroscopy Benchmark */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-editorial text-3xl sm:text-4xl text-starlight leading-tight">
              Featured Discovery: Spectroscopy at Cosmic Dawn &amp; Across Alien Terminators
            </h2>
            <p className="text-sm sm:text-base text-silver leading-relaxed">
              Operating at 40 Kelvin in a halo orbit around the Sun–Earth L2 Lagrange point, the James Webb Space Telescope has opened two simultaneous frontiers that ground-based telescopes could never penetrate: galaxies shining just 290 million years after the Big Bang, and molecular photochemistry inside exoplanet atmospheres.
            </p>
            <p className="text-sm sm:text-base text-silver leading-relaxed">
              In the JADES Deep Field, NIRSpec prism spectroscopy confirmed galaxy <strong>JADES-GS-z14-0</strong> at a cosmological redshift of <code>z = 14.32</code>—revealing a luminous system spanning 1,600 light-years already enriched with dust and ionized oxygen at an epoch when the universe was only 2% of its current age.
            </p>

            {/* Verified Spectroscopic Findings Table */}
            <div className="bg-midnight hairline-box overflow-hidden">
              <div className="px-4 py-2.5 bg-void/70 hairline-b flex items-center justify-between">
                <span className="text-xs font-semibold text-starlight">
                  Verified Infrared Spectroscopic Benchmarks
                </span>
                <span className="tabular-data text-[11px] text-amber">JWST NIRSpec / MIRI</span>
              </div>
              <div className="divide-y divide-silver/10 text-xs">
                <div className="p-3.5 flex items-start justify-between gap-4">
                  <div>
                    <span className="font-medium text-starlight block">JADES-GS-z14-0 (Lyman-α Break)</span>
                    <span className="text-regolith">290 Myr post-Big Bang · UV-luminous galaxy</span>
                  </div>
                  <span className="tabular-data text-amber shrink-0">z = 14.32</span>
                </div>
                <div className="p-3.5 flex items-start justify-between gap-4">
                  <div>
                    <span className="font-medium text-starlight block">Orion Bar Disk d203-506</span>
                    <span className="text-regolith">First interstellar methyl cation detection</span>
                  </div>
                  <span className="tabular-data text-cyan shrink-0">CH₃⁺ (7.18 μm)</span>
                </div>
                <div className="p-3.5 flex items-start justify-between gap-4">
                  <div>
                    <span className="font-medium text-starlight block">WASP-39b &amp; K2-18b Transit Spectra</span>
                    <span className="text-regolith">Photochemical &amp; carbon species resolved</span>
                  </div>
                  <span className="tabular-data text-violet-soft shrink-0">CO₂, SO₂, CH₄</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/missions?mission=james-webb-space-telescope"
                className="inline-flex items-center gap-2 text-sm font-medium text-amber hover:underline"
              >
                <Telescope className="h-4 w-4" aria-hidden="true" />
                <span>Inspect JWST L2 Observatory Telemetry &amp; Mission Log</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right 7 Columns: Asymmetric Dual-Plate Diptych */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-6">
            <figure className="sm:col-span-12 bg-midnight hairline-box overflow-hidden">
              <div className="aspect-[16/9] w-full overflow-hidden bg-void">
                <img
                  src="/images/star-forming-region.png"
                  alt="Dense Bok globule dark molecular cloud with nascent protostellar bipolar jets carving cavities in cosmic dust"
                  className="h-full w-full object-cover plate-zoom"
                />
              </div>
              <figcaption className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs hairline-t">
                <div>
                  <strong className="text-starlight">Bok Globule &amp; Herbig–Haro Protostellar Outflows:</strong>{' '}
                  <span className="text-silver">
                    Near-infrared wavelengths penetrate high-extinction molecular cores (A_V &gt; 30 mag) to reveal bipolar jets.
                  </span>
                </div>
                <span className="tabular-data text-[11px] text-amber shrink-0">
                  Original Conceptual Plate
                </span>
              </figcaption>
            </figure>

            <figure className="sm:col-span-7 bg-midnight hairline-box overflow-hidden">
              <div className="aspect-[16/10] w-full overflow-hidden bg-void">
                <img
                  src="/images/exoplanet-atmosphere.png"
                  alt="Surface and horizon of an ocean-bearing world in the habitable zone of an ultra-cool red dwarf star"
                  className="h-full w-full object-cover plate-zoom"
                />
              </div>
              <figcaption className="p-4 text-xs space-y-1 hairline-t">
                <div className="font-medium text-starlight">
                  M-Dwarf Habitable Zone Atmospheres
                </div>
                <p className="text-silver">
                  Compact red-dwarf planetary systems allow frequent transit spectroscopy of temperate terrestrial worlds.
                </p>
                <span className="tabular-data text-[10px] text-cyan block pt-1">
                  NASA/JPL-Caltech Public Domain Plate (PIA21423)
                </span>
              </figcaption>
            </figure>

            <div className="sm:col-span-5 bg-midnight p-5 hairline-box flex flex-col justify-between">
              <div className="space-y-3">
                <span className="tabular-data text-xs text-violet-soft">
                  SPECTRAL RESOLUTION R ≈ 2,700
                </span>
                <h3 className="font-editorial text-xl text-starlight leading-snug">
                  Why Infrared Light Unlocks Both Early Galaxies and Living Worlds
                </h3>
                <p className="text-xs text-silver leading-relaxed">
                  Cosmic expansion stretches ultraviolet starlight from the first galaxies into the 1–5 μm near-infrared band—the exact same spectral window where water vapor, methane, and carbon dioxide vibrate in exoplanet atmospheres.
                </p>
              </div>
              <Link
                to="/journal?article=biosignatures-in-the-infrared"
                className="mt-6 inline-flex items-center justify-between w-full bg-void px-3.5 py-2.5 text-xs text-starlight hairline-box hover:border-amber transition-colors"
              >
                <span>Read Monograph XVII-03</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-amber" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SELECTED CELESTIAL OBJECTS (ARCHITECTURAL EDITORIAL SPREAD) */}
      <section className="mx-auto max-w-editorial px-6 py-20 lg:px-12 lg:py-28 hairline-b">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-editorial text-3xl sm:text-4xl text-starlight">
              Selected Celestial Specimens
            </h2>
            <p className="text-sm sm:text-base text-silver">
              Four cornerstone astrophysical environments from our 14-object catalog—spanning from Saturn’s icy ring dynamics at 9.5 AU to the 6.5-billion-solar-mass event horizon of M87*.
            </p>
          </div>
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 bg-midnight px-5 py-2.5 text-sm font-medium text-starlight hairline-box hover:border-amber transition-colors self-start md:self-auto"
          >
            <span>Open Complete 14-Object Catalog</span>
            <ArrowUpRight className="h-4 w-4 text-amber" aria-hidden="true" />
          </Link>
        </div>

        {/* Asymmetric 12-Column Specimen Layout (Lead Specimen + 3 Editorial Dossiers) */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Lead Specimen: Saturn (7 Columns) */}
          {featuredObjects[0] && (
            <article className="lg:col-span-7 bg-midnight hairline-box flex flex-col justify-between overflow-hidden group">
              <div>
                <Link
                  to={`/celestial/${featuredObjects[0].id}`}
                  className="block aspect-[16/10] w-full overflow-hidden bg-void"
                >
                  <img
                    src={featuredObjects[0].image}
                    alt={featuredObjects[0].imageAlt}
                    className="h-full w-full object-cover plate-zoom"
                  />
                </Link>
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs tabular-data">
                    <span className="text-amber">{featuredObjects[0].catalogDesignation}</span>
                    <span className="text-regolith">
                      {featuredObjects[0].ra} · {featuredObjects[0].dec}
                    </span>
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-starlight">
                    <Link
                      to={`/celestial/${featuredObjects[0].id}`}
                      className="hover:text-amber transition-colors"
                    >
                      {featuredObjects[0].name} — {featuredObjects[0].subtype}
                    </Link>
                  </h3>
                  <p className="text-sm text-silver leading-relaxed">
                    {featuredObjects[0].summary}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-8 py-4 bg-void/60 hairline-t grid grid-cols-2 sm:grid-cols-3 gap-4 items-center text-xs">
                <div>
                  <span className="text-regolith block">Heliocentric Distance</span>
                  <span className="tabular-data text-starlight font-medium">
                    {featuredObjects[0].distanceDisplay}
                  </span>
                </div>
                <div>
                  <span className="text-regolith block">Light-Travel Time</span>
                  <span className="tabular-data text-amber font-medium">
                    {featuredObjects[0].lightTravelTime}
                  </span>
                </div>
                <div className="col-span-2 sm:col-span-1 sm:text-right">
                  <Link
                    to={`/celestial/${featuredObjects[0].id}`}
                    className="inline-flex items-center gap-1.5 text-starlight hover:text-amber font-medium"
                  >
                    <span>Inspect Specimen</span>
                    <ArrowUpRight className="h-4 w-4 text-amber" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          )}

          {/* Right Column Stack: M87*, Europa, Andromeda (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {featuredObjects.slice(1, 4).map((obj) => (
              <article
                key={obj.id}
                className="bg-midnight hairline-box p-5 flex flex-col sm:flex-row gap-5 items-start group hover:border-silver/30 transition-colors"
              >
                <Link
                  to={`/celestial/${obj.id}`}
                  className="w-full sm:w-40 shrink-0 aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-void hairline-box"
                >
                  <img
                    src={obj.image}
                    alt={obj.imageAlt}
                    className="h-full w-full object-cover plate-zoom"
                  />
                </Link>
                <div className="flex-1 min-w-0 space-y-2">
                  <div className="flex items-center justify-between gap-2 text-[11px] tabular-data">
                    <span className="text-amber">{obj.category.toUpperCase()}</span>
                    <span className="text-regolith truncate">{obj.lightTravelTime}</span>
                  </div>
                  <h3 className="font-editorial text-xl text-starlight leading-snug">
                    <Link
                      to={`/celestial/${obj.id}`}
                      className="hover:text-amber transition-colors"
                    >
                      {obj.name}
                    </Link>
                  </h3>
                  <p className="text-xs text-silver line-clamp-2 leading-relaxed">
                    {obj.summary}
                  </p>
                  <div className="pt-1 flex items-center justify-between text-xs">
                    <span className="tabular-data text-regolith text-[11px]">
                      {obj.distanceDisplay.split(' (')[0]}
                    </span>
                    <Link
                      to={`/celestial/${obj.id}`}
                      className="inline-flex items-center gap-1 text-starlight group-hover:text-amber transition-colors font-medium"
                    >
                      <span>Dossier</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-amber" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: THE OVERVIEW EFFECT — FULL-BLEED TONAL FIELD SHIFT */}
      <section className="bg-midnight hairline-b">
        <div className="mx-auto max-w-editorial px-6 py-20 lg:px-12 lg:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <h2 className="font-editorial text-3xl sm:text-4xl text-starlight leading-tight">
                The Overview Perspective: Looking Back at the Only Known Biosphere
              </h2>
              <blockquote className="font-editorial italic text-xl sm:text-2xl text-silver leading-relaxed border-l-2 border-amber pl-5">
                “When the Galileo spacecraft turned its spectrometers back toward Earth in December 1990, it searched for the exact thermodynamic anomaly we now seek around distant stars: abundant oxygen coexisting with methane above a liquid ocean.”
              </blockquote>
              <p className="text-sm text-silver leading-relaxed">
                Every astronomical measurement outward into the cosmos simultaneously sharpens our understanding of Earth. Viewed from low orbital altitude at sunrise, the entire breathable troposphere—containing 75% of our atmosphere’s mass and all terrestrial weather—is a delicate blue-gold veil just twelve kilometers thick.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/celestial/earth"
                  className="inline-flex items-center gap-2 bg-void px-4 py-2.5 text-xs font-medium text-starlight hairline-box hover:border-amber transition-colors"
                >
                  <span>Open SOL-III (Earth) Calibration Dossier</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-amber" aria-hidden="true" />
                </Link>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(2)}
                  className="inline-flex items-center gap-1.5 text-xs text-silver hover:text-amber transition-colors"
                >
                  <Maximize2 className="h-3.5 w-3.5 text-amber" aria-hidden="true" />
                  <span>Inspect Orbital Sunrise Plate</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-void hairline-box overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/earth-from-space.png"
                    alt="Curved limb of Earth at orbital sunrise showing blue atmospheric airglow and golden sun glint over ocean clouds"
                    className="h-full w-full object-cover plate-zoom"
                  />
                </div>
                <div className="p-3.5 text-xs space-y-1">
                  <span className="tabular-data text-amber block text-[11px]">
                    SOL-III · TROPOSPHERIC LIMB
                  </span>
                  <span className="text-silver block">
                    O₂ (20.95%) + CH₄ (1.9 ppm) chemical disequilibrium benchmark.
                  </span>
                </div>
              </div>

              <div className="bg-void hairline-box overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/astronaut-silhouette.png"
                    alt="Astronaut in silhouette on a dark crater ridge gazing out at an illuminated planetary crescent"
                    className="h-full w-full object-cover plate-zoom"
                  />
                </div>
                <div className="p-3.5 text-xs space-y-1">
                  <span className="tabular-data text-violet-soft block text-[11px]">
                    CIS-LUNAR &amp; DEEP-SPACE FRONTIER
                  </span>
                  <span className="text-silver block">
                    Human exploration architecture beyond Earth’s magnetosphere.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: UPCOMING ASTRONOMICAL EVENTS & OBSERVATORY EPHEMERIS */}
      <section className="mx-auto max-w-editorial px-6 py-20 lg:px-12 lg:py-28 hairline-b">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          {/* Left 4 Columns: Section Intro & Total Solar Eclipse Plate */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <h2 className="font-editorial text-3xl text-starlight">
                Astronomical Events &amp; Ephemeris
              </h2>
              <p className="text-sm text-silver leading-relaxed">
                Verified celestial mechanics, planetary oppositions, spacecraft gravity assists, and solar occultations calculated for Epoch J2026–J2027.
              </p>
            </div>

            <div className="bg-midnight hairline-box overflow-hidden group">
              <div className="aspect-[16/10] overflow-hidden bg-void">
                <img
                  src="/images/eclipse.png"
                  alt="Total solar eclipse revealing pearlescent magnetic coronal streamers and chromospheric prominences around the lunar disk"
                  className="h-full w-full object-cover plate-zoom"
                />
              </div>
              <div className="p-4 space-y-2 text-xs">
                <div className="flex items-center justify-between tabular-data">
                  <span className="text-amber">CORONAL OCCULTATION</span>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(1)}
                    className="text-starlight hover:text-amber inline-flex items-center gap-1"
                  >
                    <Maximize2 className="h-3 w-3 text-amber" aria-hidden="true" />
                    <span>Enlarge</span>
                  </button>
                </div>
                <p className="text-silver leading-relaxed">
                  On August 2, 2027, lunar perigee coincides with aphelion to produce 6 minutes and 23 seconds of totality over Luxor, Egypt.
                </p>
              </div>
            </div>
          </div>

          {/* Right 8 Columns: Tabular Observatory Schedule */}
          <div className="lg:col-span-8 divide-y divide-silver/15 hairline-box bg-midnight">
            {ASTRONOMICAL_EVENTS.map((evt) => (
              <div
                key={evt.id}
                className="p-6 hover:bg-stratosphere/40 transition-colors grid grid-cols-1 md:grid-cols-12 gap-4 items-start"
              >
                <div className="md:col-span-4 space-y-1">
                  <span className="tabular-data text-xs font-medium text-amber block">
                    {evt.dateDisplay}
                  </span>
                  <span className="tabular-data text-xs text-regolith block">
                    {evt.epochUtc}
                  </span>
                  <span className="inline-block mt-2 bg-void px-2.5 py-0.5 text-[11px] text-silver hairline-box">
                    {evt.eventType}
                  </span>
                </div>

                <div className="md:col-span-8 space-y-2">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-editorial text-xl text-starlight">
                      {evt.title}
                    </h3>
                    <Link
                      to={`/celestial/${evt.relatedCelestialId}`}
                      className="inline-flex items-center gap-1 text-xs text-amber hover:underline shrink-0"
                    >
                      <span>Object Dossier</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                  <p className="text-xs sm:text-sm text-silver leading-relaxed">
                    {evt.description}
                  </p>
                  <div className="pt-1 flex flex-wrap items-center gap-x-6 gap-y-1 text-xs tabular-data text-regolith">
                    <span>Visibility: {evt.visibilityRegion}</span>
                    <span className="text-silver">{evt.coordinatesOrElongation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: LATEST MONOGRAPHS FROM THE JOURNAL */}
      <section className="mx-auto max-w-editorial px-6 py-20 lg:px-12 lg:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-editorial text-3xl sm:text-4xl text-starlight">
              The Journal — Issue XVII Monographs
            </h2>
            <p className="text-sm sm:text-base text-silver">
              Longform scientific essays examining event-horizon interferometry, molecular cloud collapse, astrobiological disequilibrium, red-dwarf climates, and cis-lunar propulsion.
            </p>
          </div>
          <Link
            to="/journal"
            className="inline-flex items-center gap-2 bg-amber px-5 py-2.5 text-sm font-semibold text-void hover:bg-amber-bright transition-colors self-start md:self-auto"
          >
            <span>Open Complete Journal Reader</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {JOURNAL_ARTICLES.slice(0, 3).map((article) => (
            <article
              key={article.id}
              className="bg-midnight hairline-box flex flex-col justify-between overflow-hidden group"
            >
              <div>
                <Link
                  to={`/journal?article=${article.id}`}
                  className="block aspect-[16/9] overflow-hidden bg-void"
                >
                  <img
                    src={article.heroImage}
                    alt={article.heroCaption}
                    className="h-full w-full object-cover plate-zoom"
                  />
                </Link>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs tabular-data">
                    <span className="text-amber">{article.topic.toUpperCase()}</span>
                    <span className="text-regolith">{article.readingTimeMinutes} MIN READ</span>
                  </div>
                  <h3 className="font-editorial text-2xl text-starlight leading-snug">
                    <Link
                      to={`/journal?article=${article.id}`}
                      className="hover:text-amber transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-silver leading-relaxed line-clamp-3">
                    {article.abstract}
                  </p>
                </div>
              </div>

              <div className="px-6 py-4 bg-void/60 hairline-t flex items-center justify-between text-xs">
                <div>
                  <span className="text-starlight font-medium block">{article.author}</span>
                  <span className="text-regolith text-[11px]">{article.issueCode}</span>
                </div>
                <Link
                  to={`/journal?article=${article.id}`}
                  className="inline-flex items-center gap-1 text-amber font-medium hover:underline"
                >
                  <span>Read Essay</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ImageLightbox
        plates={heroPlates}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
};

