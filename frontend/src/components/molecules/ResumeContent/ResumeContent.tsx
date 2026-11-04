import { useTranslation } from '@/context/LanguageContext';
import { PROFILE, prettyUrl } from '@/data/profile';

interface ResumeContentProps {
  /** CSS class prefix of the host browser app, e.g. "ie" or "google". */
  prefix: 'ie' | 'google';
}

/** Resume body shared by the fake Internet Explorer and Google Chrome windows. */
export const ResumeContent = ({ prefix: p }: ResumeContentProps) => {
  const { t } = useTranslation();

  const skills = [
    t('skill_pm'),
    t('skill_agile'),
    t('skill_docs'),
    t('skill_tools'),
    t('skill_liveops'),
    t('skill_lang'),
  ];

  const jobs = [
    { role: t('resume_exp_job1_role'), company: t('resume_exp_job1_company'), desc: t('resume_exp_job1_desc') },
    { role: t('resume_exp_job2_role'), company: t('resume_exp_job2_company'), desc: t('resume_exp_job2_desc') },
  ];

  return (
    <>
      <div className={`${p}-page-header`}>
        <span className={`${p}-page-welcome`}>{t('welcome_to')}</span>
        <h1 className={`${p}-page-title`}>{PROFILE.fullName}</h1>
        <p className={`${p}-page-subtitle`}>{t('frontend_portfolio')}</p>
      </div>

      <div className={`${p}-page-nav`}>
        <a href="#summary" className={`${p}-nav-link`}>{t('resume_summary_title')}</a>
        <a href="#experience" className={`${p}-nav-link`}>{t('resume_exp_title')}</a>
        <a href="#education" className={`${p}-nav-link`}>{t('resume_edu_title')}</a>
        <a href="#contact" className={`${p}-nav-link`}>{t('contact')}</a>
      </div>

      <div id="summary" className={`${p}-section-box`}>
        <h2 className={`${p}-section-title`}>{t('resume_summary_title')}</h2>
        <p className={`${p}-page-text`}>{t('resume_summary_content')}</p>
      </div>

      <div id="experience" className={`${p}-section-box`}>
        <h2 className={`${p}-section-title`}>{t('resume_exp_title')}</h2>
        {jobs.map((job) => (
          <div key={job.role} className={`${p}-resume-item`}>
            <h3 className={`${p}-resume-role`}>{job.role}</h3>
            <p className={`${p}-resume-company`}>{job.company}</p>
            <p className={`${p}-resume-desc`}>{job.desc}</p>
          </div>
        ))}
      </div>

      <div id="skills" className={`${p}-section-box`}>
        <h2 className={`${p}-section-title`}>{t('skills')}</h2>
        <ul className={`${p}-page-text list-disc pl-5`}>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div id="education" className={`${p}-section-box`}>
        <h2 className={`${p}-section-title`}>{t('resume_edu_title')}</h2>
        <div className={`${p}-resume-item`}>
          <h3 className={`${p}-resume-role`}>{t('resume_edu_college1_course')}</h3>
          <p className={`${p}-resume-company`}>
            {t('resume_edu_college1_name')} | {t('resume_edu_college1_date')}
          </p>
          <p className={`${p}-resume-desc`}>{t('resume_edu_college1_desc')}</p>
        </div>
      </div>

      <div id="certificate" className={`${p}-section-box`}>
        <h2 className={`${p}-section-title`}>{t('resume_cert_title')}</h2>
        <div className={`${p}-resume-item`}>
          <h3 className={`${p}-resume-role`}>{t('resume_cert_name')}</h3>
          <p className={`${p}-resume-company`}>{t('resume_cert_org')}</p>
          <p className={`${p}-resume-desc`}>{t('resume_cert_desc')}</p>
        </div>
      </div>

      <div id="contact" className={`${p}-section-box ${p}-page-text`}>
        <h2 className={`${p}-section-title`}>{t('contact')}</h2>
        <p>
          {t('label_email')}:{' '}
          <a href={`mailto:${PROFILE.email}`} className={`${p}-nav-link`}>
            {PROFILE.email}
          </a>
        </p>
        <p>
          LinkedIn:{' '}
          <a href={PROFILE.linkedin} className={`${p}-nav-link`} target="_blank" rel="noopener noreferrer">
            {prettyUrl(PROFILE.linkedin)}
          </a>
        </p>
        {PROFILE.github && (
          <p>
            GitHub:{' '}
            <a href={PROFILE.github} className={`${p}-nav-link`} target="_blank" rel="noopener noreferrer">
              {prettyUrl(PROFILE.github)}
            </a>
          </p>
        )}
      </div>
    </>
  );
};
