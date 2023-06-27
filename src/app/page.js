import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
/// Page Sections
const Hero = () => (
  <div
    className="relative pt-16 pb-32 flex content-center items-center justify-center"
    style={{
      minHeight: '75vh',
    }}
  >
    <div
      className="absolute top-0 w-full h-full bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
      }}
    >
      <span
        id="blackOverlay"
        className="w-full h-full absolute opacity-75 bg-black"
      ></span>
    </div>
    <div className="container relative mx-auto">
      <div className="items-center flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div className="pr-12">
            <h1 className="text-white font-semibold text-5xl py-4">
              EventWhiz
            </h1>
            <h3 className="text-white font-semibold text-xl">
              Your event management goals starts with us
            </h3>
            <p className="mt-4 text-lg text-gray-300">
              Host events on various topics and allow users to register
              themselves, attend them and bond with other participants.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
      style={{ height: '70px' }}
    >
      <svg
        className="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          className="text-gray-300 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
  </div>
);

const Services = () => (
  <section className="pb-20 bg-gray-300 -mt-24">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">
        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                <i className="fas fa-award"></i>
              </div>
              <h6 className="text-xl font-semibold">
                Award winning Event Management Platform
              </h6>
              <p className="mt-2 mb-4 text-gray-600">
                Divide details about your event into parts. Add details as per
                target audience.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                <i className="fas fa-retweet"></i>
              </div>
              <h6 className="text-xl font-semibold">Free Registrations</h6>
              <p className="mt-2 mb-4 text-gray-600">
                Host events freely on our platform. Sit back and let us do rest
                for you.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                <i className="fas fa-fingerprint"></i>
              </div>
              <h6 className="text-xl font-semibold">Verified events</h6>
              <p className="mt-2 mb-4 text-gray-600">
                Verfied events hosted on our platform with ease. Host using easy
                form driven interface.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center mt-32">
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
            <i className="fas fa-user-friends text-xl"></i>
          </div>
          <h3 className="text-3xl mb-2 font-semibold leading-normal">
            Working with us is a pleasure
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
            Keep users engaged in events by grabbing their attention. Allow them
            to observe your events shown in interesting card UI.
          </p>
          <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
            The platform comes with prebuilt forms to easily customize and
            create events.
          </p>
        </div>

        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-pink-600">
            <img
              alt="..."
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
              className="w-full align-middle rounded-t-lg"
            />
            <blockquote className="relative p-8 mb-4">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                className="absolute left-0 w-full block"
                style={{
                  height: '95px',
                  top: '-94px',
                }}
              >
                <polygon
                  points="-30,95 583,95 583,65"
                  className="text-pink-600 fill-current"
                ></polygon>
              </svg>
              <h4 className="text-xl font-bold text-white">Top Notch Events</h4>
              <p className="text-md font-light mt-2 text-white">
                All events are listed from verified publishers with top
                attention to details. Enjoy creating awesome events with us.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Featured = () => (
  <section className="relative py-20">
    <div
      className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style={{ height: '80px' }}
    >
      <svg
        className="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          className="text-white fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>

    <div className="container mx-auto px-4">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
          <img
            alt="..."
            className="max-w-full rounded-lg shadow-lg"
            src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          />
        </div>
        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div className="md:pr-12">
            <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
              <i className="fas fa-rocket text-xl"></i>
            </div>
            <h3 className="text-3xl font-semibold">
              A growing event management compnay
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              The platform comes with prebuilt forms to help you get started
              faster. You can change the text and image URLs and you are good to
              go.
            </p>
            <ul className="list-none mt-6">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                      <i className="fas fa-fingerprint"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">
                      Carefully crafted form elements
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                      <i className="fab fa-html5"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">Amazing events</h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                      <i className="far fa-paper-plane"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">Active audience</h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Finisher = () => (
  <section className="pb-20 relative block bg-gray-900">
    <div
      className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style={{ height: '80px' }}
    >
      <svg
        className="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          className="text-gray-900 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>

    <div className="container mx-auto px-4 lg:pt-24 lg:pb-24">
      <div className="flex flex-wrap text-center justify-center">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="text-4xl font-semibold text-white">Host something</h2>
          <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
            Put the potentially record breaking ideas to use and create events
            to display to potential audience and prospective investors.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mt-12 justify-center">
        <div className="w-full lg:w-3/12 px-4 text-center">
          <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
            <i className="fas fa-medal text-xl"></i>
          </div>
          <h6 className="text-xl mt-5 font-semibold text-white">
            Excellent Services
          </h6>
          <p className="mt-2 mb-4 text-gray-500">
            Great services in easy to use interface.
          </p>
        </div>
        <div className="w-full lg:w-3/12 px-4 text-center">
          <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
            <i className="fas fa-poll text-xl"></i>
          </div>
          <h5 className="text-xl mt-5 font-semibold text-white">
            Grow your market
          </h5>
          <p className="mt-2 mb-4 text-gray-500">
            Attract audience to build your brand and grow your business.
          </p>
        </div>
        <div className="w-full lg:w-3/12 px-4 text-center">
          <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
            <i className="fas fa-lightbulb text-xl"></i>
          </div>
          <h5 className="text-xl mt-5 font-semibold text-white">Launch time</h5>
          <p className="mt-2 mb-4 text-gray-500">
            Launce new products in events and get instant boost.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const LandingPage = () => {
  return (
    <div>
      <header>
        <Navbar transparent={true} />
      </header>
      <div className="min-h-screen bg-gray-100">
        <Hero />
        <Services />
        <Featured />
        <Finisher />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
