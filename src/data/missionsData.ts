export type MissionCategory =
  | 'Deep-Space Probe'
  | 'Space Observatory'
  | 'Planetary Orbiter & Rover'
  | 'Ground Observatory';

export type MissionStatus =
  | 'Active'
  | 'En Route'
  | 'Completed Legacy';

export interface MissionEntry {
  id: string;
  name: string;
  designation: string;
  agency: string;
  category: MissionCategory;
  status: MissionStatus;
  launchYear: number;
  launchDate: string;
  operationalWindow: string;
  targetOrRegime: string;
  currentDistanceOrLocation: string;
  primaryInstruments: string[];
  headlineAchievement: string;
  summary: string;
  scientificLog: string[];
  telemetryMetrics: {
    label: string;
    value: string;
  }[];
  image: string;
  imageCaption: string;
  imageProvenance: string;
  relatedCelestialId: string;
}

export interface AstronomicalEvent {
  id: string;
  dateDisplay: string;
  epochUtc: string;
  title: string;
  eventType: 'Total Eclipse' | 'Planetary Opposition' | 'Meteor Shower Peak' | 'Spacecraft Flyby' | 'Conjunction';
  visibilityRegion: string;
  coordinatesOrElongation: string;
  description: string;
  relatedCelestialId: string;
}

export const MISSIONS_DATA: MissionEntry[] = [
  {
    id: 'voyager-interstellar',
    name: 'Voyager 1 & Voyager 2 Interstellar Mission',
    designation: 'MARINER JUPITER-SATURN 1977 · DSN 31 / 32',
    agency: 'NASA / JPL-Caltech',
    category: 'Deep-Space Probe',
    status: 'Active',
    launchYear: 1977,
    launchDate: 'August 20 & September 5, 1977',
    operationalWindow: '1977 – Present (49+ Years Continuous Telemetry)',
    targetOrRegime: 'Jovian, Saturnian, Uranian, Neptunian Systems & Local Interstellar Medium',
    currentDistanceOrLocation: '166.4 AU (24.9 billion km · 23h 04m one-way light time)',
    primaryInstruments: [
      'Triaxial Fluxgate Magnetometer (MAG)',
      'Cosmic Ray Subsystem (CRS)',
      'Low-Energy Charged Particle (LECP)',
      'Plasma Wave Subsystem (PWS)',
    ],
    headlineAchievement:
      'Completed the once-every-176-year Grand Tour of all four giant outer planets before becoming the first human-made spacecraft to cross the Heliopause into interstellar space.',
    summary:
      'Launched sixteen days apart in late summer 1977, the twin Voyager spacecraft exploited a rare geometric alignment of Jupiter, Saturn, Uranus, and Neptune that occurs only once every 176 years.',
    scientificLog: [
      'Between 1979 and 1989, Voyager 1 and 2 revolutionized planetary science: discovering active sulfur volcanism on Jupiter’s moon Io, inferring the subsurface ocean of Europa, mapping the complex braided rings and hydrocarbon haze of Saturn and Titan, and executing humanity’s only close reconnaissance of the ice giants Uranus (1986) and Neptune and its cryovolcanic moon Triton (1989).',
      'On August 25, 2012, at a distance of 121.6 AU from the Sun, Voyager 1 crossed the Heliopause—the boundary where the hot, outward-flowing solar wind gives way to the cold, dense plasma and galactic cosmic rays of the local interstellar medium. Voyager 2 followed across the southern heliopause on November 5, 2018 at 119 AU.',
      'Powered by three Plutonium-238 radioisotope thermoelectric generators (RTGs) whose electrical output decays by ~4 watts per year, both probes continue to transmit S-band and X-band telemetry at 160 bits per second to the 70-meter dishes of NASA’s Deep Space Network.'
    ],
    telemetryMetrics: [
      { label: 'Heliocentric Velocity', value: '16.99 km/s (3.57 AU/yr)' },
      { label: 'Signal Power at Earth', value: '~10⁻¹⁹ Watts (22.4 W transmitter)' },
      { label: 'Heliopause Crossing', value: '121.6 AU (V1) · 119.0 AU (V2)' },
      { label: 'Onboard Archival Artifact', value: '12-inch Gold-Plated Copper Phonograph' },
    ],
    image: '/images/spacecraft.png',
    imageCaption: 'High-gain parabolic antenna and magnetometer boom architecture required for outer-solar-system telemetry.',
    imageProvenance: 'Original AI-Generated Conceptual Rendering · Outer-planet robotic spacecraft engineering study',
    relatedCelestialId: 'saturn',
  },
  {
    id: 'hubble-space-telescope',
    name: 'Hubble Space Telescope (HST)',
    designation: 'HST · NSSDC 1990-037B · STS-31',
    agency: 'NASA / ESA / STScI',
    category: 'Space Observatory',
    status: 'Active',
    launchYear: 1990,
    launchDate: 'April 24, 1990',
    operationalWindow: '1990 – Present (36+ Years in Low-Earth Orbit)',
    targetOrRegime: 'Near-Ultraviolet, Visible, and Near-Infrared Cosmos (115–1700 nm)',
    currentDistanceOrLocation: 'Low-Earth Orbit (~515 km altitude · 28.5° inclination)',
    primaryInstruments: [
      'Wide Field Camera 3 (WFC3)',
      'Advanced Camera for Surveys (ACS)',
      'Cosmic Origins Spectrograph (COS)',
      'Space Telescope Imaging Spectrograph (STIS)',
    ],
    headlineAchievement:
      'Orbited above Earth’s turbulent atmosphere to pin down the Hubble Constant via Cepheid variables, image protoplanetary disks in Orion, and unveil 10,000 galaxies in the Hubble Ultra Deep Field.',
    summary:
      'Deployed by Space Shuttle Discovery in 1990 and upgraded across five astronaut servicing missions between 1993 and 2009, the 2.4-meter Hubble Space Telescope remains humanity’s only premier ultraviolet-optical space observatory.',
    scientificLog: [
      'After Servicing Mission 1 installed the COSTAR corrective optics and WFPC2 in December 1993 to remedy a 2.2-micrometer spherical aberration in its primary mirror, Hubble delivered decades of foundational discoveries across every branch of astrophysics.',
      'In December 1995, Director Robert Williams pointed Hubble at an apparently empty patch of sky in Ursa Major for ten consecutive days. The resulting Hubble Deep Field revealed over 3,000 distant galaxies stretching back more than 12 billion years, establishing deep-field cosmology.',
      'Hubble’s high-resolution spectroscopy of nuclear gas disks in galaxies such as M87 and M84 proved that supermassive black holes reside at the centers of nearly all massive galaxies, while its Type Ia supernova observations contributed directly to the 1998 discovery of accelerating cosmic expansion (Dark Energy).'
    ],
    telemetryMetrics: [
      { label: 'Primary Mirror Aperture', value: '2.4 meters (f/24 Ritchey–Chrétien)' },
      { label: 'Pointing Stability', value: '0.007 arcseconds over 24 hours' },
      { label: 'Peer-Reviewed Papers', value: '> 21,000 published studies' },
      { label: 'Orbital Period', value: '95.4 minutes (~15 orbits/day)' },
    ],
    image: '/images/distant-galaxy.png',
    imageCaption: 'High-resolution optical and ultraviolet space telescopy resolves star-forming spiral arms and dust lanes across millions of light-years.',
    imageProvenance: 'Original AI-Generated Conceptual Rendering · Extragalactic spiral disk study',
    relatedCelestialId: 'andromeda-galaxy',
  },
  {
    id: 'cassini-huygens',
    name: 'Cassini–Huygens Saturn Orbiter & Titan Probe',
    designation: 'CASSINI-HUYGENS · NSSDC 1997-061A',
    agency: 'NASA / ESA / ASI',
    category: 'Planetary Orbiter & Rover',
    status: 'Completed Legacy',
    launchYear: 1997,
    launchDate: 'October 15, 1997',
    operationalWindow: '1997 – September 15, 2017 (13 Years at Saturn)',
    targetOrRegime: 'Saturnian System, Main Rings, Titan, and Enceladus',
    currentDistanceOrLocation: 'Vaporized in Saturn’s upper atmosphere (Grand Finale, Sept 15, 2017)',
    primaryInstruments: [
      'Imaging Science Subsystem (ISS NAC/WAC)',
      'Ion and Neutral Mass Spectrometer (INMS)',
      'Cassini Radar (Titan Synthetic Aperture)',
      'Huygens Atmospheric Structure & Descent Imager',
    ],
    headlineAchievement:
      'Executed 294 orbits of Saturn, landed the ESA Huygens probe on the methane-soaked floodplain of Titan, and flew directly through the cryovolcanic water plumes of Enceladus.',
    summary:
      'A flagship collaboration between NASA, the European Space Agency, and the Italian Space Agency, Cassini–Huygens transformed Saturn and its moons from frigid outer worlds into dynamic ocean-bearing environments.',
    scientificLog: [
      'Following gravity-assist flybys of Venus, Earth, and Jupiter, Cassini entered Saturn orbit on July 1, 2004. On January 14, 2005, the ESA-built Huygens probe parachuted through Titan’s opaque orange nitrogen-methane haze, touching down on a damp surface of water-ice cobbles and imaging dendritic river channels carved by liquid methane rain.',
      'Later in 2005, Cassini discovered active geysers erupting from four warm parallel fractures ("Tiger Stripes") near the south pole of the 500-kilometer moon Enceladus. Flying directly through the plumes at under 50 km altitude, Cassini’s mass spectrometers detected water vapor, sodium salts, complex organic macromolecules, molecular hydrogen (H₂), and nanometer-sized silica grains—diagnostic proof of active alkaline hydrothermal vents on Enceladus’s rocky seafloor.',
      'To protect the potentially habitable oceans of Enceladus and Titan from biological contamination as its hydrazine propellant ran low, mission controllers steered Cassini into a 22-orbit "Grand Finale" diving between Saturn’s cloud tops and innermost D Ring before atmospheric entry on September 15, 2017.'
    ],
    telemetryMetrics: [
      { label: 'Total Saturn Orbits', value: '294 orbits (7.9 billion km traveled)' },
      { label: 'Targeted Moon Flybys', value: '162 (including 127 Titan, 23 Enceladus)' },
      { label: 'Huygens Landing Site', value: '10.2°S, 192.3°W (Adiri / Xanadu border)' },
      { label: 'Images Returned', value: '453,048 calibrated scientific frames' },
    ],
    image: '/images/saturn-rings.png',
    imageCaption: 'High-phase solar occultation geometry pioneered by Cassini reveals fine icy ring waves and planetary shadows.',
    imageProvenance: 'Original AI-Generated Conceptual Rendering · Saturnian ring occultation study',
    relatedCelestialId: 'saturn',
  },
  {
    id: 'new-horizons',
    name: 'New Horizons Pluto & Kuiper Belt Mission',
    designation: 'NEW HORIZONS · NSSDC 2006-001A',
    agency: 'NASA / Johns Hopkins APL / SwRI',
    category: 'Deep-Space Probe',
    status: 'Active',
    launchYear: 2006,
    launchDate: 'January 19, 2006',
    operationalWindow: '2006 – Present (Extended Kuiper Belt Operations)',
    targetOrRegime: 'Pluto–Charon Binary System & Cold Classical Kuiper Belt (60+ AU)',
    currentDistanceOrLocation: '61.2 AU from Earth (~9.15 billion km · 8h 28m light time)',
    primaryInstruments: [
      'Long Range Reconnaissance Imager (LORRI)',
      'Ralph / Multispectral Visible Imaging Camera (MVIC)',
      'Alice Ultraviolet Imaging Spectrometer',
      'Student Dust Counter (SDC)',
    ],
    headlineAchievement:
      'Departed Earth at the fastest launch velocity in spaceflight history (16.26 km/s) to unveil convecting nitrogen glaciers on Pluto and the pristine contact-binary planetesimal Arrokoth.',
    summary:
      'New Horizons completed the initial reconnaissance of the classical Solar System in July 2015 before continuing deep into the primordial Kuiper Belt.',
    scientificLog: [
      'For eighty-five years after Clyde Tombaugh discovered Pluto in 1930, even the Hubble Space Telescope could resolve only blurred albedo patches across its disk. On July 14, 2015, New Horizons streaked past Pluto at 13.78 km/s just 12,500 kilometers above the surface.',
      'Instead of an inert cratered iceball, LORRI and Ralph revealed Sputnik Planitia—a 1,000-kilometer-wide basin of actively convecting solid nitrogen, carbon monoxide, and methane ices bordered by 3.5-kilometer-high water-ice mountains and multi-layered blue atmospheric tholin haze.',
      'On January 1, 2019, at 43.4 AU from the Sun, New Horizons executed the farthest planetary flyby in history past 486958 Arrokoth (2014 MU69), revealing a 36-kilometer flattened contact binary formed by the gentle, low-velocity merger of two primordial pebbles in the solar nebula 4.5 billion years ago.'
    ],
    telemetryMetrics: [
      { label: 'Earth Departure Speed', value: '16.26 km/s (58,536 km/h)' },
      { label: 'Pluto Closest Approach', value: '12,500 km (July 14, 2015 11:49 UTC)' },
      { label: 'Arrokoth Flyby Distance', value: '3,538 km at 43.4 AU (Jan 1, 2019)' },
      { label: 'Optical Resolution', value: '76 meters/pixel best Pluto mosaic' },
    ],
    image: '/images/planetary-surface.png',
    imageCaption: 'Grazing illumination across outer-system icy and rocky worlds exposes fault scarps and sublimating frost plains.',
    imageProvenance: 'Original AI-Generated Conceptual Rendering · Low-insolation planetary terminator study',
    relatedCelestialId: 'europa',
  },
  {
    id: 'curiosity-perseverance',
    name: 'Mars Science Laboratory (Curiosity) & Perseverance',
    designation: 'MSL / MARS 2020 · GALE & JEZERO CRATERS',
    agency: 'NASA / JPL-Caltech',
    category: 'Planetary Orbiter & Rover',
    status: 'Active',
    launchYear: 2011,
    launchDate: 'Nov 26, 2011 (Curiosity) & July 30, 2020 (Perseverance)',
    operationalWindow: '2012 – Present (Surface Mobile Geochemistry Laboratories)',
    targetOrRegime: 'Aeolis Mons (Gale Crater, 4.5°S) & Jezero River Delta (18.4°N)',
    currentDistanceOrLocation: 'Martian Surface (1.52 AU · > 32 km & > 30 km odometry)',
    primaryInstruments: [
      'Sample Analysis at Mars (SAM) GC-MS / TLS',
      'ChemCam & SuperCam Laser-Induced Breakdown Spectrometers',
      'SHERLOC Deep-UV Raman & Fluorescence Spectrometer',
      'PIXL X-Ray Fluorescence Lithochemistry Micro-Mapper',
    ],
    headlineAchievement:
      'Confirmed ancient freshwater lake systems, organic carbon molecules, and seasonal methane variations in Gale Crater while caching titanium sample tubes across the Jezero Crater river delta.',
    summary:
      'Delivered to the Martian surface via supersonic sky-crane descent stages, the nuclear-powered Curiosity and Perseverance rovers operate as robotic field geologists reconstructing Mars’s habitable Noachian past.',
    scientificLog: [
      'Since landing in Gale Crater in August 2012, Curiosity has ascended over 800 vertical meters up the sedimentary flanks of 5.5-kilometer-high Mount Sharp (Aeolis Mons). Its drill samples at Yellowknife Bay proved that Gale Crater hosted a neutral-pH, low-salinity lake containing all key chemical elements (C, H, N, O, P, S) and redox energy gradients required for chemolithoautotrophic microbial life.',
      'Landing in Jezero Crater in February 2021 alongside the Ingenuity Mars Helicopter (which completed 72 powered flights in the 6-millibar atmosphere), Perseverance has traversed an ancient western fan delta where a prehistoric river emptied into a 45-kilometer crater lake.',
      'In July 2024, Perseverance cored the "Cheyava Falls" rock ("Sapphire Canyon" sample) in Neretva Vallis—an ancient mudstone containing organic carbon alongside millimeter-scale "leopard spots" ringed with iron phosphate (vivianite) and iron sulfide (greigite), representing the most compelling potential biosignature rock yet sampled on Mars.'
    ],
    telemetryMetrics: [
      { label: 'Power Source', value: 'MMRTG (4.8 kg PuO₂ · ~110 W electric)' },
      { label: 'Sealed Sample Tubes', value: '28+ Titanium Cores Cached (Perseverance)' },
      { label: 'Ingenuity Rotorcraft Log', value: '72 Flights · 17.0 km · 128.8 Flight Mins' },
      { label: 'Elevation Climbed', value: '> 820 vertical meters up Mount Sharp' },
    ],
    image: '/images/mars-landscape.png',
    imageCaption: 'Curiosity rover looking back across the floor of Gale Crater from the sulfate-bearing strata of Mount Sharp.',
    imageProvenance: 'Authentic Scientific Mission Imagery · NASA/JPL-Caltech Curiosity Rover (PIA24937 Public Domain)',
    relatedCelestialId: 'mars',
  },
  {
    id: 'gaia-astrometry',
    name: 'Gaia Three-Dimensional Galactic Astrometry Mission',
    designation: 'ESA GAIA · COSPAR 2013-074A',
    agency: 'European Space Agency (ESA / DPAC)',
    category: 'Space Observatory',
    status: 'Completed Legacy',
    launchYear: 2013,
    launchDate: 'December 19, 2013',
    operationalWindow: '2013 – January 15, 2025 (Sky Scan Completed · DR4/DR5 Processing)',
    targetOrRegime: 'All-Sky 6D Phase-Space Census of the Milky Way & Local Group',
    currentDistanceOrLocation: 'Heliocentric Disposal Orbit (Departed Sun–Earth L2 in March 2025)',
    primaryInstruments: [
      'Dual Silicon-Carbide Three-Mirror Anastigmat Telescopes',
      '106-CCD Billion-Pixel Focal Plane Array',
      'Blue & Red Low-Resolution Spectrophotometers (BP/RP)',
      'Radial Velocity Spectrometer (RVS)',
    ],
    headlineAchievement:
      'Measured the positions, trigonometric parallaxes, proper motions, and radial velocities of over 1.8 billion stars to microarcsecond precision, uncovering ancient galactic collisions that built the Milky Way.',
    summary:
      'Stationed at the Sun–Earth L2 Lagrange point for over a decade, ESA’s Gaia spacecraft transformed astronomy from two-dimensional sky projections into dynamic, six-dimensional galactic archeology.',
    scientificLog: [
      'By continuously spinning once every six hours and measuring the separation angles between pairs of stars across a one-billion-pixel CCD focal plane, Gaia achieved parallax precision down to 10 microarcseconds—equivalent to measuring the diameter of a human hair at a distance of 1,000 kilometers.',
      'Gaia Data Releases (DR2 and DR3) revealed that the Milky Way did not evolve in quiet isolation: around 8 to 10 billion years ago, our galaxy collided with a massive dwarf galaxy dubbed "Gaia-Enceladus" (the Gaia Sausage), whose shattered stars still form a counter-rotating halo through the solar neighborhood.',
      'Gaia also discovered dormant stellar-mass black holes (including Gaia BH1 at 1,560 light-years and the 33-solar-mass Gaia BH3) by detecting the tiny astrometric wobble they induce in their normal companion stars.'
    ],
    telemetryMetrics: [
      { label: 'Stars Cataloged', value: '1,811,709,771 sources (Gaia DR3)' },
      { label: 'Focal Plane Detector', value: '106 CCDs (937.8 Megapixels total)' },
      { label: 'Parallax Precision', value: '7–20 microarcseconds (bright stars)' },
      { label: 'Total Observations', value: '> 3 trillion individual transits' },
    ],
    image: '/images/star-field.png',
    imageCaption: 'High-precision astrometry resolves dense stellar fields into distinct kinematic streams, clusters, and binary orbits.',
    imageProvenance: 'Original AI-Generated Conceptual Rendering · Deep-field stellar population study',
    relatedCelestialId: 'sirius-system',
  },
  {
    id: 'event-horizon-telescope',
    name: 'Event Horizon Telescope (EHT) VLBI Array',
    designation: 'EHT GLOBAL 1.3MM / 0.87MM INTERFEROMETER',
    agency: 'International EHT Collaboration (ALMA, NSF, ESO, IRAM, SAO)',
    category: 'Ground Observatory',
    status: 'Active',
    launchYear: 2017,
    launchDate: 'April 2017 (First Horizon-Scale Global Campaign)',
    operationalWindow: '2017 – Present (230 GHz & 345 GHz Global Campaigns)',
    targetOrRegime: 'Supermassive Black Hole Event Horizons (M87* & Sagittarius A*)',
    currentDistanceOrLocation: '11+ Observatory Sites Worldwide (Chile, Antarctica, Hawaii, Spain, Arizona, Mexico, Greenland)',
    primaryInstruments: [
      'Atacama Large Millimeter/submillimeter Array (ALMA — 66 dishes)',
      'Hydrogen Maser Atomic Clocks (1 sec drift per 100M years)',
      '230 GHz & 345 GHz Dual-Polarization Superconducting Receivers',
      'MPIfR Bonn & MIT Haystack Petabyte Supercomputer Correlators',
    ],
    headlineAchievement:
      'Synchronized millimeter-wave radio observatories from the South Pole to Hawaii and the Chilean Andes using atomic clocks to synthesize an Earth-sized virtual telescope with 20-microarcsecond resolution.',
    summary:
      'By applying Very Long Baseline Interferometry (VLBI) at 1.3-millimeter wavelengths where interstellar gas becomes transparent, the EHT achieved the highest angular resolution in the history of astronomy.',
    scientificLog: [
      'Resolving the ~40-microarcsecond shadow of M87* or Sagittarius A*—equivalent to reading the date on a coin in Los Angeles from New York—would require a single optical telescope kilometers wide or a millimeter-wave dish the size of planet Earth.',
      'During global observing windows each April, participating observatories—anchored by the immense collecting area of ALMA on the Chajnantor plateau in Chile—simultaneously record petabytes of raw wave phase data onto helium-filled hard drives stamped by hydrogen maser atomic clocks. Because no internet link can transfer tens of petabytes from the South Pole, the physical drives are flown to supercomputer correlators in MIT Haystack and Bonn.',
      'Following the landmark 2019 image of M87* and the 2022 image of our own galaxy’s Sgr A*, the EHT upgraded to 345 GHz (0.87 mm) observations, sharpening angular resolution by an additional 50% to isolate the razor-thin relativistic photon ring.'
    ],
    telemetryMetrics: [
      { label: 'Virtual Baseline Span', value: '~10,700 km (Earth Diameter)' },
      { label: 'Angular Resolution', value: '19–25 microarcseconds (at 230–345 GHz)' },
      { label: 'Data Rate per Station', value: '64 Gigabits/second raw recording' },
      { label: 'Timing Synchronization', value: 'Hydrogen Maser (< 10⁻¹⁵ s stability)' },
    ],
    image: '/images/abstract-deep-space.png',
    imageCaption: 'Relativistic accretion flow and coronal jet geometry reconstructed around horizon-scale compact objects.',
    imageProvenance: 'NASA/JPL-Caltech Astrophysical Visualization (PIA16695 Public Domain)',
    relatedCelestialId: 'm87-star',
  },
  {
    id: 'james-webb-space-telescope',
    name: 'James Webb Space Telescope (JWST)',
    designation: 'JWST · NSSDC 2021-130A · ARIANE VA256',
    agency: 'NASA / ESA / CSA / STScI',
    category: 'Space Observatory',
    status: 'Active',
    launchYear: 2021,
    launchDate: 'December 25, 2021',
    operationalWindow: '2022 – Present (> 20-Year Propellant Margin at L2)',
    targetOrRegime: 'Near & Mid-Infrared Universe (0.6 – 28.5 micrometers)',
    currentDistanceOrLocation: 'Sun–Earth L2 Halo Orbit (1.5 million km from Earth · 5.0 light-seconds)',
    primaryInstruments: [
      'Near-Infrared Camera (NIRCam) & Spectrograph (NIRSpec)',
      'Mid-Infrared Instrument (MIRI — actively cooled to 6.7 K)',
      'Near-Infrared Imager and Slitless Spectrograph (NIRISS)',
    ],
    headlineAchievement:
      'Unfolded a 6.5-meter gold-coated beryllium mirror behind a five-layer tennis-court-sized sunshield at L2 to observe galaxies at redshift z > 14 (290 million years after the Big Bang) and measure CO₂, H₂O, and SO₂ in exoplanet atmospheres.',
    summary:
      'Operating at cryogenic temperatures below 45 Kelvin 1.5 million kilometers from Earth, the James Webb Space Telescope is the largest, most sensitive space observatory ever constructed.',
    scientificLog: [
      'Because cosmic expansion stretches the ultraviolet and visible light of the first stars and galaxies into the infrared, and because interstellar dust obscures star-forming nurseries in optical wavelengths, JWST was engineered specifically for the 0.6 to 28.5 micrometer infrared regime.',
      'Following a flawless Ariane 5 launch on Christmas Day 2021 and a 29-day sequence of 344 single-point-failure mechanical deployments, JWST aligned its 18 hexagonal beryllium mirror segments to within 50 nanometers—one ten-thousandth the thickness of a human hair.',
      'In its first years of science operations, the JWST Advanced Deep Extragalactic Survey (JADES) spectroscopically confirmed galaxies such as JADES-GS-z14-0 existing just 290 million years after the Big Bang—far brighter and more massive than pre-launch cosmological models predicted—while its transit transmission spectra of exoplanets like WASP-39b and K2-18b achieved the first detections of photochemical sulfur dioxide, carbon dioxide, and methane in distant worlds.'
    ],
    telemetryMetrics: [
      { label: 'Primary Mirror Area', value: '25.4 m² (6.5 m span · 18 Au-Be hex segments)' },
      { label: 'Operating Temperature', value: '< 40 K passive · 6.7 K MIRI cryocooler' },
      { label: 'Farthest Confirmed Galaxy', value: 'z = 14.32 (~290 Myr post-Big Bang)' },
      { label: 'Fuel Life Expectancy', value: '> 20 years station-keeping margin' },
    ],
    image: '/images/nebula.png',
    imageCaption: 'Deep infrared optics pierce opaque molecular dust ridges to expose nascent protostars and photoevaporative shocks.',
    imageProvenance: 'Original AI-Generated Conceptual Rendering · Infrared nebula ionization front study',
    relatedCelestialId: 'carina-nebula',
  },
  {
    id: 'europa-clipper',
    name: 'Europa Clipper Jovian Ocean Reconnaissance',
    designation: 'EUROPA CLIPPER · NSSDC 2024-182A',
    agency: 'NASA / JPL-Caltech / APL',
    category: 'Planetary Orbiter & Rover',
    status: 'En Route',
    launchYear: 2024,
    launchDate: 'October 14, 2024',
    operationalWindow: '2024 – 2034 (Mars/Earth Gravity Assists · Jupiter Arrival April 2030)',
    targetOrRegime: 'Europa Subsurface Ocean, Ice Shell & Plume Habitability',
    currentDistanceOrLocation: 'Inner Solar System Gravity-Assist Cruise Trajectory (2.9B km path)',
    primaryInstruments: [
      'REASON (Radar for Europa Assessment and Sounding: Ocean to Near-surface)',
      'MASPEX (Mass Spectrometer for Planetary Exploration)',
      'EIS (Europa Imaging System Narrow/Wide Angle)',
      'SUDA (Surface Dust Analyzer) & E-THEMIS Thermal Imager',
    ],
    headlineAchievement:
      'The largest planetary spacecraft ever built by NASA—spanning 30.5 meters across its solar arrays—designed to execute 49 low-altitude flybys down to 25 kilometers above Europa’s fractured ice shell.',
    summary:
      'Equipped with a titanium-aluminum radiation vault and nine synergistic science instruments, Europa Clipper is dedicated to determining whether the ocean beneath Europa’s ice crust possesses all ingredients necessary for life.',
    scientificLog: [
      'Because Europa orbits deep within Jupiter’s lethal relativistic electron radiation belts, a spacecraft placed directly into orbit around Europa would suffer catastrophic electronics failure within months. Instead, Europa Clipper enters an elongated looping orbit around Jupiter, swooping in fast for 49 close flybys of Europa before retreating outside the radiation zone to downlink data.',
      'During flybys as low as 25 kilometers above the ice, the REASON dual-frequency ice-penetrating radar will sound up to 30 kilometers straight down into the crust to map the ice-ocean interface and search for perched liquid water lakes inside the shell.',
      'Simultaneously, the SUDA and MASPEX spectrometers will sniff microscopic ice grains and vapor sputtered or vented from the surface, capable of identifying amino acids, fatty acids, and salt compositions at parts-per-billion sensitivity without needing to drill through the ice.'
    ],
    telemetryMetrics: [
      { label: 'Solar Array Span', value: '30.5 meters (> 100 feet · 100 m² area)' },
      { label: 'Planned Europa Flybys', value: '49 close encounters (min 25 km altitude)' },
      { label: 'Mars & Earth Gravity Assists', value: 'March 2025 (Mars) & Dec 2026 (Earth)' },
      { label: 'Jupiter Orbit Insertion', value: 'April 11, 2030' },
    ],
    image: '/images/moon-closeup.png',
    imageCaption: 'High-resolution mapping of Europa’s reddish-amber sulfate lineae and chaos terrain targets potential cryovolcanic vents.',
    imageProvenance: 'Authentic Scientific Mission Imagery · NASA/JPL-Caltech/SETI Institute (Galileo PIA19048 Public Domain)',
    relatedCelestialId: 'europa',
  },
  {
    id: 'vera-rubin-observatory',
    name: 'Vera C. Rubin Observatory (LSST)',
    designation: 'RUBIN OBSERVATORY · CERRO PACHÓN CHILE',
    agency: 'NSF / DOE / NOIRLab / SLAC',
    category: 'Ground Observatory',
    status: 'Active',
    launchYear: 2025,
    launchDate: '2025–2026 First Light & 10-Year Legacy Survey of Space and Time',
    operationalWindow: '2025 – 2035 (10-Year Time-Domain Sky Cinema)',
    targetOrRegime: 'Time-Domain Astrophysics, Dark Energy, Dark Matter & Solar System Inventory',
    currentDistanceOrLocation: 'Cerro Pachón Ridge, Coquimbo Region, Chile (2,682 meters elevation)',
    primaryInstruments: [
      '8.4-Meter Simonyi Survey Telescope (Three-Mirror Compact Paul-Baker)',
      '3.2-Gigapixel LSST Camera (Largest digital camera ever constructed)',
      'Six-Band Optical Filter Carousel (u, g, r, i, z, y · 320–1050 nm)',
      'Automated 60-Second Transient Alert Pipeline (10M alerts/night)',
    ],
    headlineAchievement:
      'Photographs the entire visible southern sky every three to four nights with a 3,200-megapixel camera, generating 10 million real-time transient alerts per night and cataloging 20 billion galaxies.',
    summary:
      'Named in honor of astronomer Vera Cooper Rubin, whose galaxy rotation curves pioneered the discovery of dark matter, the observatory turns the static night sky into a ten-year ultra-high-definition motion picture.',
    scientificLog: [
      'Traditional large telescopes have narrow fields of view, studying one small target at a time. The Simonyi Survey Telescope combines an 8.4-meter primary mirror with a revolutionary three-mirror optical design that casts a 3.5-degree field of view—equivalent to forty full Moons—onto a 3.2-billion-pixel cryogenically cooled focal plane.',
      'Slewing between pointings in just five seconds, Rubin captures a pair of 15-second exposures every 40 seconds across the entire Chilean night. Every 60 seconds, automated difference-imaging algorithms compare the new frame against a master template and broadcast public alerts for anything that moved or changed brightness.',
      'Over its ten-year Legacy Survey of Space and Time (LSST), Rubin will discover an estimated 5 million new asteroids and 100,000 Kuiper Belt objects, detect millions of Type Ia supernovae and kilonovae, and map weak gravitational lensing across 20 billion galaxies to test Dark Energy equations of state.'
    ],
    telemetryMetrics: [
      { label: 'Camera Resolution', value: '3.2 Gigapixels (189 4K×4K CCD sensors)' },
      { label: 'Field of View', value: '9.6 deg² (3.5° diameter ≈ 40 Full Moons)' },
      { label: 'Nightly Raw Data Volume', value: '20 Terabytes per night (60 PB catalog)' },
      { label: 'Transient Alert Latency', value: '60 seconds from shutter close to world' },
    ],
    image: '/images/observatory.png',
    imageCaption: 'High-altitude Chilean Andean summits offer low precipitable water vapor and <0.6-arcsecond atmospheric seeing.',
    imageProvenance: 'Original AI-Generated Conceptual Rendering · Chilean Andean observatory twilight study',
    relatedCelestialId: 'andromeda-galaxy',
  },
];

export const ASTRONOMICAL_EVENTS: AstronomicalEvent[] = [
  {
    id: 'evt-saturn-opposition',
    dateDisplay: 'AUTUMN EQUINOX · EPOCH J2026',
    epochUtc: '2026-09-25 14:18 UTC',
    title: 'Saturn at Perihelic Opposition & Ring Plane Opening',
    eventType: 'Planetary Opposition',
    visibilityRegion: 'Global (Meridian Transit at 00:00 Local Solar Time)',
    coordinatesOrElongation: 'RA 00h 16m · Dec −01° 08′ · Elongation 180.0°',
    description:
      'Following the March 2025 ring-plane crossing when Saturn’s rings appeared razor-thin edge-on from Earth, the southern face of the main ring system opens back to a 6.4° tilt while the Seeliger opposition surge brightens the icy rings.',
    relatedCelestialId: 'saturn',
  },
  {
    id: 'evt-geminids',
    dateDisplay: 'DECEMBER 13–14 · EPOCH J2026',
    epochUtc: '2026-12-14 02:00 UTC',
    title: 'Geminid Meteor Stream Maximum (3200 Phaethon Debris)',
    eventType: 'Meteor Shower Peak',
    visibilityRegion: 'Northern & Southern Hemispheres (Dark Waxing Crescent Sky)',
    coordinatesOrElongation: 'Radiant RA 07h 28m · Dec +32° 18′ (Near Castor)',
    description:
      'Earth intersects the dense rocky dust stream shed by active "rock comet" 3200 Phaethon at 35 km/s, producing a Zenithal Hourly Rate (ZHR) of 120–150 medium-velocity, multi-colored bolides under near-moonless skies.',
    relatedCelestialId: 'earth',
  },
  {
    id: 'evt-europa-earth-assist',
    dateDisplay: 'DECEMBER 2026 · TRAJECTORY MILESTONE',
    epochUtc: '2026-12-03 08:42 UTC',
    title: 'Europa Clipper Earth Flyby Gravity Assist',
    eventType: 'Spacecraft Flyby',
    visibilityRegion: 'Deep Space Network (Goldstone, Madrid, Canberra) & Optical Tracking',
    coordinatesOrElongation: 'Perigee 3,200 km · Δv Slingshot to 5.2 AU Jovian Aphelion',
    description:
      'Following its March 2025 Mars flyby, NASA’s Europa Clipper executes its final inner-solar-system gravity assist past Earth, bending its heliocentric trajectory onto a direct ballistic transfer toward Jupiter orbit insertion in April 2030.',
    relatedCelestialId: 'europa',
  },
  {
    id: 'evt-total-solar-eclipse-luxor',
    dateDisplay: 'AUGUST 2, 2027 · CENTURY TOTALITY',
    epochUtc: '2027-08-02 10:07 UTC',
    title: '6m 23s Total Solar Eclipse ("Eclipse of the Century")',
    eventType: 'Total Eclipse',
    visibilityRegion: 'Strait of Gibraltar, North Africa, Luxor (Egypt), Red Sea',
    coordinatesOrElongation: 'Max Eclipse 25° 30′N, 33° 12′E · Umbral Path Width 258 km',
    description:
      'With the Moon near lunar perigee and Earth near solar aphelion, the lunar umbra sweeps across Luxor, Egypt for 6 minutes and 23 seconds of totality—the longest land-observable coronal occultation of the early 21st century.',
    relatedCelestialId: 'earth',
  },
];

