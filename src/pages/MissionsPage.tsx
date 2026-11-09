import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Telescope,
  Radio,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Cpu,
  Calendar,
  MapPin,
} from 'lucide-react';
import {
  MISSIONS_DATA,
  MissionCategory,
  MissionStatus,
} from '../data/missionsData';

const MISSION_CATEGORIES: ('All' | MissionCategory)[] = [
  'All',
  'Deep-Space Probe',
  'Space Observatory',
  'Planetary Orbiter & Rover',
  'Ground Observatory',
];

const MISSION_STATUSES: ('All' | MissionStatus)[] = [
  'All',
  'Active',
  'En Route',
  'Completed Legacy',
];

export const MissionsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const missionParam = searchParams.get('mission');

  const [selectedCategory, setSelectedCategory] = useState<'All' | MissionCategory>('All');
  const [selectedStatus, setSelectedStatus] = useState<'All' | MissionStatus>('All');
  const [activeMissionId, setActiveMissionId] = useState<string>(
    missionParam && MISSIONS_DATA.some((m) => m.id === missionParam)
      ? missionParam
      : MISSIONS_DATA[0].id
  );

  useEffect(() => {
    if (missionParam && MISSIONS_DATA.some((m) => m.id === missionParam)) {
      setActiveMissionId(missionParam);
    }
  }, [missionParam]);

  const filteredMissions = useMemo(() => {
    return MISSIONS_DATA.filter((m) => {
      const catMatch = selectedCategory === 'All' || m.category === selectedCategory;
      const statusMatch = selectedStatus === 'All' || m.status === selectedStatus;
      return catMatch && statusMatch;
    });
  }, [selectedCategory, selectedStatus]);

  const activeMission = useMemo(() => {
    const found = filteredMissions.find((m) => m.id === activeMissionId);
    return found || filteredMissions[0] || MISSIONS_DATA[0];
  }, [filteredMissions, activeMissionId]);

  const activeIndexInFiltered = filteredMissions.findIndex(
    (m) => m.id === activeMission.id
  );

  const selectMission = (id: string) => {
    setActiveMissionId(id);
    searchParams.set('mission', id);
    setSearchParams(searchParams, { replace: true });
  };

  const getStatusBadgeStyle = (status: MissionStatus) => {
    switch (status) {
      case 'Active':
        return 'bg-cyan/15 text-cyan border-cyan/40';
      case 'En Route':
        return 'bg-amber/15 text-amber border-amber/40';
      case 'Completed Legacy':
        return 'bg-void text-silver border-silver/25';
    }
  };

  return (
    <div className="relative z-10 animate-editorial-enter">
      {/* SECTION 1: HEADER & MISSION FILTERS */}
      <section className="mx-auto max-w-editorial px-6 pt-10 pb-10 lg:px-12 lg:pt-14 lg:pb-12 hairline-b">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-end">
          <div className="lg:col-span-8 space-y-3">
            <div className="tabular-data text-xs text-amber">
              CHRONOLOGICAL RECONNAISSANCE ARCHIVE · 1977 – 2035
            </div>
            <h1 className="font-editorial text-4xl sm:text-5xl text-starlight leading-tight">
              Missions &amp; Discoveries
            </h1>
            <p className="text-base text-silver leading-relaxed max-w-2xl">
              Humanity’s robotic emissaries and great observatories—from the twin Voyager spacecraft coasting beyond the Heliopause at 166 AU to Earth-diameter millimeter interferometry and cryogenic space telescopes at L2.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col lg:items-end justify-end gap-1.5 text-xs tabular-data text-regolith">
            <span>DEEP SPACE NETWORK: GOLDSTONE · MADRID · CANBERRA</span>
            <span className="text-silver">
              10 FLAGSHIP MISSIONS &amp; OBSERVATORIES LOGGED
            </span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mt-8 pt-6 hairline-t flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div
            role="group"
            aria-label="Filter missions by architecture category"
            className="flex flex-wrap items-center gap-1.5"
          >
            {MISSION_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={active}
                  className={`min-h-[36px] px-3.5 py-1.5 text-xs transition-colors hairline-box ${
                    active
                      ? 'bg-amber text-void font-semibold border-amber'
                      : 'bg-midnight text-silver hover:text-starlight'
                  }`}
                >
                  {cat === 'All' ? 'All Architectures (10)' : cat}
                </button>
              );
            })}
          </div>

          <div
            role="group"
            aria-label="Filter missions by operational status"
            className="flex flex-wrap items-center gap-1.5"
          >
            <span className="text-xs text-regolith mr-1">Status:</span>
            {MISSION_STATUSES.map((st) => {
              const active = selectedStatus === st;
              return (
                <button
                  key={st}
                  type="button"
                  onClick={() => setSelectedStatus(st)}
                  aria-pressed={active}
                  className={`min-h-[34px] px-3 py-1 text-xs transition-colors hairline-box ${
                    active
                      ? 'bg-stratosphere text-amber border-amber font-medium'
                      : 'bg-midnight text-regolith hover:text-starlight'
                  }`}
                >
                  {st}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE CHRONOLOGICAL TIMELINE RAIL */}
      <section className="bg-midnight/85 hairline-b">
        <div className="mx-auto max-w-editorial px-6 py-6 lg:px-12 space-y-4">
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-semibold text-starlight flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5 text-amber" aria-hidden="true" />
              Interactive Chronological Mission Timeline ({filteredMissions.length} Shown)
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={filteredMissions.length <= 1}
                onClick={() => {
                  const prevIdx =
                    (activeIndexInFiltered - 1 + filteredMissions.length) %
                    filteredMissions.length;
                  selectMission(filteredMissions[prevIdx].id);
                }}
                aria-label="Previous mission in timeline"
                className="inline-flex h-8 w-8 items-center justify-center bg-void text-starlight hairline-box hover:border-amber disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <span className="tabular-data text-xs text-silver">
                {activeIndexInFiltered + 1} / {filteredMissions.length}
              </span>
              <button
                type="button"
                disabled={filteredMissions.length <= 1}
                onClick={() => {
                  const nextIdx =
                    (activeIndexInFiltered + 1) % filteredMissions.length;
                  selectMission(filteredMissions[nextIdx].id);
                }}
                aria-label="Next mission in timeline"
                className="inline-flex h-8 w-8 items-center justify-center bg-void text-starlight hairline-box hover:border-amber disabled:opacity-40"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Horizontal Timeline Stepper */}
          <div
            role="tablist"
            aria-label="Chronological space missions"
            className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2"
          >
            {filteredMissions.map((mission) => {
              const isSelected = mission.id === activeMission.id;
              return (
                <button
                  key={mission.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => selectMission(mission.id)}
                  className={`p-3 text-left transition-colors hairline-box flex flex-col justify-between min-h-[84px] ${
                    isSelected
                      ? 'bg-stratosphere border-amber text-starlight'
                      : 'bg-void/65 text-silver hover:border-silver/35 hover:text-starlight'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span
                      className={`tabular-data text-sm font-semibold ${
                        isSelected ? 'text-amber' : 'text-starlight'
                      }`}
                    >
                      {mission.launchYear}
                    </span>
                    <span
                      className={`h-2 w-2 rounded-full ${
                        mission.status === 'Active'
                          ? 'bg-cyan'
                          : mission.status === 'En Route'
                          ? 'bg-amber'
                          : 'bg-regolith'
                      }`}
                      title={`Status: ${mission.status}`}
                    />
                  </div>
                  <span className="text-xs font-medium leading-tight line-clamp-2 mt-1">
                    {mission.name.split(' (')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: ACTIVE MISSION TELEMETRY INSPECTOR DOSSIER */}
      <section
        id="mission-inspector"
        className="mx-auto max-w-editorial px-6 py-14 lg:px-12 lg:py-20 hairline-b"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
          {/* Left 7 Columns: Mission Header, Telemetry Matrix & Scientific Log */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5 text-xs">
              <span
                className={`px-2.5 py-0.5 tabular-data font-medium border ${getStatusBadgeStyle(
                  activeMission.status
                )}`}
              >
                STATUS: {activeMission.status.toUpperCase()}
              </span>
              <span className="bg-midnight px-2.5 py-0.5 tabular-data text-amber hairline-box">
                {activeMission.category}
              </span>
              <span className="tabular-data text-regolith">
                {activeMission.designation}
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl text-starlight leading-tight">
              {activeMission.name}
            </h2>

            <p className="text-base text-starlight/90 font-normal leading-relaxed border-l-2 border-amber pl-4">
              {activeMission.headlineAchievement}
            </p>

            {/* Launch, Window & Location Metadata */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-midnight p-5 hairline-box text-xs">
              <div>
                <span className="text-regolith block">Operating Agency / Consortium</span>
                <span className="text-starlight font-medium mt-0.5 block">
                  {activeMission.agency}
                </span>
              </div>
              <div>
                <span className="text-regolith block">Launch / First Light Epoch</span>
                <span className="tabular-data text-amber font-medium mt-0.5 block">
                  {activeMission.launchDate}
                </span>
              </div>
              <div>
                <span className="text-regolith block">Operational Window</span>
                <span className="tabular-data text-silver mt-0.5 block">
                  {activeMission.operationalWindow}
                </span>
              </div>
              <div>
                <span className="text-regolith block flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-amber" aria-hidden="true" />
                  Current Regime / Distance
                </span>
                <span className="tabular-data text-starlight font-medium mt-0.5 block">
                  {activeMission.currentDistanceOrLocation}
                </span>
              </div>
            </div>

            {/* 4-Cell Telemetry Readout */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {activeMission.telemetryMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-midnight p-3.5 hairline-box space-y-1"
                >
                  <span className="text-[11px] text-regolith block">
                    {metric.label}
                  </span>
                  <span className="tabular-data text-xs sm:text-sm font-semibold text-starlight block">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Multi-Paragraph Scientific Mission Log */}
            <div className="space-y-4 pt-2">
              <h3 className="font-editorial text-2xl text-starlight">
                Mission Architecture &amp; Scientific Breakthroughs
              </h3>
              {activeMission.scientificLog.map((para, idx) => (
                <p
                  key={idx}
                  className="text-sm sm:text-base text-silver leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right 5 Columns: Mission Plate, Provenance & Primary Instrument Suite */}
          <div className="lg:col-span-5 space-y-6">
            <figure className="bg-midnight hairline-box overflow-hidden">
              <div className="aspect-[16/10] w-full overflow-hidden bg-void">
                <img
                  src={activeMission.image}
                  alt={activeMission.name}
                  className="h-full w-full object-cover plate-zoom"
                />
              </div>
              <figcaption className="p-4 space-y-2 text-xs hairline-t">
                <p className="text-silver leading-relaxed">
                  {activeMission.imageCaption}
                </p>
                <div className="pt-2 hairline-t flex items-center gap-1.5 text-[11px] tabular-data text-amber">
                  <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>{activeMission.imageProvenance}</span>
                </div>
              </figcaption>
            </figure>

            {/* Primary Scientific Payload & Instruments */}
            <div className="bg-midnight p-6 hairline-box space-y-4">
              <div className="flex items-center justify-between hairline-b pb-3">
                <span className="text-xs font-semibold text-starlight flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-amber" aria-hidden="true" />
                  Primary Scientific Instrument Payload
                </span>
                <span className="tabular-data text-[11px] text-regolith">FLIGHT SUITE</span>
              </div>
              <ul className="space-y-2.5 text-xs">
                {activeMission.primaryInstruments.map((inst) => (
                  <li
                    key={inst}
                    className="flex items-center gap-2.5 bg-void/70 px-3.5 py-2.5 hairline-box text-silver"
                  >
                    <Radio className="h-3.5 w-3.5 text-amber shrink-0" aria-hidden="true" />
                    <span className="tabular-data">{inst}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Link
                  to={`/celestial/${activeMission.relatedCelestialId}`}
                  className="inline-flex items-center justify-between w-full bg-amber px-4 py-3 text-xs font-semibold text-void hover:bg-amber-bright transition-colors"
                >
                  <span>Inspect Target Celestial Specimen Dossier</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: COMPLETE CHRONOLOGICAL MISSION LEDGER */}
      <section className="mx-auto max-w-editorial px-6 py-16 lg:px-12 lg:py-24">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="font-editorial text-3xl text-starlight">
              Complete Chronological Mission Ledger (1977 – 2035)
            </h2>
            <p className="text-sm text-silver mt-1">
              Select any mission row below to load its full instrument telemetry and scientific log into the inspector above.
            </p>
          </div>
          <span className="tabular-data text-xs text-regolith">
            SORTED CHRONOLOGICALLY BY LAUNCH / FIRST LIGHT
          </span>
        </div>

        <div className="space-y-4">
          {filteredMissions.map((mission) => {
            const isCurrent = mission.id === activeMission.id;
            return (
              <div
                key={mission.id}
                className={`p-5 sm:p-6 hairline-box transition-colors grid grid-cols-1 lg:grid-cols-12 gap-6 items-center ${
                  isCurrent
                    ? 'bg-stratosphere/70 border-amber'
                    : 'bg-midnight hover:bg-stratosphere/30'
                }`}
              >
                <div className="lg:col-span-2 flex sm:flex-col justify-between gap-2">
                  <span className="tabular-data text-2xl font-semibold text-amber">
                    {mission.launchYear}
                  </span>
                  <span
                    className={`inline-block self-start px-2 py-0.5 text-[11px] tabular-data border ${getStatusBadgeStyle(
                      mission.status
                    )}`}
                  >
                    {mission.status}
                  </span>
                </div>

                <div className="lg:col-span-7 space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2 text-xs tabular-data text-regolith">
                    <span className="text-silver font-medium">{mission.agency}</span>
                    <span>·</span>
                    <span>{mission.category}</span>
                    <span>·</span>
                    <span>{mission.operationalWindow}</span>
                  </div>
                  <h3 className="font-editorial text-2xl text-starlight">
                    {mission.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-silver leading-relaxed">
                    {mission.summary}
                  </p>
                </div>

                <div className="lg:col-span-3 flex flex-wrap lg:flex-col items-stretch sm:items-end justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      selectMission(mission.id);
                      const el = document.getElementById('mission-inspector');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`px-4 py-2 text-xs font-medium hairline-box transition-colors inline-flex items-center justify-center gap-1.5 ${
                      isCurrent
                        ? 'bg-amber text-void font-semibold border-amber'
                        : 'bg-void text-starlight hover:border-amber'
                    }`}
                  >
                    <Telescope className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>
                      {isCurrent ? 'Loaded in Inspector' : 'Inspect Telemetry'}
                    </span>
                  </button>
                  <Link
                    to={`/celestial/${mission.relatedCelestialId}`}
                    className="px-4 py-2 text-xs text-silver hover:text-amber inline-flex items-center justify-center gap-1"
                  >
                    <span>Target Object</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

