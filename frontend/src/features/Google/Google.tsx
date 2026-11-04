import { useEffect, useState } from 'react';
import { useTranslation } from '@context/LanguageContext';
import { PROFILE } from '@/data/profile';
import { ResumeContent } from '@molecules/ResumeContent/ResumeContent';
import './Google.css';


export const Google = () => {
  const { t } = useTranslation();
  const FAKE_URL = PROFILE.siteUrl;

  const [inputUrl, setInputUrl] = useState(FAKE_URL);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const simulateNavigation = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    setLoading(true);
    setInputUrl(FAKE_URL);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="google-root">
      <div className="google-address-bar">
        <label htmlFor="google-address-input" className="google-address-label">{t('address_label')}</label>
        <form onSubmit={simulateNavigation} className="google-address-form">
          <input
            id="google-address-input"
            name="url"
            type="text"
            className="google-address-input"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            maxLength={2048}
          />
        </form>
      </div>

      <div className="google-content">
        {loading && (
          <div className="google-loading-overlay">
            <div className="google-loading-box">
              <p>{t('loading_contacting')}</p>
            </div>
          </div>
        )}

        {!loading && (
          <section>
            <div className="google-page-container">
              <ResumeContent prefix="google" />



              <div className="google-footer">
                {t('google_footer_copy')}
              </div>
            </div>
          </section>
        )}
      </div>


      <div className="google-status-bar">
        {loading ? t('status_opening') : t('status_done')}
      </div>
    </div>
  );
};
