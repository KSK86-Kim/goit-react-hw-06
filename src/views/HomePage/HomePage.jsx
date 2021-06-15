import React, { Component } from 'react';
import { connect } from 'react-redux';

import Main from '../../components/Main';
import Container from '../../components/Container';
import Section from '../../components/Section';

//////
import InputForm from '../../components/InputForm/';
import Filter from '../../components/Filter';
import PbookList from '../../components/PbookList';

import { fetchEntries } from '../../redux/entries/entries-operations';
class HomePage extends Component {
  componentDidMount() {
    this.props.onFetchEntries();
  }

  render() {
    return (
      <>
        <Main>
          <Section title="Phonebook">
            <Container>
              <h2>Form</h2>
              <InputForm />
            </Container>
            <Container>
              <h2>Filter</h2>
              <Filter />
            </Container>
            <Container>
              <h2>Contacts</h2>
              <PbookList />
            </Container>
            {/* <ContactList></ContactList> */}
          </Section>
        </Main>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onFetchEntries: () => dispatch(fetchEntries()),
});

export default connect(null, mapDispatchToProps)(HomePage);
