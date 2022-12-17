import { gql, GraphQLClient } from 'graphql-request';
import InfoSection from 'components/InfoSection/InfoSection';
// import { useRouter } from 'next/router';

const query = gql`
  query {
    allInfos {
      data {
        title
        id
        cardInfo {
          title
          description
          buttonName
          id
          slug
          bgImage {
            alt
            url
          }
        }
      }
    }
  }
`;

export const getStaticProps = async () => {
  const graphQLClient = new GraphQLClient(process.env.DATOCMS_API_URL, {
    headers: {
      'content-type': 'application/json',
      authorization: 'Bearer ' + process.env.DATOCMS_API_KEY,
    },
  });

  const data = await graphQLClient.request(query);

  return {
    props: {
      cardInfo: data.allInfos,
    },
  };
};
const Home = ({ cardInfo }) => {
  // const { locale } = useRouter();
  // const bannerData = allBannerHeaders
  //   .flatMap(el => el._allBannerDescriptionLocales)
  //   .filter(el => el.locale === locale)
  //   .flatMap(el => el.value);
  // console.log(volunteer);

  // bannerData.map(el => {

  // });

  return (
    <section className="py-20">
      <div className="container">
        <h1 className="mb-10 text-center text-3xl font-bold underline">
          Banner text
        </h1>

        {/* <div>
          {data.map(el => {
            return (
              <h2
                key={el.id}
                className="bg-stone-900 p-2 text-center text-gray-200 "
              >
                {el.bannerText}
              </h2>
            );
          })}
        </div> */}
        <InfoSection info={cardInfo} />
      </div>
    </section>
  );
};

export default Home;
