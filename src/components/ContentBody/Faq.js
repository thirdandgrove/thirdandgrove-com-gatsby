import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';

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
      display: flex;
      width: 100%;
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
  const icon = css`
    margin-left: auto;
    transition: transform 0.25s cubic-bezier(0, 0, 0, 1);
    height: 1.75rem;
    width: 1.75rem;
    align-items: center;
    display: flex;
    flex-shrink: 0;
    height: 1.125rem;
    justify-content: center;
    position: relative;
    width: 1.125rem;
    &::before {
      background: #015b42;
      content: '';
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      transition: background 0.3s,
        -webkit-transform 0.9s cubic-bezier(0.25, 1, 0.3, 1);
      transition: transform 0.9s cubic-bezier(0.25, 1, 0.3, 1), background 0.3s;
      transition: transform 0.9s cubic-bezier(0.25, 1, 0.3, 1), background 0.3s,
        -webkit-transform 0.9s cubic-bezier(0.25, 1, 0.3, 1);
      width: 100%;
      width: 0.125rem;
      border-radius: 0.25rem;
      width: 0.1875rem;
    }
    &::after {
      transform: rotate(90deg);
      background: #015b42;
      content: '';
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      transition: background 0.3s,
        -webkit-transform 0.9s cubic-bezier(0.25, 1, 0.3, 1);
      transition: transform 0.9s cubic-bezier(0.25, 1, 0.3, 1), background 0.3s;
      transition: transform 0.9s cubic-bezier(0.25, 1, 0.3, 1), background 0.3s,
        -webkit-transform 0.9s cubic-bezier(0.25, 1, 0.3, 1);
      width: 100%;
      width: 0.125rem;
      border-radius: 0.25rem;
      width: 0.1875rem;
    }
    .szh-accordion__item--expanded {
      &::before {
        content: '';
      }
    }
  `;
  const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={
        <>
          {header}
          <div css={icon} />
        </>
      }
    />
  );
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
