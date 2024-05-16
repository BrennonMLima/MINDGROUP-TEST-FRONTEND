import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/molecules/header';
import SearchBoard from './components/molecules/searchboard';

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <SearchBoard />
      </section>
      <section></section>
      <GlobalStyles />
    </div>
  );
}

export default App;
