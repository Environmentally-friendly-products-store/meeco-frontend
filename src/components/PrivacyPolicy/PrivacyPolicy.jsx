import './PrivacyPolicy.css';
import InfoPage from '../InfoPage/InfoPage';
import InfoBlock from '.././InfoBlock/InfoBlock';

export default function PrivacyPolicy({ title, id, children }) {
  return (
    <InfoPage title="Политика конфиденциальности" id="privacypolicy">
      <InfoBlock
        showImage={false}
        title="Политика в отношении обработки персональных данных"
        id="aboutpolicy"
      >
        <ol className="privacypolicy__items">
          <li className="privacypolicy__item">
            Общие положения.
            <ol className="privacypolicy__items">
              <li className="privacypolicy__item privacypolicy__item-content">
                Настоящая политика обработки персональных данных составлена в
                соответствии с требованиями Федерального закона от 27.07.2006.
                №152-ФЗ «О персональных данных» (далее - Закон о персональных
                данных) и определяет порядок обработки персональных данных и
                меры по обеспечению безопасности персональных данных,
                предпринимаемые ООО "Водолей" (далее – Оператор)..
              </li>
              <li className="privacypolicy__item privacypolicy__item-content">
                Оператор ставит своей важнейшей целью и условием осуществления
                своей деятельности соблюдение прав и свобод человека и
                гражданина при обработке его персональных данных, в том числе
                защиты прав на неприкосновенность частной жизни, личную и
                семейную тайну.
              </li>
              <li className="privacypolicy__item privacypolicy__item-content">
                Настоящая политика Оператора в отношении обработки персональных
                данных (далее – Политика) применяется ко всей информации,
                которую Оператор может получить о посетителях веб-сайта
                https://vodoley-ural.ru/.
              </li>
            </ol>
          </li>

          <li className="privacypolicy__item">
            Основные понятия, используемые в Политике.
            <ol className="privacypolicy__items">
              <li className="privacypolicy__item privacypolicy__item-content">
                Автоматизированная обработка персональных данных – обработка
                персональных данных с помощью средств вычислительной техники.
              </li>
              <li className="privacypolicy__item privacypolicy__item-content">
                Блокирование персональных данных – временное прекращение
                обработки персональных данных (за исключением случаев, если
                обработка необходима для уточнения персональных данных)
              </li>
              <li className="privacypolicy__item privacypolicy__item-content">
                Веб-сайт – совокупность графических и информационных материалов,
                а также программ для ЭВМ и баз данных, обеспечивающих их
                доступность в сети интернет по сетевому адресу
                https://бvodoley-ural.ru/
              </li>
              <li className="privacypolicy__item privacypolicy__item-content">
                Информационная система персональных данных — совокупность
                содержащихся в базах данных персональных данных, и
                обеспечивающих их обработку информационных технологий и
                технических средств
              </li>
              <li className="privacypolicy__item privacypolicy__item-content">
                Обезличивание персональных данных — действия, в результате
                которых невозможно определить без использования дополнительной
                информации принадлежность персональных данных конкретному
                Пользователю или иному субъекту персональных данных.
              </li>
              <li className="privacypolicy__item privacypolicy__item-content">
                Обработка персональных данных – любое действие (операция) или
                совокупность действий (операций), совершаемых с использованием
                средств автоматизации или без использования таких средств с
                персональными данными, включая сбор, запись, систематизацию,
                накопление, хранение, уточнение (обновление, изменение),
                извлечение, использование, передачу (распространение,
                предоставление, доступ), обезличивание, блокирование, удаление,
                уничтожение персональных данных.
              </li>
              <li className="privacypolicy__item privacypolicy__item-content">
                Оператор – государственный орган, муниципальный орган,
                юридическое или физическое лицо, самостоятельно или совместно с
                другими лицами организующие и (или) осуществляющие обработку
                персональных данных, а также определяющие цели обработки
                персональных данных, состав персональных данных, подлежащих
                обработке, действия (операции), совершаемые с персональными
                данными.
              </li>
              <li className="privacypolicy__item privacypolicy__item-content">
                Персональные данные – любая информация, относящаяся прямо или
                косвенно к определенному или определяемому Пользователю
                веб-сайта https://vodoley-ural.ru/.
              </li>
              <li className="privacypolicy__item privacypolicy__item-content">
                Персональные данные, разрешенные субъектом персональных данных
                для распространения, - персональные данные, доступ
                неограниченного круга лиц к которым предоставлен субъектом
                персональных данных путем дачи согласия на обработку
                персональных данных, разрешенных субъектом персональных данных
                для распространения в порядке, предусмотренном Законом о
                персональных данных (далее - персональные данные, разрешенные
                для распространения)
              </li>
              <li className="privacypolicy__item privacypolicy__item-content">
                Предоставление персональных данных – действия, направленные на
                раскрытие персональных данных определенному лицу или
                определенному кругу лиц.
              </li>
              <li className="privacypolicy__item privacypolicy__item-content">
                Распространение персональных данных – любые действия,
                направленные на раскрытие персональных данных неопределенному
                кругу лиц (передача персональных данных) или на ознакомление с
                персональными данными неограниченного круга лиц, в том числе
                обнародование персональных данных в средствах массовой
                информации, размещение в информационно-телекоммуникационных
                сетях или предоставление доступа к персональным данным
                каким-либо иным способом
              </li>
              <li className="privacypolicy__item privacypolicy__item-content">
                Трансграничная передача персональных данных – передача
                персональных данных на территорию иностранного государства
                органу власти иностранного государства, иностранному физическому
                или иностранному юридическому лицу
              </li>
              <li className="privacypolicy__item privacypolicy__item-content">
                Уничтожение персональных данных – любые действия, в результате
                которых персональные данные уничтожаются безвозвратно с
                невозможностью дальнейшего восстановления содержания
                персональных данных в информационной системе персональных данных
                и (или) уничтожаются материальные носители персональных данных.
              </li>
            </ol>
          </li>
        </ol>
      </InfoBlock>
    </InfoPage>
  );
}
