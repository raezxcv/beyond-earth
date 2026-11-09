import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  Maximize2,
  Sparkles,
  Compass,
  Clock,
  Layers,
  History,
  Radio,
} from 'lucide-react';
import { CELESTIAL_OBJECTS } from '../data/celestialObjects';
import { ImageLightbox } from '../components/ImageLightbox';

type VelocityPreset = 'light' | 'laser-sail' | 'parker' | 'voyager';

const VELOCITY_PRESETS: Record<
  VelocityPreset,
  { label: string; speedKmS: number; speedFractionC: number; description: string }
> = {
  light: {
    label: 'Radio / Photon Signal (1.00 c)',
    speedKmS: 299792.458,
    speedFractionC: 1.0,
    description: 'Deep Space Network X/Ka-band electromagnetic wave propagation in vacuum.',
  },
  'laser-sail': {
    label: 'Relativistic Light Sail (0.10 c)',
    speedKmS: 29979.25,
    speedFractionC: 0.1,
    description: 'Theoretical gram-scale laser-pushed wafer craft at 10% light speed.',
  },
  parker: {
    label: 'Parker Solar Probe Max (192 km/s)',
    speedKmS: 192.0,
    speedFractionC: 192.0 / 299792.458,
    description: 'Fastest human-made spacecraft velocity achieved at close solar perihelion.',
  },
  voyager: {
    label: 'Voyager 1 Cruise (17.0 km/s)',
    speedKmS: 17.0,
    speedFractionC: 17.0 / 299792.458,
    description: 'Current hyperbolic interstellar coast velocity beyond the Heliopause.',
  },
};

function formatTravelDuration(distanceLightYears: number, fractionC: number): string {
  if (distanceLightYears <= 1e-7) {
    return '0.00 seconds (Geocentric Origin)';
  }
  const years = distanceLightYears / fractionC;
  if (years < 1 / (365.25 * 24 * 60)) {
    const secs = years * 365.25 * 24 * 3600;
    return `${secs.toFixed(2)} seconds`;
  }
  if (years < 1 / 365.25) {
    const hours = years * 365.25 * 24;
    if (hours < 1) {
      return `${(hours * 60).toFixed(1)} minutes`;
    }
    return `${hours.toFixed(2)} hours`;
  }
  if (years < 1) {
    const days = years * 365.25;
    return `${days.toFixed(1)} Earth days`;
  }
  if (years < 1000) {
    return `${years.toFixed(1)} years`;
  }
  if (years < 1e6) {
    return `${Math.round(years).toLocaleString()} years`;
  }
  if (years < 1e9) {
    return `${(years / 1e6).toFixed(2)} million years`;
  }
  return `${(years / 1e9).toFixed(2)} billion years`;
}

export const CelestialDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [velocityPreset, setVelocityPreset] = useState<VelocityPreset>('light');

  const object =
    CELESTIAL_OBJECTS.find((o) => o.id === id) || CELESTIAL_OBJECTS[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [object.id]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) {
        setScrollProgress(0);
        return;
      }
      const current = Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100));
      setScrollProgress(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [object.id]);

  const relatedObjects = object.relatedIds
    .map((relId) => CELESTIAL_OBJECTS.find((o) => o.id === relId))
    .filter((o): o is NonNullable<typeof o> => Boolean(o));

  const isAuthenticNasa =
    object.imageProvenance.toLowerCase().includes('authentic') ||
    object.imageProvenance.toLowerCase().includes('public domain');

  const activeVelocity = VELOCITY_PRESETS[velocityPreset];
  const calculatedTransit = formatTravelDuration(
    object.distanceLightYears,
    activeVelocity.speedFractionC
  );

  return (
    <div className="relative z-10 animate-editorial-enter">
      {/* Docked Reading Progress Bar */}
      <div
        aria-hidden="true"
        className="fixed left-0 top-0 z-50 h-[3px] bg-amber transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* TOP SPECIMEN SELECTOR STRIP */}
      <div className="bg-midnight hairline-b overflow-hidden">
        <div className="mx-auto max-w-editorial px-6 py-3 lg:px-12 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 min-w-0">
            <Link
              to="/explore"
              className="inline-flex items-center gap-1.5 text-xs text-silver hover:text-amber transition-colors shrink-0"
            >
              <ArrowLeft className="h-3.5 w-3.5 text-amber" aria-hidden="true" />
              <span>Catalog Index</span>
            </Link>
            <span className="text-regolith">·</span>
            <span className="tabular-data text-xs text-regolith truncate">
              SPECIMEN DOSSIER: <strong className="text-starlight">{object.catalogDesignation}</strong>
            </span>
          </div>

          <div className="flex items-center gap-2 min-w-0">
            <label htmlFor="specimen-quick-select" className="text-xs text-regolith shrink-0">
              Switch Specimen:
            </label>
            <select
              id="specimen-quick-select"
              value={object.id}
              onChange={(e) => navigate(`/celestial/${e.target.value}`)}
              className="w-full sm:w-auto max-w-[260px] truncate bg-void px-3 py-1.5 text-xs text-starlight hairline-box focus:border-amber focus:outline-none"
            >
              {CELESTIAL_OBJECTS.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name} ({item.category})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* SECTION 1: HERO SPECIMEN HEADER */}
      <section className="mx-auto max-w-editorial px-6 pt-10 pb-16 lg:px-12 lg:pt-14 lg:pb-24 hairline-b">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
          {/* Left 5 Columns: Classification, Title, Summary & Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex flex-wrap items-center gap-2 text-xs tabular-data">
              <span className="bg-amber px-2.5 py-0.5 font-semibold text-void">
                {object.category.toUpperCase()}
              </span>
              <span className="bg-midnight px-2.5 py-0.5 text-silver hairline-box">
                {object.catalogDesignation}
              </span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl text-starlight leading-[1.06]">
              {object.name}
            </h1>

            <p className="text-sm font-medium text-violet-soft">
              {object.subtype} · {object.constellationOrSystem}
            </p>

            <p className="text-base text-silver leading-relaxed">
              {object.summary}
            </p>

            {/* Astrometric Coordinates Box */}
            <div className="bg-midnight p-5 hairline-box space-y-3 text-xs">
              <div className="flex items-center justify-between hairline-b pb-2.5">
                <span className="font-semibold text-starlight flex items-center gap-1.5">
                  <Compass className="h-3.5 w-3.5 text-amber" aria-hidden="true" />
                  ICRS Astrometric Coordinates (J2000.0)
                </span>
                <span className="tabular-data text-amber">VERIFIED</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <span className="text-regolith block">Right Ascension (α)</span>
                  <span className="tabular-data text-starlight font-medium mt-0.5 block">
                    {object.ra}
                  </span>
                </div>
                <div>
                  <span className="text-regolith block">Declination (δ)</span>
                  <span className="tabular-data text-starlight font-medium mt-0.5 block">
                    {object.dec}
                  </span>
                </div>
                <div>
                  <span className="text-regolith block">Distance from Earth</span>
                  <span className="tabular-data text-starlight font-medium mt-0.5 block">
                    {object.distanceDisplay}
                  </span>
                </div>
                <div>
                  <span className="text-regolith block">Earth Scale Benchmark</span>
                  <span className="tabular-data text-amber font-medium mt-0.5 block">
                    {object.earthScaleRatio}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right 7 Columns: Primary Specimen Plate & Explicit Provenance Disclosure */}
          <div className="lg:col-span-7 space-y-3">
            <div className="group relative bg-midnight hairline-box overflow-hidden">
              <div className="aspect-[16/10] w-full overflow-hidden bg-void">
                <img
                  src={object.image}
                  alt={object.imageAlt}
                  className="h-full w-full object-cover plate-zoom"
                />
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(0)}
                className="absolute top-4 right-4 inline-flex items-center gap-1.5 bg-void/90 px-3 py-1.5 text-xs text-starlight hairline-box hover:border-amber transition-colors"
              >
                <Maximize2 className="h-3.5 w-3.5 text-amber" aria-hidden="true" />
                <span>Open Full-Resolution Plate Inspector</span>
              </button>
            </div>

            {/* Scientific Provenance & Wavelength Disclosure Bar */}
            <div className="bg-midnight p-4 hairline-box grid grid-cols-1 sm:grid-cols-12 gap-4 items-center text-xs">
              <div className="sm:col-span-7 flex items-start gap-2.5">
                <Sparkles
                  className={`h-4 w-4 shrink-0 mt-0.5 ${
                    isAuthenticNasa ? 'text-cyan' : 'text-amber'
                  }`}
                  aria-hidden="true"
                />
                <div>
                  <span className="text-regolith block text-[11px]">
                    Visual Provenance &amp; Scientific Integrity Disclosure:
                  </span>
                  <span
                    className={`font-medium ${
                      isAuthenticNasa ? 'text-cyan' : 'text-amber'
                    }`}
                  >
                    {object.imageProvenance}
                  </span>
                </div>
              </div>
              <div className="sm:col-span-5 sm:border-l sm:border-silver/15 sm:pl-4">
                <span className="text-regolith block text-[11px]">Spectral / Instrument Basis:</span>
                <span className="tabular-data text-silver">{object.wavelengthBasis}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: VERIFIED MEASUREMENTS MATRIX & LIGHT-TIME / TRANSIT SIMULATOR */}
      <section className="mx-auto max-w-editorial px-6 py-16 lg:px-12 lg:py-20 hairline-b">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="font-editorial text-3xl text-starlight">
              Verified Physical Measurements
            </h2>
            <p className="text-sm text-silver mt-1">
              Calibrated astrophysical parameters compiled from IAU, NASA JPL Horizons, and peer-reviewed spectroscopy.
            </p>
          </div>
          <span className="tabular-data text-xs text-regolith">
            SI / CGS / ASTRONOMICAL UNITS
          </span>
        </div>

        {/* 6-Cell Telemetry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-midnight p-5 hairline-box space-y-1.5">
            <span className="text-xs text-regolith block">Mass / Gravitational Equivalence</span>
            <span className="tabular-data text-base font-medium text-starlight block">
              {object.measurements.mass}
            </span>
          </div>
          <div className="bg-midnight p-5 hairline-box space-y-1.5">
            <span className="text-xs text-regolith block">Radius / Characteristic Span</span>
            <span className="tabular-data text-base font-medium text-starlight block">
              {object.measurements.radiusOrSpan}
            </span>
          </div>
          <div className="bg-midnight p-5 hairline-box space-y-1.5">
            <span className="text-xs text-regolith block">Thermal / Radiative Regime</span>
            <span className="tabular-data text-base font-medium text-amber block">
              {object.measurements.temperature}
            </span>
          </div>
          <div className="bg-midnight p-5 hairline-box space-y-1.5">
            <span className="text-xs text-regolith block">Rotation &amp; Orbital Kinematics</span>
            <span className="tabular-data text-base font-medium text-starlight block">
              {object.measurements.rotationOrPeriod}
            </span>
          </div>
          <div className="bg-midnight p-5 hairline-box space-y-1.5">
            <span className="text-xs text-regolith block">Apparent Magnitude / Angular Size</span>
            <span className="tabular-data text-base font-medium text-violet-soft block">
              {object.measurements.apparentMagnitude}
            </span>
          </div>
          <div className="bg-midnight p-5 hairline-box space-y-1.5">
            <span className="text-xs text-regolith block">Surface Gravity / Escape Regime</span>
            <span className="tabular-data text-base font-medium text-silver block">
              {object.measurements.gravityOrEscape}
            </span>
          </div>
        </div>

        {/* Interactive Signal & Spacecraft Transit Time Simulator */}
        <div className="mt-8 bg-midnight p-6 hairline-box grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 space-y-2">
            <div className="flex items-center gap-2 text-xs text-amber font-semibold">
              <Radio className="h-4 w-4" aria-hidden="true" />
              <span>Interactive Relativistic &amp; Spacecraft Transit Calculator</span>
            </div>
            <h3 className="font-editorial text-2xl text-starlight">
              How Long to Reach {object.name.split(' (')[0]}?
            </h3>
            <p className="text-xs text-silver leading-relaxed">
              Compare one-way transit durations from Earth across electromagnetic speed of light, relativistic laser sails, and chemical/gravity-assist spacecraft.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div
              role="group"
              aria-label="Select propulsion or signal velocity benchmark"
              className="grid grid-cols-2 sm:grid-cols-4 gap-2"
            >
              {(Object.keys(VELOCITY_PRESETS) as VelocityPreset[]).map((key) => {
                const preset = VELOCITY_PRESETS[key];
                const active = velocityPreset === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setVelocityPreset(key)}
                    aria-pressed={active}
                    className={`p-3 text-left text-xs hairline-box transition-colors ${
                      active
                        ? 'bg-stratosphere border-amber text-amber font-medium'
                        : 'bg-void/60 text-silver hover:text-starlight'
                    }`}
                  >
                    <span className="block truncate">{preset.label.split(' (')[0]}</span>
                    <span className="tabular-data text-[11px] text-regolith block mt-0.5">
                      {preset.speedKmS.toLocaleString()} km/s
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="bg-void p-4 hairline-box flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs space-y-1">
                <span className="text-regolith block">{activeVelocity.label}</span>
                <p className="text-silver">{activeVelocity.description}</p>
              </div>
              <div className="sm:text-right shrink-0">
                <span className="text-[11px] text-regolith block flex items-center sm:justify-end gap-1">
                  <Clock className="h-3 w-3 text-amber" aria-hidden="true" />
                  One-Way Transit Duration
                </span>
                <span className="tabular-data text-xl font-semibold text-amber block mt-0.5">
                  {calculatedTransit}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SCIENTIFIC EXPLANATION & PHYSICAL ARCHITECTURE STRATIGRAPHY */}
      <section className="mx-auto max-w-editorial px-6 py-16 lg:px-12 lg:py-24 hairline-b">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          {/* Left 7 Columns: Scientific Monograph Prose */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-editorial text-3xl sm:text-4xl text-starlight">
              Astrophysical Analysis &amp; Dynamics
            </h2>
            <div className="space-y-5 text-base text-silver leading-[1.75]">
              {object.scientificExplanation.map((paragraph, index) => (
                <p
                  key={index}
                  className={
                    index === 0
                      ? 'text-starlight text-lg leading-relaxed font-normal'
                      : ''
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right 5 Columns: Structural Stratigraphy & Internal Layers */}
          <div className="lg:col-span-5 bg-midnight p-6 sm:p-7 hairline-box space-y-6">
            <div className="flex items-center justify-between hairline-b pb-4">
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-amber" aria-hidden="true" />
                <h3 className="font-editorial text-2xl text-starlight">
                  Internal &amp; Spatial Architecture
                </h3>
              </div>
              <span className="tabular-data text-xs text-regolith">EXTERIOR → CORE</span>
            </div>

            <div className="space-y-4">
              {object.physicalArchitecture.map((layer, idx) => (
                <div
                  key={layer.layer}
                  className="bg-void/75 p-4 hairline-box space-y-1.5"
                >
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-semibold text-starlight">
                      {idx + 1}. {layer.layer}
                    </span>
                    <span className="tabular-data text-amber text-[11px]">
                      {layer.depthOrScale}
                    </span>
                  </div>
                  <p className="text-xs text-silver leading-relaxed">
                    {layer.composition}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: DISCOVERY & OBSERVATIONAL HISTORY */}
      <section className="mx-auto max-w-editorial px-6 py-16 lg:px-12 lg:py-24 hairline-b">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-xs text-amber font-semibold">
              <History className="h-4 w-4" aria-hidden="true" />
              <span>Observational Provenance</span>
            </div>
            <h2 className="font-editorial text-3xl text-starlight">
              Discovery &amp; Reconnaissance History
            </h2>
            <div className="bg-midnight p-5 hairline-box space-y-3 text-xs">
              <div>
                <span className="text-regolith block">Primary Discoverer / Survey</span>
                <span className="text-starlight font-medium mt-0.5 block">
                  {object.discovery.discoverer}
                </span>
              </div>
              <div>
                <span className="text-regolith block">Discovery Epoch</span>
                <span className="tabular-data text-amber font-medium mt-0.5 block">
                  {object.discovery.year}
                </span>
              </div>
              <div>
                <span className="text-regolith block">Detection Methodology</span>
                <span className="text-silver mt-0.5 block">{object.discovery.method}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {object.discovery.milestones.map((ms) => (
              <div
                key={ms.year + ms.observerOrMission}
                className="bg-midnight p-5 sm:p-6 hairline-box grid grid-cols-1 sm:grid-cols-12 gap-4 items-start"
              >
                <div className="sm:col-span-3">
                  <span className="tabular-data text-lg font-semibold text-amber block">
                    {ms.year}
                  </span>
                  <span className="text-xs text-silver font-medium block mt-0.5">
                    {ms.observerOrMission}
                  </span>
                </div>
                <div className="sm:col-span-9 sm:border-l sm:border-silver/15 sm:pl-5">
                  <p className="text-sm text-silver leading-relaxed">{ms.finding}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: SPECIMEN PLATE GALLERY & RELATED CELESTIAL OBJECTS */}
      <section className="mx-auto max-w-editorial px-6 py-16 lg:px-12 lg:py-24">
        {/* Plate Gallery */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="font-editorial text-3xl text-starlight">
                Specimen Plate Archive ({object.gallery.length} Plates)
              </h2>
              <p className="text-sm text-silver mt-1">
                Select any plate to inspect full-resolution imagery, spectral basis, and provenance classification.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {object.gallery.map((plate, index) => (
              <div
                key={plate.title}
                className="bg-midnight hairline-box overflow-hidden flex flex-col justify-between group"
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className="relative block aspect-[16/10] w-full overflow-hidden bg-void text-left"
                >
                  <img
                    src={plate.src}
                    alt={plate.title}
                    className="h-full w-full object-cover plate-zoom"
                  />
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-void/90 px-2.5 py-1 text-[11px] text-starlight hairline-box group-hover:border-amber">
                    <Maximize2 className="h-3 w-3 text-amber" aria-hidden="true" />
                    <span>Inspect</span>
                  </span>
                </button>
                <div className="p-5 space-y-2 text-xs">
                  <div className="font-semibold text-starlight text-sm">{plate.title}</div>
                  <p className="text-silver leading-relaxed">{plate.caption}</p>
                  <div className="pt-2 hairline-t text-[11px] tabular-data text-amber">
                    {plate.provenance}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Celestial Objects */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-editorial text-3xl text-starlight">
              Related Celestial Specimens
            </h2>
            <Link
              to="/explore"
              className="text-xs font-medium text-amber hover:underline inline-flex items-center gap-1"
            >
              <span>View All 14 Objects</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedObjects.map((rel) => (
              <Link
                key={rel.id}
                to={`/celestial/${rel.id}`}
                className="group bg-midnight hairline-box overflow-hidden flex flex-col justify-between hover:border-amber transition-colors"
              >
                <div className="aspect-[16/9] w-full overflow-hidden bg-void">
                  <img
                    src={rel.image}
                    alt={rel.imageAlt}
                    className="h-full w-full object-cover plate-zoom"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-xs tabular-data">
                    <span className="text-amber">{rel.category.toUpperCase()}</span>
                    <span className="text-regolith">{rel.lightTravelTime}</span>
                  </div>
                  <h3 className="font-editorial text-2xl text-starlight group-hover:text-amber transition-colors">
                    {rel.name}
                  </h3>
                  <p className="text-xs text-silver line-clamp-2">{rel.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ImageLightbox
        plates={object.gallery}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
};
