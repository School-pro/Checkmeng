const Footer = () => {
  return (
    <div>
      <footer class="bg-gray-900 text-white">
        <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* <!-- Logo and About Section --> */}
            <div>
              <h3 class="text-lg font-semibold mb-4">Web3 Learning Platform</h3>
              <p class="text-sm text-gray-400">
                Empowering blockchain enthusiasts with comprehensive courses and
                real-world projects to master Web3 technologies.
              </p>
            </div>

            {/* <!-- Quick Links --> */}
            <div>
              <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
              <ul class="space-y-2">
                <li>
                  <a href="/about" class="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/courses" class="text-gray-400 hover:text-white">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="/blog" class="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/contact" class="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Resources --> */}
            <div>
              <h4 class="text-lg font-semibold mb-4">Resources</h4>
              <ul class="space-y-2">
                <li>
                  <a href="/faq" class="text-gray-400 hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    class="text-gray-400 hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" class="text-gray-400 hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Newsletter --> */}
            <div>
              <h4 class="text-lg font-semibold mb-4">
                Subscribe to our Newsletter
              </h4>
              <p class="text-sm text-gray-400 mb-4">
                Stay updated with the latest courses and Web3 trends.
              </p>
              <form class="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  class="w-full p-2 rounded-md text-gray-900"
                />
                <button class="bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-blue-600">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div class="mt-12 border-t border-gray-800 pt-8">
            <div class="flex flex-col sm:flex-row justify-between items-center">
              {/* <!-- Social Media Links --> */}
              <div class="flex space-x-4 mb-4 sm:mb-0">
                <a href="#" class="text-gray-400 hover:text-white">
                  <svg
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691V10.41h3.129V8.026c0-3.1 1.894-4.792 4.659-4.792 1.325 0 2.462.099 2.793.143v3.24h-1.917c-1.505 0-1.795.715-1.795 1.764v2.313h3.587l-.467 3.296h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-white">
                  <svg
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.933 4.933 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482 13.978 13.978 0 01-10.15-5.15 4.822 4.822 0 001.523 6.574A4.907 4.907 0 01.96 9.7v.061a4.92 4.92 0 003.946 4.827 4.952 4.952 0 01-2.224.084 4.924 4.924 0 004.6 3.42A9.867 9.867 0 010 21.539a13.94 13.94 0 007.548 2.212c9.058 0 14.01-7.512 14.01-14.01 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z" />
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-white">
                  <svg
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.04c-5.527 0-10.02 4.493-10.02 10.02 0 4.406 3.624 8.054 8.055 8.455-.11-.896-.21-2.275.044-3.255.23-.928 1.48-5.918 1.48-5.918s-.376-.752-.376-1.862c0-1.742 1.012-3.04 2.27-3.04 1.07 0 1.584.803 1.584 1.763 0 1.073-.684 2.677-1.036 4.164-.29 1.25.618 2.27 1.835 2.27 2.202 0 3.89-2.324 3.89-5.671 0-2.964-2.14-5.03-5.202-5.03-3.54 0-5.615 2.654-5.615 5.396 0 1.076.414 2.234.932 2.86.102.123.117.23.087.354-.096.392-.32 1.25-.364 1.424-.057.23-.187.28-.434.169-1.63-.755-2.655-3.121-2.655-5.035 0-4.083 2.966-7.83 8.553-7.83 4.487 0 7.982 3.197 7.982 7.474 0 4.453-2.797 8.036-6.68 8.036-1.306 0-2.537-.677-2.953-1.484l-.804 3.057c-.292 1.102-1.085 2.479-1.622 3.32.724.223 1.486.344 2.278.344 5.526 0 10.02-4.493 10.02-10.02 0-5.527-4.493-10.02-10.02-10.02z" />
                  </svg>
                </a>
              </div>

              {/* <!-- Copyright Notice --> */}
              <p class="text-sm text-gray-400">
                &copy; 2024 Web3 Learning Platform. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
      ;
    </div>
  );
};

export default Footer;
