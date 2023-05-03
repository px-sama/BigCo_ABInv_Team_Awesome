import questions from '@site/src/components/Faq/faq.json';
import Banner from '@site/src/components/Faq/Banner';
import React from "react";

export default function Faq() {
  return (
    <Banner>
    <Banner.Header>Any questions?<br></br>We got you.</Banner.Header>
    <section className="my-2"></section>
    {questions.map((question) => (
        <Banner.Entity key={question.id}>
        <Banner.Question>{question.question}</Banner.Question>
        <Banner.Text>{question.answer}</Banner.Text>
        </Banner.Entity>
    ))}
    </Banner>
  );
}