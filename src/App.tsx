import * as React from 'react';
import './web-components/basic-component';
import './App.css';

declare global {
  namespace JSX {
    interface CustomComponent extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
    > {
      name?: string;
    }
    interface IntrinsicElements {
      'basic-component': CustomComponent
    }
  }
}

function App() {
  const nombre = 'Manolo Perez Agobio';
  return (
    <div>
      <basic-component name={nombre}></basic-component>
    </div>
  );
}

export default App;
