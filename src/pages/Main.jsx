import '@styles/Main.scss';
import Header from '@components/Header';
import { apiTags, getAdverts } from '@api/adverts';
import useSWR from 'swr';
import AdvertThumb from '@components/AdvertThumb';



function Main() {
  const { data, error, isLoading } = useSWR(apiTags.adverts_with_pages, () => getAdverts());
  return (
    <>
      <Header />
      <section className="main">
        <div className="main__content-holder block-normalizer">
          <h1 className='main__article weight-xl font-xxl'>Recommendations</h1>
          <div className="main__content">
            <div className="main__goods">
              {data?.items.map(item => (
                <AdvertThumb key={item.id} message={item} />
              ))}
              {data?.items.map(item => (
                <AdvertThumb key={item.id} message={item} />
              ))}
              {data?.items.map(item => (
                <AdvertThumb key={item.id} message={item} />
              ))}
            </div>
            <aside className="main__ad">
              здесь могла быть ваша реклама
            </aside>
          </div>

        </div>
      </section>
    </>
  );
}

export default Main;
