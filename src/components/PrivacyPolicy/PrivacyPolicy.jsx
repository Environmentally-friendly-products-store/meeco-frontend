import './PrivacyPolicy.css';
import InfoPage from '../InfoPage/InfoPage';
import InfoBlock from '../InfoBlock/InfoBlock';
import { privacyPolicy1, privacyPolicy2 } from '../../utils/privacyPolicyData';

export default function PrivacyPolicy() {
  return (
    <InfoPage title="Политика конфиденциальности" id="privacypolicy">
      <InfoBlock
        showImage={false}
        title="Политика в отношении обработки персональных данных"
        id="aboutpolicy"
        alternativeBlockStyles="infoblock_style_privacy-policy"
        alternativeTitleStyles="infoblock__title_style_privacy-policy"
      >
        <section className="privacy-policy">
          <ol className="privacy-policy__main-list">
            <li className="privacy-policy__main-item">
              Общие положения
              <ol className="privacy-policy__items">
                {privacyPolicy1.map((item) => (
                  <li key={item.id} className="privacy-policy__item">
                    {item.text}
                  </li>
                ))}
              </ol>
            </li>

            <li className="privacy-policy__main-item">
              Основные понятия, используемые в Политике
              <ol className="privacy-policy__items">
                {privacyPolicy2.map((item) => (
                  <li key={item.id} className="privacy-policy__item">
                    {item.text}
                  </li>
                ))}
              </ol>
            </li>
          </ol>
        </section>
      </InfoBlock>
    </InfoPage>
  );
}
