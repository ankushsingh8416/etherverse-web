import { useState } from 'react';
import '@components/FAQ/Faq.css';

function Faq() {
  const faqData1 = [
    {
      title: '1. What sets Ether Verse apart in the blockchain development space? ',
      content:
        'Ether Verse stands out due to our leadership by a senior blockchain developer with a decade of experience. We bring a unique blend of expertise, affordable rates, and a client-centric approach to the table. ',
      isOpen: false,
    },
    {
      title: '2. Can you explain the process for developing a custom NFT marketplace? ',
      content:
        'We follow a structured approach to design and develop NFT marketplaces. This process includes concept creation, smart contract development, UI/UX design, and integration with blockchain networks like Ethereum or any other blockchain network even non EVM. ',
      isOpen: false,
    },
    {
      title: '3. How does Ether Verse handle IT consulting to enhance our business operations? ',
      content:
        'Our IT consulting services involve in-depth analysis of your current tech infrastructure, followed by tailored recommendations and strategies to optimize your IT resources and achieve your business goals. ',
      isOpen: false,
    },
    {
      title: '4. What platforms do you specialize in for web and mobile app development?',
      content:
        'We are proficient in a wide range of platforms, including iOS, Android, and web development. Our team is experienced in creating cross-platform, native, and hybrid applications. ',
      isOpen: false,
    },
    {
      title: '5. Can you provide an overview of the process for developing custom software solutions? ',
      content:
        'Our custom software development process starts with a detailed requirements analysis, followed by design, development, rigorous testing, deployment, and ongoing support to ensure your software performance and reliability. ',
      isOpen: false,
    },
    {
      title: '6. What is your approach to e-commerce development, and which platforms do you work with?',
      content:
        'We adopt an agile approach to e-commerce development, customizing solutions for platforms such as Shopify, Magento, WooCommerce, and others. Our focus is on creating engaging, secure, and user-friendly online stores. ',
      isOpen: false,
    },
    {
      title: '7. How do you ensure quality in your game development services? ',
      content:
        'Quality assurance is at the heart of our game development process. We conduct rigorous testing, iterative feedback loops, and adhere to industry best practices to deliver engaging and bug-free games. ',
      isOpen: false,
    },
    {
      title: '8. Whats the typical timeline for project delivery, and how involved will we be during the process? ',
      content:
        'Project timelines vary based on the scope and complexity of the project. However, we typically aim to deliver the first prototype within 6-8 weeks. Throughout the process, your active involvement and feedback are highly encouraged to ensure the project aligns with your vision. ',
      isOpen: false,
    },
  ];

  const toggleAccordion = (index: number) => {
    setFaqData((prevState) =>
      prevState.map((faq, idx) =>
        idx === index ? { ...faq, isOpen: !faq.isOpen } : { ...faq, isOpen: false }
      )
    );
  };
  
  const [faqData, setFaqData] = useState(faqData1);

  return (
    <>
      <div id="faq_container">
      <div className="left-effects"></div>
        <div className="right-effects"></div>
        <div id="heading">
          <h1>FAQ</h1>
        </div>
       <div className="faq_question">
       {faqData.map((faq, index) => (
          <div className="faq_box" key={index}>
            <div
              className="faq-title"
              onClick={() => toggleAccordion(index)}
            >
              <h2>{faq.title}</h2>
              <i className="fa-solid fa-angle-down"></i>
            </div>
            {faq.isOpen && (
              <div className="faq-dec">
                <p>{faq.content}</p>
              </div>
            )}
          </div>
        ))}
       </div>
        
      </div>
    </>
  );
}

export default Faq;
