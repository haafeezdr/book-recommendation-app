

import Head from 'next/head';
import BookRecommendations from '../components/BookRecommendations';


const Home: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <Head>
        <title>Book Recommendations</title>
        <meta name="description" content="Book Recommendation System" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BookRecommendations />
      </main>
    </div>
  );
};

export default Home;
