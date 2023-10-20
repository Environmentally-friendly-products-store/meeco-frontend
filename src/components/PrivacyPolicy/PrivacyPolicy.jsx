import './PrivacyPolicy.css';
import InfoPage from '../InfoPage/InfoPage';
import InfoBlock from '../InfoBlock/InfoBlock';
import {
  privacyPolicy1,
  privacyPolicy2,
  privacyPolicy3,
  privacyPolicy4,
  privacyPolicy5,
  privacyPolicy6,
  privacyPolicy7,
  privacyPolicy8,
  privacyPolicy9,
  privacyPolicy10,
  privacyPolicy11,
  privacyPolicy12,
  privacyPolicy13,
  privacyPolicy14,
} from '../../utils/privacyPolicyData';

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

            <li className="privacy-policy__main-item">
              Основные права и обязанности Оператора
              <ol className="privacy-policy__items">
                {privacyPolicy3.map((item) => (
                  <li key={item.id} className="privacy-policy__item">
                    {item.text}
                    <ul>
                      {item.points &&
                        item.points.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </li>

            <li className="privacy-policy__main-item">
              Основные права и обязанности субъектов персональных данных
              <ol className="privacy-policy__items">
                {privacyPolicy4.map((item) => (
                  <li key={item.id} className="privacy-policy__item">
                    {item.text}
                    <ul>
                      {item.points &&
                        item.points.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </li>

            <li className="privacy-policy__main-item">
              Оператор может обрабатывать следующие персональные данные
              Пользователя
              <ol className="privacy-policy__items">
                {privacyPolicy5.map((item) => (
                  <li key={item.id} className="privacy-policy__item">
                    {item.text}
                    <ol>
                      {item.points &&
                        item.points.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                    </ol>
                  </li>
                ))}
              </ol>
            </li>

            <li className="privacy-policy__main-item">
              Принципы обработки персональных данных
              <ol className="privacy-policy__items">
                {privacyPolicy6.map((item) => (
                  <li key={item.id} className="privacy-policy__item">
                    {item.text}
                  </li>
                ))}
              </ol>
            </li>

            <li className="privacy-policy__main-item">
              Основные права и обязанности Оператора
              <ol className="privacy-policy__items">
                {privacyPolicy7.map((item) => (
                  <li key={item.id} className="privacy-policy__item">
                    {item.text}
                    <ul>
                      {item.points &&
                        item.points.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </li>

            <li className="privacy-policy__main-item">
              Основные права и обязанности Оператора
              <ol className="privacy-policy__items">
                {privacyPolicy8.map((item) => (
                  <li key={item.id} className="privacy-policy__item">
                    {item.text}
                    <ul>
                      {item.points &&
                        item.points.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </li>

            <li className="privacy-policy__main-item">
              Условия обработки персональных данных
              <ol className="privacy-policy__items">
                {privacyPolicy9.map((item) => (
                  <li key={item.id} className="privacy-policy__item">
                    {item.text}
                  </li>
                ))}
              </ol>
            </li>

            <li className="privacy-policy__main-item">
              Порядок сбора, хранения, передачи и других видов обработки
              персональных данных
              <ol className="privacy-policy__items">
                {privacyPolicy10.map((item) => (
                  <li key={item.id} className="privacy-policy__item">
                    {item.text}
                  </li>
                ))}
              </ol>
            </li>

            <li className="privacy-policy__main-item">
              Перечень действий, производимых Оператором с полученными
              персональными данными
              <ol className="privacy-policy__items">
                {privacyPolicy11.map((item) => (
                  <li key={item.id} className="privacy-policy__item">
                    {item.text}
                  </li>
                ))}
              </ol>
            </li>

            <li className="privacy-policy__main-item">
              Трансграничная передача персональных данных
              <ol className="privacy-policy__items">
                {privacyPolicy12.map((item) => (
                  <li key={item.id} className="privacy-policy__item">
                    {item.text}
                  </li>
                ))}
              </ol>
            </li>

            <li className="privacy-policy__main-item">
              Конфиденциальность персональных данных
              <ol className="privacy-policy__items">
                {privacyPolicy13.map((item) => (
                  <li key={item.id} className="privacy-policy__item">
                    {item.text}
                  </li>
                ))}
              </ol>
            </li>

            <li className="privacy-policy__main-item">
              Заключительные положения
              <ol className="privacy-policy__items">
                {privacyPolicy14.map((item) => (
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
