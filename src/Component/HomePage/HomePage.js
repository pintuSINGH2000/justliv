import React from "react";
import styles from "./homepage.module.css";
import Hero from "../../Assets/images/hero.png";
import Gemini from "../../Assets/images/gemini.svg";
import Hearts from "../../Assets/images/hearts.svg";
import Laptop from "../../Assets/images/laptop.png";
import Child from "../../Assets/images/child.png";
import Mother from "../../Assets/images/mother.png";
import Family from "../../Assets/images/family.png";
import Logo1 from "../../Assets/images/logo1.png";
import DownArrow from "../../Assets/images/downArrow.png";
import TwistedArrow from "../../Assets/images/twistedArrow.png";
import { RiSearchLine } from "react-icons/ri";
import { CiCalendar } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";

const HomePage = () => {
  return (
    <div className={styles.container}>
      {/* section 1 */}
      <div className={styles.section1}>
        <div className={styles.section1Img}>
          <img className={styles.hero} src={Hero} alt="hero" />
          <img className={styles.heroMobile} src={Hero} alt="hero" />
        </div>
        <div className={styles.section1text}>
          <h1>Your Child's Perfect Schedule in Just a Few Clicks</h1>
          <p>Less Planning, More Living.</p>
          <button className={styles.section1Btn}>
            <img src={Gemini} alt="gemeni logo" /> Join the waiting list
          </button>
        </div>
      </div>
      {/* section 2 */}
      <div className={styles.section2}>
        <h2>Why JustLiv?</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.Cardmain}>
              <img src={Gemini} alt="gemeni logo" />
              <h3>Custom Calendar</h3>
              <p>
                Our Custom Activities Calendar instantly creates a personalized
                activity schedule based on your preferences, budget, and
                location. No more endless searching or juggling calendars.
              </p>
            </div>
            <img className={styles.cardImg} src={Laptop} alt="laptop" />
          </div>
          <div className={styles.card}>
            <div className={styles.Cardmain}>
              <img src={Gemini} alt="gemeni logo" />
              <h3>Tailored to Your Interests</h3>
              <p>
                Filters let you choose activities by age, category, price, and
                more. Social features help you sync schedules with friends and
                see what they’re attending.
              </p>
            </div>
            <img className={styles.cardImg} src={Child} alt="laptop" />
          </div>
          <div className={styles.card}>
            <div className={styles.Cardmain}>
              <img src={Gemini} alt="gemeni logo" />
              <h3>Stress-Free Bulk Booking</h3>
              <p>
                Book all your child’s activities in just a few clicks. Our
                platform handles the details so you don’t have to.
              </p>
            </div>
            <img className={styles.cardImg} src={Mother} alt="laptop" />
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className={styles.section3}>
        <h2>How it works</h2>
        <div className={styles.section3Main}>
          <div className={styles.paths}>
            <div className={styles.path}>
              <div className={styles.logoContainer}>
                <RiSearchLine className={styles.logo} />
              </div>
              <div className={styles.pathText}>
                <h3>Browse</h3>
                <p>Discover activities from our partner booking providers.</p>
              </div>
            </div>
            <div className={styles.path}>
              <img className={styles.downArrow} src={DownArrow} alt="arrow" />
              <div className={styles.logoContainer}>
                <CiCalendar className={styles.logo} />
              </div>
              <div className={styles.pathText}>
                <h3>Build</h3>
                <p>
                  Share your child’s interests, schedule, and preferences. Watch
                  as JustLiv creates the perfect calendar filled with
                  activities.
                </p>
              </div>
            </div>
            <div className={styles.path}>
              <img
                className={styles.twistedArrow}
                src={TwistedArrow}
                alt="arrow"
              />
              <div className={styles.logoContainer}>
                <FaRegHeart className={styles.logo} />
              </div>
              <div className={styles.pathText}>
                <h3>Book</h3>
                <p>
                  Finalize your selections with one click and enjoy peace of
                  mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 4 */}
      <div className={styles.section4}>
        <div className={styles.section4Main}>
          <h2>
            <span>Our Mission</span>
            <img src={Hearts} alt="heart" />
          </h2>
          <p className={styles.section4text1}>
            Parents need a simple way to find, book, and track their kids
            activities. Businesses need a better way to be found and to keep
            families coming back.
          </p>
          <p className={styles.section4text2}>
            Our purpose is to
            <br />
            <span>
              make parents lives{" "}
              <span style={{ color: "#ff8095" }}>easier</span>,{" "}
              <span style={{ color: "#ff8095" }}>happier</span>, and{" "}
              <span style={{ color: "#ff8095" }}>less stressful</span>.
            </span>
          </p>
          <p className={styles.section4text3}>
            As parents and business owners, we get it.
          </p>
          <img className={styles.familyImg} src={Family} alt="family" />
        </div>
      </div>

      {/* section 5 */}
      <div className={styles.section5}>
        <div className={styles.bgimg}></div>
        <div className={styles.section5Main}>
          <h1>Ready to Simplify Your Life?</h1>
          <p>
            Be the first to know when we launch! Join our waiting list and get
            exclusive updates and early access to our journey.
          </p>
          <button className={styles.section5Btn}>
            <img src={Gemini} alt="gemeni logo" /> Join the waiting list
          </button>
        </div>
      </div>

      {/* footer */}
      <div className={styles.footer}>
        <img className={styles.logoImg} src={Logo1} alt="logo"/>
        <div className={styles.instagram}>
            <FaInstagram className={styles.instagramLogo}/>
            <a href="https://www.instagram.com/justlivatx/?igsh=MWo3czd1MXh3cQ%3D%3D&utm_source=qr#">Connect with us on Instagram ♡</a>
        </div>
        <div className={styles.link}>
            <p>Privacy policy</p>
            <p>Accessibility Statement</p>
            <FiLinkedin className={styles.linkedin}/>
            <p>© 2024 by JustLiv</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
