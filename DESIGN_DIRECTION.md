# PROJECT 17 — BEYOND EARTH
## Design Direction, Skill Orchestration & Image Art Direction Document

> **"We Are Only Beginning to Understand What Lies Beyond"**
> An independent multidisciplinary digital publication exploring planetary science, deep-field astrophysics, robotic exploration, and humanity's place in the cosmos.

---

## 1. Repository Inspection Summary
- **Workspace**: `c:\Users\User\20-Day Web Projects\17 - Beyond Earth`
- **Initial State**: Empty directory (greenfield project, not an existing git repository).
- **Target Technical Stack**: React 18, TypeScript, Vite, Tailwind CSS, React Router v6, Lucide React icons.

---

## 2. AI Skill Orchestration Plan

In accordance with studio rules, we select a focused, non-overlapping set of installed skills and have read their `SKILL.md` instructions prior to implementation:

| Exact Installed Skill Name | Intended Responsibility | Phase Used | Expected Contribution |
| :--- | :--- | :--- | :--- |
| `impeccable` (`~/.agents/skills/impeccable/SKILL.md` & `reference/craft-floor.md`) | Editorial hierarchy, anti-AI-slop craft floor, spatial composition, custom browser surface theming (selection, scrollbars, focus rings, tabular numerals). | Phase 1 (Art Direction), Phase 3 (Frontend Implementation), Phase 5 (QA) | Ensures an authentic scientific monograph & documentary aesthetic free of generic SaaS card grids, neon sci-fi HUD clichés, or weak contrast. |
| `design-taste-frontend` (`~/.agents/skills/design-taste-frontend/SKILL.md`) | Editorial layout variation across sections, copy discipline, Asymmetric grid balance, and visual rhythm. | Phase 1 (Art Direction) & Phase 3 (Page Architecture) | Prevents repetitive section templates; enforces distinct page compositions across all 5 routes. |
| `animate` (`~/.agents/skills/animate/SKILL.md`) | Purposeful motion engineering using hardware-accelerated `transform` and `opacity`, strong `cubic-bezier(0.23, 1, 0.32, 1)` easing, pointer gating, and `prefers-reduced-motion` support. | Phase 4 (Motion & Interactions) | Delivers slow atmospheric transitions, controlled orbital SVG geometry, and responsive UI feedback without sluggish or gratuitous animations. |
| `accessibility` (`~/.agents/skills/accessibility/SKILL.md`) | WCAG 2.2 AA compliance, semantic HTML landmarks, keyboard navigation, focus visibility (`:focus-visible`), minimum 24×24px target sizes, and descriptive `alt` attributes with provenance disclosure. | Phase 3 (Implementation) & Phase 5 (QA) | Guarantees high-contrast readability against dark cosmic surfaces, keyboard-accessible interactive timeline, modal/lightbox focus management, and screen-reader clarity. |
| `browser-testing-with-devtools` (`~/.agents/skills/browser-testing-with-devtools/SKILL.md`) | Real-browser verification across 375px, 390px, 768px, 1024px, and 1440px viewports, DOM/console error inspection, and interactive state verification. | Phase 5 (Quality Assurance) | Confirms zero console/runtime errors, accurate image loading, working filters/search, and responsive editorial typography. |

---

## 3. Art Direction & Design System

### Concept & Audience
- **Concept**: *Beyond Earth* is a flagship quarterly digital publication and astronomical archive—positioned at the intersection of *Quanta Magazine*, *Nature Astronomy*, the *ESO Messenger*, and a criterion-edition IMAX space documentary (*Voyager* / *Cosmos*).
- **Audience**: Amateur and professional astronomers, science readers, documentary enthusiasts, and design-conscious explorers who value verified astrophysics over sensationalized clickbait.
- **Brand Personality**: Reverent, rigorous, observational, unhurried, deeply curious, and poetically precise.
- **Emotional Objective**: Evoke the sublime scale of deep time and cosmic distance ("the overview effect") while grounding every visual in real physical measurements, spectroscopy, and mission telemetry.

### Visual References & Principles
1. **The Universe Leads, The Interface Recedes**: Full-bleed and large-format astronomical plates command the viewport; UI chrome uses hair-fine structural hairlines (`rgba(216, 222, 233, 0.12)`) and quiet typographic hierarchy rather than glowing sci-fi widgets.
2. **Observatory Logbook Meets Print Monograph**: Every celestial object and mission is accompanied by authentic astronomical metadata—Right Ascension ($\alpha$), Declination ($\delta$), heliocentric/galactocentric distance, spectral or morphological classification, apparent magnitude ($m_V$), and epoch (`J2000.0`).
3. **Explicit Scientific Honesty**: Every generated conceptual plate is explicitly labeled as an *Original Conceptual Rendering / Art-Directed Astrophysical Visualization* alongside its physical basis, clearly distinguishing artistic visualization from raw telescope telemetry.

### Color Palette (HEX & CSS Custom Properties)
Designed for dark-adapted reading with WCAG AA/AAA contrast compliance:
- **Void Obsidian (Primary Ground)**: `#05070B` (`--bg-void`) — Deep intergalactic background.
- **Midnight Observatory (Secondary Ground / Elevated Surface)**: `#0B101B` (`--bg-midnight`) — Editorial panels, catalog rows, and specimen cards.
- **Deep Stratosphere (Interactive / Hover Surface)**: `#121A2B` (`--bg-stratosphere`) — Subtle tonal step for active states.
- **Alabaster Starlight (Primary Ink)**: `#F2F5F8` (`--text-primary`) — High-contrast primary headlines and body text (16.8:1 contrast on `#05070B`).
- **Pale Silver (Secondary Ink)**: `#C4CDD9` (`--text-silver`) — Editorial lead paragraphs, captions, and secondary labels (11.6:1 contrast).
- **Muted Regolith (Metadata Ink)**: `#8A96A8` (`--text-muted`) — Technical coordinates, timestamps, and archival annotations (6.2:1 contrast).
- **Atmospheric Amber (Primary Accent)**: `#E59846` (`--accent-amber`) — Sodium-vapor observatory warmth; used for primary actions, active filters, orbital perihelion markers, and reading progress.
- **Cosmic Violet (Secondary Spectral Accent)**: `#7C6AE6` (`--accent-violet`) — Ionized hydrogen/nebula spectral accent for deep-space classifications and astrophysics taxonomy.
- **Ionized Cyan (Telemetry Highlight)**: `#56B4E9` (`--accent-cyan`) — Colorblind-safe Okabe-Ito sky blue used sparingly for active mission status and spectral class O/B indicators.

### Typography Pairings
Loaded via Google Fonts with clean fallbacks:
1. **Scientific Editorial Serif (`--font-serif`)**: `'Spectral'`, Georgia, serif — High-contrast editorial serif by Production Type with crisp italics for feature headlines, essay titles, pull quotes, and longform scientific prose.
2. **Modern Grotesk (`--font-sans`)**: `'Schibsted Grotesk'`, -apple-system, BlinkMacSystemFont, sans-serif — Clean, high-legibility Nordic editorial neo-grotesk for navigation, UI controls, structural subheadings, and concise summaries.
3. **Technical Monospace (`--font-mono`)**: `'JetBrains Mono'`, monospace — Strict tabular numerals (`font-variant-numeric: tabular-nums`) exclusively for celestial coordinates (`RA / Dec`), physical measurements, mission elapsed times, and catalog identifiers (`NGC`, `MESSIER`, `JPL-HORIZONS`).

### Grid & Spacing System
- **Container Frame**: Max width `1440px` with symmetrical outer padding (`24px` mobile, `48px` tablet, `64px` desktop) and a 12-column CSS Grid (`gap: 24px`).
- **Editorial Asymmetry**: Left-hand sticky metadata rails (3 columns) paired with expansive 9-column imagery and 65ch reading columns.
- **Vertical Rhythm**: Generous section intervals (`96px` mobile, `144px–180px` desktop) allowing deep-space plates to breathe.

### Navigation Concept
- **Top Observatory Masthead**: Fixed-to-sticky low-profile editorial bar featuring the **BEYOND EARTH** masthead wordmark, Issue/Epoch telemetry (`ISSUE XVII · EPOCH J2026.8`), the 5 core routes (`Home`, `Explore the Universe`, `Celestial Detail`, `Missions & Discoveries`, `The Journal`), a quick-jump Celestial Search trigger (`/`), and a toggleable **Star-Field Canvas** control (allowing readers to switch between subtle orbital drift and static observation mode).
- **Mobile Navigation**: Accessible slide-over observatory index drawer with full keyboard trap, Escape key support, and direct links to featured celestial objects.

### Motion Principles
- **Restrained & Physical**: No bouncy springs or erratic particle explosions. Motion follows orbital mechanics and atmospheric fade-ins (`cubic-bezier(0.23, 1, 0.32, 1)`).
- **Lightweight Star-Field & Orbital Canvas**: An optional, hardware-friendly HTML5 Canvas / SVG celestial background in the hero and interactive sky-chart sections that pauses when offscreen and respects `prefers-reduced-motion: reduce`.
- **Reading Progress**: A 2px Atmospheric Amber (`#E59846`) progress bar docked at the top of the viewport on longform reading pages (`Celestial Detail` and `The Journal`).

### Page-by-Page Composition (5 Distinct Pages)
1. **Home (`/`)**:
   - Full-viewport split/layered editorial cover featuring the Carina-inspired nebula plate, interactive **Live Deep-Space Sky Chart & Ephemeris** widget, and Issue XVII manifesto.
   - **Featured Discovery Dossier**: Asymmetric 7/5 layout examining JWST's high-redshift galaxy and exoplanet atmospheric spectroscopy findings with verified data table.
   - **Selected Celestial Objects**: Curated 4-object architectural showcase (varied aspect ratios, not a generic card grid) linking directly to their deep-dive Celestial Detail pages.
   - **Upcoming Astronomical Events & Ephemeris**: Tabular observatory schedule (eclipses, oppositions, perihelions, meteor showers) with visibility coordinates.
   - **Latest from The Journal**: Editorial magazine spread previewing three original essays.
2. **Explore the Universe (`/explore`)**:
   - Interactive **Celestial Object Catalog** of **14 verified celestial objects** spanning all 6 required categories: *Planets*, *Moons*, *Stars*, *Galaxies*, *Nebulae*, and *Black Holes*.
   - Live instant search (by name, designation, constellation, or physical feature), category filter pills, sorting (by distance from Earth, mass/scale, or discovery year), and view toggle (**Editorial Plate Grid** vs. **Observatory Telemetry Table**).
   - Interactive **Cosmic Distance Ladder** scale comparator bar showing logarithmic scale from Lunar orbit ($1.28\text{ light-seconds}$) to M87* ($53.5\text{ million light-years}$).
3. **Celestial Detail (`/celestial/:id`, with default link `/celestial/saturn` & selector bar)**:
   - Dramatic full-bleed / split specimen header with objectswitcher strip, verified IAU/NASA classification, Right Ascension / Declination, and **Provenance Badge** clearly distinguishing generated conceptual rendering from scientific telemetry.
   - **Verified Measurements Matrix**: Distance, radius/scale, mass, surface temperature/luminosity, orbital period, apparent magnitude, and spectral/morphological type.
   - **Interactive Scale & Light-Time Calculator**: Allows the reader to compare the object's light-travel time and physical scale against Earth/Sun benchmarks, plus an **Image Plate Gallery / Lightbox** inspecting multiple visual plates.
   - **Scientific Explanation & Internal Structure**: Multi-paragraph peer-reviewed astrophysics breakdown and **Discovery & Observation History** timeline.
   - **Related Celestial Objects**: Cross-linked astronomical neighbors.
4. **Missions & Discoveries (`/missions`)**:
   - **Chronological Interactive Timeline** spanning 1977 to the 2030s (*Voyager 1 & 2*, *Hubble Space Telescope*, *Cassini-Huygens*, *New Horizons*, *Curiosity & Perseverance*, *Gaia Space Astrometry*, *Event Horizon Telescope*, *James Webb Space Telescope*, *Vera C. Rubin Observatory*, *Europa Clipper*).
   - Filterable by mission type (*Deep-Space Probe*, *Space Telescope*, *Planetary Lander/Rover*, *Ground Observatory*) and operational status (*Active*, *Extended Mission*, *Completed Legacy*, *En Route*).
   - **Interactive Mission Telemetry Inspector**: Selecting any mission reveals its trajectory profile, primary instruments, heliocentric distance, launch date, key scientific breakthroughs, and high-resolution plate.
5. **The Journal (`/journal` and article reader)**:
   - Magazine-style longform science reader with **live reading progress bar**, chapter navigation, estimated reading time, footnotes, and figure plates.
   - **Five Original Full-Length Science Articles** covering all required topics:
     1. *Event Horizons & Photon Rings: How Relativistic Plasma Reveals the Shadow of Supermassive Black Holes* (Black Holes)
     2. *Pillars of Cold Hydrogen: Inside the Turbulent Nurseries Where Massive Stars Ignite* (Star Formation)
     3. *Biosignatures in the Infrared: Searching for Disequilibrium Chemistry on Ocean Worlds and Exoplanets* (Extraterrestrial Life)
     4. *Beyond the Goldilocks Zone: Tidal Heating, Red Dwarf Flares, and the True Boundaries of Habitability* (Habitable Planets)
     5. *The Long Coast to the Outer Solar System: Architecture of Human and Robotic Exploration Beyond Mars* (Human Exploration)

---

## 4. Original Image Generation Specification (16 Bespoke Plates)

All 16 images are generated specifically for **Beyond Earth** and saved in `public/images/`. No generic stock photos, no text or UI inside images, physically believable lighting:

| # | Filename | Subject & Environment | Composition & Angle | Lens & Lighting | Color Grading & Aspect Ratio | Intended Placement |
|---|---|---|---|---|---|---|
| 1 | `nebula.png` | Towering pillars of cold molecular hydrogen gas and cosmic dust in a deep-space emission nebula | Asymmetric vertical-diagonal composition, wide celestial field | Deep-field astrograph 800mm prime, internal ionization glow from O-type stars | Deep obsidian, cosmic violet, warm amber sulfur filaments (16:9) | Home Hero & Carina Nebula Detail |
| 2 | `planetary-surface.png` | Rocky exoplanet surface at the terminator line with fractured basalt ridges and thin frost | Low-angle surface horizon looking toward a low crimson-amber host star | 24mm wide-angle rectilinear, grazing low-angle terminator sunlight | Charcoal basalt, atmospheric amber, slate blue shadows (16:9) | Explore Header & Proxima Centauri b Detail |
| 3 | `saturn-rings.png` | Gas giant planetary rings seen in high-phase solar occultation with icy ring divisions | Sweeping diagonal ring plane cutting across upper-left to lower-right | 200mm spacecraft narrow-angle camera, backlit forward-scattered sunlight | Pale silver, warm ivory gold, deep midnight shadow (16:9) | Celestial Detail Hero (Saturn) |
| 4 | `mars-landscape.png` | Layered sedimentary mesas and dark basaltic wind-rippled dunes inside an ancient Martian crater | Rule-of-thirds horizon, foreground rock outcrops leading to distant rim | 35mm mast camera perspective, diffused late-afternoon butterscotch sunlight | Rust ochre, atmospheric amber, muted slate dust (16:9) | Mars Celestial Detail & Rover Mission Plate |
| 5 | `lunar-surface.png` | Airless lunar south pole crater rim with pristine regolith and boulder tracks | Stark low-elevation oblique view across crater floor into pitch-black sky | 50mm Hasselblad medium-format aesthetic, harsh unfiltered sunlight, zero atmospheric scatter | Pure silver-gray regolith, pitch black `#05070B` shadows (16:9) | Lunar Surface / Moon Detail & Artemis Plate |
| 6 | `distant-galaxy.png` | Grand-design spiral galaxy floating in an deep field among distant background galaxies | Tilted 35-degree oblique view off-center with sweeping dust lanes | Space telescope infrared/optical composite lens character, core-illuminated | Golden-amber galactic nucleus, cosmic violet spiral arms, near-black void (16:9) | Andromeda (M31) & Sombrero Galaxy Catalog |
| 7 | `star-forming-region.png` | Dense Bok globule dark molecular cloud with nascent protostellar Herbig-Haro jets | Tight dramatic framing on dusty cavity carved by stellar winds | Near-infrared space telescope optics, translucent glowing dust edges | Deep crimson-amber dust, violet ionized gas, silver pinpoint stars (16:9) | Journal Essay 2 (Star Formation) & Orion Nebula |
| 8 | `astronaut-silhouette.png` | Lone astronaut in silhouette on a dark crater ridge gazing toward a bright planetary crescent | Wide cinematic frame, small human figure emphasizing vast cosmic scale | 35mm anamorphic documentary lens, crisp rim-lighting on helmet visor | Deep midnight blue, pale silver rim light, subtle amber reflection (16:9) | Journal Essay 5 (Human Exploration) & Home Manifesto |
| 9 | `spacecraft.png` | Robotic deep-space probe with gold Kapton thermal foil and high-gain dish antenna in outer solar system | Three-quarter close-up floating against dark star-studded void and distant pale gas giant | 50mm prime, stark point-source solar illumination at 5 AU | Metallic amber gold foil, titanium silver, deep space black (16:9) | Missions & Discoveries Hero (Voyager / Europa Clipper) |
| 10 | `eclipse.png` | Total solar eclipse displaying intricate magnetic corona streamers and ruby chromospheric prominences | Centered occultation disk with asymmetric coronal streamer wings | 600mm solar apochromatic refractor, high-dynamic-range coronal exposure | Pitch-black lunar disk, pearlescent silver corona, warm amber-rose rim (16:9) | Home Astronomical Events & Solar Detail |
| 11 | `observatory.png` | High-altitude astronomical observatory domes atop an arid Andean mountain ridge at twilight | Low-angle architectural silhouette against a crystal-clear southern sky | 28mm wide-angle fast prime, twilight horizon glow + starlight | Midnight cobalt sky, sodium-amber horizon line, silver-white domes (16:9) | Missions Ground Observatories (Vera Rubin / ALMA) |
| 12 | `moon-closeup.png` | Icy ocean moon (Europa/Enceladus) showing fractured water-ice ridges and active cryovolcanic plumes | Close orbital flyby framing the curved icy limb against deep black space | 135mm spacecraft imaging science subsystem, crisp oblique solar lighting | Glacial pale silver, icy cyan-white plumes, reddish-amber mineral fractures (16:9) | Europa Celestial Detail & Ocean Worlds Article |
| 13 | `earth-from-space.png` | Curved limb of Earth from low orbital altitude at orbital sunrise with thin blue airglow | Sweeping horizon curve occupying lower half, blackness of space above | 28mm orbital cupola camera, brilliant specular sun-glint on ocean clouds | Deep oceanic midnight blue, luminous cyan atmosphere, golden sunrise rim (16:9) | Earth Detail & Home Overview Effect Section |
| 14 | `star-field.png` | Dense astrophotographic star field and globular cluster core with thousands of resolved stars | Edge-to-edge celestial tapestry with subtle density gradient toward core | Astrograph flat-field optics, natural diffraction spikes on brightest stars | Blue-white O/B stars, pale silver A/F stars, warm amber K/M giants (16:9) | Explore Background Plate & Star Catalog (Betelgeuse / Sirius) |
| 15 | `abstract-deep-space.png` | Relativistic accretion disk and gravitational lensing around a supermassive black hole | Dramatic equatorial view showing warped photon ring and Doppler beaming | General-relativistic ray-traced photography aesthetic, self-luminous plasma | Intense atmospheric amber on approaching side, cosmic violet redshift, black shadow (16:9) | Black Holes (M87* / Sagittarius A*) & Journal Essay 1 |
| 16 | `exoplanet-atmosphere.png` | Temperate ocean exoplanet crescent with illuminated atmospheric refraction ring | Off-center planetary crescent suspended in deep starfield | 400mm space coronagraph aesthetic, backlit stellar transit illumination | Luminous amber-silver atmospheric ring, dark indigo nightside (16:9) | Journal Essay 3 & 4 (Biosignatures & Habitable Planets) |
