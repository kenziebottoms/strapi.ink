import React from 'react';

import Page from '../components/Page';
import Job from '../components/Job';
import '../styles/pages/Resume.scss';

const Resume = () => (
  <Page id="resume">
    <div id="green-border" />
    <h1 className="lane-1">Full-time</h1>
    <h1 className="lane-2">Freelance</h1>
    <Job
      classes="lane-1 length-2"
      company="FortyAU"
      jobTitle="Software Developer"
      startDate="July 2018"
      description={[
        'Automated testing, QA processes, and bug fixes for large legacy Java codebase.',
        'Creation, enhancement, and refactoring of features on a Vue app.',
        'Responsive styling and UI enhancements on a Vue app using SCSS.',
        'Implementation, maintenance, repair, and modification of responsive custom WordPress themes.',
        'Responsive map features using Leaflet with React.',
        'AWS S3 file storage and SendGrid email notification integration with an Elixir Phoenix app.',
      ]}
      tech={[
        'Git',
        'Vue',
        'React',
        'Java',
        'WordPress',
        'Elixir &amp; Phoenix',
        'JavaScript',
        'Leaflet',
        'AWS S3',
        'SendGrid',
        'CSS/SCSS',
        'JUnit',
        'Spring Boot',
      ]}
    />
    <div className="year">2019</div>
    <Job
      classes="align-self-end lane-2 length-1"
      company="MERGE Digital"
      jobTitle="Freelance Developer"
      startDate="July 2018"
      endDate="August 2018"
    />
    <article className="align-self-end lane-2 length-1">
      <h3>MERGE Digital</h3>
      <h4>Freelance Developer</h4>
      <p className="date">July 2018 - August 2018</p>
      <ul>
        <li>
          Responsive custom WordPress themes built with{' '}
          <a href="https://roots.io/" target="blank">
            Roots.io
          </a>
          .
        </li>
      </ul>
      <div className="tech">
        <span className="tag">HTML</span>
        <span className="tag">CSS/SCSS</span>
        <span className="tag">jQuery</span>
        <span className="tag">WordPress</span>
        <span className="tag">PHP</span>
      </div>
    </article>
    <article className="lane-1 length-1">
      <h3>Nashville Software School</h3>
      <h4>Apprentice Software Developer</h4>
      <p className="date">November 2017 - May 2018</p>
      <ul>
        <li>Source control and collaboration with Git & GitHub.</li>
        <li>
          Collaboration with GitHub projects and Trello using Agile/Scrum
          processes.
        </li>
        <li>
          Responsive HTML & CSS with and without preprocessors like Sass and
          Haml as well as frameworks like Bootstrap and Materialize.
        </li>
        <li>
          Principles and fundamentals of object-oriented, DRY, modular
          JavaScript.
        </li>
        <li>
          Single-page applications using JavaScript, jQuery, and AngularJS.
        </li>
        <li>Task management using Grunt with JSHint, Browserify, SCSS, etc.</li>
        <li>
          Server-side, test-driven Node development using Express, Chai, and
          Mocha.
        </li>
        <li>Schema design, database organization, and API construction.</li>
      </ul>
      <div className="tech">
        <span className="tag">Git</span>
        <span className="tag">JavaScript</span>
        <span className="tag">jQuery</span>
        <span className="tag">NPM</span>
        <span className="tag">Node.js &amp; Express</span>
        <span className="tag">AngularJS</span>
        <span className="tag">CSS/SCSS</span>
        <span className="tag">HTML/HAML</span>
        <span className="tag">Grunt/Gulp</span>
        <span className="tag">Mocha &amp; Chai testing</span>
        <span className="tag">MySQL</span>
      </div>
    </article>
    <article className="lane-2 align-self-center length-1">
      <h3>Vantedge</h3>
      <h4>Freelance Developer</h4>
      <p className="date">January 2018 - August 2018</p>
      <ul>
        <li>Design and implementation of custom archive pages.</li>
        <li>
          Optimization, modification, and maintenance of a custom WordPress
          theme.
        </li>
      </ul>
      <div className="tech">
        <span className="tag">HTML</span>
        <span className="tag">jQuery</span>
        <span className="tag">WordPress</span>
        <span className="tag">PHP</span>
      </div>
    </article>
    <div className="year">2018</div>
    <article className="lane-2 length-1">
      <h3>IASIS Healthcare</h3>
      <h4>Freelance Developer</h4>
      <p className="date">June 2017 - September 2017</p>
      <ul>
        <li>Repair and optimization of existing WordPress sites.</li>
        <li>Design and implementation of custom landing pages.</li>
      </ul>
      <div className="tech">
        <span className="tag">HTML</span>
        <span className="tag">jQuery</span>
        <span className="tag">CSS/SCSS</span>
        <span className="tag">WordPress</span>
        <span className="tag">PHP</span>
      </div>
    </article>
    <article className="lane-1 length-2">
      <h3>G/O Digital</h3>
      <h4>Web Development Maintenance Specialist</h4>
      <p className="date">September 2016 - April 2017</p>
      <ul>
        <li>
          Responsive custom WordPress themes using HTML, SCSS, and JavaScript.
        </li>
        <li>
          Organization and facilitation of inter-server migration of 100+ sites.
        </li>
        <li>
          Direct customer correspondence regarding site maintenance and updates.
        </li>
        <li>
          Maintenance, repair, and modification of custom WordPress themes.
        </li>
        <li>Server organization and maintenance using Python scripting.</li>
      </ul>
      <div className="tech">
        <span className="tag">Python</span>
        <span className="tag">HTML</span>
        <span className="tag">jQuery</span>
        <span className="tag">CSS/SCSS</span>
        <span className="tag">WordPress</span>
        <span className="tag">PHP</span>
        <span className="tag">ExpressionEngine</span>
        <span className="tag">Git</span>
      </div>
    </article>
    <div className="year">2017</div>
    <article length="1" className="lane-1">
      <h3>G/O Digital (cont.)</h3>
      <h4>Web Development Associate</h4>
      <p className="date">January 2016 - September 2016</p>
      <ul>
        <li>
          Maintenance, repair, and modification of custom WordPress themes.
        </li>
      </ul>
      <div className="tech">
        <span className="tag">HTML</span>
        <span className="tag">jQuery</span>
        <span className="tag">CSS/SCSS</span>
        <span className="tag">WordPress</span>
        <span className="tag">PHP</span>
        <span className="tag">ExpressionEngine</span>
        <span className="tag">Git</span>
      </div>
    </article>
    <div className="year">2016</div>
    <article className="lane-1 length-1">
      <h3>Acxiom Corporation</h3>
      <h4>Digital Content Specialist Intern</h4>
      <p className="date">July 2015 - December 2015</p>
      <ul>
        <li>
          Construction, modification, and QA of HTML email marketing templates.
        </li>
      </ul>
      <div className="tech">
        <span className="tag">HTML</span>
        <span className="tag">JavaScript</span>
        <span className="tag">Photoshop</span>
      </div>
    </article>
    <div className="year">2015</div>
    <article className="lane-2 length-4">
      <h3>Hereit.org</h3>
      <h4>Freelance Developer</h4>
      <p className="date">June 2013 - May 2015</p>
      <ul>
        <li>Custom HTML5 audio player using jQuery.</li>
        <li>
          Repair and expansion of user-facing and administrative features with
          PHP and MySQL.
        </li>
        <li>Implementation of a front-end redesign with CSS3.</li>
        <li>Stripe e-commerce subscriptions and payments with jQuery/Ajax.</li>
      </ul>
      <div className="tech">
        <span className="tag">HTML</span>
        <span className="tag">CSS</span>
        <span className="tag">PHP</span>
        <span className="tag">MySQL</span>
        <span className="tag">JavaScript</span>
        <span className="tag">jQuery</span>
        <span className="tag">Stripe e-Commerce</span>
      </div>
    </article>
    <article className="lane-1 align-self-end length-1">
      <h3>Centre College IT Services</h3>
      <h4>Junior Developer</h4>
      <p className="date">September 2014 - January 2015</p>
      <ul>
        <li>
          Construction, modification, and enhancement of student dashboard
          features.
        </li>
      </ul>
      <div className="tech">
        <span className="tag">C#</span>
      </div>
    </article>
    <div className="year">2014</div>
    <div className="year">2013</div>
  </Page>
);

export default Resume;
