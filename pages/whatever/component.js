import React from "react";
import styled from "styled-components";

const WOW = styled.div`
  background-color: teal;
  border: 2px solid maroon;
  padding: 10rem;
`

export default function Component() {
    return (
      <WOW>
        <h1>This is a new component! Woohoo</h1>
      </WOW>
    );

  }