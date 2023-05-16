import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

import FullWidthSection from '../FullWidthSection';
import { colors, fonts } from '../../styles';
import { mediaQueriesMax } from '../../styles/css-utils';
import { useHasBeenVisible } from '../../hooks/useVisibility';
import Counter from '../Counter';

const Faq = ({ data }) => {
  const fieldFaqItem = data?.relationships?.field_faq_item;
  const nodeRef = React.useRef();
  const isVisible = useHasBeenVisible(nodeRef);

  const faqItem = css`
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
    border-bottom: 1px solid ${colors.borderFaq};
    cursor: pointer;

    ${mediaQueriesMax.tablet} {
      padding-bottom: 40px;
    }
    border-bottom: 0;
    color: ${colors.darkForest};
  `;

  return (
    <FullWidthSection height='0' minHeight='0'>
      <>
        {/* {fieldFaqItem.map(stat => {
            return (
              <div css={faqItem}>
                <div css={faqTitle}>{stat.field_faq_question}</div>
                <div css={faqBody}>{stat.field_faq_answer}</div>
              </div>
            );
          })} */}
        <Accordion css={faqItem}>
          <AccordionItem header='What is Lorem Ipsum?' css={faqTitle}>
            <div css={faqBody}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </AccordionItem>

          <AccordionItem header='Where does it come from?' css={faqTitle}>
            <div css={faqBody}>
              Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
              erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae,
              accumsan auctor mi.
            </div>
          </AccordionItem>

          <AccordionItem header='Why do we use it?' css={faqTitle}>
            <div css={faqBody}>
              Suspendisse massa risus, pretium id interdum in, dictum sit amet
              ante. Fusce vulputate purus sed tempus feugiat.
            </div>
          </AccordionItem>
        </Accordion>
      </>
    </FullWidthSection>
  );
};

Faq.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Faq;
