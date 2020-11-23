/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { css } from '@emotion/core';

import Layout from '../components/layout';
import { container, mediaQueries, weights, contentHeadings } from '../styles';

export default () => {
  const date = 'Effective: Apr 1, 2019';
  const mailto = 'hello@thirdandgrove.com';

  return (
    <Layout
      headerData={{
        title: 'Privacy Statement',
        height: '400px',
        mobileMinHeight: '93vh',
        label: date,
        labelMobileOnly: true,
      }}
    >
      <div
        css={css`
          ${container.min}
          padding-top: 30px;
          margin-bottom: 60px;
          font-weight: ${weights.light};

          ${mediaQueries.phoneLarge} {
            padding-left: 0;
            padding-right: 0;
            padding-top: 80px;
            margin-bottom: 130px;
          }

          strong {
            ${contentHeadings};
            margin-bottom: 30px;
          }

          p > strong {
            margin-right: 4px;
          }
        `}
      >
        <h2
          css={css`
            display: none;

            ${mediaQueries.desktop} {
              display: block;
              ${contentHeadings};
            }
          `}
        >
          {date}
        </h2>
        <p>
          Third and Grove LLC. (“Third and Grove,” “we,” “us,” “our”) is
          committed to letting you know how we will collect and use your
          personally identifiable information. This Privacy Statement is
          applicable to your use of the Instrument’s websites (the “Website”).
          We have established this Privacy Statement to let you know the kinds
          of information we may gather when you use the Website, why we gather
          your information, what we use your information for, when we might
          disclose your information, and how you can manage your information.
        </p>
        <p>
          This Privacy Statement does not apply to information that users may
          submit to us offline, by email or other electronic file transmission
          not facilitated by our Website, or to third-party websites that may be
          linked to or from the Website. We are not responsible for the actions
          and privacy policies of third-party websites.
        </p>
        <p>
          By using the Website, you are accepting the practices described in
          this Privacy Statement. If you do not agree to the terms of this
          Privacy Statement, please do not use the Website. We reserve the right
          to modify the terms of this Privacy Statement from time to time. Your
          continued use of the Website following the posting of changes will
          mean you accept those changes.
        </p>
        <p>
          <strong>Information Collected</strong>
        </p>
        <p>
          We may collect three basic types of information about users of the
          Website.
        </p>
        <p>
          <strong>Information You Give Us:</strong>
          We receive and store information you enter on our Websites or give us
          in any other way, including your name, mailing address, phone number,
          email address, and job application.
        </p>
        <p>
          <strong>Information We Automatically Collect:</strong>
          We collect information about your use of our Website, such as the
          pages you view and other interactions you have. We receive and store
          certain types of information whenever you interact with our Websites.
          This information includes device and connection information such as
          statistics on your page views, traffic to and from our Website,
          referral URL, ad data, your IP address, and device identifiers.
        </p>
        <p>
          <strong>Information From Other Sources:</strong>
          We may supplement the personal information we collect with information
          from third parties or collected offline.
        </p>
        <p>
          <strong>Use of Your Information</strong>
        </p>
        <p>
          We use the information we learn about you to help us personalize and
          continually improve your experience using the Website. We may use your
          information to: (1) provide requested content; (2) personalize content
          on our Website; (3) send you communications about our services or
          special events; (4) communicate with you and respond to inquiries; (5)
          optimize or improve the Website and our operations; (6) detect,
          investigate, and prevent activities that may violate our policies or
          be illegal; and (7) perform statistical, demographic, and marketing
          analyses of users of the Website.
        </p>
        <p>
          We may also use or combine information that we collect through the
          Website with information that we collect about you offline to enhance,
          expand, and check the accuracy of our records.
        </p>
        <p>
          <strong>Sharing Your Information</strong>
        </p>
        <p>
          We may disclose your personal information collected via the Website to
          our agents, affiliates, partners, and other third parties, as
          described below. We may disclose information that does not
          specifically and personally identify you, such as aggregate
          information, device identifiers or other unique identifiers to third
          parties.
        </p>
        <p>
          <strong>Third-Party Agents and Service Providers:</strong>
          We have third-party agents, subsidiaries, affiliates and service
          providers that perform functions on our behalf, including, but not
          limited to, hosting, providing the platform used to deliver the
          Website, technical integration, hosting, and analytics. These entities
          may have access to personal information, if needed, to perform their
          functions.
        </p>
        <p>
          <strong>Assignment:</strong>
          We may change our ownership or corporate organization while providing
          the Website. We may also sell certain assets associated with the
          Website. In such event, we may transfer some or all of your
          information to an entity acquiring all or part of our assets or to
          another entity with which we have merged.
        </p>
        <p>
          <strong>
            Law Enforcement, Legal Process, and Emergency Situations:
          </strong>
          We may also use or disclose your personal information if required to
          do so by law or on the good-faith belief that such action is necessary
          to: (1) conform to applicable law or comply with legal process served
          on us or the Website; (2) protect and defend our rights or property,
          the Website or our users, or (3) act to protect the personal safety of
          us, users of the Website, or the public.
        </p>
        <p>
          <strong>Cookies & Tracking Technologies</strong>
        </p>
        <p>
          The Website uses “cookies” to collect information about your visit and
          to manage your preferences. A cookie is a small computer code added to
          a file on your computer as a record of its visit. It does not collect
          or provide your personal information. It can, however, be used to note
          information about your visit, such as your type of web browser,
          operating system and Internet Protocol (&quot;IP&quot;) address, to
          better tailor the Website for you. We may share information obtained
          from the varying kinds of cookies with third parties, including
          vendors, advertisers and others. You can control what cookies are
          accepted by your device through the settings on your browser or by
          deleting them. Doing so, however, may limit the personalization
          available to you.
        </p>
        <p>
          We use Google Analytics, a web analytics service provided by Google,
          Inc. on our Website. These analytics services uses cookies or other
          tracking technologies to help us analyze how users interact with and
          use the Website, compile reports on activity, and provide other
          analytical services and reports. The technologies used by these
          analytics services may collect information such as your IP address,
          time of visit, whether you are a return visitor, any referring
          website, and other information. Our Website does not use these
          analytics services to gather information that personally identifies
          you. The information generated by Google Analytics will be transmitted
          to and stored by Google and will be subject to Google’s privacy
          policies. To learn more about Google’s partner services and to learn
          how to opt out of tracking of analytics by Google click here.
        </p>
        <p>
          Please note that, although your device may include “Do Not Track”
          functionality, Instrument’s information collection and disclosure
          practices will continue to operate as described in this Privacy
          Policy, whether or not a Do Not Track signal is received.
        </p>
        <p>
          <strong>Opting-Out of E-Mail Marketing Communications</strong>
        </p>
        <p>
          You may always opt-out of receiving future e-mail marketing messages
          from Third and Grove. We provide you with the opportunity to opt-out
          of such communications from us by clicking the “unsubscribe” link at
          the bottom of each marketing e-mail. Please note that you may not
          opt-out of our service-related communications.
        </p>
        <p>
          <strong>Other Important Information</strong>
        </p>
        <p>
          <strong>Users Under Thirteen:</strong>
          Our Website is intended for users ages 13 and older only. Accordingly,
          we will not knowingly collect or use any personal information from
          children that we know to be under the age of 13. If we become aware of
          personal information in our database that was collected from a child
          under 13, we will delete such information.
        </p>
        <p>
          <strong>Users Outside of the United States:</strong>
          If you use our Website outside of the United States, you understand
          and consent to the transfer of your personal information to, and the
          collection, processing, and storage of your personal information in,
          the United States and elsewhere. The laws in the U.S. and these
          countries regarding personal information may be different than the
          laws of your state or country.
        </p>
        <p>
          <strong>Your California Privacy Rights:</strong>
          If you are a California resident, California law permits you to
          request certain information regarding the disclosure of your personal
          information by us and our related companies to third parties for the
          third parties&apos; direct marketing purposes. To make such a request,
          please send your request, using the contact information listed below.
        </p>
        <p>
          If you have any questions about this Privacy Statement, you should
          contact us by email at&nbsp;
          <a href={`mailto:${mailto}`}>{mailto}</a>.
        </p>
      </div>
    </Layout>
  );
};
