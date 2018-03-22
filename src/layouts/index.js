import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Media from 'react-media';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Nav from '../components/Nav'
import './index.css'
import "../styles/layout-overide.css"


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Writing | Hillary Keel"
      meta={[
        { name: 'description', content: 'Poetry and Prose by Brooklyn-NY based writer, translator, and Hypnotherapist Hillary Keel' },
        { name: 'keywords', content: 'poetry, prose' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 980,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "100%"
      }}
    >
      <Media query={{ maxWidth: 848 }}>
        {matches =>
          matches ? (
            <div
              style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                padding: "25px"
              }}
            >
               <div style={{ flex: 1 }}>{children()}</div>
            </div>
          ) : (
            <div
              style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                padding: "25px"
              }}
            >
              <div style={{ flex: 2.5, paddingRight: "30px" }}>
                {children()}
              </div>
              <div style={{ flex: 1 }}>
                <Sidebar
                  title="Hillary Keel"
                  description="Poems, Prose, Translations"
                />
                <Sidebar
                  title="About Me"
                  description='Along with writing Poetry and Prose, I have a Healing through Hypnosis practice based in Brooklyn, NY. I am a German to English Translator. I am an adjunct lecturer for German and the German Fairy Tale at Hunter College, CUNY.'
                />
                <Sidebar
                  copy=' © 2018 Hillary Keel. hillary.keel @ gmail.com  &nbsp;  &nbsp; All rights reserved. hillarykeel.com'
                />
              </div>
            </div>
          )
        }
      </Media>
    </div>
  </div>
);


TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
