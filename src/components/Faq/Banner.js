import React, { useState } from "react";
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
    <header className="bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="container mx-auto text-center py-10">
            <div className="py-10">
                <p class="mb-5 text-base font-bold">Frequently Asked Questions</p>
                <p class="text-5xl font-bold">{children}</p>
            </div>
        </div>
    </header>
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
    <div onClick={() => setOpen((open) => !open)} {...restProps}>
        {/* <div class="columns-6"><h2>{children}</h2></div> */}
        {/* <div class={open? "mt-10 grid grid-cols-5" : "mt-10 mb-10 grid grid-cols-5"}> */}
        <div class="mt-10 mb-10 grid grid-cols-5">
            <div></div>
            {/* <div class={open? "text-xl font-bold col-span-2 bg-slate-300 rounded" : "text-xl font-bold col-span-2"}>{children}</div> */}
            <div class="text-xl font-bold col-span-2">{children}</div>
            <div></div>
            <div>{open ? <h3><FontAwesomeIcon icon={faMinus} size="2x"/></h3> : <h3><FontAwesomeIcon icon={faPlus} size="2x"/></h3>}</div>
            <div></div>
        </div>
        {/* <div class="grid place-items-center"><h2>{children}</h2>{open ? <h3><FontAwesomeIcon icon={faMinus} size="2x"/></h3> : <h3><FontAwesomeIcon icon={faPlus} size="2x"/></h3>}</div> */}
      
      {/* {open ? <h3>^</h3> : <h3>+</h3>} */}
      {/* {open ? <h3><FontAwesomeIcon icon={faMinus} size="2x"/></h3> : <h3><FontAwesomeIcon icon={faPlus} size="2x"/></h3>} */}
    </div>
  );
};
Banner.Text = function BannerText({ children, ...restProps }) {
  const { open } = React.useContext(QuestionContext);
  return open ? 
    <div {...restProps} class="grid grid-cols-5">
        <div></div>
        <div class="col-span-3 bg-slate-200 rounded">{children}</div>
        <div></div>
    </div>
    // <div {...restProps} class="grid place-items-center bg-slate-300">{children}</div>
    : null;
};