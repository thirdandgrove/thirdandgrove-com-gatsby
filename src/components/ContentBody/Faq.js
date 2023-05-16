import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

import FullWidthSection from '../FullWidthSection';
import { colors } from '../../styles';
import { mediaQueriesMax } from '../../styles/css-utils';

const FAQ = ({ data }) => {
  const fieldFaqItem = data?.relationships?.field_faq_item;

  const faqItem = css`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    padding-bottom: 80px;
    width: 64%;
    ${mediaQueriesMax.phoneLarge} {
      flex-direction: row;
    }
    ${mediaQueriesMax.tablet} {
      padding-right: 125px;
      padding-left: 125px;
    }
    ${mediaQueriesMax.desktop} {
      padding-right: 240px;
      padding-left: 240px;
    }
    .szh-accordion__item-btn {
      background: none;
      border: 0;
      text-align: left;
    }
  `;
  const faqTitle = css`
    .szh-accordion__item-btn {
      cursor: pointer;
      font-size: 22px;
      color: ${colors.green};
    }
    ${mediaQueriesMax.tablet} {
      flex: 0.38;
    }
    margin-bottom: 40px;
    color: ${colors.green};
    ${mediaQueriesMax.tablet} {
      margin-bottom: 30px;
      padding-right: 65px;
    }
    ${mediaQueriesMax.desktop} {
      margin-bottom: 30px;
      padding-right: 30px;
    }
    padding-bottom: 20px;
    border-bottom: 1px solid ${colors.borderFaq};
  `;
  const faqBody = css`
    margin-top: 60px;
    ${mediaQueriesMax.phoneLarge} {
      flex: 0.62;
      margin-top: 0;
      padding-left: 40px;
    }
    & div:not(:first-child) {
      padding-top: 40px;

      ${mediaQueriesMax.tablet} {
        padding-top: 60px;
      }
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 30px;
    cursor: pointer;

    ${mediaQueriesMax.tablet} {
      padding-bottom: 40px;
    }
    border-bottom: 0;
    color: ${colors.darkForest};
    font-size: 18px;
  `;

  return (
    <FullWidthSection height='0' minHeight='0'>
      <>
        <Accordion css={faqItem}>
          {fieldFaqItem.map(stat => {
            return (
              <AccordionItem header={stat.field_faq_question} css={faqTitle}>
                <section
                  css={faqBody}
                  dangerouslySetInnerHTML={{
                    __html: stat.field_faq_answer.processed,
                  }}
                />
              </AccordionItem>
            );
          })}
        </Accordion>
      </>
    </FullWidthSection>
  );
};

FAQ.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FAQ;
