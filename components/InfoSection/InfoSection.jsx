import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export default function InfoSection({ info }) {
  return (
    <>
      {info && (
        <article>
          {info.map(({ data }) => {
            const { id, title, cardInfo } = data[0];
            console.log(cardInfo);

            return (
              <div key={id}>
                <h2>{title}</h2>
                <ul className=" grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
                  {cardInfo.map(item => {
                    const {
                      title,
                      description,
                      bgImage,
                      buttonName,
                      id,
                      slug,
                    } = item;
                    return (
                      <li
                        key={id}
                        className="mb-4 border-2 border-amber-700 p-6"
                      >
                        <Image
                          className="block"
                          src={bgImage.url}
                          alt={bgImage.alt}
                          width={364}
                          height={220}
                        />
                        <h3 className="mt-8 mb-4 text-2xl font-medium leading-7">
                          {title}
                        </h3>
                        <p className=" mb-4 ">
                          <ReactMarkdown>{description}</ReactMarkdown>
                        </p>
                        <Link
                          href={slug}
                          className=" block h-[54px] w-[220px] rounded-[20px] bg-blue-500 py-[14px] text-center text-lg font-medium text-slate-50 transition duration-300 ease-in-out hover:bg-yellow-200 hover:text-slate-600 focus:bg-yellow-200 focus:text-slate-600  sm:w-[298px] xl:w-[300px]"
                        >
                          {buttonName}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </article>
      )}
    </>
  );
}
