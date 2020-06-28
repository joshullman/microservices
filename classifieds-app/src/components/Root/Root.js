import gql from "graphql-tag";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import graphqlClient from "#root/api/graphqlClient";
import { setSession } from "#root/store/ducks/session";

import AccountDetails from "./AccountDetails";
import Listings from "./Listings";

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0 auto;
  width: 80rem;
`;

const Content = styled.div`
  flex: 1;
  margin-right: 1rem;
`;

const Sidebar = styled.div`
  flex: 0 auto;
  width: 10rem;
`;

const query = gql`
  {
    userSession(me: true) {
      id
      user {
        id
        email
      }
    }
  }
`;

const Root = () => {
  const dispatch = useDispatch();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    graphqlClient.query({ query }).then(({ data }) => {
      console.log(data);
      if (data.userSession) {
        dispatch(setSession(data.userSession));
      }
      setInitialized(true);
    });
  }, []);

  if (!initialized) return "Loading...";

  return (
    <Wrapper>
      <Container>
        <Content>
          <Listings />
        </Content>
        <Sidebar>
          <AccountDetails />
        </Sidebar>
      </Container>
    </Wrapper>
  );
};

export default Root;
