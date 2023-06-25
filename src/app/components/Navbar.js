import React from 'react';
import Link from 'next/link';

function Navbar(props) {
  return (
    <nav
      className={
        (props.transparent
          ? 'top-0 absolute z-50 w-full'
          : 'relative bg-white shadow-lg') +
        ' flex flex-wrap items-center justify-between px-2 py-3 '
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className={
              (props.transparent ? 'text-white' : 'text-gray-800') +
              ' title-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'
            }
            href="#"
          >
            Event Management Platform
          </a>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none'
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                href="#"
              >
                <i
                  className={
                    (props.transparent
                      ? 'lg:text-gray-300 text-gray-500'
                      : 'text-gray-500') +
                    ' fab fa-facebook text-lg leading-lg '
                  }
                />
                <span className="lg:hidden inline-block ml-2">Share</span>
              </a>
            </li>

            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                href="#"
              >
                <i
                  className={
                    (props.transparent
                      ? 'lg:text-gray-300 text-gray-500'
                      : 'text-gray-500') + ' fab fa-twitter text-lg leading-lg '
                  }
                />
                <span className="lg:hidden inline-block ml-2">Tweet</span>
              </a>
            </li>

            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                href="#"
              >
                <i
                  className={
                    (props.transparent
                      ? 'lg:text-gray-300 text-gray-500'
                      : 'text-gray-500') + ' fab fa-github text-lg leading-lg '
                  }
                />
                <span className="lg:hidden inline-block ml-2">Star</span>
              </a>
            </li>

            <li className="flex items-center">
              <Link href="/eventlogin">
                <button
                  className={
                    (props.transparent
                      ? 'bg-white text-gray-800 active:bg-gray-100'
                      : 'bg-pink-500 text-white active:bg-pink-600') +
                    ' text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3'
                  }
                  type="button"
                  style={{ transition: 'all .15s ease' }}
                >
                  <i className="fas fa-user-cog"></i> Event Login
                </button>
              </Link>
            </li>

            <li className="flex items-center">
              <button
                className={
                  (props.transparent
                    ? 'bg-white text-gray-800 active:bg-gray-100'
                    : 'bg-pink-500 text-white active:bg-pink-600') +
                  ' text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3'
                }
                type="button"
                style={{ transition: 'all .15s ease' }}
              >
                <Link href="/userlogin">
                  <i className="fas fa-user-circle"></i> User Login
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
