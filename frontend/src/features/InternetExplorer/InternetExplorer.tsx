import { useEffect, useState } from 'react';
import { WinButton } from '@atoms/WinButton/WinButton';
import { useTranslation } from '@context/LanguageContext';
import { PROFILE } from '@/data/profile';
import { ResumeContent } from '@molecules/ResumeContent/ResumeContent';
import iconArrowLeft from 'pixelarticons/svg/arrow-left.svg';
import iconArrowRight from 'pixelarticons/svg/arrow-right.svg';
import iconClose from 'pixelarticons/svg/close.svg';
import iconReload from 'pixelarticons/svg/reload.svg';
import iconHome from 'pixelarticons/svg/home.svg';
import iconSearch from 'pixelarticons/svg/search.svg';
import { IconRenderer } from '@atoms/IconRenderer/IconRenderer';

import './InternetExplorer.css';

export const InternetExplorer = () => {
  const { t } = useTranslation();
  const FAKE_URL = PROFILE.siteUrl;

  const [inputUrl, setInputUrl] = useState(FAKE_URL);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
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
    <div className="ie-root">

      <div className="ie-toolbar">
        <WinButton className="ie-toolbar-btn" title={t('ie_back')}>
          <IconRenderer icon={iconArrowLeft} size={16} />
        </WinButton>

        <WinButton className="ie-toolbar-btn" title={t('ie_forward')}>
          <IconRenderer icon={iconArrowRight} size={16} />
        </WinButton>

        <WinButton className="ie-toolbar-btn" title={t('ie_stop')}>
          <IconRenderer icon={iconClose} size={16} />
        </WinButton>

        <WinButton
          className="ie-toolbar-btn"
          title={t('ie_refresh')}
          onClick={simulateNavigation}
        >
          <IconRenderer icon={iconReload} size={16} />
        </WinButton>

        <WinButton
          className="ie-toolbar-btn"
          title={t('ie_home')}
          onClick={simulateNavigation}
        >
          <IconRenderer icon={iconHome} size={16} />
        </WinButton>

        <div className="ie-toolbar-divider" />

        <WinButton className="ie-toolbar-btn" title={t('ie_search')}>
          <IconRenderer icon={iconSearch} size={16} />
        </WinButton>
      </div>


      <div className="ie-address-bar">
        <label htmlFor="ie-address-input" className="ie-address-label">{t('address_label')}</label>
        <form onSubmit={simulateNavigation} className="ie-address-form">
          <input
            id="ie-address-input"
            name="url"
            type="text"
            className="ie-address-input"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            maxLength={2048}
          />
        </form>
      </div>

      <div className="ie-content">
        {loading && (
          <div className="ie-loading-overlay">
            <div className="ie-loading-box">
              <p>{t('loading_contacting')}</p>
            </div>
          </div>
        )}

        {!loading && (
          <section>
            <div className="ie-page-container">
              <ResumeContent prefix="ie" />




              <div className="ie-footer">
                {t('ie_footer_copy')}
              </div>
            </div>
          </section>
        )}
      </div>


      <div className="ie-status-bar">
        {loading ? t('status_opening') : t('status_done')}
      </div>
    </div>
  );
};
