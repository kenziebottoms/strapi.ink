import React from 'react'

import Page from '../components/Page'
import CodeSnippet from '../elements/CodeSnippet'

import '../styles/pages/JsDocTypes.scss'

const JsDocTypes = () =>
  <Page id='jsdoc' className='blog'>
    <div className='block'>
      <h1>Cheatsheet: JSDoc types</h1>

      <CodeSnippet>
        {`/**
* The different types accepted by JSDoc for parameters.
* @param {number} x - How many times I've had to look this up.
*/
`}
      </CodeSnippet>

      <ul className='flex'>
        <li>null</li>
        <li>undefined</li>
        <li>boolean</li>
        <li>number</li>
        <li>string</li>
        <li>Object</li>
        <li>Array</li>
      </ul>
    </div>
  </Page>

export default JsDocTypes