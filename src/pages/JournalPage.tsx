import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  BookOpen,
  Clock,
  ArrowUpRight,
  Maximize2,
  Sparkles,
  CheckCircle2,
  FileText,
  ChevronRight,
} from 'lucide-react';
import {
  JOURNAL_ARTICLES,
  JournalTopic,
} from '../data/journalArticles';
import { CELESTIAL_OBJECTS, GalleryPlate } from '../data/celestialObjects';
import { ImageLightbox } from '../components/ImageLightbox';

const TOPICS: ('All' | JournalTopic)[] = [
  'All',
  'Black Holes',
  'Star Formation',
  'Extraterrestrial Life',
  'Habitable Planets',
  'Human Exploration',
];

export const JournalPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const articleParam = searchParams.get('article');

  const [selectedTopic, setSelectedTopic] = useState<'All' | JournalTopic>('All');
  const [activeArticleId, setActiveArticleId] = useState<string>(
    articleParam && JOURNAL_ARTICLES.some((a) => a.id === articleParam)
      ? articleParam
      : JOURNAL_ARTICLES[0].id
  );
  const [readingProgress, setReadingProgress] = useState(0);
  const [largeType, setLargeType] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (articleParam && JOURNAL_ARTICLES.some((a) => a.id === articleParam)) {
      setActiveArticleId(articleParam);
    }
  }, [articleParam]);

  const filteredArticles =
    selectedTopic === 'All'
      ? JOURNAL_ARTICLES
      : JOURNAL_ARTICLES.filter((a) => a.topic === selectedTopic);

  const activeArticle =
    JOURNAL_ARTICLES.find((a) => a.id === activeArticleId) ||
    filteredArticles[0] ||
    JOURNAL_ARTICLES[0];

  const handleSelectArticle = (id: string) => {
    setActiveArticleId(id);
    searchParams.set('article', id);
    setSearchParams(searchParams, { replace: true });
    const readerEl = document.getElementById('monograph-reader-start');
    if (readerEl) {
      readerEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const readerEl = document.getElementById('monograph-article-body');
      if (!readerEl) return;
      const rect = readerEl.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height - windowHeight * 0.5;
      const scrolled = -rect.top + windowHeight * 0.25;
      const pct = Math.min(100, Math.max(0, (scrolled / Math.max(1, totalHeight)) * 100));
      setReadingProgress(Math.round(pct));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeArticle.id]);

  const articlePlates: GalleryPlate[] = [
    {
      src: activeArticle.heroImage,
      title: `${activeArticle.title} — Figure 1`,
      caption: activeArticle.heroCaption,
      provenance: activeArticle.heroProvenance,
      wavelengthBasis: 'Primary Monograph Plate',
    },
    {
      src: activeArticle.secondaryImage,
      title: `${activeArticle.title} — Figure 2`,
      caption: activeArticle.secondaryCaption,
      provenance: activeArticle.secondaryProvenance,
      wavelengthBasis: 'Secondary Monograph Plate',
    },
  ];

  const relatedObjects = activeArticle.relatedCelestialIds
    .map((id) => CELESTIAL_OBJECTS.find((o) => o.id === id))
    .filter((o): o is NonNullable<typeof o> => Boolean(o));

  const currentIdx = JOURNAL_ARTICLES.findIndex((a) => a.id === activeArticle.id);
  const nextArticle = JOURNAL_ARTICLES[(currentIdx + 1) % JOURNAL_ARTICLES.length];

  return (
    <div className="relative z-10 animate-editorial-enter">
      {/* Top Docked Reading Progress Bar */}
      <div
        aria-hidden="true"
        className="fixed left-0 top-0 z-50 h-[3px] bg-amber transition-all duration-150"
        style={{ width: `${readingProgress}%` }}
      />

      {/* SECTION 1: JOURNAL MASTHEAD & TOPIC INDEX */}
      <section className="mx-auto max-w-editorial px-6 pt-10 pb-12 lg:px-12 lg:pt-14 lg:pb-16 hairline-b">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-end">
          <div className="lg:col-span-8 space-y-3">
            <div className="tabular-data text-xs text-amber">
              THE JOURNAL · ISSUE XVII SCIENTIFIC MONOGRAPHS
            </div>
            <h1 className="font-editorial text-4xl sm:text-5xl text-starlight leading-tight">
              Original Essays in Astrophysics &amp; Exploration
            </h1>
            <p className="text-base text-silver leading-relaxed max-w-2xl">
              Five peer-referenced feature monographs exploring relativistic event horizons, molecular cloud star birth, infrared biosignatures, red-dwarf planetary climates, and cis-lunar human spaceflight.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col lg:items-end justify-end gap-1.5 text-xs tabular-data text-regolith">
            <span>5 COMPLETE MONOGRAPHS IN ISSUE XVII</span>
            <span className="text-amber">
              ACTIVE ESSAY PROGRESS: {readingProgress}% READ
            </span>
          </div>
        </div>

        {/* Topic Filter Pills */}
        <div
          role="group"
          aria-label="Filter journal essays by scientific discipline"
          className="mt-8 flex flex-wrap items-center gap-1.5"
        >
          {TOPICS.map((topic) => {
            const active = selectedTopic === topic;
            return (
              <button
                key={topic}
                type="button"
                onClick={() => {
                  setSelectedTopic(topic);
                  if (topic !== 'All') {
                    const match = JOURNAL_ARTICLES.find((a) => a.topic === topic);
                    if (match) {
                      setActiveArticleId(match.id);
                      searchParams.set('article', match.id);
                      setSearchParams(searchParams, { replace: true });
                    }
                  }
                }}
                aria-pressed={active}
                className={`min-h-[36px] px-3.5 py-1.5 text-xs transition-colors hairline-box ${
                  active
                    ? 'bg-amber text-void font-semibold border-amber'
                    : 'bg-midnight text-silver hover:text-starlight'
                }`}
              >
                {topic === 'All' ? 'All 5 Monographs' : topic}
              </button>
            );
          })}
        </div>

        {/* Monograph Selector Cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
          {JOURNAL_ARTICLES.map((article, idx) => {
            const isSelected = article.id === activeArticle.id;
            const isTopicMatch =
              selectedTopic === 'All' || article.topic === selectedTopic;
            return (
              <button
                key={article.id}
                type="button"
                onClick={() => handleSelectArticle(article.id)}
                className={`p-4 text-left transition-colors hairline-box flex flex-col justify-between ${
                  isSelected
                    ? 'bg-stratosphere border-amber'
                    : isTopicMatch
                    ? 'bg-midnight hover:border-silver/35'
                    : 'bg-midnight/40 opacity-50 hover:opacity-90'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] tabular-data">
                    <span className={isSelected ? 'text-amber font-semibold' : 'text-regolith'}>
                      MONOGRAPH 0{idx + 1}
                    </span>
                    <span className="text-regolith">{article.readingTimeMinutes}m</span>
                  </div>
                  <span className="inline-block text-[11px] font-medium text-violet-soft">
                    {article.topic}
                  </span>
                  <h2 className="font-editorial text-base text-starlight leading-snug line-clamp-3">
                    {article.title.split(':')[0]}
                  </h2>
                </div>
                <div className="pt-3 mt-3 hairline-t flex items-center justify-between text-[11px] text-silver">
                  <span className="truncate">{article.author}</span>
                  <ChevronRight
                    className={`h-3.5 w-3.5 shrink-0 ${
                      isSelected ? 'text-amber' : 'text-regolith'
                    }`}
                    aria-hidden="true"
                  />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* SECTION 2: FULL-LENGTH EDITORIAL MONOGRAPH READER */}
      <article
        id="monograph-reader-start"
        className="mx-auto max-w-editorial px-6 py-14 lg:px-12 lg:py-20"
      >
        {/* Essay Header */}
        <header className="max-w-4xl space-y-6 pb-12 hairline-b">
          <div className="flex flex-wrap items-center gap-3 text-xs tabular-data">
            <span className="bg-amber px-2.5 py-0.5 font-semibold text-void">
              {activeArticle.topic.toUpperCase()}
            </span>
            <span className="text-silver">{activeArticle.issueCode}</span>
            <span className="text-regolith">·</span>
            <span className="text-silver inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-amber" aria-hidden="true" />
              {activeArticle.readingTimeMinutes} Min Read
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl text-starlight leading-[1.08]">
            {activeArticle.title}
          </h2>

          <p className="font-editorial italic text-xl sm:text-2xl text-silver leading-relaxed">
            {activeArticle.subtitle}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div>
              <span className="text-starlight font-semibold text-sm block">
                {activeArticle.author}
              </span>
              <span className="text-regolith">{activeArticle.authorRole}</span>
            </div>

            {/* Reader Typography Comfort Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-regolith">Reading Scale:</span>
              <button
                type="button"
                onClick={() => setLargeType(false)}
                aria-pressed={!largeType}
                className={`px-2.5 py-1 hairline-box tabular-data ${
                  !largeType
                    ? 'bg-stratosphere text-amber border-amber'
                    : 'bg-midnight text-silver'
                }`}
              >
                Standard (17px)
              </button>
              <button
                type="button"
                onClick={() => setLargeType(true)}
                aria-pressed={largeType}
                className={`px-2.5 py-1 hairline-box tabular-data ${
                  largeType
                    ? 'bg-stratosphere text-amber border-amber'
                    : 'bg-midnight text-silver'
                }`}
              >
                Large Study (20px)
              </button>
            </div>
          </div>
        </header>

        {/* Primary Figure Plate */}
        <figure className="my-12 bg-midnight hairline-box overflow-hidden">
          <div className="relative aspect-[16/9] max-h-[540px] w-full overflow-hidden bg-void">
            <img
              src={activeArticle.heroImage}
              alt={activeArticle.heroCaption}
              className="h-full w-full object-cover"
            />
            <button
              type="button"
              onClick={() => setLightboxIndex(0)}
              className="absolute top-4 right-4 inline-flex items-center gap-1.5 bg-void/90 px-3 py-1.5 text-xs text-starlight hairline-box hover:border-amber transition-colors"
            >
              <Maximize2 className="h-3.5 w-3.5 text-amber" aria-hidden="true" />
              <span>Inspect Figure 1</span>
            </button>
          </div>
          <figcaption className="p-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-center text-xs hairline-t">
            <div className="md:col-span-8 text-silver leading-relaxed">
              <strong className="text-starlight">Figure 1:</strong> {activeArticle.heroCaption}
            </div>
            <div className="md:col-span-4 md:border-l md:border-silver/15 md:pl-4 flex items-center gap-1.5 text-[11px] tabular-data text-amber">
              <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{activeArticle.heroProvenance}</span>
            </div>
          </figcaption>
        </figure>

        {/* Main 12-Column Monograph Body (Left Sticky Table of Contents & Progress + Right 68ch Essay Column) */}
        <div
          id="monograph-article-body"
          className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start"
        >
          {/* Left 4 Columns: Sticky Reading Progress, Section Outline & Key Takeaways */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            {/* Live Progress Box */}
            <div className="bg-midnight p-5 hairline-box space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-starlight flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5 text-amber" aria-hidden="true" />
                  Monograph Outline
                </span>
                <span className="tabular-data text-amber font-medium">
                  {readingProgress}% Read
                </span>
              </div>

              <div className="h-1.5 w-full bg-void overflow-hidden">
                <div
                  className="h-full bg-amber transition-all duration-150"
                  style={{ width: `${readingProgress}%` }}
                />
              </div>

              <nav aria-label="Essay sections" className="space-y-2 pt-1">
                {activeArticle.sections.map((sec, idx) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="block text-xs text-silver hover:text-amber transition-colors py-1"
                  >
                    <span className="tabular-data text-regolith mr-2">
                      §{idx + 1}
                    </span>
                    {sec.heading}
                  </a>
                ))}
              </nav>
            </div>

            {/* Key Scientific Takeaways */}
            <div className="bg-midnight p-5 hairline-box space-y-3">
              <h3 className="text-xs font-semibold text-starlight flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-amber" aria-hidden="true" />
                Key Astrophysical Findings
              </h3>
              <ul className="space-y-3 text-xs text-silver leading-relaxed">
                {activeArticle.keyTakeaways.map((item, idx) => (
                  <li key={idx} className="border-l border-amber/50 pl-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Celestial Specimens */}
            <div className="bg-midnight p-5 hairline-box space-y-3">
              <h3 className="text-xs font-semibold text-starlight">
                Referenced Celestial Specimens
              </h3>
              <div className="space-y-2">
                {relatedObjects.map((obj) => (
                  <Link
                    key={obj.id}
                    to={`/celestial/${obj.id}`}
                    className="flex items-center justify-between bg-void/70 px-3 py-2 text-xs text-silver hover:text-starlight hover:border-amber hairline-box transition-colors"
                  >
                    <span>
                      {obj.name}{' '}
                      <span className="text-regolith tabular-data">({obj.category})</span>
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-amber" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* Right 8 Columns: Longform Scientific Essay Prose */}
          <div className="lg:col-span-8 space-y-12 max-w-[70ch]">
            {/* Abstract Lead */}
            <div className="bg-midnight/70 p-6 hairline-box">
              <span className="tabular-data text-xs text-amber block mb-2">
                ABSTRACT · {activeArticle.issueCode}
              </span>
              <p className="font-editorial text-xl text-starlight leading-relaxed">
                {activeArticle.abstract}
              </p>
            </div>

            {/* Sections */}
            {activeArticle.sections.map((section, secIndex) => (
              <section
                key={section.id}
                id={section.id}
                className="space-y-5 scroll-mt-28"
              >
                <h3 className="font-editorial text-2xl sm:text-3xl text-starlight leading-snug">
                  {section.heading}
                </h3>

                <div
                  className={`space-y-5 text-silver leading-[1.8] ${
                    largeType ? 'text-lg sm:text-[20px]' : 'text-base sm:text-[17px]'
                  }`}
                >
                  {section.paragraphs.map((para, pIdx) => (
                    <p
                      key={pIdx}
                      className={
                        secIndex === 0 && pIdx === 0 ? 'text-starlight' : ''
                      }
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Technical Equation / Metric Callout */}
                {section.technicalNote && (
                  <div className="my-6 bg-midnight p-5 sm:p-6 hairline-box border-l-2 border-l-amber space-y-2">
                    <div className="text-xs font-semibold text-starlight">
                      {section.technicalNote.title}
                    </div>
                    <div className="bg-void px-4 py-3 tabular-data text-xs sm:text-sm text-amber hairline-box overflow-x-auto">
                      {section.technicalNote.equationOrMetric}
                    </div>
                    <p className="text-xs text-silver leading-relaxed pt-1">
                      {section.technicalNote.explanation}
                    </p>
                  </div>
                )}

                {/* Pull Quote */}
                {section.pullQuote && (
                  <blockquote className="my-8 bg-midnight/60 p-6 sm:p-8 hairline-box space-y-3">
                    <p className="font-editorial italic text-xl sm:text-2xl text-starlight leading-relaxed">
                      “{section.pullQuote.quote}”
                    </p>
                    <footer className="tabular-data text-xs text-amber">
                      — {section.pullQuote.attribution}
                    </footer>
                  </blockquote>
                )}

                {/* Insert Secondary Figure Plate after Section 2 */}
                {secIndex === 1 && (
                  <figure className="my-8 bg-midnight hairline-box overflow-hidden">
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-void">
                      <img
                        src={activeArticle.secondaryImage}
                        alt={activeArticle.secondaryCaption}
                        className="h-full w-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => setLightboxIndex(1)}
                        className="absolute top-3 right-3 inline-flex items-center gap-1.5 bg-void/90 px-2.5 py-1 text-xs text-starlight hairline-box hover:border-amber"
                      >
                        <Maximize2 className="h-3 w-3 text-amber" aria-hidden="true" />
                        <span>Inspect Figure 2</span>
                      </button>
                    </div>
                    <figcaption className="p-4 text-xs space-y-1.5 hairline-t">
                      <div className="text-silver leading-relaxed">
                        <strong className="text-starlight">Figure 2:</strong>{' '}
                        {activeArticle.secondaryCaption}
                      </div>
                      <div className="tabular-data text-[11px] text-amber flex items-center gap-1.5">
                        <Sparkles className="h-3 w-3 shrink-0" aria-hidden="true" />
                        <span>{activeArticle.secondaryProvenance}</span>
                      </div>
                    </figcaption>
                  </figure>
                )}
              </section>
            ))}

            {/* Peer-Reviewed Literature Citations */}
            <footer className="pt-8 hairline-t space-y-6">
              <div className="bg-midnight p-6 hairline-box space-y-3">
                <h4 className="text-xs font-semibold text-starlight flex items-center gap-2">
                  <FileText className="h-4 w-4 text-amber" aria-hidden="true" />
                  Primary Literature &amp; Observational References
                </h4>
                <ol className="list-decimal list-inside space-y-2 text-xs text-silver leading-relaxed">
                  {activeArticle.citations.map((cit, i) => (
                    <li key={i} className="tabular-data text-[11px] text-silver">
                      {cit}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Next Monograph Prompt */}
              <div className="bg-midnight p-6 hairline-box flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="tabular-data text-xs text-amber block">
                    CONTINUE READING ISSUE XVII ({nextArticle.topic.toUpperCase()})
                  </span>
                  <h4 className="font-editorial text-2xl text-starlight">
                    {nextArticle.title}
                  </h4>
                  <span className="text-xs text-regolith block">
                    {nextArticle.author} · {nextArticle.readingTimeMinutes} min read
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleSelectArticle(nextArticle.id)}
                  className="inline-flex items-center gap-2 bg-amber px-5 py-3 text-xs font-semibold text-void hover:bg-amber-bright transition-colors shrink-0"
                >
                  <span>Read Next Monograph</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </footer>
          </div>
        </div>
      </article>

      <ImageLightbox
        plates={articlePlates}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
};

