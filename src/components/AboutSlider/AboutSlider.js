import React, { Component } from 'react';
import { css } from '@emotion/react';

import LogoGridSlider from '../LogoGrid/LogoGridSlider';

class AboutSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      coreValuesSliderSettings: {},
    };
  }

  componentDidMount() {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      coreValuesSliderSettings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    });
  }

  onClickChangeSlide(e, index) {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      coreValuesSliderSettings: {
        // eslint-disable-next-line react/destructuring-assignment,react/no-access-state-in-setstate
        ...this.state.coreValuesSliderSettings,
        initialSlide: index,
      },
    });
    // Put class active on the clicked element
    const parent = e.target.parentNode;
    const { children } = parent;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove('active');
    }
    e.target.classList.add('active');
  }

  render() {
    const sectionMain = css`
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: center;
      align-items: center;
      height: 800px;
    `;

    const sectionRight = css`
      width: 700px;
      height: 500px;
    `;

    const sectionRightLogos = css`
      position: absolute;
      width: 70%;
      top: 100px;
      right: 10px;
      > div {
        flex-wrap: nowrap;
      }

      .slick-list {
        max-width: 500px !important;
      }
      .corevalue-body {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: center;
        align-items: flex-end;

        p {
          text-align: left;
          /* Body */
          width: 100%;
          font-style: normal;
          font-weight: 300;
          font-size: 22px;
          //line-height: 1.5;
          /* or 38px */
          /* or 38px */
          letter-spacing: 0.025em;
          color: #282829;
          /* Inside auto layout */
          flex: none;
          order: 1;
          flex-grow: 0;
        }
      }
    `;

    const sectionLeft = css`
      position: relative;
      bottom: 70px;

      p {
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 76px;
        /* identical to box height, or 317% */
        display: flex;
        align-items: center;
        letter-spacing: 0.4px;
        text-transform: uppercase;
        color: #7e7e7f;
        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 0;
        padding: 0;
      }

      strong {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 76px;
        /* identical to box height, or 317% */
        display: flex;
        align-items: center;
        letter-spacing: 0.4px;
        text-decoration-line: underline;
        text-transform: uppercase;
        color: #282829;
        /* Inside auto layout */
        flex: none;
        order: 1;
        flex-grow: 0;
      }

      .active {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 76px;
        /* identical to box height, or 317% */
        display: flex;
        align-items: center;
        letter-spacing: 0.4px;
        text-decoration-line: underline;
        text-transform: uppercase;
        color: #282829;
        /* Inside auto layout */
        flex: none;
        order: 1;
        flex-grow: 0;
      }
    `;

    // 0 Own it, 1 Stay Curious, 2 Defy mediocrity, 3 Do the right thing, 4 Start whit heart
    return (
      <div css={sectionMain}>
        <div css={sectionLeft}>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
          <p onClick={e => this.onClickChangeSlide(e, 4)}> Start with Heart </p>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
          <p className='active' onClick={e => this.onClickChangeSlide(e, 0)}>
            {' '}
            Own it{' '}
          </p>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
          <p onClick={e => this.onClickChangeSlide(e, 1)}> Stay Curious </p>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
          <p onClick={e => this.onClickChangeSlide(e, 3)}>Do the Right Thing</p>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
          <p onClick={e => this.onClickChangeSlide(e, 2)}> Defy Mediocrity </p>
        </div>
        <div css={sectionRight}>
          <LogoGridSlider
            minHeight='100'
            styles={sectionRightLogos}
            logoset='corevalues'
            backgroundColor='none'
            sliderSettings={
              /* eslint-disable-next-line react/destructuring-assignment */
              this.state.coreValuesSliderSettings
            }
          />
        </div>
      </div>
    );
  }
}

export default AboutSlider;
