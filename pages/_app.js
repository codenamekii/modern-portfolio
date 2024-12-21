import '../styles/globals.css';

// Components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// Router
import { useRouter } from 'next/router';

// Motion
import { AnimatePresence, motion } from 'framer-motion';

// Head
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      {/* Global Head */}
      <Head>
        <title>Taufiqurrahman 🔥</title>
        <meta name="Personal Portfolio Website" content="Portofolio profesional Taufiqurrahman, menampilkan karya desain, teknologi, dan inovasi terkini." />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp;
