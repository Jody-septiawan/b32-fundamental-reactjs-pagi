import React from 'react';

// import component Header
import Header from './components/header';

function Component() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

// Create a new component here
function Content() {
  return (
    <div>
      <h1>This is A Content</h1>
      <button>Click Me</button>
    </div>
  );
}

export default Component;
