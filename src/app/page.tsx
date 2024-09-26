import MainWeb3 from '@/components/MainPageComponents/MainWeb3/MainWeb3';
import './globals.css'
import MainWebDev from '@/components/MainPageComponents/MainWebDevelopment/MainWebDev';
import MainDesigne from '@/components/MainPageComponents/MainDesigne/MainDesigne';
import MainAutomation from '@/components/MainPageComponents/MainAutomation/MainAutomation';
const MainPage = () => {
  return (
          <div className="main">
              <MainWebDev/>
              <MainWeb3/>
              <MainDesigne/>
              <MainAutomation/>
          </div>

  );
};

export default MainPage;