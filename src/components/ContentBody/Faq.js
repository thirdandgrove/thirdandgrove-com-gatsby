import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';

import FullWidthSection from '../FullWidthSection';
import { colors } from '../../styles';
import { mediaQueriesMax } from '../../styles/css-utils';

const FAQ = ({ data }) => {
  const header = data?.field_heading;

  const fieldFaqItem = data?.relationships?.field_faq_item;

  const faqItem = css`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    padding-bottom: 80px;
    width: 64%;
    ${mediaQueriesMax.phoneLarge} {
      width: 89%;
    }
    flex-wrap: wrap;
    ${mediaQueriesMax.phoneLarge} {
      flex-direction: row;
    }
    h2 {
      text-align: center;
      padding-bottom: 2rem;
    }
    .szh-accordion__item-btn {
      display: flex;
      width: 100%;
      background: none;
      border: 0;
      text-align: left;
    }
    .szh-accordion__item-content {
      display: block !important;
    }
    .szh-accordion__item-panel {
      font-size: 1.125rem;
      line-height: 1.77;
      overflow: hidden;
      transition: max-height 0.35s cubic-bezier(0.25, 1, 0.3, 1);
      visibility: visible;
      will-change: max-height;
      max-height: 0;
      opacity: 0;
    }
    .szh-accordion__item--expanded {
      .szh-accordion__item-panel {
        opacity: 1;
        max-height: 2900px;
      }
      .szh-accordion__item-btn {
        div {
          &::before {
            content: '';
            display: none;
          }
        }
      }
    }
  `;
  const faqTitle = css`
    .szh-accordion__item-btn {
      cursor: pointer;
      font-size: 26px;
      color: ${colors.black};
    }
    margin-bottom: 40px;
    color: ${colors.black};
    ${mediaQueriesMax.tablet} {
      margin-bottom: 30px;
      padding-right: 65px;
    }
    ${mediaQueriesMax.desktop} {
      margin-bottom: 30px;
      padding-right: 30px;
      width: 100%;
    }
    padding-bottom: 20px;
    border-bottom: 1px solid ${colors.borderFaq};
  `;
  const faqBody = css`
    margin-top: 60px;
    & div:not(:first-child) {
      padding-top: 40px;

      ${mediaQueriesMax.tablet} {
        padding-top: 60px;
      }
    }
    padding-bottom: 30px;
    cursor: pointer;

    ${mediaQueriesMax.tablet} {
      padding-bottom: 40px;
    }
    border-bottom: 0;
    color: ${colors.darkForest};
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
      background: ${colors.yellow};
      content: '';
      display: block;
      height: 100%;
      left: 10px;
      position: absolute;
      transition: background 0.3s,
      transition: transform 0.9s cubic-bezier(0.25, 1, 0.3, 1), background 0.3s,
        -webkit-transform 0.9s cubic-bezier(0.25, 1, 0.3, 1);
      width: 100%;
      width: 0.125rem;
      border-radius: 0.25rem;
      width: 0.1875rem;
    }
    &::after {
      transform: rotate(90deg);
      background: ${colors.yellow};
      content: '';
      display: block;
      height: 100%;
      left: 10px;
      position: absolute;
      transition: background 0.3s,
      transition: transform 0.9s cubic-bezier(0.25, 1, 0.3, 1), background 0.3s,
        -webkit-transform 0.9s cubic-bezier(0.25, 1, 0.3, 1);
      width: 100%;
      width: 0.125rem;
      border-radius: 0.25rem;
      width: 0.1875rem;
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
          <h2>{header}</h2>
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
