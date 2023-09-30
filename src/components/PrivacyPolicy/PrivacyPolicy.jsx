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
        hasAlternativeTitleStyles={true}
      >
        <ol className="privacypolicy__items">
          <li className="privacypolicy__item">
            Общие положения
            <ol className="privacypolicy__items">
              <li
                key={0}
                className="privacypolicy__item privacypolicy__item-content"
              >
                Настоящая политика обработки персональных данных составлена в
                соответствии с требованиями Федерального закона от 27.07.2006.
                №152-ФЗ «О персональных данных» (далее - Закон о персональных
                данных) и определяет порядок обработки персональных данных и
                меры по обеспечению безопасности персональных данных
                предпринимаемые ООО "Экоми" (далее – Оператор).
              </li>

              {privacyPolicy1.map((item) => (
                <li
                  key={item.id}
                  className="privacypolicy__item privacypolicy__item-content"
                >
                  {item.itemText}
                </li>
              ))}
            </ol>
          </li>

          <li className="privacypolicy__item">
            Основные понятия, используемые в Политике
            <ol className="privacypolicy__items">
              {privacyPolicy2.map((item) => (
                <li
                  key={item.id}
                  className="privacypolicy__item privacypolicy__item-content"
                >
                  {item.itemText}
                </li>
              ))}
            </ol>
          </li>

          <li className="privacypolicy__item">
            Основные права и обязанности Оператора
            <ol className="privacypolicy__items">
              {privacyPolicy3.map((item) => (
                <li
                  key={item.id}
                  className="privacypolicy__item privacypolicy__item-content"
                >
                  {item.itemText}
                </li>
              ))}
            </ol>
          </li>

          <li className="privacypolicy__item">
            Основные права и обязанности субъектов персональных данных
            <ol className="privacypolicy__items">
              {privacyPolicy4.map((item) => (
                <li
                  key={item.id}
                  className="privacypolicy__item privacypolicy__item-content"
                >
                  {item.itemText}
                </li>
              ))}
            </ol>
          </li>

          <li className="privacypolicy__item">
            Оператор может обрабатывать следующие персональные данные
            Пользователя
            <ol className="privacypolicy__items">
              {privacyPolicy5.map((item) => (
                <li
                  key={item.id}
                  className="privacypolicy__item privacypolicy__item-content"
                >
                  {item.itemText}
                </li>
              ))}
            </ol>
          </li>

          <li className="privacypolicy__item">
            Принципы обработки персональных данных
            <ol className="privacypolicy__items">
              {privacyPolicy6.map((item) => (
                <li
                  key={item.id}
                  className="privacypolicy__item privacypolicy__item-content"
                >
                  {item.itemText}
                </li>
              ))}
            </ol>
          </li>

          <li className="privacypolicy__item">
            Цели обработки персональных данных
            <ol className="privacypolicy__items">
              {privacyPolicy7.map((item) => (
                <li
                  key={item.id}
                  className="privacypolicy__item privacypolicy__item-content"
                >
                  {item.itemText}
                </li>
              ))}
            </ol>
          </li>

          <li className="privacypolicy__item">
            Условия обработки персональных данных
            <ol className="privacypolicy__items">
              {privacyPolicy8.map((item) => (
                <li
                  key={item.id}
                  className="privacypolicy__item privacypolicy__item-content"
                >
                  {item.itemText}
                </li>
              ))}
            </ol>
          </li>

          <li className="privacypolicy__item">
            Порядок сбора, хранения, передачи и других видов обработки
            персональных данных
            <ol className="privacypolicy__items">
              <li
                key={0}
                className="privacypolicy__item privacypolicy__item-content"
              >
                Безопасность персональных данных, которые обрабатываются
                Оператором, обеспечивается путём реализации правовых,
                организационных и технических мер, необходимых для выполнения
                в полном объёме требований действующего законодательства
                в области защиты персональных данных.
              </li>
              {privacyPolicy9.map((item) => (
                <li
                  key={item.id}
                  className="privacypolicy__item privacypolicy__item-content"
                >
                  {item.itemText}
                </li>
              ))}
            </ol>
          </li>

          <li className="privacypolicy__item">
            Перечень действий, производимых Оператором с полученными
            персональными данными
            <ol className="privacypolicy__items">
              {privacyPolicy10.map((item) => (
                <li
                  key={item.id}
                  className="privacypolicy__item privacypolicy__item-content"
                >
                  {item.itemText}
                </li>
              ))}
            </ol>
          </li>

          <li className="privacypolicy__item">
            Трансграничная передача персональных данных
            <ol className="privacypolicy__items">
              {privacyPolicy11.map((item) => (
                <li
                  key={item.id}
                  className="privacypolicy__item privacypolicy__item-content"
                >
                  {item.itemText}
                </li>
              ))}
            </ol>
          </li>

          <li className="privacypolicy__item">
            Основные права и обязанности Оператора
            <ol className="privacypolicy__items">
              {privacyPolicy12.map((item) => (
                <li
                  key={item.id}
                  className="privacypolicy__item privacypolicy__item-content"
                >
                  {item.itemText}
                </li>
              ))}
            </ol>
          </li>

          <li className="privacypolicy__item">
            Конфиденциальность персональных данных
            <ul className="privacypolicy__items">
              {privacyPolicy13.map((item) => (
                <li
                  key={item.id}
                  className="privacypolicy__item privacypolicy__item-content"
                >
                  {item.itemText}
                </li>
              ))}
            </ul>
          </li>

          <li className="privacypolicy__item">
            Заключительные положения
            <ol className="privacypolicy__items">
              {privacyPolicy14.map((item) => (
                <li
                  key={item.id}
                  className="privacypolicy__item privacypolicy__item-content"
                >
                  {item.itemText}
                </li>
              ))}
            </ol>
          </li>
        </ol>
      </InfoBlock>
    </InfoPage>
  );
}
