import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/TheFooter";
import "./pages.css";

const Privacy = () => {
  return (
    <>
      <Header />
      <div className="page">
        <div className="pagesImages">
          <h3 className="pagesImagesTag">Privacy Policy</h3>{" "}
        </div>
      </div>
      <div className="thePageTexts">
        <div className="thePagTexts">
          <h4> Information We Collect </h4>
          <p> a. Personal Information: </p>
          <ul>
            <li>Names Contact information (email, phone number)</li>
            <li>Delivery addresses</li>
            <li>Payment information</li>
          </ul>
          <p>b. Device Information:</p>
          <ul>
            <li> Device type</li>
            <li>Operating system</li>
            <li>Unique device identifiers</li>
          </ul>
        </div>
        <div className="thePagTexts">
          <h4> How We Use Your Information </h4>
          <p> a. Delivery Services:</p>
          <ul>
            <li>Facilitate logistics and delivery services</li>
            <li>Communicate order status and updates</li>
          </ul>
          <p>b. User Account Management:</p>
          <ul>
            <li> Create and manage user accounts</li>
            <li> Process payments</li>
          </ul>
          <p>c. Customer Support:</p>
          <ul>
            <li>Respond to user inquiries</li>
            <li>Respond to user inquiries</li>
          </ul>
        </div>
        <div className="thePagTexts">
          <h4> Data Sharing</h4>
          <p> a. Third-Party Service Providers:</p>
          <ul>
            <li>
              Share necessary information with third-party delivery providers
              and payment processors.
            </li>
          </ul>
          <p>b. Legal Compliance:</p>
          <ul>
            <li>
              Disclose information as required by law or in response to legal
              requests.
            </li>
          </ul>
        </div>
        <div className="thePagTexts">
          <h4> Cookies and Tracking</h4>
          <p>a. Cookies:</p>
          <ul>
            <li>
              Use cookies to enhance user experience and track usage patterns.
            </li>
          </ul>
          <p>b. Analytics:</p>
          <ul>
            <li>
              Utilize analytics tools to gather information about app usage.
            </li>
          </ul>
        </div>
        <div className="thePagTexts">
          <h4> Security</h4>
          <p>a. Data Security:</p>
          <ul>
            <li>
              Implement measures to protect user data from unauthorized access.
            </li>
          </ul>
          <p>b. Payment Information:</p>
          <ul>
            <li>Securely process payments through trusted payment gateways.</li>
          </ul>
        </div>
        <div className="thePagTexts">
          <h4>User Choices and Controls </h4>
          <p>a. Account Settings:</p>
          <ul>
            <li>Users can review and update their account information.</li>
          </ul>
          <p>b. Marketing Communications:</p>
          <ul>
            <li>Allow users to opt-out of marketing communications.</li>
          </ul>
        </div>
        <div className="thePagTexts">
          <h4> Children's Privacy </h4>
          <p>a. Account Settings:</p>
          <ul>
            <li>
              The app is not intended for users under the age of 18. We do not
              knowingly collect information from children.
            </li>
          </ul>
        </div>
        <div className="thePagTexts">
          <h4> Changes to Privacy Policy</h4>
          <p>a. Updates:</p>
          <ul>
            <li>
              We reserve the right to update this Privacy Policy. Users will be
              notified of changes.
            </li>
          </ul>
        </div>
        <div className="thePagTexts">
          <h4> Contact Information</h4>
          <p>Nubis Inc.</p>
          <ul>
            <li>4 Edidi Lane, Idumota, Lagos.</li>
            <li> info@nubis.com </li>
            <li> +2348 0752 58288</li>
          </ul>
        </div>
        <div className="thePagTexts">
          <h4>Governing Law</h4>
          <p>a. Jurisdiction:</p>
          <ul>
            <li>This Privacy Policy is governed by the laws of Nigeria</li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Privacy;
