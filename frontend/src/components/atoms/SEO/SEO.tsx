import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { PROFILE } from '@/data/profile';

export const SEO: React.FC = () => {
    const { t, i18n } = useTranslation();

    const sameAs = [PROFILE.linkedin, PROFILE.github].filter(Boolean);

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "mainEntity": {
            "@type": "Person",
            "name": PROFILE.fullName,
            "alternateName": PROFILE.shortName,
            "jobTitle": PROFILE.jobTitle,
            "image": `${PROFILE.siteUrl}/banner.png`,
            "url": PROFILE.siteUrl,
            "sameAs": sameAs,
            "description": t('seo_description'),
            "knowsAbout": PROFILE.knowsAbout,
        }
    };

    return (
        <Helmet>
            <html lang={i18n.language || 'en'} />
            <title>{t('app_title', `Retro Game Producer Portfolio | ${PROFILE.fullName}`)}</title>
            <meta name="description" content={t('seo_description')} />
            <meta name="keywords" content="game producer, mobile games, portfolio, retro portfolio, Windows 95, interactive curriculum" />

            {/* Social Media Banner */}
            <meta property="og:image" content={`${PROFILE.siteUrl}/banner.png`} />
            <meta property="twitter:image" content={`${PROFILE.siteUrl}/banner.png`} />

            <script type="application/ld+json">
                {JSON.stringify(personSchema)}
            </script>
        </Helmet>
    );
};
