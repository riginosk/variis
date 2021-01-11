import React, { useEffect } from "react"
import Scrollbar from 'smooth-scrollbar';
import Transition from "../page-transition/page-transition"
import { gsap } from "gsap";
import SecondaryNavigation from "../secondary-navigation/secondary-navigation";

const Navigation = (props) => {
  const data = props.data;
  const pageName = props.data.pageName;
  const brandName = props.data.brandName;

  const [scroller, setScroller] = React.useState();
  const [scrollbar, setScrollbar] = React.useState();

  useEffect(() => {
    setScroller(document.querySelector('.scroll-container'))
    setScrollbar(Scrollbar.get(scroller))

    let header = document.querySelector('.header');
    let headerHeight = document.querySelector('.header__wrapper').offsetHeight + 1;
    if (scrollbar != null) {

      var prevScrollpos = scrollbar.offset.y;

      scrollbar.addListener((status) => {
        var currentScrollPos = scrollbar.offset.y;

        if (prevScrollpos <= headerHeight) {
          if ((prevScrollpos - currentScrollPos) < 0) {
            header.classList.add("header--top")
            gsap.to('.header--top', { y: -currentScrollPos })
            header.classList.remove("header--pinned")
          } else {
            gsap.to('.header--top', { y: currentScrollPos })

          }

        } else {
          header.classList.add("header--pinned")
          header.classList.remove("header--top")

        }

        if ((prevScrollpos - currentScrollPos) < 0) {
          if (prevScrollpos > headerHeight) {
            gsap.to('.header--pinned', { y: -headerHeight })
          }

        } else {
          gsap.to('.header--pinned', { y: 0 })
        }
        prevScrollpos = currentScrollPos;
      });

    }
  },[scroller, scrollbar]);

  if (typeof window !== `undefined`) {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  }
}


  return (
    <header className={`header ${pageName === "App Page" || brandName ? "header--dark app-page" : ""} ${pageName === "Bike Page" ? "header--light bike-page" : ""}`}>
      <div className="header__wrapper">
        <div className="header__background"></div>


        <Transition className="header__logo" to="/">
          <figure>
            <svg viewBox="0 0 168 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M67.2934 16H71.7469L55.0605 0.00148523L50.7516 0.00148523L34.0667 16H38.5156L41.9378 12.8009L63.8789 12.8009L67.2934 16ZM45.0053 9.9211L52.906 2.51592L60.8067 9.9211L45.0053 9.9211ZM105.672 16L98.6347 10.2077C103.118 10.0592 105.241 7.7037 105.241 5.11947C105.241 2.44612 102.942 0 98.3702 0L76.3156 0V16L79.9307 16V10.2181L93.8933 10.2181L100.848 16H105.672ZM79.9322 3.01792L98.532 3.01792C100.758 3.01792 101.715 4.02339 101.715 5.12095C101.715 6.19475 100.781 7.15567 98.5071 7.15567L79.9322 7.15567V3.01792ZM37.5822 0.00148523L20.9222 16H16.6616L0 0.00148523L4.44889 0.00148523L18.7911 13.3266L33.1302 0.00148523L37.5822 0.00148523ZM130.345 16H126.731V0.00148523L130.345 0.00148523V16ZM117.922 16H114.307V0.00148523L117.922 0.00148523V16ZM162.064 9.39534L145.163 9.39534C140.404 9.39534 138.771 7.1319 138.771 4.70955C138.771 2.08076 141.142 0.00148523 145.091 0.00148523L166.516 0.00148523V3.04168L144.78 3.04168C143.032 3.04168 142.243 3.75012 142.243 4.73183C142.243 5.80711 142.96 6.42347 144.852 6.42347L161.705 6.42347C166.636 6.42347 168 8.86958 168 11.1761C168 13.9653 166.062 15.9985 161.871 15.9985L139.442 15.9985V12.9598L162.016 12.9598C163.691 12.9598 164.53 12.2751 164.53 11.1776C164.53 10.0577 163.788 9.39534 162.064 9.39534Z" fill="white" />
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