import React, { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/TheFooter";
import "./pages.css";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="page">
        <div className="pagesImages">
          <h3 className="pagesImagesTag">Terms of Use</h3>{" "}
        </div>
      </div>
      <div className="thePageTexts">
        <div className="thePagTexts">
          <h4>Terms of Use</h4>
          <p>
            By accessing or using the Nubis Logistics/Delivery App, you agree to
            comply with and be bound by these Terms and Conditions.
          </p>
        </div>
        <div className="thePagTexts">
          <h4>User Accounts and Registration</h4>
          <ul>
            <li>
              a. To use certain features of the App, you may be required to
              create a user account. You agree to provide accurate, current, and
              complete information during the registration process.
            </li>
            <li>
              b. You are responsible for maintaining the confidentiality of your
              account information and for all activities that occur under your
              account.
            </li>
          </ul>
        </div>
        <div className="thePagTexts">
          <h4>Service Description</h4>
          <ul>
            <li>
              a. The App provides logistics and delivery services connecting
              users to delivery providers.
            </li>
            <li>
              b. Nubis Inc. reserves the right to modify, suspend, or
              discontinue the App's services at any time without notice.
            </li>
          </ul>
        </div>
        <div className="thePagTexts">
          <h4>User Conduct</h4>
          <ul>
            <li>
              a. Users must not use the App for any unlawful or prohibited
              purpose.
            </li>
            <li>
              b. Users are prohibited from interfering with the App's
              functionality, security, or integrity.
            </li>
          </ul>
        </div>
        <div className="thePagTexts">
          <h4>Payments and Fees</h4>
          <ul>
            <li>
              a. Users agree to pay all fees associated with the use of delivery
              services as outlined in the App.
            </li>
            <li>
              b. Nubis Inc. reserves the right to modify fees or introduce new
              charges upon notice to users.
            </li>
          </ul>
        </div>
        <div className="thePagTexts">
          <h4> User Content </h4>
          <ul>
            <li>
              a. Users retain ownership of content submitted through the App.
            </li>
            <li>
              b. By submitting content, users grant Nubis Inc. a worldwide,
              royalty-free, non-exclusive license to use, reproduce, modify,
              publish, distribute, and display the content.
            </li>
          </ul>
        </div>
        <div className="thePagTexts">
          <h4> Privacy Policy </h4>
          <ul>
            <li>
              a. Nubis Inc. 's Privacy Policy, available on the App, explains
              how user data is collected, used, and protected. By using the App,
              you agree to the terms outlined in the Privacy Policy.
            </li>
          </ul>
        </div>
        <div className="thePagTexts">
          <h4>Limitation of Liability </h4>
          <ul>
            <li>
              a. Nubis Inc. is not liable for any indirect, incidental, special,
              consequential, or punitive damages arising from the use of the
              App.
            </li>
          </ul>
        </div>
        <div className="thePagTexts">
          <h4>Termination </h4>
          <ul>
            <li>
              a. Nubis Inc. reserves the right to terminate or suspend access to
              the App for any reason without prior notice.
            </li>
          </ul>
        </div>
        <div className="thePagTexts">
          <h4> Governing Law</h4>
          <ul>
            <li>
              a. These Terms and Conditions are governed by and construed in
              accordance with the laws of Nigeria.
            </li>
          </ul>
        </div>
        <div className="thePagTexts">
          <h4>Changes to Terms and Conditions</h4>
          <ul>
            <li>
              a. Nubis Inc. reserves the right to modify or update these Terms
              and Conditions at any time without prior notice. Users are
              responsible for regularly reviewing the terms.
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Terms;
