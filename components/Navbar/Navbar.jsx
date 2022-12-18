// import Link from 'next/link';
// import { Search } from 'views';
import { LanguageToggle } from 'components';

export const Navbar = ({
  // linkValue,
  handleLocaleChange,
  locale,
}) => {
  return (
    <div className="flex items-center gap-10">
      {/* <Search /> */}

      {/* <Link href="" className="">
        <a
          className="flex !h-[44px] !w-[196px] items-center justify-center
                rounded-xl bg-blue-500 text-white transition
                duration-300 ease-in-out hover:bg-yellow-200 hover:text-slate-600 focus:bg-yellow-200 focus:text-slate-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkValue}
        </a>
      </Link> */}

      <LanguageToggle handleLocaleChange={handleLocaleChange} value={locale} />
    </div>
  );
};
