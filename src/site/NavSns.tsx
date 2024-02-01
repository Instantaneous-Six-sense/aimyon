import {
  FaFacebook,
  FaInstagram,
  FaLine,
  FaXTwitter,
  FaWeibo,
  FaYoutube,
} from 'react-icons/fa6';
  
const ICON_SIZE = 20;
const snsNavItems = [{
  url: 'https://www.weibo.com/u/7099412531',
  icon: <FaWeibo size={ICON_SIZE} title="Weibo" />,
}, {
  url: 'https://twitter.com/aimyonGtter',
  icon: <FaXTwitter size={ICON_SIZE} title="Twitter" />,
}, {
  url: 'https://www.facebook.com/aimyong',
  icon: <FaFacebook size={ICON_SIZE} title="Facebook" />,
}, {
  url: 'https://instagram.com/aimyon36',
  icon: <FaInstagram size={ICON_SIZE} title="Instagram" />,
}, {
  url: 'https://line.me/R/ti/p/@aimyon',
  icon: <FaLine size={ICON_SIZE} title="Line" />,
}, {
  url: 'https://www.youtube.com/@user-qp1wk7et7p',
  icon: <FaYoutube size={ICON_SIZE} title={'Youtube'} />,
}];

export default function NavSns() {
  return (
    <ul className="flex items-center gap-4">
      {
        snsNavItems.map(({ url, icon }, idx) => (<li key={idx}>
          <a href={url}>
            {icon}
          </a>
        </li>))
      }
    </ul>
  );
}