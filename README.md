# PROJECT 17 — BEYOND EARTH
**We Are Only Beginning to Understand What Lies Beyond**

An independent, portfolio-grade digital astronomy and deep-space exploration publication built with React 18, TypeScript, Vite, and Tailwind CSS.

---

## Publication Architecture (5 Distinct Pages)

1. **Home (`/`)**:
   - Asymmetric editorial cover featuring our Carina Nebula plate (`/images/nebula.png`), Issue XVII manifesto, and an interactive **Light-Time & Lookback Horizon Selector** (`1.28 light-seconds` to `53.5 million light-years`).
   - **Featured Discovery Dossier**: High-redshift (`z = 14.32`) galaxy spectroscopy and exoplanet photochemical transmission benchmarks (`JWST NIRSpec / MIRI`).
   - **Selected Celestial Specimens**: Architectural showcase of *Saturn*, *M87\**, *Europa*, and *Andromeda (M31)*.
   - **The Overview Perspective**: Full-width tonal shift pairing Earth's atmospheric sunrise limb with Carl Sagan's 1990 Galileo disequilibrium experiment (`O₂ + CH₄`).
   - **Astronomical Events & Ephemeris**: Verified 2026–2027 celestial events and total solar eclipse corona plate.
   - **Latest Monographs**: Direct entry into Issue XVII's longform essays.

2. **Explore the Universe (`/explore`)**:
   - Searchable and filterable catalog of **14 verified celestial objects** across **6 categories**: *Planets*, *Moons*, *Stars*, *Nebulae*, *Galaxies*, and *Black Holes*.
   - Interactive **Logarithmic Cosmic Distance Ladder** (`log₁₀` light-years from geocenter).
   - Instant keyword search, category pills with live counts, distance/designation sorting, and a dual **Specimen Plates / Observatory Telemetry Table** view switcher.

3. **Celestial Detail (`/celestial/:id`)**:
   - Dedicated specimen dossiers for all 14 objects with quick specimen switcher, ICRS `RA / Dec (J2000.0)` coordinates, and explicit **Scientific Provenance Disclosure Badges**.
   - **Verified Physical Measurements Matrix** (Mass, Radius/Span, Temperature, Rotation/Orbital Period, Apparent Magnitude, Surface Gravity/Escape Velocity).
   - **Interactive Relativistic & Spacecraft Transit Calculator** comparing travel durations at `1.00 c` (Radio/Photon), `0.10 c` (Laser Sail), `192 km/s` (Parker Solar Probe max), and `17.0 km/s` (Voyager 1 interstellar cruise).
   - Multi-paragraph astrophysics analysis, **Internal & Spatial Architecture** stratigraphy, **Discovery & Reconnaissance History** milestones, full-screen **Plate Inspector Lightbox**, and cross-linked related specimens.

4. **Missions & Discoveries (`/missions`)**:
   - Interactive chronological timeline (`1977 – 2035`) of **10 flagship space missions and observatories**: *Voyager 1 & 2*, *Hubble Space Telescope*, *Cassini–Huygens*, *New Horizons*, *Curiosity & Perseverance*, *Gaia*, *Event Horizon Telescope*, *James Webb Space Telescope*, *Europa Clipper*, and *Vera C. Rubin Observatory*.
   - Filterable by architecture category and operational status (*Active*, *En Route*, *Completed Legacy*).
   - **Interactive Mission Telemetry Inspector** with instrument payloads, 4-cell engineering metrics, and direct links to target celestial dossiers.

5. **The Journal (`/journal`)**:
   - Longform magazine reader with **docked & sidebar reading progress indicators**, section jump-navigation, and reading typography scale controls (`17px Standard` / `20px Large Study`).
   - **Five Complete Original Science Monographs**:
     1. *Event Horizons & Photon Rings* (Black Holes)
     2. *Pillars of Cold Hydrogen* (Star Formation)
     3. *Biosignatures in the Infrared* (Extraterrestrial Life)
     4. *Beyond the Goldilocks Zone* (Habitable Planets)
     5. *The Long Coast to the Outer System* (Human Exploration)

---

## Visual Provenance & Scientific Integrity

Every image plate in `public/images/` carries an explicit provenance classification badge in the UI:
- **12 Original AI-Generated Conceptual Visualizations**: `nebula.png`, `planetary-surface.png`, `saturn-rings.png`, `lunar-surface.png`, `distant-galaxy.png`, `star-forming-region.png`, `astronaut-silhouette.png`, `spacecraft.png`, `eclipse.png`, `observatory.png`, `earth-from-space.png`, and `star-field.png`.
- **4 Authentic NASA/JPL-Caltech Public-Domain Archival Plates** (used when the AI image generator model reached `HTTP 429 RESOURCE_EXHAUSTED` quota limits, transparently disclosed and credited in situ):
  - `mars-landscape.png` — NASA/JPL-Caltech Curiosity Rover Gale Crater (`PIA24937`)
  - `moon-closeup.png` — NASA/JPL-Caltech/SETI Institute Galileo Remastered Europa (`PIA19048`)
  - `abstract-deep-space.png` — NASA/JPL-Caltech NuSTAR Black Hole Accretion Corona (`PIA16695`)
  - `exoplanet-atmosphere.png` — NASA/JPL-Caltech/Spitzer TRAPPIST-1f Surface & Horizon (`PIA21423`)

---

## Development & Build

```bash
npm install
npm run dev
npm run build
npm run preview
```

