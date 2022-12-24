import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
import { DebounceInput } from 'react-debounce-input';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
// import { XMarkIcon } from '@heroicons/react/24/solid';

export const Search = () => {
  const [isActivated, setIsActivated] = useState(false);
  const [searchWords, setSearchWords] = useState('');
  // const [allData, setAllData] = useState(null);
  // const [filteredData, setFilteredData] = useState(null);

  // const { locale } = useRouter();

  useEffect(() => {
    if (!isActivated) return;
  }, [isActivated]);

  // useEffect(() => {
  //   if (!searchWords.trim() || !allData) {
  //     setFilteredData(null);
  //     return;
  //   }
  // }, [allData, searchWords]);

  const handleInputChange = ({ target: { value } }) => {
    setSearchWords(value.toLowerCase());
  };

  return (
    <div className="relative">
      <div className="relative border-b md:h-8 md:w-[228px] xl:h-11 xl:w-[522px]">
        <MagnifyingGlassIcon className="absolute left-5 h-5 w-5 translate-y-1/2  text-white" />

        <DebounceInput
          onChange={handleInputChange}
          onFocus={() => setIsActivated(true)}
          type="text"
          value={searchWords}
          className="h-full w-full bg-transparent text-slate-600 placeholder:text-slate-300"
          // id="search"
          //   placeholder={t('searchPlaceholder')}
        />
      </div>
    </div>
  );
};
