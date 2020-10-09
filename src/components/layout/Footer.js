import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">O nas</h2>
        <p className="mt-5">Zajmujemy się diagnostyką oraz naprawą podespołów do ciągników marki Deutz-Fahr, John Deere itp.</p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Linki</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://www.texapoland.pl/">TexaPoland</a>
          </li>
          <li>
            <a href="https://www.texapoland.pl/">Motor DK</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://github.com/blaszczykkarol70">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
