import React from 'react'
import Img from 'gatsby-image'
import Button from '../button/button'

const CtaBreaker = (props) => {
  const data = props.data;
  const title = data.childContentfulCtaBreakerTitleRichTextNode.childContentfulRichText.html;

  return (
    <section className="cta-breaker" style={{ backgroundColor: data.backgroundColor }}>
      <div className="cta-breaker__background-container">
        <Img className="cta-breaker__background-image" fluid={data.backgroundImage.fluid} />
      </div>
      <div className="cta-breaker__content-container">
        <div className="wrapper grid">
          <div className="cta-breaker__content">
            <p className="cta-breaker__eyebrow">{data.eyebrow}</p>
            <div className="cta-breaker__title" dangerouslySetInnerHTML={{ __html: title }} />
            <Button value={data.primaryCta} to={data.primaryCtaUrl} color="#000000" backgroundColor="#ffffff" className="cta-breaker__button" />
            {(data.appPage === true) &&
              <>
                <div className="app-store">
                  <a href="https://play.google.com/store/apps/details?id=com.variis.mobile" target="_blank" rel="noreferrer" className="app-store-cta">
                    <figure>
                      <svg width="107" height="27" viewBox="0 0 107 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 24.2632V1.37212C0 0.753443 0.247478 0.382236 0.74242 0.134766L12.0023 12.8795L0.74242 25.5005C0.247478 25.3768 0 25.0056 0 24.2632ZM12.6202 12.1375L2.59766 0.753906L16.0848 8.42544L12.6202 12.1375ZM12.6216 13.623L15.9625 17.4589L2.35156 25.1304L12.6216 13.623ZM22.271 11.8896L16.9503 8.91992L13.2383 13.0032L16.7029 16.9627L22.1472 13.8693C23.2609 13.3744 23.2609 12.3845 22.271 11.8896ZM58.1855 5.95624C57.639 6.52134 56.9627 6.79926 56.1475 6.79926C55.3322 6.79926 54.6559 6.52134 54.1094 5.95624C53.5628 5.39113 53.2941 4.7056 53.2941 3.89963C53.2941 3.09366 53.5628 2.39886 54.1094 1.84302C54.6559 1.27792 55.3322 1 56.1475 1C56.9534 1 57.6297 1.27792 58.1855 1.84302C58.7321 2.40813 59.01 3.09366 59.01 3.89963C59.0008 4.71486 58.7321 5.4004 58.1855 5.95624ZM54.6374 5.49304C55.045 5.90992 55.5546 6.11372 56.1475 6.11372C56.7403 6.11372 57.2499 5.90992 57.6575 5.49304C58.0651 5.07616 58.2782 4.54811 58.2782 3.89963C58.2782 3.25115 58.0744 2.7231 57.6575 2.30622C57.2499 1.88934 56.7403 1.67627 56.1475 1.67627C55.5546 1.67627 55.045 1.88008 54.6374 2.29696C54.2298 2.7231 54.0167 3.25115 54.0167 3.89963C54.0167 4.54811 54.2298 5.07616 54.6374 5.49304ZM33.924 4.12212C33.924 4.90029 33.6924 5.52098 33.2292 5.97491C32.7104 6.52149 32.0249 6.79941 31.1912 6.79941C30.3852 6.79941 29.7089 6.52149 29.1438 5.96565C28.5787 5.40981 28.3008 4.71501 28.3008 3.89978C28.3008 3.07529 28.5787 2.38975 29.1438 1.83391C29.7089 1.27807 30.3852 1.00015 31.1912 1.00015C31.5895 1.00015 31.9693 1.07426 32.3306 1.23175C32.6919 1.38924 32.9791 1.59305 33.2014 1.85244L32.7104 2.34343C32.3399 1.90802 31.8396 1.68569 31.1912 1.68569C30.6075 1.68569 30.098 1.88949 29.6719 2.30637C29.2457 2.71399 29.0326 3.2513 29.0326 3.90904C29.0326 4.56679 29.2457 5.1041 29.6719 5.51171C30.098 5.91933 30.6075 6.1324 31.1912 6.1324C31.8118 6.1324 32.3306 5.92859 32.7475 5.51171C33.0162 5.24306 33.1736 4.86324 33.2107 4.38151H31.1912V3.70524H33.887L33.8904 3.73297C33.9078 3.87083 33.924 4.00055 33.924 4.12212ZM38.1928 1.80663H35.6637V3.56679H37.9427V4.2338H35.6637V5.99395H38.1928V6.67949H34.9504V1.12109H38.1928V1.80663ZM40.4917 6.67902H41.1958V1.80616H42.7521V1.12062H38.9354V1.80616H40.4917V6.67902ZM45.5227 6.67949V1.12109H46.236V6.67949H45.5227ZM48.6912 6.67902H49.3953V1.80616H50.9516V1.12062H47.1349V1.80616H48.6912V6.67902ZM60.0116 1.12062V6.67902H60.7342V3.22355L60.7064 2.14893H60.7342L63.5597 6.67902H64.3008V1.12062H63.5875V4.37229L63.6152 5.44691H63.5875L60.8824 1.12062H60.0116ZM49.2035 18.6985C49.2035 16.445 50.9699 14.8053 53.132 14.8053C55.2941 14.8053 57.0605 16.445 57.0605 18.6985C57.0605 20.9427 55.2941 22.5916 53.132 22.5916C50.9699 22.5916 49.2035 20.9427 49.2035 18.6985ZM50.9239 18.6985C50.9239 20.0908 51.9451 21.0618 53.132 21.0618C54.3096 21.0618 55.3401 20.0908 55.3401 18.6985C55.3401 17.2969 54.3188 16.3351 53.132 16.3351C51.9451 16.3351 50.9239 17.2969 50.9239 18.6985ZM40.6288 18.6985C40.6288 16.445 42.3953 14.8053 44.5573 14.8053C46.7194 14.8053 48.4858 16.445 48.4858 18.6985C48.4858 20.9427 46.7194 22.5916 44.5573 22.5916C42.3953 22.5916 40.6288 20.9427 40.6288 18.6985ZM42.3493 18.6985C42.3493 20.0908 43.3705 21.0618 44.5573 21.0618C45.7442 21.0618 46.7654 20.0908 46.7654 18.6985C46.7654 17.2969 45.7442 16.3351 44.5573 16.3351C43.3705 16.3351 42.3493 17.2969 42.3493 18.6985ZM34.3634 17.6542V16.0145H39.948C40.0124 16.3076 40.04 16.6649 40.04 17.0496C40.04 18.2863 39.6996 19.8252 38.6047 20.9153C37.5375 22.0237 36.1759 22.6099 34.3634 22.6099C31.0145 22.6099 28.1992 19.8893 28.1992 16.555C28.1992 13.2115 31.0145 10.5 34.3634 10.5C36.2219 10.5 37.5375 11.2237 38.5311 12.1672L37.3627 13.3305C36.6543 12.6618 35.6882 12.1489 34.3726 12.1489C31.9253 12.1489 30.0117 14.1092 30.0117 16.5458C30.0117 18.9824 31.9253 20.9427 34.3726 20.9427C35.9551 20.9427 36.8567 20.3107 37.4363 19.7336C37.9055 19.2664 38.2183 18.5794 38.3379 17.6542H34.3634ZM72.701 14.8053C74.7343 14.8053 75.7279 16.4176 76.0499 17.2878L76.2339 17.7275L70.9989 19.8802C71.3945 20.6588 72.0202 21.0618 72.8942 21.0618C73.7682 21.0618 74.3754 20.6313 74.8171 19.9809L76.1511 20.8695C75.7279 21.5015 74.6883 22.5916 72.8942 22.5916C70.6677 22.5916 69.0117 20.8786 69.0117 18.6985C69.0117 16.3809 70.6861 14.8053 72.701 14.8053ZM72.7562 16.3168C71.8822 16.3168 70.6677 17.0863 70.7137 18.5885L74.2098 17.1412C74.0166 16.6557 73.437 16.3168 72.7562 16.3168ZM68.1836 22.3626H66.4632V10.9122H68.1836V22.3626ZM63.5835 15.6756H63.6387V15.0435H65.2672V22.042C65.2672 24.9183 63.5651 26.1 61.5502 26.1C59.655 26.1 58.5141 24.8359 58.0817 23.8008L59.5814 23.1779C59.8482 23.8099 60.5014 24.5611 61.5502 24.5611C62.8383 24.5611 63.6387 23.7641 63.6387 22.271V21.7122H63.5835C63.1971 22.1885 62.4519 22.6008 61.5226 22.6008C59.563 22.6008 57.7689 20.8969 57.7689 18.7168C57.7689 16.5183 59.563 14.8053 61.5226 14.8053C62.4611 14.8053 63.1971 15.2176 63.5835 15.6756ZM59.4894 18.7168C59.4894 20.0725 60.483 21.0618 61.6698 21.0618C62.8475 21.0618 63.7675 20.0725 63.7583 18.7168C63.7583 17.3519 62.8383 16.3443 61.6698 16.3443C60.483 16.3443 59.4894 17.3427 59.4894 18.7168ZM79.9968 10.9122H84.1093C86.0046 10.9122 87.8907 12.2863 87.8907 14.4664C87.8907 16.6466 86.023 18.0206 84.1185 18.0206H81.7173V22.3626H79.9968V10.9122ZM81.7081 16.4267H84.1461C85.4342 16.4267 86.161 15.355 86.161 14.4573C86.161 13.5595 85.4342 12.4969 84.1461 12.4969H81.7081V16.4267ZM91.6996 16.5366C92.2332 15.3366 93.5212 14.787 94.7633 14.787C96.7229 14.787 98.2502 15.9229 98.241 17.9565V22.3443H96.5849V21.4557H96.5297C96.1341 22.0603 95.4901 22.5733 94.3401 22.5733C92.8312 22.5733 91.488 21.584 91.488 20.0542C91.488 18.3779 93.1532 17.4802 94.8001 17.4802C95.6189 17.4802 96.2813 17.7458 96.5941 17.9198V17.8008C96.5849 16.8573 95.6833 16.326 94.7909 16.326C94.156 16.326 93.5488 16.5366 93.2268 17.1687L91.6996 16.5366ZM93.2084 20.0908C93.2084 20.7779 93.9904 21.0618 94.5517 21.0618C95.5453 21.0618 96.4653 20.3107 96.5941 19.2573C96.1433 19.0374 95.7845 18.8725 95.0301 18.8725C94.1836 18.8725 93.2084 19.2115 93.2084 20.0908ZM102.317 19.9992L104.286 15.0344H106.199L101.479 25.8344H99.6854L101.433 21.9779L98.3698 15.0344H100.219L102.261 19.9992H102.317ZM90.5495 22.3626H88.8291V10.9122H90.5495V22.3626Z" fill="white" />
                      </svg>
                    </figure>
                  </a>
                  <a href="https://apps.apple.com/us/app/equinoxplus-eqx/id1487885716" target="_blank" rel="noreferrer" className="app-store-cta">
                    <figure>
                      <svg width="100" height="26" viewBox="0 0 100 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.0235 4.24112C13.8819 3.21063 14.3048 1.8861 14.2024 0.548828C12.8909 0.686573 11.6795 1.31337 10.8095 2.30432C10.3841 2.78843 10.0583 3.35163 9.85072 3.96172C9.64313 4.57181 9.55783 5.21684 9.59968 5.85992C10.2557 5.86667 10.9046 5.72449 11.4977 5.44409C12.0907 5.16369 12.6124 4.75237 13.0235 4.24112ZM15.912 12.7978C15.9234 11.9149 16.1579 11.0493 16.5937 10.2814C17.0295 9.51348 17.6525 8.8683 18.4047 8.40587C17.9269 7.72343 17.2965 7.16182 16.5636 6.76562C15.8308 6.36943 15.0156 6.14958 14.183 6.12353C13.0964 6.00948 12.0302 6.43265 11.1589 6.77849C10.6057 6.99803 10.131 7.18641 9.77955 7.18641C9.37971 7.18641 8.89143 6.99029 8.34431 6.77053C7.62891 6.48318 6.81293 6.15542 5.96256 6.17292C4.99187 6.20428 4.04585 6.48655 3.21669 6.99223C2.38752 7.49791 1.70348 8.20975 1.23122 9.05839C-0.814519 12.6003 0.711417 17.8056 2.67106 20.6686C3.65151 22.0705 4.79738 23.6365 6.29673 23.581C6.97687 23.5528 7.45948 23.3497 7.95796 23.1399C8.5348 22.8971 9.13289 22.6454 10.0829 22.6454C10.9787 22.6454 11.5512 22.8893 12.1005 23.1233C12.6272 23.3477 13.1326 23.563 13.8814 23.5457C15.4558 23.5201 16.4477 22.1375 17.3938 20.7223C18.0982 19.7234 18.6403 18.6194 18.9999 17.4511C18.0852 17.0643 17.3047 16.4167 16.7556 15.5893C16.2065 14.7618 15.9131 13.7909 15.912 12.7978ZM50.6122 1H49.7125V7.33817H50.6122V1ZM28.1819 1.29686C28.5764 1.26855 28.9722 1.32814 29.3408 1.47132C29.7094 1.6145 30.0416 1.83771 30.3135 2.12484C30.5854 2.41197 30.7902 2.75587 30.9131 3.13174C31.036 3.5076 31.074 3.90606 31.0243 4.29836C31.0243 6.22819 29.9813 7.33749 28.1819 7.33749H26V1.29686H28.1819ZM26.9382 6.48321H28.0771C28.359 6.50006 28.641 6.45385 28.9028 6.34794C29.1645 6.24203 29.3993 6.07909 29.5902 5.87098C29.781 5.66288 29.923 5.41484 30.0059 5.14492C30.0887 4.87501 30.1104 4.59001 30.0692 4.31067C30.1074 4.03244 30.0836 3.74921 29.9994 3.48127C29.9153 3.21334 29.7729 2.96733 29.5825 2.76087C29.3921 2.55442 29.1584 2.39264 28.8982 2.28711C28.6379 2.18159 28.3575 2.13493 28.0771 2.15049H26.9382V6.48321ZM32.0837 5.0575C32.0551 4.75792 32.0893 4.45566 32.1843 4.1701C32.2793 3.88454 32.433 3.62199 32.6354 3.39929C32.8378 3.17659 33.0845 2.99865 33.3597 2.87688C33.6349 2.75512 33.9326 2.69222 34.2335 2.69222C34.5345 2.69222 34.8321 2.75512 35.1073 2.87688C35.3825 2.99865 35.6292 3.17659 35.8316 3.39929C36.0341 3.62199 36.1877 3.88454 36.2827 4.1701C36.3777 4.45566 36.412 4.75792 36.3833 5.0575C36.4125 5.35738 36.3786 5.66006 36.2839 5.94608C36.1891 6.2321 36.0356 6.49513 35.8331 6.71827C35.6307 6.94141 35.3838 7.11972 35.1083 7.24175C34.8328 7.36377 34.5348 7.42681 34.2335 7.42681C33.9322 7.42681 33.6342 7.36377 33.3587 7.24175C33.0833 7.11972 32.8363 6.94141 32.6339 6.71827C32.4314 6.49513 32.2779 6.2321 32.1831 5.94608C32.0884 5.66006 32.0545 5.35738 32.0837 5.0575ZM35.4579 5.0575C35.4579 4.06935 35.014 3.4915 34.235 3.4915C33.453 3.4915 33.0131 4.06935 33.0131 5.0575C33.0131 6.05356 33.453 6.62697 34.235 6.62697C35.0141 6.62696 35.4579 6.04959 35.4579 5.0575ZM41.1657 7.33817H42.099L43.3506 2.77955H42.451L41.6383 6.25804H41.5671L40.6299 2.77955H39.7668L38.8296 6.25804H38.7624L37.9457 2.77955H37.0332L38.2898 7.33817H39.2142L40.1524 3.98075H40.2236L41.1657 7.33817ZM44.4068 2.77976H45.2729V3.50394H45.3401C45.4542 3.24384 45.6465 3.0258 45.8904 2.88022C46.1342 2.73464 46.4174 2.66876 46.7005 2.69177C46.9223 2.67509 47.145 2.70853 47.3521 2.78962C47.5593 2.87071 47.7455 2.99736 47.897 3.16019C48.0486 3.32302 48.1615 3.51787 48.2275 3.73028C48.2935 3.9427 48.3109 4.16724 48.2783 4.38728V7.33833H47.3787V4.6132C47.3787 3.88062 47.0603 3.5163 46.395 3.5163C46.2444 3.50928 46.0941 3.53492 45.9543 3.59144C45.8145 3.64796 45.6886 3.73403 45.5852 3.84376C45.4819 3.95348 45.4034 4.08426 45.3553 4.22714C45.3072 4.37002 45.2905 4.52161 45.3065 4.67152V7.33838H44.4068V2.77976ZM51.8631 5.05758C51.8344 4.75798 51.8687 4.45571 51.9638 4.17014C52.0588 3.88457 52.2124 3.62201 52.4149 3.3993C52.6173 3.17659 52.8641 2.99865 53.1393 2.87689C53.4145 2.75512 53.7122 2.69222 54.0131 2.69222C54.3141 2.69222 54.6117 2.75512 54.887 2.87689C55.1622 2.99865 55.4089 3.17659 55.6114 3.3993C55.8138 3.62201 55.9675 3.88457 56.0625 4.17014C56.1575 4.45571 56.1918 4.75798 56.1632 5.05758C56.1923 5.35748 56.1584 5.66016 56.0637 5.94618C55.9689 6.23219 55.8153 6.49522 55.6128 6.71836C55.4103 6.94149 55.1634 7.11979 54.8879 7.24181C54.6124 7.36383 54.3144 7.42687 54.0131 7.42687C53.7118 7.42687 53.4138 7.36383 53.1383 7.24181C52.8628 7.11979 52.6159 6.94149 52.4134 6.71836C52.2109 6.49522 52.0574 6.23219 51.9626 5.94618C51.8678 5.66016 51.8339 5.35748 51.8631 5.05758ZM55.2373 5.05758C55.2373 4.06944 54.7934 3.49158 54.0144 3.49158C53.2323 3.49158 52.7924 4.06944 52.7924 5.05759C52.7924 6.05365 53.2324 6.62705 54.0144 6.62705C54.7934 6.62704 55.2373 6.04968 55.2373 5.05758ZM58.8064 4.68877C57.7218 4.756 57.1108 5.22906 57.1108 6.04964C57.1116 6.24204 57.1527 6.43215 57.2314 6.60771C57.3101 6.78327 57.4248 6.94038 57.5679 7.06892C57.7111 7.19746 57.8796 7.29457 58.0626 7.354C58.2456 7.41342 58.439 7.43384 58.6304 7.41393C58.9015 7.42647 59.1712 7.36682 59.4117 7.24107C59.6523 7.11533 59.8552 6.92799 59.9996 6.69819H60.0708V7.33883H60.9369V4.22412C60.9369 3.26117 60.2923 2.69222 59.1494 2.69222C58.1153 2.69222 57.3788 3.19445 57.2868 3.97745H58.1578C58.2577 3.65516 58.6057 3.47077 59.1079 3.47077C59.7228 3.47077 60.0412 3.74265 60.0412 4.22412V4.61759L58.8064 4.68877ZM60.0412 5.27899V5.66011C60.0314 5.80391 59.9929 5.94428 59.9278 6.07287C59.8627 6.20146 59.7724 6.31564 59.6622 6.40862C59.5521 6.50159 59.4244 6.57147 59.2867 6.61408C59.149 6.65669 59.0042 6.67117 58.8608 6.65665C58.3714 6.65665 58.0154 6.4179 58.0154 6.00761C58.0154 5.60573 58.3002 5.39219 58.928 5.35017L60.0412 5.27899ZM62.1183 5.0569C62.1183 3.61645 62.8588 2.70394 64.0106 2.70394C64.2955 2.69081 64.5782 2.75904 64.8258 2.90067C65.0733 3.04229 65.2754 3.25146 65.4085 3.50371H65.4757V1H66.3754V7.33817H65.5133V6.61794H65.4421C65.2988 6.86849 65.0896 7.07505 64.8373 7.21524C64.5849 7.35544 64.299 7.42393 64.0106 7.4133C62.8509 7.41335 62.1183 6.50081 62.1183 5.0569ZM63.0477 5.0569C63.0477 6.02379 63.5034 6.60561 64.2657 6.60561C65.0239 6.60561 65.4926 6.0154 65.4926 5.06086C65.4926 4.11077 65.019 3.51215 64.2657 3.51215C63.5083 3.51215 63.0476 4.09791 63.0477 5.0569ZM70.1975 4.1701C70.1025 4.45566 70.0683 4.75792 70.0969 5.0575C70.0677 5.35738 70.1016 5.66006 70.1963 5.94608C70.2911 6.2321 70.4446 6.49513 70.6471 6.71827C70.8495 6.94141 71.0965 7.11972 71.3719 7.24175C71.6474 7.36377 71.9454 7.42681 72.2467 7.42681C72.548 7.42681 72.846 7.36377 73.1215 7.24175C73.397 7.11972 73.6439 6.94141 73.8463 6.71827C74.0488 6.49513 74.2024 6.2321 74.2971 5.94608C74.3919 5.66006 74.4257 5.35738 74.3965 5.0575C74.4252 4.75792 74.3909 4.45566 74.2959 4.1701C74.2009 3.88454 74.0473 3.62199 73.8448 3.39929C73.6424 3.17659 73.3957 2.99865 73.1205 2.87688C72.8453 2.75512 72.5477 2.69222 72.2467 2.69222C71.9458 2.69222 71.6481 2.75512 71.3729 2.87688C71.0977 2.99865 70.851 3.17659 70.6486 3.39929C70.4462 3.62199 70.2925 3.88454 70.1975 4.1701ZM72.2482 3.4915C73.0272 3.4915 73.4711 4.06935 73.4711 5.0575C73.4711 6.04959 73.0272 6.62696 72.2482 6.62697C71.4662 6.62697 71.0263 6.05356 71.0263 5.0575C71.0263 4.06935 71.4662 3.4915 72.2482 3.4915ZM75.605 2.77976H76.4711V3.50394H76.5383C76.6523 3.24384 76.8447 3.0258 77.0885 2.88022C77.3324 2.73464 77.6156 2.66876 77.8987 2.69177C78.1205 2.67509 78.3432 2.70853 78.5503 2.78962C78.7574 2.87071 78.9437 2.99736 79.0952 3.16019C79.2467 3.32302 79.3597 3.51787 79.4257 3.73028C79.4917 3.9427 79.5091 4.16724 79.4765 4.38728V7.33833H78.5769V4.6132C78.5769 3.88062 78.2585 3.5163 77.5932 3.5163C77.4426 3.50928 77.2922 3.53492 77.1525 3.59144C77.0127 3.64796 76.8868 3.73403 76.7834 3.84376C76.68 3.95348 76.6016 4.08426 76.5535 4.22714C76.5054 4.37002 76.4887 4.52161 76.5047 4.67152V7.33838H75.605V2.77976ZM84.5601 2.79998V1.64426H83.6594V2.79994H82.9358V3.55774H83.6594V6.13219C83.6594 7.01109 84.0579 7.36304 85.0584 7.36304C85.2225 7.36135 85.3862 7.34598 85.5477 7.31707V6.56769C85.4339 6.58115 85.3193 6.58809 85.2047 6.58845C84.7568 6.58845 84.5601 6.37936 84.5601 5.90184V3.55778H85.5477V2.79998H84.5601ZM86.7766 1H87.6684V3.51214H87.7396C87.8592 3.24961 88.0568 3.03034 88.3055 2.88421C88.5543 2.73808 88.842 2.67219 89.1295 2.69552C89.3502 2.68352 89.5708 2.72036 89.7756 2.80341C89.9803 2.88647 90.1643 3.01369 90.3142 3.17602C90.4642 3.33834 90.5765 3.53175 90.6431 3.74246C90.7097 3.95317 90.7289 4.17598 90.6995 4.39499V7.33818H89.7989V4.61694C89.7989 3.8888 89.4598 3.52003 88.8241 3.52003C88.6695 3.50735 88.514 3.52861 88.3684 3.58232C88.2229 3.63603 88.0908 3.7209 87.9815 3.83098C87.8722 3.94106 87.7882 4.0737 87.7355 4.21962C87.6828 4.36554 87.6626 4.52122 87.6763 4.67575V7.33816H86.7767L86.7766 1ZM95.1975 7.12616C95.5586 6.88506 95.8234 6.52468 95.9456 6.10805L95.0796 6.10802C94.974 6.29731 94.8145 6.45093 94.6214 6.54934C94.4283 6.64775 94.2102 6.6865 93.995 6.66067C93.8271 6.66253 93.6608 6.6293 93.5065 6.56309C93.3522 6.49688 93.2135 6.39917 93.0992 6.27621C92.9848 6.15325 92.8975 6.00777 92.8427 5.84908C92.7879 5.69039 92.7669 5.522 92.781 5.35471V5.3043H96V4.99037C96 3.55888 95.2348 2.6923 93.9664 2.6923C93.6652 2.68973 93.3669 2.7519 93.0919 2.87461C92.8168 2.99732 92.5713 3.17769 92.372 3.40352C92.1727 3.62936 92.0242 3.89537 91.9367 4.18357C91.8491 4.47176 91.8245 4.7754 91.8645 5.07393C91.8234 5.37155 91.8476 5.67454 91.9354 5.96187C92.0231 6.2492 92.1724 6.51399 92.3727 6.73787C92.5731 6.96174 92.8198 7.13933 93.0956 7.25831C93.3715 7.37729 93.67 7.43481 93.9703 7.42689C94.402 7.4737 94.8364 7.36725 95.1975 7.12616ZM95.0835 4.63893H92.7809C92.7789 4.48333 92.8081 4.3289 92.8667 4.18475C92.9253 4.04059 93.0122 3.90962 93.1222 3.79956C93.2322 3.68951 93.3631 3.60258 93.5072 3.54392C93.6514 3.48526 93.8058 3.45605 93.9614 3.458C94.1148 3.45448 94.2672 3.48309 94.4088 3.54199C94.5505 3.60088 94.6783 3.68876 94.784 3.79998C94.8896 3.91119 94.9709 4.04329 95.0225 4.18777C95.074 4.33225 95.0948 4.48593 95.0835 4.63893ZM65.2193 21.196C63.5859 21.196 62.3906 20.3881 62.253 19.1577L60.3522 19.1576C60.4722 21.4018 62.33 22.8216 65.0817 22.8216C68.0227 22.8216 69.8718 21.3677 69.8718 19.0463C69.8718 17.2314 68.814 16.2088 66.2683 15.6067L64.9012 15.2711C63.3019 14.8759 62.6482 14.3598 62.6482 13.4825C62.6482 12.3819 63.6717 11.6256 65.1676 11.6256C66.6635 11.6256 67.687 12.3731 67.7993 13.6113H69.6737C69.6132 11.4705 67.8158 10 65.194 10C62.5448 10 60.6791 11.4705 60.6791 13.6113C60.6791 15.3404 61.7368 16.4059 64.0152 16.9563L65.6233 17.3437C67.2314 17.7389 67.9105 18.3155 67.9105 19.2786C67.9105 20.3881 66.7845 21.196 65.2193 21.196ZM28.1391 19.2607H32.8686L34.0034 22.6145H36.0408L31.5611 10.2065H29.4798L25 22.6145H27.0033L28.1391 19.2607ZM32.3778 17.7132H28.6289L30.478 12.2703H30.5297L32.3778 17.7132ZM41.9401 22.7095C44.2107 22.7095 45.7153 20.9033 45.7153 18.0921C45.7153 15.2887 44.2018 13.4738 41.9059 13.4738C41.326 13.4551 40.752 13.5939 40.2447 13.8755C39.7375 14.1572 39.3161 14.571 39.0254 15.0731H38.9913V13.5684H37.1939V25.6075H39.0508V21.1267H39.0937C39.3717 21.6312 39.7861 22.0472 40.2895 22.3271C40.7928 22.607 41.3649 22.7395 41.9401 22.7095ZM41.4161 15.0565C42.8602 15.0565 43.8067 16.2606 43.8067 18.0921C43.8067 19.9402 42.8602 21.1355 41.4161 21.1355C39.9973 21.1355 39.043 19.9149 39.043 18.0921C39.043 16.286 39.9973 15.0565 41.4161 15.0565ZM55.6731 18.0921C55.6731 20.9033 54.1684 22.7095 51.8978 22.7095C51.3226 22.7395 50.7506 22.607 50.2472 22.3271C49.7438 22.0472 49.3294 21.6312 49.0515 21.1267H49.0085V25.6075H47.1516V13.5684H48.949V15.0731H48.9831C49.2739 14.571 49.6952 14.1572 50.2025 13.8755C50.7097 13.5939 51.2838 13.4551 51.8636 13.4738C54.1596 13.4738 55.6731 15.2887 55.6731 18.0921ZM53.7644 18.0921C53.7644 16.2606 52.8179 15.0565 51.3738 15.0565C49.955 15.0565 49.0007 16.286 49.0007 18.0921C49.0007 19.9148 49.955 21.1355 51.3738 21.1355C52.818 21.1355 53.7645 19.9402 53.7644 18.0921ZM73.8796 11.4279V13.5687H75.5999V15.0392H73.8796V20.0264C73.8796 20.8011 74.224 21.1622 74.9803 21.1622C75.1845 21.1586 75.3884 21.1443 75.5911 21.1192V22.5809C75.2511 22.6444 74.9055 22.6732 74.5597 22.6668C72.7282 22.6668 72.0139 21.9789 72.0139 20.2244V15.0392H70.6986V13.5687H72.0139V11.4279H73.8796ZM80.886 13.4575C78.2719 13.4575 76.5955 15.2461 76.5955 18.0924C76.5955 20.9465 78.2552 22.7273 80.886 22.7273C83.5176 22.7273 85.1774 20.9465 85.1774 18.0924C85.1774 15.246 83.5088 13.4575 80.886 13.4575ZM80.886 14.9875C82.3906 14.9875 83.2854 16.1399 83.2853 18.0924C83.2853 20.0527 82.3906 21.1963 80.886 21.1963C79.3813 21.1963 78.4875 20.0527 78.4875 18.0924C78.4875 16.1487 79.3813 14.9875 80.886 14.9875ZM86.7094 13.5684H88.4804V15.1081H88.5234C88.6432 14.6272 88.9249 14.2022 89.3212 13.9046C89.7174 13.6069 90.2041 13.4548 90.6993 13.4737C90.9133 13.4729 91.1267 13.4962 91.3355 13.543V15.2798C91.0654 15.1973 90.7836 15.1594 90.5012 15.1676C90.2314 15.1567 89.9625 15.2043 89.7129 15.3071C89.4632 15.4099 89.2388 15.5655 89.055 15.7632C88.8711 15.9609 88.7323 16.1961 88.6479 16.4526C88.5636 16.709 88.5357 16.9807 88.5663 17.2489V22.6147H86.7094L86.7094 13.5684ZM96.0013 22.7273C98.0475 22.7273 99.6468 21.6003 99.8966 19.9581L98.1333 19.9581C97.9685 20.3668 97.6762 20.7114 97.2998 20.9407C96.9234 21.1699 96.483 21.2716 96.0442 21.2305C95.7102 21.2428 95.3774 21.1838 95.0679 21.0576C94.7584 20.9314 94.4793 20.7408 94.2492 20.4985C94.019 20.2561 93.843 19.9676 93.7329 19.652C93.6228 19.3364 93.5812 19.001 93.6107 18.6681V18.5559H100V17.9197C100 15.1768 98.4261 13.4575 95.9232 13.4575C93.3784 13.4575 91.7362 15.2978 91.7362 18.1353C91.7362 20.9641 93.3696 22.7273 96.0013 22.7273ZM98.1421 17.2581H93.6194C93.6187 16.9557 93.6778 16.6562 93.7934 16.3768C93.909 16.0973 94.0787 15.8436 94.2929 15.6301C94.5071 15.4166 94.7615 15.2477 95.0413 15.1331C95.3211 15.0184 95.6208 14.9603 95.9232 14.9621C96.223 14.9557 96.5208 15.0113 96.7981 15.1254C97.0753 15.2395 97.326 15.4097 97.5343 15.6253C97.7427 15.8409 97.9042 16.0972 98.0088 16.3782C98.1134 16.6592 98.1588 16.9588 98.1421 17.2581Z" fill="white" />
                      </svg>
                    </figure>
                  </a>
                </div>
              </>
            }
          </div>
        </div>
      </div>
      <div className="cta-breaker__foreground-container">
        <Img className="cta-breaker__foreground-image" fluid={data.foregroundImage.fluid} />
      </div>
    </section>
  )
}

export default CtaBreaker;
