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
    <div
      className="mb-2 rounded-lg border-gray-400 border-2 bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer"
      onClick={() => setOpen((open) => !open)}
      {...restProps}
    >
      <div className="py-4 px-4 flex items-center justify-between">
        <h3 className="text-lg font-medium">{children}</h3>
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300">
          <FontAwesomeIcon icon={open ? faMinus : faPlus} size="sm" />
        </div>
      </div>
    </div>
  );
};

Banner.Text = function BannerText({ children, ...restProps }) {
  const { open } = React.useContext(QuestionContext);
  return (
    <div
      className={`py-2 px-4 transition duration-300 ease-in-out ${
        open ? "block" : "hidden"
      }`}
      {...restProps}
    >
      <div className="bg-gray-200 rounded-lg p-4">{children}</div>
    </div>
  );
};
