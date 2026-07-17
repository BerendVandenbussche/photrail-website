// English — source of truth for all UI copy. Keep keys in sync with nl.ts.
export default {
  meta: {
    title: 'Photrail — Your travel history, automatically.',
    description:
      'Photrail turns the location data already inside your photos into a beautiful, private travel history — countries, cities, trips, world wonders and a Year in Travel recap. 100% on-device. No account. Open source.',
  },

  nav: {
    features: 'Features',
    howItWorks: 'How it works',
    privacy: 'Privacy',
    demo: 'Try the demo',
    openSource: 'Open source',
    getApp: 'Get the app',
    home: 'Photrail home',
    viewGithub: 'View Photrail on GitHub',
    toggleMenu: 'Toggle menu',
    language: 'Language',
    chooseLanguage: 'Choose language',
  },

  theme: {
    toLight: 'Switch to light mode',
    toDark: 'Switch to dark mode',
  },

  appStore: {
    downloadOn: 'Download on the',
    appStore: 'App Store',
    aria: 'Download Photrail on the App Store',
    full: 'Download on the App Store',
  },

  common: {
    skipToContent: 'Skip to content',
  },

  hero: {
    badge: 'Now on the App Store · iOS 18+',
    titleLead: 'Your travel history,',
    titleAccent: 'automatically.',
    subtitle:
      'Photrail reads the location data already inside your photos and turns it into a beautiful map of everywhere you’ve been — countries, cities, trips and a cinematic Year in Travel. No tagging. No account. Nothing ever leaves your phone.',
    viewGithub: 'View on GitHub',
    trust: {
      onDevice: '100% on-device',
      noAccount: 'No account',
      noCloud: 'No cloud',
      openSource: 'Open source',
    },
  },

  trust: {
    eyebrow: 'Built on trust',
    heading: 'Private by design — not as a setting.',
    cards: {
      onDevice: {
        title: '100% on-device',
        desc: 'Every insight is computed on your iPhone using bundled offline maps — instantly, with no server in the loop.',
      },
      noAccount: {
        title: 'No account',
        desc: 'No sign-up, no email, no profile. Open the app and your travel history is just there.',
      },
      noCloud: {
        title: 'No cloud uploads',
        desc: 'Your photos and their location data stay in your library. Photrail never uploads a single image.',
      },
      openSource: {
        title: 'Open source',
        desc: 'The full source is on GitHub. Read exactly what runs — or build it yourself.',
      },
      privacyFirst: {
        title: 'Privacy-first',
        desc: 'No tracking, no ads, no privacy-invasive analytics. Built to respect you by default.',
      },
    },
  },

  features: {
    eyebrow: 'Everything, surfaced for you',
    heading: 'One library. A whole travel story.',
    subhead:
      'You already did the traveling. Photrail does the remembering — turning thousands of photos into insights you’ll actually want to revisit.',
    items: {
      trips: {
        title: 'Automatic trip detection',
        blurb:
          'No tagging, no folders, no spreadsheets. Photrail groups your photos into real trips by where and when they were taken — your journeys reappear on their own.',
      },
      personality: {
        title: 'Travel personality',
        blurb:
          'Are you a city wanderer, a coastline chaser, or a mountain soul? An on-device profile reveals your travel style from how you actually travel.',
      },
      recap: {
        title: 'Year in Travel',
        blurb:
          'A cinematic, Wrapped-style recap of your year — distance, top destinations, first-ever countries and a hero finale. Every slide is shareable.',
      },
      map: {
        title: 'World map',
        blurb:
          'Every country you have set foot in, lit up on one interactive map. Watch your world fill in, year after year.',
      },
      places: {
        title: 'Countries & cities',
        blurb:
          'Tally the countries, cities and continents you have explored — and the percentage of the planet you have covered so far.',
      },
      milestones: {
        title: 'Travel milestones',
        blurb:
          'Furthest from home, biggest trip, highest peak, most-photographed country — your records, surfaced automatically.',
      },
      wonders: {
        title: 'World wonders',
        blurb:
          'Photrail recognises the New 7 Wonders and famous landmarks in your library — tap any to revisit the photos you took there.',
      },
      share: {
        title: 'Shareable cards',
        blurb:
          'Beautiful, branded travel cards at story resolution — personality, summaries, wonders and trips, ready for Instagram in a tap.',
      },
      widgets: {
        title: 'Home-screen widgets',
        blurb:
          'A travel-stats widget and a world-wonders widget keep your journey one glance away — small, medium and lock-screen sizes.',
      },
    },
  },

  how: {
    eyebrow: 'How it works',
    heading: 'From camera roll to travel map in three steps.',
    steps: {
      access: {
        title: 'Grant photo access',
        desc: 'Allow Photrail to read your photo library. You can choose all photos or a selection — and revoke it anytime in Settings.',
      },
      read: {
        title: 'Photrail reads the metadata',
        desc: 'On-device, it scans the GPS coordinates and dates embedded in your photos — never the images themselves leaving your phone — and matches them to countries, cities and landmarks using bundled offline maps.',
      },
      discover: {
        title: 'Discover your travel story',
        desc: 'Your map fills in, trips appear, your travel personality emerges and your Year in Travel is ready to relive and share.',
      },
    },
    stepLabel: 'Step {n}',
    footnote:
      'Processing is durable and resumable — close the app whenever, and it picks up right where it left off.',
  },

  privacy: {
    eyebrow: 'Privacy',
    heading: 'Your photos never leave your device.',
    intro:
      'Photrail was built privacy-first from the very first line of code. The only thing it reads is the location and date metadata already stored inside your photos — and even that is processed entirely on your iPhone.',
    guarantees: {
      leave: 'Your photos never leave your device',
      metadata: 'Photrail only reads metadata already inside your photos',
      servers: 'No servers, no cloud processing, no backups of your data',
      tracking: 'No tracking, no advertising, no privacy-compromising analytics',
      openSource: 'Open source — anyone can inspect exactly what it does',
    },
    note: 'The one exception, stated plainly: resolving city names uses Apple’s geocoder, which sends only coordinates (never images) and only for the optional city-enrichment pass.',
    photrailTitle: 'Photrail',
    othersTitle: 'Typical cloud apps',
    photrail: {
      onDevice: 'All analysis runs on your iPhone',
      offline: 'Works fully offline',
      noAccount: 'No account or login',
      openSource: 'Source code public on GitHub',
    },
    others: {
      upload: 'Photos uploaded to company servers',
      online: 'Requires an internet connection',
      account: 'Account, email & profile required',
      closed: 'Closed source — you just trust them',
    },
  },

  exifEdu: {
    eyebrow: 'What is EXIF, anyway?',
    heading: 'Your photos quietly remember where you were.',
    p1: 'When you take a photo with location enabled, your phone tucks a little note inside the file — things like where and when it was taken. It’s called {term}, and it travels invisibly with the image.',
    p1Term: 'EXIF metadata',
    p2: 'Photrail simply reads that note across your whole library and stitches it into a travel history. No guessing, no manual tagging — the information was already there.',
    fileName: 'beach-sunset.jpg',
    fileMeta: '2.4 MB · 4032 × 3024',
    hiddenNote: '+ hidden note',
    examples: {
      where: { label: 'Where', value: '48.8584° N, 2.2945° E' },
      when: { label: 'When', value: 'Jul 14, 2024 · 18:32' },
      camera: { label: 'Camera', value: 'iPhone 15 Pro' },
      altitude: { label: 'Altitude', value: '57 m' },
    },
  },

  exifDemo: {
    eyebrow: 'See it for yourself',
    heading: 'Drop in a photo. Watch the metadata appear.',
    subhead:
      'This is exactly the kind of information Photrail reads — running entirely in your browser, right here. It’s the same on-device idea the app is built on.',
    notice: 'This image never leaves your device.',
    dropTitle: 'Drag & drop a photo here',
    dropHintPrefix: 'or ',
    browse: 'browse your files',
    formats: ' — JPEG, HEIC, PNG, TIFF',
    tip: 'Tip: photos saved from social apps usually have their location stripped. For the full effect, try one straight from a camera roll.',
    notImage: 'That doesn’t look like an image. Please choose a JPEG, HEIC, PNG or TIFF.',
    readError: 'We couldn’t read this file in the browser. Try a different photo.',
    parsing: 'Reading metadata locally…',
    analyzedOn: 'Analyzed on your device',
    tryAnother: 'Try another',
    fields: {
      captureDate: 'Capture date',
      camera: 'Camera',
      lens: 'Lens',
      altitude: 'Altitude',
      orientation: 'Orientation',
      aperture: 'Aperture',
      shutter: 'Shutter speed',
      iso: 'ISO',
      focal: 'Focal length',
      gps: 'GPS coordinates',
    },
    altitudeValue: '{m} m above sea level',
    orientation: {
      1: 'Normal',
      2: 'Mirrored',
      3: 'Rotated 180°',
      4: 'Mirrored, 180°',
      5: 'Mirrored, 90° CCW',
      6: 'Rotated 90° CW',
      7: 'Mirrored, 90° CW',
      8: 'Rotated 90° CCW',
    },
    noMetaTitle: 'No metadata found in this photo',
    noMetaBody:
      'This image has no readable EXIF data — it was likely stripped when shared, edited, or screenshotted. That’s exactly why Photrail works best with your original camera roll.',
    mapCaption:
      '📍 This is where the photo was taken — read straight from the photo’s location note. Photrail does this for your entire library, then groups the pins into countries, cities and trips.',
    noLocTitle: 'No location in this photo',
    noLocBody:
      'When a photo does include GPS coordinates, a map appears here with a pin on the exact spot — the raw material for your travel history.',
  },

  exifMap: {
    latitude: 'Latitude',
    longitude: 'Longitude',
    altitude: 'Altitude',
    aria: 'Map showing where the photo was taken',
  },

  year: {
    eyebrow: 'Year in Travel',
    heading: 'Your year, replayed like a highlight reel.',
    intro:
      'Once a year, Photrail turns your travels into a cinematic recap worth waiting for — personal, beautiful, and made entirely from photos you already took.',
    highlights: {
      story: {
        title: 'Your year as a story',
        desc: 'A paged, Wrapped-style recap you swipe through — distance traveled with relatable comparisons, your route mapped chronologically, and a hero finale.',
      },
      firsts: {
        title: 'Biggest trips & firsts',
        desc: 'Your standout journey, the countries you set foot in for the very first time, your highest peak and furthest point from home.',
      },
      evolution: {
        title: 'Personality evolution',
        desc: 'See how your travel style shifted over the year — and which destinations defined it.',
      },
      shareable: {
        title: 'Every slide is shareable',
        desc: 'Export any slide as its own branded card; the finale even comes in light, dark and transparent themes.',
      },
    },
  },

  screenshots: {
    eyebrow: 'A look inside',
    heading: 'Designed to make you want to keep traveling.',
    prev: 'Previous screenshot',
    next: 'Next screenshot',
    goTo: 'Go to {title}',
  },

  screens: {
    dashboard: { title: 'Dashboard', desc: 'Your travel at a glance' },
    personality: { title: 'Travel Personality', desc: 'Discover your style' },
    recap: { title: 'Year in Travel', desc: 'Your year, replayed' },
    map: { title: 'Travel Map', desc: 'Every country, lit up' },
    country: { title: 'Country detail', desc: 'Trips, cities & photos' },
    share: { title: 'Share cards', desc: 'Ready for your story' },
  },

  openSource: {
    badge: 'Open source',
    heading: 'Don’t take our word for it. Read the code.',
    intro:
      'Privacy promises are easy to make. Photrail’s are verifiable — the entire app is public on GitHub, developed in the open, and welcoming contributions.',
    points: {
      read: 'Read every line that runs on your device',
      audit: 'Audit the privacy claims yourself',
      contribute: 'Open issues, suggest features, send pull requests',
      license: 'GPLv3 licensed — free and copyleft, yours to study and build on',
    },
    star: 'Star on GitHub',
    fork: 'Fork the repo',
    repoMeta: 'Public · GPLv3 · Swift',
    stars: 'GitHub stars',
    starUs: 'Star us!',
    onDevice: 'On-device',
    builtWith: 'Built with',
  },

  cta: {
    titleLead: 'Every trip you’ve ever taken,',
    titleAccent: 'waiting in your photos.',
    subtitle:
      'Download Photrail and watch your travel history appear in minutes — privately, automatically, and for free.',
    viewSource: 'View source',
    requirement: 'Requires iOS 18 or later · No account · No in-app tracking',
  },

  footer: {
    tagline: 'Your travel history, automatically. Built privacy-first and entirely on-device.',
    explore: 'Explore',
    getPhotrail: 'Get Photrail',
    downloadLink: 'Download on the App Store',
    sourceLink: 'Source on GitHub',
    licenseLink: 'GPLv3 License',
    privacyTitle: 'Privacy statement:',
    privacyBody:
      ' Photrail processes your photos entirely on your device. It never uploads your images, requires no account, and includes no advertising or privacy-compromising analytics. The only network use is optionally resolving city names from coordinates via Apple’s geocoder. The full source code is available for inspection on GitHub.',
    copyright: '© {year} Photrail. All rights reserved.',
    madeFor: 'Open source under the GPLv3 License · Made for travelers, not advertisers.',
    appStoreAria: 'App Store',
    githubAria: 'GitHub',
  },

  // Text shown inside the illustrative app mockups.
  mock: {
    welcomeBack: 'Welcome back',
    yourTravel: 'Your Travel',
    mapBadge: '{countries} countries · {continents} continents',
    stats: { countries: 'Countries', cities: 'Cities', continents: 'Continents' },
    travelPersonality: 'Travel Personality',
    urbanExplorer: 'Urban Explorer',
    traits: {
      urban: 'Urban',
      coastal: 'Coastal',
      culture: 'Culture',
      nature: 'Nature',
      mountain: 'Mountain',
      adventure: 'Adventure',
    },
    continents: {
      europe: 'Europe',
      asia: 'Asia',
      africa: 'Africa',
      northAmerica: 'N. America',
      oceania: 'Oceania',
    },
    recap: {
      badge: 'YEAR IN TRAVEL',
      distanceTitle: 'You went the distance.',
      totalDistance: 'Total distance',
      aroundEarth: 'That’s 1.2× around the Earth 🌍',
      trips: 'trips',
      countries: 'countries',
      mostPhotographed: 'most photographed',
      newCountries: 'new countries',
    },
    map: {
      search: 'Search countries & trips',
      italy: 'Italy',
      italyStats: '5 trips · 7 cities · 214 photos',
      mostVisited: 'Most visited',
    },
    country: {
      japan: 'Japan',
      subtitle: 'Asia · 3 trips',
      cities: 'cities',
      photos: 'photos',
      days: 'days',
      photosHeading: 'Photos',
    },
    share: {
      title: 'My 2025 in travel',
      subtitle: 'countries · 5 continents',
    },
  },

  lang: {
    en: 'English',
    nl: 'Nederlands',
  },
} as const
