import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import GlobalFilter from '../GlobalFilter';
import SiderFilter from '../SiderFilter';
import TicketList from '../TicketList';
import Footer from '../Footer/Footer';
import * as actions from '../../Redux/actions/actionCreators';

import styles from './App.module.scss';
import logo from './logo.svg';

function App({ ticketsLoad, isLoading }) {
  useEffect(() => {
    if (!isLoading) {
      ticketsLoad();
    }
  }, []);
  return (
    <section className={styles['section-wrapper']}>
      <header className={styles['header-main']}>
        <img src={logo} alt="logotip" />
      </header>
      <main className={styles['content-wrapper']}>
        <aside className={styles['aside-wrapper']}>
          <SiderFilter />
        </aside>
        <div className={styles['main-wrapper']}>
          <header className={styles['globalFilter-wrapper']}>
            <GlobalFilter />
          </header>
          <TicketList />
          <Footer />
        </div>
      </main>
    </section>
  );
}
const mapStateToProps = (state) => ({ isLoading: state.ticketsReducer.isLoading });
export default connect(mapStateToProps, actions)(App);
