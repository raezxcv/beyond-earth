export type CelestialCategory =
  | 'Planet'
  | 'Moon'
  | 'Star'
  | 'Galaxy'
  | 'Nebula'
  | 'Black Hole';

export interface GalleryPlate {
  src: string;
  title: string;
  caption: string;
  provenance: string;
  wavelengthBasis: string;
}

export interface HistoryMilestone {
  year: string;
  observerOrMission: string;
  finding: string;
}

export interface CelestialObject {
  id: string;
  name: string;
  catalogDesignation: string;
  category: CelestialCategory;
  subtype: string;
  constellationOrSystem: string;
  ra: string;
  dec: string;
  distanceDisplay: string;
  distanceLightYears: number; // Used for logarithmic scale & sorting
  lightTravelTime: string;
  earthScaleRatio: string;
  featured: boolean;
  summary: string;
  image: string;
  imageAlt: string;
  imageProvenance: string;
  wavelengthBasis: string;
  measurements: {
    mass: string;
    radiusOrSpan: string;
    temperature: string;
    rotationOrPeriod: string;
    apparentMagnitude: string;
    gravityOrEscape: string;
  };
  scientificExplanation: string[];
  physicalArchitecture: {
    layer: string;
    composition: string;
    depthOrScale: string;
  }[];
  discovery: {
    discoverer: string;
    year: string;
    method: string;
    milestones: HistoryMilestone[];
  };
  gallery: GalleryPlate[];
  relatedIds: string[];
}

export const CELESTIAL_OBJECTS: CelestialObject[] = [
  {
    id: 'saturn',
    name: 'Saturn',
    catalogDesignation: 'SOL-VI · JPL HORIZONS 699',
    category: 'Planet',
    subtype: 'Oblate Gas Giant & Ring System',
    constellationOrSystem: 'Solar System (Outer Heliocentric)',
    ra: '23h 14m 08.4s (Ephemeris)',
    dec: '-07° 11′ 42″',
    distanceDisplay: '1.427 billion km (9.58 AU mean)',
    distanceLightYears: 0.0001508,
    lightTravelTime: '1 hr 19 min 24 sec',
    earthScaleRatio: '9.45 × Earth equatorial radius (95.16 M⊕)',
    featured: true,
    summary:
      'The sixth planet from the Sun and host to the most dynamically complex ring architecture in the Solar System—an icy debris disk spanning 282,000 kilometers yet averaging less than ten meters in vertical thickness.',
    image: '/images/saturn-rings.png',
    imageAlt:
      'Conceptual astrophysical visualization of Saturn and its icy ring system illuminated in high-phase backlit sunlight',
    imageProvenance:
      'Original Conceptual Visualization · Modeled after Cassini ISS high-phase solar occultation geometry',
    wavelengthBasis: 'Continuum Optical (450–750 nm) forward-scattering model',
    measurements: {
      mass: '5.6834 × 10²⁶ kg (95.16 Earth masses)',
      radiusOrSpan: '58,232 km mean radius · 282,000 km main ring span',
      temperature: '134 K (−139 °C) at 1 bar atmospheric level',
      rotationOrPeriod: '10h 33m 38s sidereal rotation · 29.45 yr orbit',
      apparentMagnitude: '+0.46 to −0.55 (at opposition with open rings)',
      gravityOrEscape: '10.44 m/s² equatorial surface gravity · 35.5 km/s escape',
    },
    scientificExplanation: [
      'Saturn is an oblate fluid world composed of roughly 96.3% molecular hydrogen and 3.25% helium by volume, with trace hydrocarbons, ammonia, and phosphine shaping its banded golden-silver cloud decks. Because its rapid 10.5-hour rotation generates strong centrifugal forces against a mean density of just 0.687 g/cm³—lower than liquid water—Saturn flattens by nearly 10% between its poles and equator.',
      'Its signature ring system consists of 99.9% pure water ice with trace tholin and silicate impurities, ranging from micrometer-sized frost grains to house-sized boulders. Orbital resonances with inner moons such as Mimas and Pan carve sharp density waves and gaps, notably the 4,800-kilometer-wide Cassini Division and the 325-kilometer Encke Gap. Cassini Grand Finale gravity measurements revealed the rings have a mass equivalent to roughly 40% of Mimas, indicating they formed only 100 to 400 million years ago from a tidally disrupted icy moon.',
      'Deep beneath the ammonia cloud tops, pressure exceeds one megabar, compressing hydrogen into a liquid metallic phase that drives a remarkably axisymmetric planetary magnetic dynamo—aligned to within less than one degree of the planet’s rotational axis.'
    ],
    physicalArchitecture: [
      {
        layer: 'Upper Troposphere & Cloud Decks',
        composition: 'Ammonia (NH₃) ice crystals, ammonium hydrosulfide, water ice',
        depthOrScale: '0 to 300 km below 1-bar level',
      },
      {
        layer: 'Molecular Hydrogen Envelope',
        composition: 'Supercritical fluid H₂ and He with helium rain depletion',
        depthOrScale: '300 to 30,000 km depth',
      },
      {
        layer: 'Liquid Metallic Hydrogen Mantle',
        composition: 'Degenerate proton-electron conducting fluid driving magnetic field',
        depthOrScale: '30,000 to 45,000 km depth',
      },
      {
        layer: 'Diffuse Rocky-Icy Core',
        composition: 'Heavy elements, silicates, and high-pressure ices mixed with metallic H',
        depthOrScale: '~15–18 Earth masses across central 13,000 km',
      },
    ],
    discovery: {
      discoverer: 'Known since antiquity · Rings resolved by Christiaan Huygens',
      year: '1610 (Galileo) / 1655 (Huygens ring theory)',
      method: 'Refracting optical telescopy & spacecraft orbital reconnaissance',
      milestones: [
        {
          year: '1610',
          observerOrMission: 'Galileo Galilei',
          finding: 'First telescopic observation at 20× magnification; noted lateral "ears" (ansae) around the disk.',
        },
        {
          year: '1675',
          observerOrMission: 'Giovanni Domenico Cassini',
          finding: 'Identified the dark division separating the outer A Ring and inner B Ring.',
        },
        {
          year: '1980–1981',
          observerOrMission: 'Voyager 1 & Voyager 2',
          finding: 'Revealed thousands of ringlets, radial spokes, shepherd moons, and the north polar hexagonal jet stream.',
        },
        {
          year: '2004–2017',
          observerOrMission: 'Cassini-Huygens Orbiter',
          finding: 'Completed 294 orbits, landed Huygens on Titan, sampled Enceladus plumes, and measured ring mass during the Grand Finale.',
        },
      ],
    },
    gallery: [
      {
        src: '/images/saturn-rings.png',
        title: 'High-Phase Ring Occultation Geometry',
        caption: 'Forward-scattered solar photons reveal tenuous dusty ringlets and the sharp planetary shadow cast across the A and B rings.',
        provenance: 'Original Conceptual Rendering · Cassini ISS high-phase reference',
        wavelengthBasis: 'Optical Continuum (550 nm)',
      },
      {
        src: '/images/moon-closeup.png',
        title: 'Tectonic Ice Crust of Outer Solar System Moons',
        caption: 'Fractured water-ice shells and reddish-amber sulfate lineae trace tidal heating across outer solar system ocean moons.',
        provenance: 'Authentic Scientific Imagery · NASA/JPL-Caltech/SETI Institute (Galileo PIA19048 Public Domain)',
        wavelengthBasis: 'Narrowband Optical & Near-IR Remastered Mosaic',
      },
      {
        src: '/images/spacecraft.png',
        title: 'Outer Planet Orbital Reconnaissance',
        caption: 'Robotic spacecraft shielded in Kapton multi-layer insulation coasting through the low-insolation environment at 9.5 AU.',
        provenance: 'Original AI-Generated Conceptual Rendering · Deep-space spacecraft engineering study',
        wavelengthBasis: 'Unfiltered Solar Continuum',
      },
    ],
    relatedIds: ['europa', 'mars', 'proxima-b'],
  },
  {
    id: 'carina-nebula',
    name: 'Carina Nebula (NGC 3372)',
    catalogDesignation: 'NGC 3372 · Caldwell 92 · Gum 33',
    category: 'Nebula',
    subtype: 'Giant H II Emission Nebula & Stellar Nursery',
    constellationOrSystem: 'Carina (Sagittarius-Carina Spiral Arm)',
    ra: '10h 45m 08.5s',
    dec: '-59° 52′ 04″',
    distanceDisplay: '8,500 light-years (2.6 kiloparsecs)',
    distanceLightYears: 8500,
    lightTravelTime: '8,500 years',
    earthScaleRatio: '~300 light-years total ionized complex diameter',
    featured: true,
    summary:
      'One of the largest and most violently sculpted star-forming complexes in the Milky Way, where torrential ultraviolet radiation from dozens of O-type supergiants and Eta Carinae erodes towering cliffs of cold molecular hydrogen.',
    image: '/images/nebula.png',
    imageAlt:
      'Conceptual astrophysical visualization of towering molecular gas pillars and glowing ionized dust ridges in the Carina Nebula',
    imageProvenance:
      'Original AI-Generated Conceptual Visualization · Inspired by JWST NIRCam & MIRI infrared spectroscopy of NGC 3324 / NGC 3372',
    wavelengthBasis: 'Near/Mid-Infrared Composite ([Fe II], H₂, PAH emission model)',
    measurements: {
      mass: '> 900,000 Solar masses (M☉) of molecular & ionized gas',
      radiusOrSpan: '~300 light-years across (4× larger than the Orion Nebula)',
      temperature: '10–30 K in cold dust cores · 10,000 K in H II photoionized fronts',
      rotationOrPeriod: 'Dynamic photoevaporation timescale ~1–3 Myr',
      apparentMagnitude: '+1.0 integrated visual magnitude',
      gravityOrEscape: 'Turbulent Mach number M ≈ 5–12 across ionization fronts',
    },
    scientificExplanation: [
      'Located in the Carina-Sagittarius arm of the Milky Way some 8,500 light-years from Earth, the Carina Nebula (NGC 3372) is a laboratory of extreme stellar feedback. It houses at least 70 O-type stars—the hottest, most massive main-sequence stars known—along with three Wolf-Rayet stars and the luminous blue variable binary Eta Carinae.',
      'Along the cavity walls of regions such as the Cosmic Cliffs (NGC 3324), blistering ultraviolet photons and stellar winds strip electrons from hydrogen, sulfur, and oxygen atoms, driving a photoevaporative shock into the surrounding cold molecular cloud. Denser knots of gas shield the material behind them, leaving behind monolithic pillars several light-years tall.',
      'Near-infrared observations penetrate the opaque silicate and polycyclic aromatic hydrocarbon (PAH) dust veil, exposing hundreds of previously hidden Class 0 and Class I protostars launching supersonic Herbig-Haro jets from their accretion disks.'
    ],
    physicalArchitecture: [
      {
        layer: 'Interior H II Cavity (Trumpler 14 & 16 Clusters)',
        composition: 'Fully ionized hydrogen plasma, X-ray emitting shocked stellar winds',
        depthOrScale: 'Central 50–80 light-year evacuated bubble',
      },
      {
        layer: 'Photodissociation Region (PDR) Cliff Face',
        composition: 'Fluorescing H₂ molecules, ionized sulfur [S II], warm PAH dust grains',
        depthOrScale: '0.5 to 2 light-year transition boundary',
      },
      {
        layer: 'Cold Molecular Pillars & Bok Globules',
        composition: 'Dense H₂, CO, silicate dust, and collapsing protostellar cores',
        depthOrScale: 'Pillars spanning 2 to 7 light-years in length',
      },
    ],
    discovery: {
      discoverer: 'Nicolas-Louis de Lacaille',
      year: '1752 (Cape of Good Hope catalog)',
      method: 'Southern hemisphere visual survey; modern X-ray/IR space telescopy',
      milestones: [
        {
          year: '1752',
          observerOrMission: 'Nicolas-Louis de Lacaille',
          finding: 'Cataloged the nebula during his two-year astrometric expedition to South Africa.',
        },
        {
          year: '1843',
          observerOrMission: 'John Herschel',
          finding: 'Recorded the Great Eruption of Eta Carinae, when the star briefly became the second-brightest star in the night sky.',
        },
        {
          year: '2007–2010',
          observerOrMission: 'Hubble Space Telescope (ACS/WFC3)',
          finding: 'Mapped the Mystic Mountain pillar and proplyd-like evaporating gaseous globules.',
        },
        {
          year: '2022',
          observerOrMission: 'James Webb Space Telescope (NIRCam/MIRI)',
          finding: 'Released the first deep-infrared mosaic of NGC 3324, uncovering dozens of nascent protostellar outflows.',
        },
      ],
    },
    gallery: [
      {
        src: '/images/nebula.png',
        title: 'Ionization Front & Molecular Cliffs',
        caption: 'Ultraviolet radiation from young OB associations sublimates dust ridges into glowing ionized streamers.',
        provenance: 'Original AI-Generated Conceptual Rendering · JWST NIRCam spectral palette study',
        wavelengthBasis: 'Near-Infrared (0.9–4.7 μm conceptual mapping)',
      },
      {
        src: '/images/star-forming-region.png',
        title: 'Embedded Protostellar Bok Globule',
        caption: 'Inside dense molecular knots, gravitational collapse triggers bipolar Herbig-Haro jets that pierce the natal dust cocoon.',
        provenance: 'Original AI-Generated Conceptual Rendering · Star-forming core visualization',
        wavelengthBasis: 'Mid-Infrared Dust Continuum',
      },
    ],
    relatedIds: ['orion-nebula', 'betelgeuse', 'sirius-system'],
  },
  {
    id: 'm87-star',
    name: 'M87* Supermassive Black Hole',
    catalogDesignation: 'M87* · Virgo A · NGC 4486 Core',
    category: 'Black Hole',
    subtype: 'Relativistic Supermassive Kerr Black Hole',
    constellationOrSystem: 'Virgo (Virgo Cluster Central Elliptical Galaxy)',
    ra: '12h 30m 49.42s',
    dec: '+12° 23′ 28.04″',
    distanceDisplay: '53.5 million light-years (16.4 megaparsecs)',
    distanceLightYears: 53500000,
    lightTravelTime: '53.5 million years',
    earthScaleRatio: 'Event horizon diameter ~254 AU (3.2 × Pluto’s max orbital distance)',
    featured: true,
    summary:
      'A 6.5-billion-solar-mass gravitational engine at the core of giant elliptical galaxy Messier 87, whose warped photon ring and relativistic plasma jet provided humanity’s first direct horizon-scale shadow image.',
    image: '/images/abstract-deep-space.png',
    imageAlt:
      'Relativistic visualization of a supermassive black hole accretion disk, photon ring, and X-ray corona jet',
    imageProvenance:
      'NASA/JPL-Caltech Astrophysical Visualization (PIA16695 Public Domain) · Paired with EHT VLBI telemetry',
    wavelengthBasis: 'Relativistic Accretion Disk & NuSTAR X-Ray Corona Model',
    measurements: {
      mass: '(6.5 ± 0.7) × 10⁹ Solar masses (M☉)',
      radiusOrSpan: 'Schwarzschild radius ~127 AU (19 billion km · 17 light-hours)',
      temperature: '10¹⁰ K brightness temperature in relativistic synchrotron plasma',
      rotationOrPeriod: 'Dimensionless Kerr spin parameter a* ≈ 0.5–0.9',
      apparentMagnitude: '42 ± 3 microarcseconds angular shadow diameter from Earth',
      gravityOrEscape: 'c (299,792.458 km/s) at the event horizon',
    },
    scientificExplanation: [
      'At the heart of the supergiant elliptical galaxy Messier 87 sits M87*, a supermassive black hole weighing 6.5 billion times the mass of our Sun. Its Schwarzschild radius spans roughly 127 astronomical units—more than three times the distance from the Sun to Pluto. In April 2019, the Event Horizon Telescope (EHT) collaboration linked radio dishes across the globe via Very Long Baseline Interferometry (VLBI) at 1.3 mm wavelength to resolve its 42-microarcsecond shadow.',
      'The glowing crescent surrounding the central shadow is not the surface of the black hole, but synchrotron radiation emitted by magnetized plasma orbiting at relativistic velocities within a few Schwarzschild radii. Photons grazing the unstable photon sphere at 1.5 Schwarzschild radii can orbit the black hole multiple times before escaping toward Earth, creating a razor-thin photon ring.',
      'Because the plasma disk rotates at a significant fraction of the speed of light, relativistic Doppler beaming amplifies the brightness of material approaching the observer while dimming the receding side. Twisted magnetic fields anchored to the spinning ergosphere via the Blandford-Znajek mechanism launch a collimated jet of relativistic electrons and positrons extending over 5,000 light-years into intergalactic space.'
    ],
    physicalArchitecture: [
      {
        layer: 'Event Horizon (r_H)',
        composition: 'One-way causal boundary in Kerr spacetime',
        depthOrScale: 'Radius ~100–127 AU depending on spin parameter a*',
      },
      {
        layer: 'Photon Sphere & Lensed Shadow',
        composition: 'Unstable null geodesics trapping grazing photons; 2.6 r_s shadow radius',
        depthOrScale: '~42 microarcseconds (~38 billion km apparent shadow diameter)',
      },
      {
        layer: 'Magnetically Arrested Accretion Disk (MAD)',
        composition: 'Relativistic electron-ion plasma threaded by poloidal magnetic fields',
        depthOrScale: '3 to 50 Schwarzschild radii',
      },
      {
        layer: 'Relativistic Poynting-Flux Jet',
        composition: 'Synchrotron-emitting particle beam collimated along spin axis',
        depthOrScale: 'Extends > 5,000 light-years (1.5 kiloparsecs)',
      },
    ],
    discovery: {
      discoverer: 'Heber Curtis (optical jet) · Event Horizon Telescope Collaboration (shadow)',
      year: '1918 (Jet) / 1994 (HST mass) / 2019 (EHT Horizon Image)',
      method: 'Millimeter-wave Very Long Baseline Interferometry (VLBI)',
      milestones: [
        {
          year: '1918',
          observerOrMission: 'Heber Curtis (Lick Observatory)',
          finding: 'Observed a "curious straight ray" emerging from the core of nebula M87.',
        },
        {
          year: '1994',
          observerOrMission: 'Hubble Space Telescope (FOS)',
          finding: 'Measured ionized gas orbiting the nucleus at ±500 km/s, proving a multi-billion-solar-mass dark compact object.',
        },
        {
          year: '2019',
          observerOrMission: 'Event Horizon Telescope (EHT)',
          finding: 'Published the first direct image of a black hole shadow from 2017 230-GHz interferometric observations.',
        },
        {
          year: '2021–2023',
          observerOrMission: 'EHT + GMVA Polarimetry',
          finding: 'Mapped spiral magnetic field polarization lines and imaged the base of the jet connected to the accretion ring at 86 GHz.',
        },
      ],
    },
    gallery: [
      {
        src: '/images/abstract-deep-space.png',
        title: 'GRMHD Lensed Accretion Disk & Photon Ring',
        caption: 'Gravitational light bending folds the back of the accretion disk above and below the central black hole shadow.',
        provenance: 'Original Conceptual Rendering · General-relativistic ray-tracing visualization',
        wavelengthBasis: 'Millimeter / Relativistic Plasma Simulation',
      },
      {
        src: '/images/observatory.png',
        title: 'High-Altitude Millimeter VLBI Nodes',
        caption: 'Earth-sized virtual apertures rely on high, dry mountain observatories like ALMA in the Atacama Desert to capture 1.3 mm photons.',
        provenance: 'Original Conceptual Rendering · High-altitude observatory architecture',
        wavelengthBasis: 'Optical Twilight Photography Aesthetic',
      },
    ],
    relatedIds: ['sagittarius-a', 'andromeda-galaxy', 'sombrero-galaxy'],
  },
  {
    id: 'europa',
    name: 'Europa',
    catalogDesignation: 'JUPITER II · JPL HORIZONS 502',
    category: 'Moon',
    subtype: 'Subsurface Ocean Galilean Satellite',
    constellationOrSystem: 'Jovian System (Jupiter Orbit)',
    ra: '04h 58m 19.2s (Jovian Ephemeris)',
    dec: '+22° 04′ 11″',
    distanceDisplay: '628.3 million km from Earth (min) · 671,100 km from Jupiter',
    distanceLightYears: 0.0000664,
    lightTravelTime: '34 min 56 sec (at opposition)',
    earthScaleRatio: '0.245 × Earth radius (slightly smaller than Earth’s Moon)',
    featured: true,
    summary:
      'Beneath a fractured, geologically young shell of water ice criss-crossed by irradiated sulfate lineae, Jupiter’s fourth-largest moon harbors a global saltwater ocean containing twice the liquid water volume of all Earth’s oceans combined.',
    image: '/images/moon-closeup.png',
    imageAlt:
      'Galileo spacecraft mosaic of Europa showing fractured water-ice crust criss-crossed by reddish-amber mineral lineae',
    imageProvenance:
      'Authentic Scientific Mission Imagery · NASA/JPL-Caltech/SETI Institute (Galileo SSI Mosaic PIA19048 Public Domain)',
    wavelengthBasis: 'Visible & Near-Infrared Calibrated Albedo Mosaic',
    measurements: {
      mass: '4.7998 × 10²² kg (0.008 Earth masses)',
      radiusOrSpan: '1,560.8 km mean radius (3,121.6 km diameter)',
      temperature: '102 K (−171 °C) equatorial mean · 50 K at poles',
      rotationOrPeriod: '3.551 days (tidally locked in 1:2:4 Laplace resonance)',
      apparentMagnitude: '+5.29 at mean opposition',
      gravityOrEscape: '1.315 m/s² surface gravity · 2.025 km/s escape velocity',
    },
    scientificExplanation: [
      'Europa is locked in a 1:2:4 orbital Laplace resonance with its sibling Galilean moons Io and Ganymede. For every four orbits Io completes around Jupiter, Europa completes exactly two and Ganymede completes one. This gravitational tug-of-war maintains Europa’s orbital eccentricity (e = 0.009), flexing its interior every 85 hours as it moves closer to and farther from Jupiter’s immense gravity well.',
      'This tidal dissipation generates enough internal heat to sustain a global liquid saltwater ocean 60 to 150 kilometers deep beneath an outer water-ice crust estimated at 15 to 25 kilometers thick. Unlike typical airless moons, Europa’s surface is virtually devoid of large impact craters, indicating an average surface age of only 40 to 90 million years due to continuous tectonic resurfacing and chaos terrain formation.',
      'Crucially, Europa’s subsurface ocean lies in direct contact with a rocky silicate seafloor—unlike Ganymede, where high-pressure ice phases may separate water from rock. Hydrothermal vents at the rock-water interface, paired with radiolytic oxidants produced on the icy surface by Jupiter’s magnetosphere and cycled downward, make Europa a premier target in the search for extant extraterrestrial biospheres.'
    ],
    physicalArchitecture: [
      {
        layer: 'Brittle & Ductile Water-Ice Shell',
        composition: 'Crystalline & amorphous H₂O ice with hydrated magnesium sulfates & NaCl',
        depthOrScale: '15 to 25 km thickness',
      },
      {
        layer: 'Global Subsurface Liquid Ocean',
        composition: 'Briny liquid H₂O (~3 × 10¹⁸ m³, > 2× Earth’s total ocean volume)',
        depthOrScale: '60 to 150 km depth',
      },
      {
        layer: 'Silicate Rocky Mantle',
        composition: 'Peridotite and hydrated silicates with potential hydrothermal activity',
        depthOrScale: '~800 km radial thickness',
      },
      {
        layer: 'Metallic Iron-Nickel Core',
        composition: 'Fe-Ni-FeS differentiated core',
        depthOrScale: '~600 km central radius',
      },
    ],
    discovery: {
      discoverer: 'Galileo Galilei & Simon Marius',
      year: 'January 8, 1610',
      method: 'Refracting telescope (20×) in Padua, Italy',
      milestones: [
        {
          year: '1610',
          observerOrMission: 'Galileo Galilei',
          finding: 'Discovered the four Galilean moons orbiting Jupiter, overturning geocentric cosmology.',
        },
        {
          year: '1979',
          observerOrMission: 'Voyager 1 & Voyager 2',
          finding: 'First high-resolution images revealed a bright, smooth icy surface laced with dark intersecting lineae and almost no craters.',
        },
        {
          year: '1995–2003',
          observerOrMission: 'Galileo Orbiter Magnetometer',
          finding: 'Detected an induced magnetic field within Europa as it passed through Jupiter’s magnetosphere—definitive evidence of a global electrically conductive saltwater layer.',
        },
        {
          year: '2024–2030',
          observerOrMission: 'NASA Europa Clipper & ESA JUICE',
          finding: 'Launched to perform nearly 50 close flybys with ice-penetrating radar, mass spectrometers, and thermal imagers.',
        },
      ],
    },
    gallery: [
      {
        src: '/images/moon-closeup.png',
        title: 'Tectonic Lineae & Cryovolcanic Venting',
        caption: 'Reddish-amber evaporite salts and irradiated sulfur compounds trace double ridges where warm subsurface ice wells upward.',
        provenance: 'Original Conceptual Rendering · Ice moon surface and plume study',
        wavelengthBasis: 'Enhanced Visible Color (400–800 nm)',
      },
      {
        src: '/images/spacecraft.png',
        title: 'Radiation-Hardened Flyby Reconnaissance',
        caption: 'Spacecraft exploring Europa utilize elliptical Jovian orbits to dip swiftly through Jupiter’s intense radiation belts.',
        provenance: 'Original Conceptual Rendering · Outer planet orbiter visualization',
        wavelengthBasis: 'Continuum Optical',
      },
    ],
    relatedIds: ['saturn', 'lunar-south-pole', 'proxima-b'],
  },
  {
    id: 'mars',
    name: 'Mars',
    catalogDesignation: 'SOL-IV · JPL HORIZONS 499',
    category: 'Planet',
    subtype: 'Terrestrial Silicate Planet',
    constellationOrSystem: 'Solar System (Inner Terrestrial Zone)',
    ra: '07h 41m 15.0s (Ephemeris)',
    dec: '+24° 18′ 09″',
    distanceDisplay: '225 million km mean (54.6 million km min · 1.524 AU)',
    distanceLightYears: 0.0000238,
    lightTravelTime: '3 min 02 sec (min) to 22 min 20 sec (max)',
    earthScaleRatio: '0.532 × Earth radius (0.107 M⊕ · Land area equals Earth’s continents)',
    featured: false,
    summary:
      'A cold desert world whose Noachian river deltas, phyllosilicate clays, and layered sulfate mesas preserve a four-billion-year sedimentary archive of a warmer, wetter early Solar System.',
    image: '/images/mars-landscape.png',
    imageAlt:
      'Curiosity rover view across Gale Crater floor and Mount Sharp flanks at Martian twilight',
    imageProvenance:
      'Authentic Scientific Mission Imagery · NASA/JPL-Caltech Curiosity Rover (PIA24937 Gale Crater Postcard Public Domain)',
    wavelengthBasis: 'Radiometrically Calibrated Rover Imaging (Morning & Afternoon Composite)',
    measurements: {
      mass: '6.4171 × 10²³ kg (0.107 Earth masses)',
      radiusOrSpan: '3,389.5 km mean radius',
      temperature: '210 K (−63 °C) global mean · 130 K to 293 K range',
      rotationOrPeriod: '24h 39m 35.244s mean solar day (1 Sol) · 687.0 Earth days orbit',
      apparentMagnitude: '−2.94 at perihelic opposition to +1.86',
      gravityOrEscape: '3.721 m/s² surface gravity (0.38 g) · 5.027 km/s escape',
    },
    scientificExplanation: [
      'Mars sits at the outer boundary of the Sun’s habitable zone at 1.524 AU. Although today its carbon-dioxide atmosphere exerts a mean surface pressure of just 6.1 millibars—below the triple point of water—its crust preserves unmistakable geomorphological evidence of ancient lakes, dendritic river valleys, and catastrophic outflow channels formed during the Noachian and Hesperian epochs (4.1 to 3.0 billion years ago).',
      'Because Mars has only one-tenth of Earth’s mass, its interior cooled more rapidly. Around 4.0 billion years ago, its global core dynamo shut down, leaving only localized crustal magnetic anomalies in the southern highlands. Exposed to the unshielded solar wind, Mars lost the majority of its primordial atmosphere and water inventory to space via photochemical escape and sputtering, as quantified by the MAVEN orbiter.',
      'Yet because Mars lacks global plate tectonics, over half of its surface rock dates back more than 3.5 billion years—the exact geological window when life emerged on Earth, where subduction and erosion have erased almost all contemporaneous rock records.'
    ],
    physicalArchitecture: [
      {
        layer: 'Tenous CO₂ Atmosphere & Dust Aerosols',
        composition: '95.32% CO₂, 2.6% N₂, 1.9% Ar, suspended iron-oxide dust',
        depthOrScale: '6.1 mbar surface pressure · 11.1 km scale height',
      },
      {
        layer: 'Basaltic Crust & Cryosphere',
        composition: 'Tholeiitic basalt, iron(III) oxide regolith, phyllosilicates, subsurface ice',
        depthOrScale: '24 to 72 km crustal thickness (dichotomy between N and S)',
      },
      {
        layer: 'Silicate Mantle',
        composition: 'Iron-rich olivine and pyroxene stagnant-lid mantle',
        depthOrScale: '~1,500 km depth',
      },
      {
        layer: 'Liquid Iron-Nickel-Sulfur Core',
        composition: 'Molten Fe-Ni alloy enriched in light elements (S, O, C, H)',
        depthOrScale: '1,830 ± 40 km radius (measured by InSight seismic waves)',
      },
    ],
    discovery: {
      discoverer: 'Known since antiquity · Surface mapped by Mariner 4 & Viking 1/2',
      year: '1659 (Huygens Syrtis Major map) / 1965 (Mariner 4)',
      method: 'Planetary radar, orbital spectroscopy, and in-situ rover geochemistry',
      milestones: [
        {
          year: '1965',
          observerOrMission: 'Mariner 4',
          finding: 'Completed the first successful flyby of Mars, transmitting 21 images of a cratered surface and measuring a thin CO₂ atmosphere.',
        },
        {
          year: '1976',
          observerOrMission: 'Viking 1 & Viking 2 Landers',
          finding: 'Executed the first soft landings on Mars, returning panoramic surface imagery and conducting biological soil experiments.',
        },
        {
          year: '2012–Present',
          observerOrMission: 'Curiosity Rover (MSL)',
          finding: 'Climbed Aeolis Mons in Gale Crater, proving persistent habitable freshwater lake environments existed for millions of years.',
        },
        {
          year: '2021–Present',
          observerOrMission: 'Perseverance Rover & Ingenuity',
          finding: 'Explored the ancient Jezero Crater river delta, caching cored rock samples and achieving the first powered flight on another planet.',
        },
      ],
    },
    gallery: [
      {
        src: '/images/mars-landscape.png',
        title: 'Stratified Sulfate Mesas & Aeolian Dunes',
        caption: 'Cross-bedded sedimentary layers record the transition from neutral-pH Noachian lakes to arid Hesperian sulfate evaporites.',
        provenance: 'Original Conceptual Rendering · Martian crater basin stratigraphy',
        wavelengthBasis: 'Natural Sol Illuminant (500–700 nm)',
      },
    ],
    relatedIds: ['earth', 'lunar-south-pole', 'saturn'],
  },
  {
    id: 'andromeda-galaxy',
    name: 'Andromeda Galaxy (Messier 31)',
    catalogDesignation: 'M31 · NGC 224 · UGC 454',
    category: 'Galaxy',
    subtype: 'Barred Spiral Galaxy (SA(s)b)',
    constellationOrSystem: 'Andromeda (Local Group Primary Member)',
    ra: '00h 42m 44.3s',
    dec: '+41° 16′ 09″',
    distanceDisplay: '2.537 million light-years (778 kiloparsecs)',
    distanceLightYears: 2537000,
    lightTravelTime: '2.537 million years',
    earthScaleRatio: '152,000 light-years stellar disk diameter (~1 trillion stars)',
    featured: true,
    summary:
      'The largest galactic member of the Local Group—an island universe of roughly one trillion stars and sweeping dust lanes hurtling toward a gravitational merger with the Milky Way at 110 kilometers per second.',
    image: '/images/distant-galaxy.png',
    imageAlt:
      'Conceptual deep-space visualization of a grand-design spiral galaxy seen at an oblique inclination with golden core and cosmic violet spiral arms',
    imageProvenance:
      'Original Conceptual Visualization · Inspired by HST PHAT (Panchromatic Hubble Andromeda Treasury) & GALEX UV surveys',
    wavelengthBasis: 'Optical + Near-Ultraviolet + Infrared Composite Aesthetic',
    measurements: {
      mass: '~1.5 × 10¹² Solar masses (M☉) including dark matter halo',
      radiusOrSpan: '152,000 light-years diameter (46.6 kiloparsecs)',
      temperature: 'Double nucleus hosting a 1.1–2.3 × 10⁸ M☉ central black hole',
      rotationOrPeriod: '225–250 km/s peak rotational velocity · −301 km/s heliocentric RV',
      apparentMagnitude: '+3.44 visual (spans 3.16° × 1° on sky—6× wider than full Moon)',
      gravityOrEscape: 'Approaching Milky Way at 110 km/s; collision in ~4.5 billion years',
    },
    scientificExplanation: [
      'At 2.537 million light-years away, the Andromeda Galaxy (Messier 31) is the closest major spiral galaxy to our own and the most distant object readily visible to the unaided human eye under dark skies. Spanning roughly 152,000 light-years across its main stellar disk, M31 contains approximately one trillion stars—nearly twice the stellar population of the Milky Way.',
      'Andromeda played the pivotal role in establishing the cosmic distance scale. In 1923, Edwin Hubble used the 100-inch Hooker telescope at Mount Wilson to identify Cepheid variable stars in M31’s outer arms, proving conclusively that "spiral nebulae" were not gas clouds inside the Milky Way, but independent galaxies separated by millions of light-years. Half a century later, Vera Rubin and Kent Ford measured the flat rotation curve of M31’s outer gas, providing foundational observational evidence for dark matter halos.',
      'Unlike most spiral galaxies, M31 exhibits blueshifted spectral lines: mutual gravitational attraction between Andromeda, the Milky Way, and their dark matter halos is pulling the two galaxies together at 110 km/s. High-precision proper-motion astrometry from the Hubble and Gaia space telescopes confirms a head-on tidal merger in roughly 4.5 billion years, eventually relaxing into a giant elliptical galaxy.'
    ],
    physicalArchitecture: [
      {
        layer: 'Double Galactic Nucleus (P1 & P2) + M31*',
        composition: 'Eccentric apsidal stellar disk orbiting a ~1.4 × 10⁸ M☉ black hole',
        depthOrScale: 'Central 5-light-year nuclear cluster',
      },
      {
        layer: 'Boxy Bulge & Galactic Bar',
        composition: 'Old metal-rich Population II red & yellow giants',
        depthOrScale: '~25,000 light-year central spheroid',
      },
      {
        layer: 'Spiral Arms & 10-Kiloparsec Star-Forming Ring',
        composition: 'Cold H I gas, molecular dust lanes, OB associations',
        depthOrScale: 'Radius from 15,000 to 76,000 light-years',
      },
      {
        layer: 'Extended Stellar Streams & Circumgalactic Halo',
        composition: ' >450 globular clusters, dwarf satellite streams (M32, M110), dark matter',
        depthOrScale: 'Circumgalactic ionized halo reaches ~1.3 million light-years',
      },
    ],
    discovery: {
      discoverer: 'Abd al-Rahman al-Sufi ("Little Cloud") · Resolved by Edwin Hubble',
      year: '964 CE (Book of Fixed Stars) / 1923 (Extragalactic distance)',
      method: 'Naked-eye uranometry; Cepheid period-luminosity astrometry',
      milestones: [
        {
          year: '964 CE',
          observerOrMission: 'Abd al-Rahman al-Sufi',
          finding: 'First documented description of M31 as a permanent "little cloud" in his Book of Fixed Stars.',
        },
        {
          year: '1923',
          observerOrMission: 'Edwin Hubble (Mount Wilson)',
          finding: 'Identified variable star V1 in M31, proving Andromeda lies far outside the Milky Way.',
        },
        {
          year: '1970',
          observerOrMission: 'Vera Rubin & Kent Ford',
          finding: 'Measured flat orbital velocities across M31’s disk, demonstrating that most galactic mass resides in an unseen dark halo.',
        },
        {
          year: '2015',
          observerOrMission: 'Hubble Space Telescope (PHAT Survey)',
          finding: 'Assembled a 1.5-billion-pixel mosaic resolving over 100 million individual stars across a third of M31’s disk.',
        },
      ],
    },
    gallery: [
      {
        src: '/images/distant-galaxy.png',
        title: 'Oblique Spiral Disk & Dust Lanes',
        caption: 'Seen at a 77-degree inclination from Earth, Andromeda displays concentric rings of cold dust and young blue-violet star clusters surrounding an ancient golden bulge.',
        provenance: 'Original Conceptual Rendering · Local Group spiral galaxy study',
        wavelengthBasis: 'Multi-band Optical / UV / Near-IR Composite',
      },
      {
        src: '/images/star-field.png',
        title: 'Resolved Stellar Populations & Globular Clusters',
        caption: 'Over 450 globular clusters—including Mayall II (G1), the most luminous cluster in the Local Group—orbit within Andromeda’s halo.',
        provenance: 'Original Conceptual Rendering · Deep stellar field plate',
        wavelengthBasis: 'Optical Broadband (B, V, I)',
      },
    ],
    relatedIds: ['sombrero-galaxy', 'm87-star', 'sagittarius-a'],
  },
  {
    id: 'proxima-b',
    name: 'Proxima Centauri b',
    catalogDesignation: 'GJ 551 b · Alpha Centauri C b',
    category: 'Planet',
    subtype: 'Temperate Terrestrial Exoplanet',
    constellationOrSystem: 'Centaurus (Alpha Centauri Triple Star System)',
    ra: '14h 29m 42.95s',
    dec: '-62° 40′ 46.16″',
    distanceDisplay: '4.2465 light-years (1.302 parsecs · 40.17 trillion km)',
    distanceLightYears: 4.2465,
    lightTravelTime: '4 years 89 days',
    earthScaleRatio: '1.07 M⊕ minimum mass (~1.03–1.30 Earth radii)',
    featured: false,
    summary:
      'The closest known exoplanet to our Solar System—an Earth-mass rocky world orbiting inside the habitable zone of a flaring M5.5V red dwarf star just 4.24 light-years away.',
    image: '/images/planetary-surface.png',
    imageAlt:
      'Conceptual visualization of a rocky exoplanet terminator landscape with dark basalt ridges under the low crimson-amber light of a red dwarf star',
    imageProvenance:
      'Original Conceptual Visualization · Art-directed planetary geology model of a tidally locked M-dwarf terrestrial world',
    wavelengthBasis: 'M5.5V Red Dwarf Spectral Illumination (Peak ~1.0 μm)',
    measurements: {
      mass: '1.07 ± 0.06 Earth masses (M⊕ minimum mass via ESPRESSO RV)',
      radiusOrSpan: 'Estimated 1.03–1.20 R⊕ · Semi-major axis 0.04856 AU (7.26M km)',
      temperature: '234 K (−39 °C) equilibrium temperature (assuming 0.3 bond albedo)',
      rotationOrPeriod: '11.18427 Earth days orbital period (likely tidally locked or 3:2 resonance)',
      apparentMagnitude: 'Host star V = +11.13 (planet detected via 1.38 m/s radial velocity)',
      gravityOrEscape: '~10.2 m/s² estimated surface gravity · 65% of Earth’s total stellar irradiance',
    },
    scientificExplanation: [
      'Orbiting the red dwarf star Proxima Centauri at a distance of just 0.0485 AU—less than one-seventh of Mercury’s distance from our Sun—Proxima Centauri b completes a full year every 11.186 Earth days. Because Proxima Centauri has only 12.2% of the Sun’s mass and 0.15% of its bolometric luminosity, this tight orbit places Proxima b squarely inside the star’s circumstellar habitable zone, where it receives 65% of the radiative flux Earth receives from the Sun.',
      'Detected in 2016 via Doppler radial-velocity measurements with the HARPS spectrograph at La Silla and later confirmed at 26 cm/s precision by the ESPRESSO instrument on the Very Large Telescope, Proxima b induces a reflex wobble of just 1.38 meters per second in its host star—about the speed of a brisk human walk.',
      'Whether Proxima b retains a thick atmosphere or surface liquid water remains one of astrobiology’s central questions. At 0.0485 AU, strong gravitational tides likely synchronize its rotation, creating a permanent dayside and nightside divided by a temperate terminator twilight ring. Furthermore, as a convective flare star, Proxima Centauri subjects the planet to extreme ultraviolet and X-ray flux roughly 400 times higher than Earth experiences, requiring either a strong intrinsic planetary magnetosphere or volatile outgassing to prevent atmospheric stripping.'
    ],
    physicalArchitecture: [
      {
        layer: 'Terminator Twilight Zone',
        composition: 'Potential atmospheric heat-redistribution corridor between dayside & nightside',
        depthOrScale: 'Circumplanetary belt along solar elevation 0°–15°',
      },
      {
        layer: 'Silicate Crust & Basaltic Plains',
        composition: 'Mafic volcanic crust with potential nightside water/CO₂ ice caps',
        depthOrScale: 'Estimated 20–40 km crustal thickness',
      },
      {
        layer: 'Convecting Silicate Mantle & Metallic Core',
        composition: 'Earth-like iron-to-silicate ratio required if magnetic dynamo persists',
        depthOrScale: '~6,500 km total planetary radius',
      },
    ],
    discovery: {
      discoverer: 'Guillem Anglada-Escudé & Pale Red Dot Team (ESO)',
      year: 'August 24, 2016',
      method: 'Radial Velocity Doppler Spectroscopy (HARPS & UVES)',
      milestones: [
        {
          year: '1915',
          observerOrMission: 'Robert Innes (Union Observatory)',
          finding: 'Discovered Proxima Centauri as a faint high-proper-motion companion to Alpha Centauri AB.',
        },
        {
          year: '2016',
          observerOrMission: 'ESO HARPS (Pale Red Dot Campaign)',
          finding: 'Announced the 11.2-day radial-velocity signal of an Earth-mass planet in the habitable zone.',
        },
        {
          year: '2020',
          observerOrMission: 'VLT ESPRESSO Spectrograph',
          finding: 'Independently confirmed Proxima b at 3× higher spectral precision, refining minimum mass to 1.07 M⊕.',
        },
      ],
    },
    gallery: [
      {
        src: '/images/planetary-surface.png',
        title: 'Terminator Basalt Ridges Under M-Dwarf Twilight',
        caption: 'Along the twilight ring of a tidally synchronized rocky planet, the red dwarf host star hangs permanently near the horizon.',
        provenance: 'Original Conceptual Rendering · Exoplanet surface environment visualization',
        wavelengthBasis: 'Simulated Human Photopic Response under 3,042 K Blackbody Spectrum',
      },
      {
        src: '/images/exoplanet-atmosphere.png',
        title: 'Temperate M-Dwarf Ocean World Horizon',
        caption: 'In compact red-dwarf systems like Proxima Centauri and TRAPPIST-1, tidal heating and atmospheric heat transport govern whether surface water remains liquid.',
        provenance: 'NASA/JPL-Caltech/Spitzer Science Center Visualization (PIA21423 Public Domain)',
        wavelengthBasis: 'Simulated M-Dwarf Surface & Atmospheric Spectrum',
      },
    ],
    relatedIds: ['earth', 'europa', 'mars'],
  },
  {
    id: 'earth',
    name: 'Earth (Terra)',
    catalogDesignation: 'SOL-III · JPL HORIZONS 399',
    category: 'Planet',
    subtype: 'Ocean-Bearing Silicate Biosphere World',
    constellationOrSystem: 'Solar System (1.000 AU Reference Benchmark)',
    ra: 'N/A (Geocentric Origin)',
    dec: 'Obliquity ε = 23° 26′ 21.4″',
    distanceDisplay: '0.000 light-years (Reference Origin · 149.598M km from Sun)',
    distanceLightYears: 0.00000001,
    lightTravelTime: '0.00 sec (8 min 19 sec heliocentric light-time)',
    earthScaleRatio: '1.000 R⊕ (6,371.0 km mean radius · 1.000 M⊕)',
    featured: false,
    summary:
      'The cosmic reference benchmark for planetary habitability: the only known world with active plate tectonics, a stable liquid hydrosphere covering 70.8% of its crust, and an oxygen-rich atmosphere maintained far from chemical equilibrium by a biosphere.',
    image: '/images/earth-from-space.png',
    imageAlt:
      'Conceptual orbital view of Earth’s curved horizon at sunrise showing thin blue stratospheric airglow and illuminated ocean cloud decks',
    imageProvenance:
      'Original Conceptual Visualization · Inspired by Low-Earth Orbit cupola photography at orbital sunrise',
    wavelengthBasis: 'True-Color Photopic Optical (400–700 nm)',
    measurements: {
      mass: '5.97217 × 10²⁴ kg (1.000 M⊕ · Mean density 5.514 g/cm³)',
      radiusOrSpan: '6,371.0 km volumetric mean radius (6,378.1 km equatorial)',
      temperature: '288 K (+15 °C) global surface mean (255 K effective blackbody)',
      rotationOrPeriod: '23h 56m 04.1s sidereal day · 365.25636 days sidereal orbit',
      apparentMagnitude: '−3.99 as viewed from Mars · Albedo 0.306 (Bond)',
      gravityOrEscape: '9.80665 m/s² standard gravity · 11.186 km/s escape velocity',
    },
    scientificExplanation: [
      'When viewed from deep space—as Carl Sagan famously requested during Voyager 1’s 1990 "Pale Blue Dot" portrait from 6 billion kilometers—Earth serves as the essential calibration target for exoplanet science. Its reflection and transmission spectrum exhibits a striking chemical disequilibrium: 78.08% nitrogen, 20.95% free molecular oxygen (O₂), 0.93% argon, alongside trace methane (CH₄), water vapor (H₂O), and carbon dioxide (CO₂). In an abiotic atmosphere, methane and oxygen rapidly react to form water and CO₂; their simultaneous presence is a definitive biosignature of photosynthetic and methanogenic life.',
      'Earth’s long-term climate stability over 4.54 billion years relies on the carbonate-silicate geochemical cycle driven by active subduction plate tectonics, which acts as a planetary thermostat over million-year timescales, coupled with a convective liquid iron outer core generating a 25–65 microtesla magnetosphere that deflects coronal mass ejections.'
    ],
    physicalArchitecture: [
      {
        layer: 'Troposphere, Stratosphere & Magnetosphere',
        composition: 'N₂-O₂ atmosphere with ozone (O₃) UV shield at 15–35 km altitude',
        depthOrScale: '101.325 kPa sea-level pressure · 100 km Kármán line',
      },
      {
        layer: 'Hydrosphere & Continental/Oceanic Crust',
        composition: '1.335 × 10⁹ km³ liquid ocean over granitic & basaltic tectonic plates',
        depthOrScale: '5 to 70 km crustal thickness',
      },
      {
        layer: 'Silicate Mantle (Upper & Lower)',
        composition: 'Bridgmanite, ferropericlase, and olivine undergoing solid-state convection',
        depthOrScale: '35 to 2,890 km depth',
      },
      {
        layer: 'Liquid Outer & Solid Inner Fe-Ni Core',
        composition: 'Convecting molten iron-nickel dynamo surrounding a solid 1,220 km inner core',
        depthOrScale: '2,890 to 6,371 km depth',
      },
    ],
    discovery: {
      discoverer: 'Eratosthenes (Circumference) · Apollo 8 / Voyager 1 (Orbital Context)',
      year: '~240 BCE (Geodesy) / 1968 (Earthrise) / 1990 (Pale Blue Dot)',
      method: 'Geodetic measurement, orbital remote sensing, and deep-space lookback spectroscopy',
      milestones: [
        {
          year: '240 BCE',
          observerOrMission: 'Eratosthenes of Cyrene',
          finding: 'Calculated Earth’s circumference to within ~2% using solstice shadow angles between Syene and Alexandria.',
        },
        {
          year: '1968',
          observerOrMission: 'Apollo 8 (William Anders)',
          finding: 'Captured "Earthrise" over the battered lunar horizon—the first time humans viewed Earth as a whole planet from another celestial body.',
        },
        {
          year: '1990',
          observerOrMission: 'Galileo Spacecraft (Carl Sagan Experiment)',
          finding: 'Performed a remote-sensing flyby of Earth to test whether spacecraft instruments could detect life on our own planet (confirming O₂/CH₄ disequilibrium and the vegetation red edge).',
        },
      ],
    },
    gallery: [
      {
        src: '/images/earth-from-space.png',
        title: 'Orbital Sunrise & Stratospheric Airglow',
        caption: 'Seen edge-on from 400 kilometers altitude, the entire breathable troposphere forms a fragile blue-gold ribbon just 12 kilometers thick.',
        provenance: 'Original Conceptual Rendering · Low-Earth orbit limb study',
        wavelengthBasis: 'True-Color Optical',
      },
      {
        src: '/images/eclipse.png',
        title: 'The Geometric Coincidence of Total Solar Eclipses',
        caption: 'Because the Sun is ~400 times wider than the Moon and also ~400 times farther away, Earth is the only rocky planet in the Solar System where total eclipses unveil the solar corona.',
        provenance: 'Original Conceptual Rendering · Total solar eclipse corona plate',
        wavelengthBasis: 'High-Dynamic-Range White-Light Corona',
      },
    ],
    relatedIds: ['lunar-south-pole', 'mars', 'proxima-b'],
  },
  {
    id: 'lunar-south-pole',
    name: 'Luna (Shackleton South Polar Basin)',
    catalogDesignation: 'SOL-IIIa · JPL HORIZONS 301 · 89.9°S 0.0°E',
    category: 'Moon',
    subtype: 'Differentiated Terrestrial Satellite (Polar Cold Traps)',
    constellationOrSystem: 'Earth-Moon Barycentric System',
    ra: 'Variable (Geocentric Orbit)',
    dec: 'Inclination 5.145° to Ecliptic (1.54° axial tilt)',
    distanceDisplay: '384,400 km mean center-to-center (0.00257 AU)',
    distanceLightYears: 0.0000000406,
    lightTravelTime: '1.282 seconds',
    earthScaleRatio: '0.2727 × Earth radius (0.0123 M⊕)',
    featured: false,
    summary:
      'At the Moon’s south pole, a 1.54-degree axial tilt creates peaks of near-eternal grazing sunlight immediately adjacent to Permanently Shadowed Regions that have trapped ancient cometary water ice at 40 Kelvin for billions of years.',
    image: '/images/lunar-surface.png',
    imageAlt:
      'Conceptual visualization of the airless lunar south pole crater rim with stark shadows and illuminated regolith ridges against a pitch-black sky',
    imageProvenance:
      'Original Conceptual Visualization · Inspired by LRO (Lunar Reconnaissance Orbiter) LOLA topography & Apollo medium-format photography',
    wavelengthBasis: 'Unfiltered Solar Optical Spectrum in Vacuum',
    measurements: {
      mass: '7.342 × 10²² kg (1.23% of Earth mass)',
      radiusOrSpan: '1,737.4 km mean radius · Shackleton Crater: 21 km wide, 4.2 km deep',
      temperature: '40 K (−233 °C) in Permanently Shadowed Craters · 390 K equatorial noon',
      rotationOrPeriod: '27.32166 days synchronous rotation & sidereal orbit',
      apparentMagnitude: '−12.74 mean full Moon',
      gravityOrEscape: '1.622 m/s² surface gravity (0.165 g) · 2.38 km/s escape velocity',
    },
    scientificExplanation: [
      'Formed approximately 4.51 billion years ago from the debris disk of a giant impact between proto-Earth and the Mars-sized planetesimal Theia, the Moon is an ancient, airless archive of inner Solar System bombardment. While the equatorial Maria explored by Apollo 11 through 17 are vast flood-basalt plains, the lunar south pole sits on the rim of the colossal 2,500-kilometer South Pole–Aitken (SPA) basin—the largest, oldest, and deepest impact structure on the Moon.',
      'Because the Moon’s rotational axis is tilted by just 1.54 degrees relative to the ecliptic plane (compared to Earth’s 23.4 degrees), the Sun at the lunar poles never rises more than 1.54 degrees above or sinks more than 1.54 degrees below the horizon. High crater rims along Shackleton and Malapert remain bathed in sunlight for 80–90% of the lunar year, offering continuous solar power.',
      'Meanwhile, the floors of polar craters like Shackleton, Haworth, and Shoemaker have not seen direct sunlight for over two billion years. Radiative cooling into deep space drops their surface temperatures below 40 K (−233 °C)—colder than Pluto’s daytime surface—creating cryogenic cold traps that preserve millions of metric tons of water ice, carbon dioxide, and ammonia.',
    ],
    physicalArchitecture: [
      {
        layer: 'Lunar Regolith & Megaregolith',
        composition: 'Impact-pulverized anorthosite, norite, agglutinates, and polar H₂O frost',
        depthOrScale: '4–15 meters fine regolith · 20 km fractured megaregolith',
      },
      {
        layer: 'Anorthositic Highland Crust',
        composition: 'Plagioclase feldspar crystallized from the primordial lunar magma ocean',
        depthOrScale: '34 to 43 km mean crustal thickness (GRAIL gravity data)',
      },
      {
        layer: 'Olivine-Pyroxene Mantle & Partial Melt Zone',
        composition: 'Mafic silicate mantle with a viscous partial-melt boundary at base',
        depthOrScale: '~1,350 km depth',
      },
      {
        layer: 'Small Metallic Iron Core',
        composition: 'Solid inner core (~240 km) and fluid outer core (~330 km radius)',
        depthOrScale: 'Central 350 km radius (~1–2% of lunar mass)',
      },
    ],
    discovery: {
      discoverer: 'Prehistoric · Polar ice confirmed by LCROSS & Chandrayaan-1 M³',
      year: '1609 (Galileo topography) / 2009 (LCROSS polar water plume)',
      method: 'Laser altimetry, neutron spectroscopy, and kinetic impact spectroscopy',
      milestones: [
        {
          year: '1609',
          observerOrMission: 'Galileo Galilei',
          finding: 'Sketched lunar craters and mountain shadows along the terminator, proving the Moon is a rugged rocky world like Earth.',
        },
        {
          year: '1969–1972',
          observerOrMission: 'Apollo 11–17 Missions',
          finding: 'Twelve astronauts walked on the Moon, returning 382 kg of lunar rock and soil that established the solar system cratering chronology.',
        },
        {
          year: '2009',
          observerOrMission: 'NASA LCROSS & ISRO Chandrayaan-1',
          finding: 'Directly detected water-ice absorption bands and excavated a 5.6%-water plume from the permanently shadowed Cabeus crater.',
        },
        {
          year: '2023',
          observerOrMission: 'ISRO Chandrayaan-3 (Vikram & Pragyan)',
          finding: 'Completed the first soft landing in the lunar south polar region at 69.37°S, conducting in-situ laser and alpha-particle element analysis.',
        },
      ],
    },
    gallery: [
      {
        src: '/images/lunar-surface.png',
        title: 'Grazing Illumination Along the South Polar Rim',
        caption: 'With zero atmosphere to scatter light, sunlit anorthositic boulder ridges stand in razor-sharp contrast against pitch-black Permanently Shadowed Regions.',
        provenance: 'Original Conceptual Rendering · Lunar south polar terminator study',
        wavelengthBasis: 'Panchromatic / Natural Solar Spectrum',
      },
      {
        src: '/images/astronaut-silhouette.png',
        title: 'Human Presence on the Polar Frontier',
        caption: 'Future surface expeditions to the South Pole–Aitken basin operate in permanent low-angle twilight.',
        provenance: 'Original Conceptual Rendering · Documentary astronaut silhouette study',
        wavelengthBasis: 'Anamorphic Optical Continuum',
      },
    ],
    relatedIds: ['earth', 'mars', 'europa'],
  },
  {
    id: 'betelgeuse',
    name: 'Betelgeuse (Alpha Orionis)',
    catalogDesignation: 'α Orionis · HD 39801 · HIP 27989',
    category: 'Star',
    subtype: 'Red Supergiant Star (M1–M2 Ia-ab)',
    constellationOrSystem: 'Orion (Orion OB1 Association Runaway)',
    ra: '05h 55m 10.305s',
    dec: '+07° 24′ 25.43″',
    distanceDisplay: '548 light-years (~168 parsecs)',
    distanceLightYears: 548,
    lightTravelTime: '548 years',
    earthScaleRatio: '764 × Solar radius (If placed at the Sun, its photosphere would engulf Mars)',
    featured: false,
    summary:
      'A bloated, convective red supergiant nearing the end of its nuclear life—so physically vast that its boiling surface granules rival the orbit of Earth and its circumstellar dust ejections intermittently dim its light across the winter sky.',
    image: '/images/star-field.png',
    imageAlt:
      'Conceptual astrophotographic star field showcasing luminous warm amber-red supergiant stars alongside blue-white and silver stellar populations',
    imageProvenance:
      'Original Conceptual Visualization · Inspired by ESO VLT SPHERE adaptive optics and deep-field stellar astrophotography',
    wavelengthBasis: 'Optical B-V-R Broadband Spectral Color Balance',
    measurements: {
      mass: '16.5 to 19.0 Solar masses (M☉ initial ~20 M☉)',
      radiusOrSpan: '764 (+116 / −62) Solar radii (~3.55 AU diameter)',
      temperature: '3,600 ± 200 K effective photospheric temperature',
      rotationOrPeriod: '~400-day fundamental radial pulsation + ~2,100-day long secondary period',
      apparentMagnitude: '+0.0 to +1.64 (semiregular variable; reached +1.61 in 2020 Great Dimming)',
      gravityOrEscape: 'log g ≈ −0.5 cgs (surface gravity ~30,000× weaker than Earth)',
    },
    scientificExplanation: [
      'Betelgeuse (Alpha Orionis) is an evolved red supergiant only 8 to 10 million years old. Because it was born with nearly twenty times the mass of the Sun, it burned through its core hydrogen fuel at a prodigiously fast rate and has now expanded into a tenuous, convective envelope spanning roughly 764 solar radii. Placed at the center of our Solar System, its photosphere would swallow Mercury, Venus, Earth, and Mars, reaching nearly to the asteroid belt.',
      'Unlike the Sun, which has millions of small rice-sized convection granules on its surface, Betelgeuse’s ultra-low surface gravity produces monster convective cells—each spanning up to 60% of the star’s radius. In late 2019 and early 2020, Betelgeuse underwent the historic "Great Dimming," losing over two-thirds of its visible brightness. Observations by the Hubble Space Telescope and ESO’s Very Large Telescope revealed that a giant convective plume had erupted from its southern hemisphere, cooling into an opaque cloud of silicate and alumina dust that temporarily eclipsed the star’s face.',
      'Currently fusing helium into carbon and oxygen in its core, Betelgeuse will eventually burn heavier elements (neon, magnesium, silicon) over progressively shorter timescales until its iron core collapses in a Type II-P supernova within the next 100,000 years—shining as brightly as the half-Moon in Earth’s daytime and nighttime sky for months while posing zero radiation hazard at 548 light-years.'
    ],
    physicalArchitecture: [
      {
        layer: 'Circumstellar Dust & Molécular Shells (MOLsphere)',
        composition: 'Alumina (Al₂O₃), magnesium silicates, water vapor, and CO gas shells',
        depthOrScale: '1.5 to 50 stellar radii (shed at 10⁻⁶ M☉ per year)',
      },
      {
        layer: 'Extended Convective Photosphere',
        composition: 'Titanium oxide (TiO) absorption bands & giant boiling convection cells',
        depthOrScale: 'Radius ~764 R☉ (~530 million km)',
      },
      {
        layer: 'Hydrogen-Burning Shell & Helium Core',
        composition: 'Triple-alpha fusion of ⁴He into ¹²C and ¹⁶O at ~2 × 10⁸ K',
        depthOrScale: 'Compact central core (~5–6 M☉)',
      },
    ],
    discovery: {
      discoverer: 'Antiquity · First non-solar stellar diameter measured by Michelson & Pease',
      year: '1836 (John Herschel variability) / 1920 (Mount Wilson Interferometer)',
      method: 'Optical Michelson interferometry & extreme adaptive optics',
      milestones: [
        {
          year: '1836',
          observerOrMission: 'Sir John Herschel',
          finding: 'First documented the dramatic brightness variations of Alpha Orionis in Outlines of Astronomy.',
        },
        {
          year: '1920',
          observerOrMission: 'Albert Michelson & Francis Pease',
          finding: 'Used a 20-foot beam interferometer on the 100-inch Mount Wilson telescope to measure Betelgeuse’s 0.047-arcsecond angular diameter—the first star beyond the Sun ever resolved.',
        },
        {
          year: '1995',
          observerOrMission: 'Hubble Space Telescope (FOC)',
          finding: 'Captured the first direct ultraviolet disk image of a star other than the Sun, revealing a massive bright convective hotspot.',
        },
        {
          year: '2020',
          observerOrMission: 'VLT SPHERE & Hubble STIS',
          finding: 'Resolved the dust cloud ejection responsible for the 2019–2020 Great Dimming event.',
        },
      ],
    },
    gallery: [
      {
        src: '/images/star-field.png',
        title: 'Spectral Contrast in Stellar Fields',
        caption: 'Cool M-type supergiants (~3,600 K) radiate predominantly in amber and near-infrared wavelengths, contrasting sharply with 25,000 K blue-white B-type stars.',
        provenance: 'Original Conceptual Rendering · Deep-field stellar spectral study',
        wavelengthBasis: 'True-Color Stellar Blackbody Distribution',
      },
      {
        src: '/images/eclipse.png',
        title: 'Extended Stellar Atmospheres & Mass Loss',
        caption: 'Like solar coronal streamers amplified a millionfold, red supergiants drive dusty winds that seed the interstellar medium with heavy elements.',
        provenance: 'Original Conceptual Rendering · Stellar corona & mass-loss study',
        wavelengthBasis: 'High-Dynamic-Range Optical',
      },
    ],
    relatedIds: ['sirius-system', 'orion-nebula', 'carina-nebula'],
  },
  {
    id: 'orion-nebula',
    name: 'Orion Nebula (Messier 42)',
    catalogDesignation: 'M42 · NGC 1976 · Sharpless 281',
    category: 'Nebula',
    subtype: 'Diffuse H II Emission/Reflection Nebula & Proplyd Nursery',
    constellationOrSystem: 'Orion (Orion Molecular Cloud Complex)',
    ra: '05h 35m 17.3s',
    dec: '-05° 23′ 28″',
    distanceDisplay: '1,344 ± 20 light-years (412 parsecs)',
    distanceLightYears: 1344,
    lightTravelTime: '1,344 years',
    earthScaleRatio: '24 light-years across (~150,000 × Solar System diameter)',
    featured: false,
    summary:
      'The closest region of massive star formation to Earth—a blister on the face of the Orion Molecular Cloud illuminated by the Trapezium cluster and teeming with over 180 evaporating protoplanetary disks.',
    image: '/images/star-forming-region.png',
    imageAlt:
      'Conceptual visualization of a dense dark molecular cloud and proto-stellar nursery with glowing dust edges and nascent bipolar jets',
    imageProvenance:
      'Original Conceptual Visualization · Inspired by HST & JWST NIRCam observations of the Orion Bar and proplyds',
    wavelengthBasis: 'Near-Infrared & Optical Emission Line Composite (Hα, [O III], H₂)',
    measurements: {
      mass: '~2,000 Solar masses (M☉) within the ionized blister',
      radiusOrSpan: '24 light-years (7.4 parsecs) · 65 × 60 arcminutes on sky',
      temperature: '10,000 K in ionized blister · 15–50 K in backing OMC-1 cloud',
      rotationOrPeriod: 'Trapezium cluster age < 300,000 years',
      apparentMagnitude: '+4.0 (naked-eye visible in Orion’s Sword)',
      gravityOrEscape: 'Ionized gas expanding toward observer at ~10 km/s (champagne flow)',
    },
    scientificExplanation: [
      'Situated 1,344 light-years away, the Orion Nebula (Messier 42) is humanity’s premier astrophysical window into how solar systems are born. What we see in optical light is a glowing "blister" on the near side of the much larger, invisible Orion Molecular Cloud 1 (OMC-1). At the heart of the cavity lies the Trapezium Cluster, dominated by Theta¹ Orionis C—an O6pe star shining with 200,000 solar luminosities whose extreme ultraviolet output ionizes the entire nebula.',
      'In 1993, the Hubble Space Telescope discovered over 180 "proplyds" (ionized protoplanetary disks) silhouetted against the glowing nebular background or wrapped in teardrop-shaped photoevaporation cocoons. These observations provided the first direct visual proof that planetary systems routinely coalesce in dust disks around young stars, even in harsh ultraviolet environments.',
      'Recent James Webb Space Telescope observations of the Orion Bar photodissociation region also detected the methyl cation (CH₃⁺) molecule for the first time in interstellar space—a foundational carbon building block that drives complex organic chemistry when irradiated by UV starlight.'
    ],
    physicalArchitecture: [
      {
        layer: 'Trapezium OB Core & Huygens Region',
        composition: 'High-excitation [O III] and Hα plasma illuminated by Theta¹ Orionis C',
        depthOrScale: 'Central 2.5 light-years',
      },
      {
        layer: 'The Orion Bar Photodissociation Wall',
        composition: 'Compressed ridge of polycyclic aromatic hydrocarbons and molecular H₂',
        depthOrScale: '~4 light-year linear escarpment',
      },
      {
        layer: 'Backing OMC-1 & Becklin-Neugebauer Object',
        composition: 'Opaque molecular cloud hosting explosive protostellar outflows',
        depthOrScale: 'Extends tens of light-years behind the optical blister',
      },
    ],
    discovery: {
      discoverer: 'Nicolas-Claude Fabri de Peiresc · Photographed by Henry Draper',
      year: '1610 (First telescopic record) / 1880 (First astrophotograph)',
      method: 'Telescopic visual discovery; first-ever deep-sky emulsion photography',
      milestones: [
        {
          year: '1610',
          observerOrMission: 'Nicolas-Claude Fabri de Peiresc',
          finding: 'First recorded the nebulous nature of the middle "star" in Orion’s sword using a refracting telescope.',
        },
        {
          year: '1880',
          observerOrMission: 'Henry Draper',
          finding: 'Captured a 51-minute dry-plate exposure of M42—the first photograph of a nebula in astronomical history.',
        },
        {
          year: '1993',
          observerOrMission: 'Hubble Space Telescope (C. R. O’Dell)',
          finding: 'Directly imaged silhouettes of protoplanetary disks ("proplyds") around nascent stars.',
        },
        {
          year: '2023',
          observerOrMission: 'JWST PDRs4All Collaboration',
          finding: 'Detected methyl cation (CH₃⁺) in the protoplanetary disk d203-506 inside the Orion Bar.',
        },
      ],
    },
    gallery: [
      {
        src: '/images/star-forming-region.png',
        title: 'Bok Globules & Protostellar Outflows',
        caption: 'Shock-heated Herbig-Haro jets burst at 200 km/s from nascent stars still accreting matter inside dark dust envelopes.',
        provenance: 'Original Conceptual Rendering · Star-forming molecular cloud plate',
        wavelengthBasis: 'Near-Infrared Dust & Jet Emission',
      },
      {
        src: '/images/nebula.png',
        title: 'Photoevaporative Ridges & Ionization Fronts',
        caption: 'Radiation pressure from O-type stars sculpts the surrounding molecular medium into luminous pillars and ridges.',
        provenance: 'Original Conceptual Rendering · H II emission nebula study',
        wavelengthBasis: 'Infrared & Optical Composite',
      },
    ],
    relatedIds: ['carina-nebula', 'betelgeuse', 'sirius-system'],
  },
  {
    id: 'sagittarius-a',
    name: 'Sagittarius A* (Galactic Center)',
    catalogDesignation: 'Sgr A* · Milky Way Dynamical Center',
    category: 'Black Hole',
    subtype: 'Galactic Center Supermassive Black Hole',
    constellationOrSystem: 'Sagittarius (Milky Way Galactic Nucleus)',
    ra: '17h 45m 40.0409s',
    dec: '-29° 00′ 28.118″',
    distanceDisplay: '26,670 light-years (8,178 ± 26 parsecs)',
    distanceLightYears: 26670,
    lightTravelTime: '26,670 years',
    earthScaleRatio: '4.154 million Solar masses packed inside Mercury’s orbital diameter',
    featured: false,
    summary:
      'Our galaxy’s own central gravitational anchor—a 4.15-million-solar-mass supermassive black hole whose existence was proved by tracking the 7,650 km/s periapsis sprint of star S2 over three decades.',
    image: '/images/abstract-deep-space.png',
    imageAlt:
      'Conceptual visualization of the relativistic accretion ring and gravitational shadow of Sagittarius A* at the Milky Way center',
    imageProvenance:
      'Original Conceptual Visualization · Inspired by Event Horizon Telescope 2022 Sgr A* reconstruction & VLT GRAVITY astrometry',
    wavelengthBasis: '1.3 mm (230 GHz) VLBI & Near-Infrared K-Band (2.2 μm) Model',
    measurements: {
      mass: '(4.154 ± 0.014) × 10⁶ Solar masses (M☉)',
      radiusOrSpan: 'Schwarzschild radius ~12.27 million km (0.082 AU · ~17.6 Solar radii)',
      temperature: '> 10¹⁰ K electron temperature in radiatively inefficient accretion flow',
      rotationOrPeriod: 'Innermost stable circular orbit (ISCO) period ~4 to 30 minutes',
      apparentMagnitude: '51.8 ± 2.3 microarcseconds shadow ring diameter (obscured in optical by 30 mag of dust)',
      gravityOrEscape: 'Star S2 reaches 7,650 km/s (2.55% speed of light) at 120 AU periapsis',
    },
    scientificExplanation: [
      'Hidden behind 30 magnitudes of interstellar dust extinction toward the constellation Sagittarius lies Sagittarius A* (Sgr A*), the compact radio source marking the dynamical center of the Milky Way. For decades, Reinhard Genzel and Andrea Ghez used near-infrared adaptive optics at the Very Large Telescope and Keck Observatory to peer through the dust and track the orbits of the "S-stars" swarming around the unseen center.',
      'One star, S2, completes a highly elliptical 16-year orbit that brings it within 120 AU (about 17 light-hours) of Sgr A*, whipping around the invisible mass at 7,650 kilometers per second—over 2.5% of the speed of light. During its 2018 pericenter passage, the VLT GRAVITY interferometer measured both gravitational redshift and Schwarzschild orbital precession in S2’s light, confirming Einstein’s General Relativity in the strong-field regime and earning the 2020 Nobel Prize in Physics.',
      'In May 2022, the Event Horizon Telescope released the first direct horizon-scale image of Sgr A*. Because Sgr A* is 1,500 times less massive than M87*, plasma orbits its event horizon in mere minutes rather than weeks, requiring novel dynamic tomography algorithms to reconstruct its 52-microarcsecond glowing ring.'
    ],
    physicalArchitecture: [
      {
        layer: 'Event Horizon & Photon Ring',
        composition: 'Kerr spacetime boundary with ~52 μas lensed shadow ring',
        depthOrScale: '12.3M km Schwarzschild radius (~52M km shadow diameter)',
      },
      {
        layer: 'Radiatively Inefficient Accretion Flow (RIAF)',
        composition: 'Hot, low-density magnetized plasma fed by Wolf-Rayet stellar winds',
        depthOrScale: '1 to 100 Schwarzschild radii (flaring in X-ray and Near-IR)',
      },
      {
        layer: 'S-Star Cluster & Circum-Nuclear Disk',
        composition: 'Young B-type stars on relativistic Keplerian orbits (S2, S4714, S62)',
        depthOrScale: '0.001 to 0.5 parsecs (~200 to 100,000 AU)',
      },
    ],
    discovery: {
      discoverer: 'Bruce Balick & Robert Brown (Radio) · Reinhard Genzel & Andrea Ghez (Orbits)',
      year: '1974 (Radio source) / 2002 (S2 orbit) / 2022 (EHT shadow image)',
      method: 'Radio interferometry & Near-Infrared adaptive optics astrometry',
      milestones: [
        {
          year: '1974',
          observerOrMission: 'Bruce Balick & Robert Brown (NRAO)',
          finding: 'Discovered an intense, ultra-compact radio source in the core of the Sagittarius A complex.',
        },
        {
          year: '2002–2018',
          observerOrMission: 'Reinhard Genzel (MPE/VLT) & Andrea Ghez (UCLA/Keck)',
          finding: 'Tracked full 16-year orbits of star S2, proving a 4.15-million-solar-mass supermassive black hole.',
        },
        {
          year: '2022',
          observerOrMission: 'Event Horizon Telescope Collaboration',
          finding: 'Unveiled the first direct millimeter-wave image of the shadow and accretion ring of Sgr A*.',
        },
      ],
    },
    gallery: [
      {
        src: '/images/abstract-deep-space.png',
        title: 'Relativistic Plasma Ring at the Galactic Core',
        caption: 'Despite being 1,500 times less massive than M87*, Sgr A* is 2,000 times closer, giving both black holes nearly identical ~40–50 microarcsecond angular sizes in Earth’s sky.',
        provenance: 'Original Conceptual Rendering · Black hole accretion ring visualization',
        wavelengthBasis: '230 GHz Synchrotron Model',
      },
      {
        src: '/images/observatory.png',
        title: 'Southern Hemisphere Adaptive Optics & Interferometry',
        caption: 'Passing directly overhead in the Southern Hemisphere winter, Sgr A* is ideally positioned for Chilean observatories like the VLT and ALMA.',
        provenance: 'Original Conceptual Rendering · Andean observatory plate',
        wavelengthBasis: 'Astronomical Twilight Continuum',
      },
    ],
    relatedIds: ['m87-star', 'andromeda-galaxy', 'sombrero-galaxy'],
  },
  {
    id: 'sirius-system',
    name: 'Sirius A & Sirius B',
    catalogDesignation: 'α Canis Majoris · GJ 244 AB · HIP 32349',
    category: 'Star',
    subtype: 'Main-Sequence A0m Star + Carbon-Oxygen White Dwarf Binary',
    constellationOrSystem: 'Canis Major (Solar Neighborhood)',
    ra: '06h 45m 08.917s',
    dec: '-16° 42′ 58.02″',
    distanceDisplay: '8.60 ± 0.04 light-years (2.637 parsecs)',
    distanceLightYears: 8.6,
    lightTravelTime: '8 years 7 months',
    earthScaleRatio: 'Sirius B packs 1.018 Solar masses into a sphere 0.92 × Earth’s diameter',
    featured: false,
    summary:
      'The brightest star in Earth’s night sky paired in a 50-year orbit with Sirius B—an Earth-sized stellar corpse of electron-degenerate carbon and oxygen where a single cubic centimeter of matter weighs 2.4 metric tons.',
    image: '/images/star-field.png',
    imageAlt:
      'Conceptual deep-field stellar plate highlighting brilliant blue-white A-type stars and faint white-dwarf companions',
    imageProvenance:
      'Original Conceptual Visualization · Inspired by HST WFPC2 astrometric & spectroscopic observations of α CMa AB',
    wavelengthBasis: 'Optical Broadband (U-B-V Photometric Color)',
    measurements: {
      mass: 'Sirius A: 2.063 M☉ · Sirius B: 1.018 M☉ (formerly a ~5 M☉ B-type star)',
      radiusOrSpan: 'Sirius A: 1.711 R☉ · Sirius B: 0.0084 R☉ (11,680 km diameter ≈ 0.92 Earth)',
      temperature: 'Sirius A: 9,940 K · Sirius B: 25,200 K surface temperature',
      rotationOrPeriod: '50.1284-year binary orbit (eccentricity e = 0.591 · 8 to 31.5 AU separation)',
      apparentMagnitude: 'Sirius A: −1.46 · Sirius B: +8.44 (10,000× fainter in optical)',
      gravityOrEscape: 'Sirius B surface gravity log g = 8.57 (~350,000 × Earth gravity)',
    },
    scientificExplanation: [
      'At just 8.6 light-years from the Sun, Sirius (Alpha Canis Majoris) shines at apparent magnitude −1.46—nearly twice as bright as Canopus, the second-brightest star in the night sky. Yet its greatest contribution to physics came from its unseen companion. In 1844, Friedrich Bessel noticed that Sirius traced a subtle sinusoidal wave across the sky over a 50-year period, deducing the presence of an invisible gravitational partner.',
      'When Alvan Graham Clark finally spotted "the Pup" (Sirius B) in 1862 while testing an 18.5-inch refractor lens, astronomers assumed the faint companion must be a cool, dim red star. Instead, in 1915 Walter Adams obtained a spectrum of Sirius B at Mount Wilson and discovered it was scorching hot—25,200 K, hotter than Sirius A itself. For a 25,200 K body to be 10,000 times fainter than Sirius A while exerting a one-solar-mass gravitational pull, its surface area had to be minuscule: roughly the size of the planet Earth.',
      'Sirius B became the archetype of a new state of matter: the white dwarf. Having exhausted its nuclear fuel around 120 million years ago, the former 5-solar-mass star shed its outer layers and collapsed until quantum mechanical electron degeneracy pressure—governed by the Pauli Exclusion Principle and Subrahmanyan Chandrasekhar’s 1.44 M☉ limit—halted its gravitational collapse. Its intense surface gravity (350,000 g) measurably stretches escaping photons via Einsteinian gravitational redshift.'
    ],
    physicalArchitecture: [
      {
        layer: 'Sirius A (Primary A0m/A1V Star)',
        composition: 'Metallic-line main-sequence hydrogen-fusing star (25.4 L☉ luminosity)',
        depthOrScale: 'Radius 1.711 R☉ (1.19 million km)',
      },
      {
        layer: 'Sirius B Pure Hydrogen Atmosphere (DA2)',
        composition: 'Gravitational settling leaves a thin, ultra-pure hydrogen photosphere',
        depthOrScale: 'Scale height of only ~50 meters under 350,000 g gravity',
      },
      {
        layer: 'Sirius B Electron-Degenerate C-O Core',
        composition: 'Crystallizing carbon and oxygen ions in a relativistic Fermi electron sea',
        depthOrScale: '5,840 km radius · Mean density ~2.4 × 10⁶ g/cm³',
      },
    ],
    discovery: {
      discoverer: 'Friedrich Bessel (Astrometric orbit) · Alvan Graham Clark (Optical)',
      year: '1844 (Prediction) / 1862 (Visual discovery) / 1915 (White dwarf nature)',
      method: 'Proper-motion astrometry, refracting telescopy, and gravitational redshift spectroscopy',
      milestones: [
        {
          year: '1844',
          observerOrMission: 'Friedrich Wilhelm Bessel',
          finding: 'Predicted an unseen companion to Sirius from 50-year periodic perturbations in its proper motion.',
        },
        {
          year: '1862',
          observerOrMission: 'Alvan Graham Clark',
          finding: 'Directly resolved Sirius B while testing the 18.5-inch Dearborn Observatory refractor lens.',
        },
        {
          year: '1915–1925',
          observerOrMission: 'Walter S. Adams (Mount Wilson)',
          finding: 'Measured Sirius B’s high temperature and gravitational redshift, confirming Eddington’s theory of ultra-dense degenerate stars.',
        },
        {
          year: '2005–2017',
          observerOrMission: 'Hubble Space Telescope (STIS/WFC3)',
          finding: 'Measured Sirius B’s gravitational redshift (80.65 ± 0.77 km/s equivalent) and orbital mass to better than 1% precision.',
        },
      ],
    },
    gallery: [
      {
        src: '/images/star-field.png',
        title: 'Luminosity Contrast in Binary Systems',
        caption: 'Resolving a white dwarf beside a brilliant A-type primary requires extreme dynamic range, as the primary outshines its Earth-sized companion by 10,000 to 1 in visible light.',
        provenance: 'Original Conceptual Rendering · Stellar field & diffraction study',
        wavelengthBasis: 'Optical Broadband',
      },
    ],
    relatedIds: ['betelgeuse', 'proxima-b', 'orion-nebula'],
  },
  {
    id: 'sombrero-galaxy',
    name: 'Sombrero Galaxy (Messier 104)',
    catalogDesignation: 'M104 · NGC 4594 · PGC 42407',
    category: 'Galaxy',
    subtype: 'Unbarred Spiral / Lenticular Galaxy (SA(s)a / E-S0)',
    constellationOrSystem: 'Virgo (Virgo II Southern Extension)',
    ra: '12h 39m 59.4s',
    dec: '-11° 37′ 23″',
    distanceDisplay: '31.1 ± 1.0 million light-years (9.55 megaparsecs)',
    distanceLightYears: 31100000,
    lightTravelTime: '31.1 million years',
    earthScaleRatio: '~95,000 light-years diameter · 1 billion M☉ central black hole',
    featured: false,
    summary:
      'Viewed just six degrees north of its equatorial plane, Messier 104 pairs a vast, luminous elliptical-like stellar bulge swarming with 2,000 globular clusters against a razor-sharp symmetric ring of cold dust and mid-infrared polycyclic hydrocarbons.',
    image: '/images/distant-galaxy.png',
    imageAlt:
      'Conceptual visualization of an inclined spiral galaxy with a prominent luminous central bulge and symmetric dark dust lanes',
    imageProvenance:
      'Original Conceptual Visualization · Inspired by HST ACS optical and JWST MIRI mid-infrared observations of M104',
    wavelengthBasis: 'Optical & Mid-Infrared Dust Continuum Composite',
    measurements: {
      mass: '~8 × 10¹¹ Solar masses (M☉) total · ~1 × 10⁹ M☉ central black hole',
      radiusOrSpan: '95,000 light-years diameter (~29 kiloparsecs)',
      temperature: 'Low-Ionization Nuclear Emission-Line Region (LINER) core',
      rotationOrPeriod: '+1,024 ± 5 km/s heliocentric recession velocity',
      apparentMagnitude: '+8.0 visual (absolute magnitude M_V = −21.9)',
      gravityOrEscape: 'Hosts ~2,000 globular clusters (10× the Milky Way’s population)',
    },
    scientificExplanation: [
      'Located 31.1 million light-years away along the southern boundary of the Virgo Cluster, the Sombrero Galaxy (Messier 104) is a hybrid morphological masterpiece. Its outer disk resembles a tightly wound SA(s)a spiral viewed nearly edge-on (inclined 84°), while its vast, smooth stellar spheroid and rich globular cluster system (~2,000 clusters) are characteristic of a giant elliptical galaxy.',
      'In 1912, Vesto Slipher at Lowell Observatory measured the Doppler redshift of M104, finding it receding from Earth at over 1,000 kilometers per second—one of the earliest radial velocity measurements demonstrating the expansion of the universe.',
      'In late 2024, the James Webb Space Telescope’s Mid-Infrared Instrument (MIRI) transformed our view of M104: at 7.7 to 15 microns, the blinding old stars of the giant central bulge fade to a pinpoint core, revealing the outer dust ring in clumpy, intricate detail along with a flat inner stellar disk surrounding its one-billion-solar-mass supermassive black hole.'
    ],
    physicalArchitecture: [
      {
        layer: 'LINER Active Galactic Nucleus & 10⁹ M☉ Black Hole',
        composition: 'One of the most massive black holes in the local 10-megaparsec volume',
        depthOrScale: 'Central parsec nuclear core',
      },
      {
        layer: 'Spheroidal Bulge & Globular Cluster Halo',
        composition: 'Metal-rich old stellar population and ~2,000 globular clusters',
        depthOrScale: 'Spans > 50,000 light-years above and below disk plane',
      },
      {
        layer: 'Symmetric Outer Dust & Cold Gas Ring',
        composition: 'Polycyclic aromatic hydrocarbons (PAHs), silicate dust, H I and CO gas',
        depthOrScale: 'Ring radius ~30,000 to 45,000 light-years',
      },
    ],
    discovery: {
      discoverer: 'Pierre Méchain · Redshift measured by Vesto Slipher',
      year: 'May 11, 1781 (Méchain) / 1912 (Slipher Redshift)',
      method: 'Visual comet hunting; photographic slit spectroscopy; space infrared imaging',
      milestones: [
        {
          year: '1781',
          observerOrMission: 'Pierre Méchain & Charles Messier',
          finding: 'Discovered by Méchain and handwritten by Messier into his personal copy of the catalog.',
        },
        {
          year: '1912',
          observerOrMission: 'Vesto Melvin Slipher (Lowell Observatory)',
          finding: 'Measured a +1,000 km/s spectral redshift in M104, providing crucial evidence that spiral nebulae lie outside the Milky Way in an expanding cosmos.',
        },
        {
          year: '2003–2024',
          observerOrMission: 'Hubble ACS, Spitzer IRAC & JWST MIRI',
          finding: 'Resolved the clumpy mid-infrared PAH structure of the outer dust ring and the smooth inner stellar disk.',
        },
      ],
    },
    gallery: [
      {
        src: '/images/distant-galaxy.png',
        title: 'Galactic Spheroid & Equatorial Dust Ring',
        caption: 'Symmetric lanes of cold interstellar dust silhouette sharply against the warm light of hundreds of billions of older K and M giant stars.',
        provenance: 'Original Conceptual Rendering · Spiral/lenticular galaxy plate',
        wavelengthBasis: 'Optical / Near-Infrared Composite',
      },
    ],
    relatedIds: ['andromeda-galaxy', 'm87-star', 'sagittarius-a'],
  },
];
