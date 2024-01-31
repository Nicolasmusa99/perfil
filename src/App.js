// App.js

import React from 'react';

function App() {
  return (
    <div>
      <header>
        <h1>Welcome to my website</h1>
      </header>
      <main>
        <section>
          <h2>About</h2>
          <p>This is the About section of my website.</p>
        </section>
        <section>
          <h2>Services</h2>
          <p>Here are the services we offer:</p>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
          {/* Add the Newsletters sub-section */}
          <section>
            <h3>Newsletters</h3>
            <p>Information about newsletters goes here.</p>
          </section>
          {/* Add the Portfolio sub-section */}
          <section>
            <h3>Portfolio</h3>
            <p>Information about portfolio goes here.</p>
          </section>
        </section>
        {/* More sections go here */}
      </main>
      <footer>
        <p>Contact information goes here.</p>
      </footer>
    </div>
  );
}

export default App;
