import Header from './Header';
import Footer from './Footer';
import usePageTitle from '../hooks/usePageTitle';

const Layout = ({ children }) => {
  usePageTitle();
  return (
    <div className="bg-blue-50 min-h-screen">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
