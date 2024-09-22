import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <p className="text-2xl font-bold">{t('common.hero.title')}</p>
      <button onClick={() => {
        i18n.changeLanguage(i18n.language === 'fr-FR' ? 'en-US' : 'fr-FR');
      }}>toggle language</button>
    </>
  )
}

export default App
