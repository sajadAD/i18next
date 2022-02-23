import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Cookies from "js-cookie";
import { useEffect } from "react";

const language = [
  {
    code: "fr",
    name: "french",
    country_code: "fr",
  },
  {
    code: "en",
    name: "english",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربی",
    country_code: "ar",
    dir: "rtl"
  },
];

function App() {
  const currentLanguageCode = Cookies.get('i18next') || 'en'
  const currentLanguage = language.find( (elements) => elements.code === currentLanguageCode)
  const { t } = useTranslation();
  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr'
  }, [currentLanguage])
  return (
    <div className="container d-flex">
      <div className="d-flex justify-content-end">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {language.map(({ code, name, country_code }) => (
              <li key={country_code}>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    i18next.changeLanguage(code);
                  }}
                >
                  <span
                    className={`flag-icon flag-icon-${country_code} mx-2`}
                  ></span>
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="d-flex flex-column align-items-start">
        <h1 className="font-weight-normal md-3">{t("Welcome_to_React")}</h1>
        <p>{t("language")}</p>
      </div>
    </div>
  );
}

export default App;
