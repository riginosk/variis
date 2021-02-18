import React, { useState, useEffect } from "react"
import Scrollbar from 'smooth-scrollbar';
import Transition from "../page-transition/page-transition"
import SecondaryNavigation from "../secondary-navigation/secondary-navigation";
import { debounce } from '../../utilities/helpers';

const Navigation = (props) => {
  const data = props.data;
  const pageName = props.data.pageName;
  const brandName = props.data.brandName;

  const [scroller, setScroller] = React.useState();
  const [scrollbar, setScrollbar] = React.useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0); 
  const [visible, setVisible] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(0); 

  useEffect(() => {
    setHeaderHeight(document.querySelector('.header__wrapper').offsetHeight + 1);
    setScroller(document.querySelector('.scroll-container'))
    setScrollbar(Scrollbar.get(scroller))

    if (scrollbar != null) {

      const handleScroll = debounce(() => { 
        // find current scroll position
        let currentScrollPos=  scrollbar.offset.y;
       
    
        // set state based on location info (explained in more detail below)
        setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);
        // set state to new scroll position
        setPrevScrollPos(currentScrollPos);
      }, 10); 

    

      scrollbar.addListener(handleScroll);
        
      return () => scrollbar.removeListener(handleScroll);
  
    }
  }, [scroller, scrollbar, prevScrollPos, visible]);



  return (
    <header style={{top: visible ? '0' : -headerHeight }} className={`header ${pageName === "App Page" || brandName ? "header--dark app-page" : ""} ${pageName === "Bike Page" ? "header--light bike-page" : ""}`}>
      <div className="header__wrapper">
        <div className="header__background"></div>


        <Transition className="header__logo" to="/">
          <figure>
            <svg width="212" height="25" viewBox="0 0 212 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M144.312 6.581C143.209 7.68345 142.587 9.17806 142.584 10.7376C142.587 12.1454 143.089 13.5067 144 14.5802L141.572 17.9195C139.846 16.2611 138.776 14.0356 138.559 11.652C138.343 9.26839 138.994 6.88669 140.393 4.94442C141.793 3.00216 143.846 1.62983 146.176 1.07953C148.506 0.529228 150.957 0.837923 153.077 1.9489L150.657 5.28822C149.965 4.99782 149.222 4.85064 148.471 4.85555C146.911 4.85811 145.416 5.47855 144.312 6.581ZM113.388 1.05164L122.647 13.1225L122.668 13.108V1.05164H126.735V20.3945H123.152L113.544 7.90839V20.41H109.485V1.05164H113.388ZM154.343 9.98219C154.198 8.8729 153.74 7.82774 153.022 6.96949L155.45 3.63114C157.154 5.29448 158.204 7.51395 158.41 9.88587C158.615 12.2577 157.961 14.6245 156.568 16.5556C155.175 18.4867 153.135 19.8539 150.819 20.4085C148.503 20.9631 146.065 20.6683 143.947 19.5776L146.368 16.2141C147.049 16.484 147.775 16.6226 148.507 16.6225C149.627 16.6228 150.722 16.304 151.667 15.7035C152.611 15.103 153.364 14.2458 153.838 13.2324C154.312 12.219 154.487 11.0915 154.343 9.98219ZM187.172 1.03713L180.311 10.3572L187.753 20.4293H182.712L177.835 13.7991L172.96 20.4293H167.913L175.277 10.3707L168.418 1.05164H173.463L177.78 6.92204L182.114 1.03713H187.172ZM40.3997 7.46808C41.0467 8.43586 41.3919 9.57366 41.3919 10.7376H41.389C41.3878 12.2953 40.7692 13.7891 39.6687 14.892C38.5683 15.9949 37.0756 16.6171 35.5172 16.6225H35.5047C34.3403 16.6225 33.202 16.2773 32.2339 15.6307C31.2657 14.9841 30.5111 14.065 30.0656 12.9896C29.6199 11.9143 29.5034 10.7311 29.7305 9.58949C29.9577 8.44791 30.5184 7.39933 31.3418 6.57632C32.1651 5.75329 33.2141 5.1928 34.3561 4.96573C35.4982 4.73866 36.6819 4.8552 37.7576 5.30061C38.8334 5.74603 39.7529 6.5003 40.3997 7.46808ZM45.0424 21.4011C42.5703 21.7863 39.8291 21.1601 38.917 20.0809L38.9141 20.0693C41.1458 19.2508 43.0101 17.6597 44.1685 15.5846C45.327 13.5096 45.7028 11.0882 45.2279 8.75985C44.753 6.43149 43.4587 4.35051 41.5801 2.8945C39.7014 1.43849 37.3627 0.703983 34.9886 0.824264C32.6144 0.944546 30.362 1.91165 28.6402 3.55007C26.9185 5.18848 25.8413 7.38965 25.6043 9.75404C25.3673 12.1185 25.9862 14.4895 27.3486 16.4368C28.711 18.3841 30.7266 19.7786 33.0297 20.3674C33.9486 21.7147 37.787 24.8121 41.7028 24.8121L45.0424 21.4011ZM12.2742 12.6608H4.05815H4.05621V16.5751H12.8241V20.4293H0V1.05164H12.553V4.90395H4.05912V8.81819H12.2742V12.6608ZM94.3127 20.4119H90.2458V1.05164H94.3127V20.4119ZM74.4674 1.05164H70.411V12.1478C70.411 13.3338 69.9397 14.4713 69.1006 15.3099C68.2616 16.1485 67.1237 16.6196 65.9375 16.6196C64.7507 16.6196 63.6128 16.1485 62.7743 15.3099C61.9353 14.4713 61.4639 13.3338 61.4639 12.1478V1.05164H57.4107V12.1478C57.4517 14.3816 58.3686 16.5098 59.9631 18.0749C61.5581 19.64 63.7039 20.5169 65.939 20.5169C68.1737 20.5169 70.3195 19.64 71.9145 18.0749C73.5095 16.5098 74.4258 14.3816 74.4674 12.1478V1.05164ZM205.481 3.605V16.6399H203.619V11.0538H198.033V9.19166H203.619V3.605H205.481ZM207.325 11.0538H212V9.19166H208.688L207.325 11.0538Z" fill="white" />
            </svg>
          </figure>
        </Transition>
        <nav role="navigation" aria-label="primary">
          <ul>
            <li><Transition className={`link ${pageName === "App Page" ? "active" : ""}`} to="/app/">App</Transition></li>
            <li><Transition className={`link ${pageName === "Bike Page" ? "active" : ""}`} to="/bike/">Bike</Transition></li>
            <li><Transition className="link" to="/">Shop</Transition></li>
          </ul>
          <button className="header__login">
            <span>Log in</span>
            <figure>
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path fillRule="evenodd" clipRule="evenodd" d="M21.997 8.95776C21.997 12.2711 19.311 14.957 15.9977 14.957C12.6844 14.957 9.99845 12.2711 9.99845 8.95776C9.99845 5.64446 12.6844 2.9585 15.9977 2.9585C19.311 2.9585 21.997 5.64446 21.997 8.95776ZM19.9972 8.95776C19.9972 11.1666 18.2066 12.9573 15.9977 12.9573C13.7889 12.9573 11.9982 11.1666 11.9982 8.95776C11.9982 6.74889 13.7889 4.95825 15.9977 4.95825C18.2066 4.95825 19.9972 6.74889 19.9972 8.95776Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.99902 28.2887V19.6248H25.9966V28.2887H5.99902ZM7.99878 21.6245H23.9968V26.289H7.99878V21.6245Z" fill="white" />
                </g>
              </svg>
            </figure>
          </button>
        </nav>
      </div>
      <SecondaryNavigation data={data} />
    </header>
  )
}

export default Navigation;