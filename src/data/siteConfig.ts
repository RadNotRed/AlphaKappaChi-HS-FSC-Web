// ─────────────────────────────────────────────────────────────
//  SITE CONFIGURATION
//  Edit this file to update global site info, links, and stats.
//  No HTML knowledge required — just change the values below.
// ─────────────────────────────────────────────────────────────

export const siteConfig = {
  /** Chapter name (Alpha Kappa Chi is the FSC chapter of Alpha Phi Sigma) */
  name: 'Alpha Kappa Chi',

  /** National honor society name */
  nationalName: 'Alpha Phi Sigma',

  /** Short abbreviation shown in the logo badge */
  abbreviation: 'AKX',

  /** Tagline shown beneath the name in the navbar */
  subtitle: 'Alpha Phi Sigma · Criminal Justice Honor Society',

  /** College name */
  college: 'Farmingdale State College',

  /** Location shown in hero badge and footer */
  location: 'Long Island, New York',

  /** State shown in hero badge */
  state: 'New York',

  /** Contact email used across the site */
  email: 'akc@farmingdale.edu',

  /** Donation link — update this when the payment URL changes */
  donationLink: 'https://example.com/donate/akc-fsc',

  /** Year the society was founded */
  foundedYear: 2008,

  /** Copyright year shown in the footer */
  copyrightYear: 2025,
} as const;

// ─────────────────────────────────────────────────────────────
//  HERO STATS
//  The three stat boxes displayed in the hero section.
//  Change value/label as needed.
// ─────────────────────────────────────────────────────────────

export const heroStats = [
  { value: '3.25+', label: 'Min. GPA', highlight: true },
  { value: '4+',   label: 'Service Hours', highlight: false },
  { value: '2008',  label: 'Founded',       highlight: false },
] as const;

// ─────────────────────────────────────────────────────────────
//  NAVIGATION LINKS
//  Add / remove / reorder navigation items here.
// ─────────────────────────────────────────────────────────────

export const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Pillars',    href: '#pillars' },
  { label: 'Events',     href: '#events' },
  { label: 'Awards',     href: '#awards' },
  { label: 'Membership', href: '#join' },
  { label: 'Leadership', href: '#leadership' },
] as const;

// ─────────────────────────────────────────────────────────────
//  SOCIAL / EXTERNAL LINKS (footer)
//  Add new social links by adding objects here.
//  `icon` must be one of: 'email' | 'instagram' | 'linkedin'
// ─────────────────────────────────────────────────────────────

export type SocialIcon = 'email' | 'instagram' | 'linkedin';

export interface SocialLink {
  icon: SocialIcon;
  href: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  { icon: 'email', href: 'mailto:akc@farmingdale.edu', label: 'Email' },
];
