export function useTranslation() {
  const t = (key: string) => {
    // Simple translation function - can be extended with i18n library later
    const translations: Record<string, string> = {
      'common.appName': 'AI Career Coach',
    };
    return translations[key] || key;
  };

  return { t };
}

