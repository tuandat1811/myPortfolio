/**
 * Single source of truth for the portfolio owner's personal info.
 * Edit this file to change name, contacts and links across the whole site.
 * Translatable text (bio, experience, education...) lives in public/locales/*.json.
 */
interface Profile {
  fullName: string;
  shortName: string;
  nickname: string;
  jobTitle: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  siteUrl: string;
  knowsAbout: string[];
}

export const PROFILE: Profile = {
  fullName: 'Hoang Dang Tuan Dat',
  shortName: 'Dat Hoang',
  nickname: 'DatHoang',
  jobTitle: 'Game Producer',
  location: 'Hoang Mai, Ha Noi, Vietnam',
  email: 'dat.hdt181100@gmail.com',
  linkedin: 'https://www.linkedin.com/in/tuandat0328/',
  /** Leave empty to hide the GitHub link everywhere. */
  github: '',
  /** Public URL of the deployed site (used for SEO / fake browser address bar). */
  siteUrl: 'https://tuandat1811.github.io/myPortfolio',
  knowsAbout: [
    'Game Production',
    'Mobile Games',
    'Project Management',
    'Agile / Scrum',
    'Live Ops',
    'A/B Testing',
    'Game Design Documentation',
    'Jira',
    'Confluence',
    'Unity',
  ],
};

/** "https://www.linkedin.com/in/x/" -> "linkedin.com/in/x" */
export const prettyUrl = (url: string) =>
  url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
