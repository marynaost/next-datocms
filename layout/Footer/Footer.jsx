import Link from 'next/link';
// import ReactMarkdown from 'react-markdown';
// import { useTranslation } from 'next-i18next';
import { Logo } from 'components';
import Teleg from '../../public/image/teleg.svg';

export const Footer = data => {
  const slugs = [
    { href: '#', title: 'Первые шаги' },
    { href: '#', title: 'Жилье' },
    { href: '#', title: 'Работа' },
    { href: '#', title: 'Медицинская помощь' },
    { href: '#', title: 'Психологическая помощь' },
    { href: '#', title: 'Дети' },
    { href: '#', title: 'Выплаты' },
    { href: '#', title: 'Инфо телефоны' },
    { href: '#', title: 'Полезные ссылки' },
  ];

  return (
    <footer className="bg-blue-400">
      <div className="container">
        <div className="xl:px-20">
          <div className="flex flex-wrap items-baseline justify-between border-b-2 pb-[24px] pt-[24px]">
            <Logo />

            <Link href="https://t.me/eevolunteer" legacyBehavior>
              <a
                href="https://t.me/eevolunteer"
                aria-label="логотип"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <span className="mr-[19px] text-sm text-white">
                  Связаться с нами
                </span>
                <Teleg className="w-[22px]" />
              </a>
            </Link>
          </div>

          <ul className="grid grid-cols-4 gap-y-5 pb-[32px] pt-[32px]">
            {slugs &&
              slugs.map(({ href, title }, index) => (
                <li className="text-white" key={index}>
                  <Link href={`/${href}`} legacyBehavior>
                    <a className="transition-all hover:text-slate-200 focus:text-slate-200">
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
          </ul>

          {/* {data && ( */}
          <div className="border-b-2 pb-[24px] text-center text-white">
            {/* <ReactMarkdown>
                За дополнительной информацией обращайтесь по телефону +37253499911 в центр приема беженцев
              </ReactMarkdown> */}
            {/* <ReactMarkdown> */}
            {data.additionalInfo}
            {/* </ReactMarkdown> */}
          </div>
          {/* )} */}

          <div className="flex pb-[24px] pt-[20px]">
            <span className="pr-1 text-white">&copy;</span>
            <span className="text-white ">{new Date().getFullYear()}</span>
            <p className="pl-1 text-white">E-VOLUNTEER</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
