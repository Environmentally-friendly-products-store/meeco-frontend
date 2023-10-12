import Icon from '../Icon/Icon';
import mail from '../../images/mail.svg';

export default function MailIcon() {
  return (
    <Icon image={mail} alt="Написать письмо" link="mailto:info@meeco.ru"></Icon>
  );
}
