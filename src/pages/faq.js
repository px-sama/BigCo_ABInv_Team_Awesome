import questions from '@site/components/faq/faq.json';
import Banner from '@site/components/faq/Banner';
import React from "react";
import 'bulma/css/bulma.min.css';
import Layout from '@theme/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

// const QuestionContext = React.createContext();
// function Banner({ children, ...restProps }) {
//   return (
//     <div {...restProps}>
//       <div>{children}</div>
//     </div>
//   );
// }
// Banner.Header = function BannerHeader({ children, ...restProps }) {
//   // return <h1 {...restProps}> {children}</h1>;
//   return (
//     <section class="hero is-link">
//       <div class="hero-body">
//         <p class="title">
//           {children}
//         </p>
//         <p class="subtitle">
//           Link subtitle
//         </p>
//       </div>
//   </section>
//   );
// };
// Banner.Entity = function BannerEntity({ children, ...restProps }) {
//   const [open, setOpen] = useState(false);
//   return (
//     <QuestionContext.Provider value={{ open, setOpen }}>
//       <div {...restProps}> {children}</div>
//     </QuestionContext.Provider>
//   );
// };
// Banner.Question = function BannerHeader({ children, ...restProps }) {
//   const { open, setOpen } = React.useContext(QuestionContext);

//   return (
//     <div onClick={() => setOpen((open) => !open)} {...restProps}>
//       {children}
//       {/* {open ? <h3>^</h3> : <h3>+</h3>} */}
//       {open ? <h3><FontAwesomeIcon icon={faMinus} size="2x"/></h3> : <h3><FontAwesomeIcon icon={faPlus} size="2x"/></h3>}
//     </div>
//   );
// };
// Banner.Text = function BannerText({ children, ...restProps }) {
//   const { open } = React.useContext(QuestionContext);
//   return open ? <div class="content"><blockquote {...restProps}>{children}</blockquote></div> : null;
// };

export default function faq() {
  return (
    <Layout>
      <Banner>
        <Banner.Header>Any questions?<br></br>We got you.</Banner.Header>
        <section class="section"></section>
        {questions.map((question) => (
          <Banner.Entity key={question.id}>
            <Banner.Question>{question.question}</Banner.Question>
            <Banner.Text>{question.answer}</Banner.Text>
          </Banner.Entity>
        ))}
        <h4>
          Question not on the list? Contact out help desk for further enquiries
        </h4>
      </Banner>
    </Layout>
  );
}