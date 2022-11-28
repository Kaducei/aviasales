import React from 'react';

import GlobalFilter from '../GlobalFilter';
import SiderFilter from '../SiderFilter';
import TicketList from '../TicketList';
import Ticket from '../Ticket';

import logo from './logo.svg';

import './App.scss';

function App() {
  return (
    <section>
      <header className="header-main">
        <img src={logo} alt="kek" />
      </header>
      <main>
        <aside>
          <SiderFilter />
        </aside>
        <div>
          <header>
            <GlobalFilter />
          </header>
          <TicketList />
          <Ticket />
        </div>
      </main>
    </section>
  );
}

export default App;
