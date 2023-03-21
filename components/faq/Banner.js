import React, { useState } from "react";
import 'bulma/css/bulma.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const QuestionContext = React.createContext();
export default function Banner({ children, ...restProps }) {
  return (
    <div {...restProps}>
      <div>{children}</div>
    </div>
  );
}
Banner.Header = function BannerHeader({ children, ...restProps }) {
  // return <h1 {...restProps}> {children}</h1>;
  return (
    <section class="hero is-link">
      <div class="hero-body">
        <nav class="level">
            <div class="level-item has-text-centered">
                <div>
                    <p class="heading">
                    Frequently Asked Questions
                    </p>
                    <p class="title">
                    {children}
                    </p>
                </div>
            </div>
        </nav>
      </div>
  </section>
  );
};
Banner.Entity = function BannerEntity({ children, ...restProps }) {
  const [open, setOpen] = useState(false);
  return (
    <QuestionContext.Provider value={{ open, setOpen }}>
      <div {...restProps}> {children}</div>
    </QuestionContext.Provider>
  );
};
Banner.Question = function BannerHeader({ children, ...restProps }) {
  const { open, setOpen } = React.useContext(QuestionContext);

  return (
    <div class="columns" onClick={() => setOpen((open) => !open)} {...restProps}>
        <div class="column"></div>
        <div class="column"></div>
        <div class="content column is-two-thirds"><h2>{children}</h2></div>
        <div class="column">{open ? <h3><FontAwesomeIcon icon={faMinus} size="2x"/></h3> : <h3><FontAwesomeIcon icon={faPlus} size="2x"/></h3>}</div>
        <div class="column"></div>
      
      {/* {open ? <h3>^</h3> : <h3>+</h3>} */}
      {/* {open ? <h3><FontAwesomeIcon icon={faMinus} size="2x"/></h3> : <h3><FontAwesomeIcon icon={faPlus} size="2x"/></h3>} */}
    </div>
  );
};
Banner.Text = function BannerText({ children, ...restProps }) {
  const { open } = React.useContext(QuestionContext);
  return open ? 
    <div class="columns">
        <div class="column"></div>
        {/* <div class="column"></div> */}
        <div class="content column is-two-thirds"><blockquote {...restProps}>{children}</blockquote></div>
        <div class="column"></div>
    </div>
    : null;
};