import React from "react";
import Link from 'next/link';
import Component from "./component";


export default function FirstPost() {
    return (
      <React.Fragment>
        <h1>First Post</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
        <Component/>
      </React.Fragment>
    );

  }