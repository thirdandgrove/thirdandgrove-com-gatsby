import React from 'react';

import coreValuesOne from '../../images/about/corevalues-1.png';
import coreValuesTwo from '../../images/about/corevalues-2.png';
import coreValuesThree from '../../images/about/corevalues-3.png';
import coreValuesFour from '../../images/about/corevalues-4.png';
import coreValuesFive from '../../images/about/corevalues-5.png';

import harvardLogo from './logos/harvard.svg';
import googleLogo from './logos/google.svg';
import foxLogo from './logos/fox.svg';
import geLogo from './logos/ge.svg';
import absolutLogo from './logos/absolut-logo.svg';
import ccLogo from './logos/californiaClosets.svg';
import quickenLogo from './logos/quicken.svg';
import uclaLogo from './logos/ucla.svg';
import wsiLogo from './logos/williamsSonoma.svg';
import dwellLogo from './logos/dwell.svg';
import benefitLogo from './logos/benefit.svg';
import sunpowerLogo from './logos/sunpower.svg';
import pernodLogo from './logos/pernodricard.svg';
import mintLogo from './logos/intuit-mint.svg';
import glanbia from './logos/glanbia.svg';
import wvi from './logos/world-vision.svg';
import kingArthur from './logos/KAB-logo-K.svg';
import cloudHealth from './logos/cloudhealth.svg';
import cooperVision from './logos/cooper-vision.svg';
import memebox from './logos/memebox-logo.svg';
import goldwin from './logos/goldwin-logo.svg';
import gaiam from './logos/gaiam-logo.svg';
import brainiac from './logos/brainiac-logo.svg';
import equator from './logos/equator-logo.svg';
import jameson from './logos/jameson-logo.svg';
import salesforce from './logos/salesforca-logo.svg';
import marketo from './logos/marketo-logo.svg';
import gaLogo from './logos/google-analytics-logo.svg';
import bigcommerce from './logos/bigcommerce-logo.svg';
import umg from './logos/umg-logo.svg';
import stubhub from './logos/stubhub-logo.svg';
import reebok from './logos/reebok-logo.svg';
import dassault from './logos/dassault-systems-logo.svg';
import vmware from './logos/vmware-logo.svg';
import akamai from './logos/akamai_logo.svg';
import draper from './logos/draper-logo.png';
import alvinAiley from './logos/alvinailey-logo.png';
import isgm from './logos/isgm_logo.svg';
import prudential from './logos/prudential_logo.svg';
import universal from './logos/universal_music_logo.png';
import carlyle from './logos/carlyle.png';
import boissance from './logos/boissance.svg';
import hawaiianHost from './logos/hawiian-host-logo-gray.svg';
import wcBradley from './logos/wc-bradley.svg';
import gLogo from './logos/g-logo.svg';
import rubios from './logos/rubios-logo.svg';
import farmacyLogo from './logos/farmacy-logo.svg';
import amorepacifioLogo from './logos/amorepacifio-logo.svg';
import laneige from './logos/laneige.svg';
import dansko from './logos/dansko.svg';
import boostLogo from './logos/boost.png';
import yotpoLogo from './logos/yotpo.png';
import klaviyoLogo from './logos/klaviyo.png';
import eaLogo from './logos/essential-accessibility.png';
import rechargeLogo from './logos/recharge.png';
import shopifyLogo from './logos/shopify-plus-logo.svg';
import addyAward from './logos/awards/addy-award.svg';
import museLogo from './logos/awards/muse-logo.png';
import awwwLogo from './logos/awards/awwwards-logo.png';
import w3Awards from './logos/awards/w3-awards.png';
import cssAwards from './logos/awards/css-awards.png';
import dadiAwards from './logos/awards/dadi-awards.png';
import daveyAwards from './logos/awards/davey-awards.png';
import c2aAwards from './logos/awards/C2A-awards.png';

export default (logoset, isSmScreen, images) => {
  let sets;
  if (images) {
    sets = images.map(image => (
      <img
        src={image.relationships.field_image.node.publicURL}
        alt=''
        width={isSmScreen ? '120' : '202'}
        height={isSmScreen ? '66' : '112'}
      />
    ));
    return sets;
  }
  sets = {
    acquiaEngage: [
      <img
        src={cloudHealth}
        alt='Cloud Health'
        width={isSmScreen ? '126' : '170'}
        height={isSmScreen ? '122' : '50'}
      />,
      <img
        src={isgm}
        alt='ISGM'
        width={isSmScreen ? '150' : '180'}
        height={isSmScreen ? '37' : '50'}
      />,
      <img
        src={carlyle}
        alt='Carlyle'
        width={isSmScreen ? '126' : '200'}
        height={isSmScreen ? '122' : '50'}
      />,
    ],
    shopify: [
      <img
        src={memebox}
        alt='memebox'
        width={isSmScreen ? '135' : '170'}
        height={isSmScreen ? '16' : '24'}
      />,
      <img
        src={ccLogo}
        alt='California Closets'
        width={isSmScreen ? '99' : '136'}
        height={isSmScreen ? '37' : '50'}
      />,
      <img
        src={goldwin}
        alt='goldwin'
        width={isSmScreen ? '125' : '180'}
        height={isSmScreen ? '36' : '52'}
      />,
      <img
        src={gaiam}
        alt='gaiam'
        width={isSmScreen ? '61' : '81'}
        height={isSmScreen ? '68' : '90'}
      />,
      <img
        src={brainiac}
        alt='brainiac'
        width={isSmScreen ? '93' : '150'}
        height={isSmScreen ? '31' : '51'}
      />,
      <img
        src={equator}
        alt='equator'
        width={isSmScreen ? '99' : '150'}
        height={isSmScreen ? '34' : '52'}
      />,
      <img
        src={absolutLogo}
        alt='Absolut Vodka'
        width={isSmScreen ? '94' : '150'}
        height={isSmScreen ? '20' : '32'}
      />,
      <img
        src={jameson}
        alt='jameson'
        width={isSmScreen ? '95' : '150'}
        height={isSmScreen ? '48' : '76'}
      />,
    ],
    shopifyApps: [
      <img
        src={shopifyLogo}
        alt='Yotpo'
        width={isSmScreen ? '120' : '202'}
        height={isSmScreen ? '66' : '112'}
      />,
      <img
        src={yotpoLogo}
        alt='Yotpo'
        width={isSmScreen ? '40' : '71'}
        height={isSmScreen ? '43' : '76'}
      />,
      <img
        src={klaviyoLogo}
        alt='Klaviyo'
        width={isSmScreen ? '120' : '202'}
        height={isSmScreen ? '66' : '112'}
      />,
      <img
        src={eaLogo}
        alt='Essential Accessibility'
        width={isSmScreen ? '140' : '238'}
        height={isSmScreen ? '31' : '54'}
      />,
      <img
        src={rechargeLogo}
        alt='Recharge'
        width={isSmScreen ? '100' : '176'}
        height={isSmScreen ? '26' : '46'}
      />,
    ],
    acquia: [
      <img
        src={mintLogo}
        alt='Mint'
        width={isSmScreen ? '100' : '156'}
        height={isSmScreen ? '32' : '50'}
      />,
      <img
        src={sunpowerLogo}
        alt='Sunpower'
        width={isSmScreen ? '134' : '183'}
        height={isSmScreen ? '32' : '44'}
      />,
      <img
        src={glanbia}
        alt='glanbia'
        width={isSmScreen ? '100' : '148'}
        height={isSmScreen ? '49' : '74'}
      />,
      <img
        src={wvi}
        alt='World Vision'
        width={isSmScreen ? '188' : '194'}
        height={isSmScreen ? '100' : '40'}
      />,
      <img
        src={kingArthur}
        alt='King Arthur'
        width={isSmScreen ? '62' : '94'}
        height={isSmScreen ? '62' : '94'}
      />,
      <img
        src={cooperVision}
        alt='Cooper Vision'
        width={isSmScreen ? '134' : '177'}
        height={isSmScreen ? '24' : '32'}
      />,
      <img
        src={cloudHealth}
        alt='Cloud Health'
        width={isSmScreen ? '126' : '170'}
        height={isSmScreen ? '122' : '50'}
      />,
      <img
        src={stubhub}
        alt='StubHub'
        width={isSmScreen ? '166' : '240'}
        height={isSmScreen ? '142' : '100'}
      />,
      <img
        src={geLogo}
        alt='General Electric'
        width={isSmScreen ? '53' : '72'}
        height={isSmScreen ? '53' : '72'}
      />,
      <img
        src={dassault}
        alt='Dassault Systemes'
        width={isSmScreen ? '166' : '240'}
        height={isSmScreen ? '142' : '80'}
      />,
    ],
    drupal: [
      <img
        src={mintLogo}
        alt='Mint'
        width={isSmScreen ? '100' : '156'}
        height={isSmScreen ? '32' : '50'}
      />,
      <img
        src={sunpowerLogo}
        alt='Sunpower'
        width={isSmScreen ? '134' : '183'}
        height={isSmScreen ? '32' : '44'}
      />,
      <img
        src={benefitLogo}
        alt='Benefit'
        width={isSmScreen ? '105' : '140'}
        height={isSmScreen ? '35' : '46'}
      />,
      <img
        src={wvi}
        alt='World Vision'
        width={isSmScreen ? '188' : '194'}
        height={isSmScreen ? '100' : '40'}
      />,
      <img
        src={kingArthur}
        alt='King Arthur'
        width={isSmScreen ? '62' : '94'}
        height={isSmScreen ? '62' : '94'}
      />,
      <img
        src={cooperVision}
        alt='Cooper Vision'
        width={isSmScreen ? '134' : '177'}
        height={isSmScreen ? '24' : '32'}
      />,
      <img
        src={cloudHealth}
        alt='Cloud Health'
        width={isSmScreen ? '126' : '170'}
        height={isSmScreen ? '122' : '50'}
      />,
      <img
        src={uclaLogo}
        alt='UCLA'
        width={isSmScreen ? '85' : '116'}
        height={isSmScreen ? '40' : '54'}
      />,
      <img
        src={umg}
        alt='Universal'
        width={isSmScreen ? '200' : '240'}
        height={isSmScreen ? '42' : '43'}
      />,
      <img
        src={wsiLogo}
        alt='Williams-Sonoma Inc.'
        width={isSmScreen ? '98' : '134'}
        height={isSmScreen ? '32' : '43'}
      />,
      <img
        src={reebok}
        alt='Reebok'
        width={isSmScreen ? '240' : '240'}
        height={isSmScreen ? '62' : '43'}
      />,
    ],
    default: [
      <img
        src={harvardLogo}
        alt='Harvard'
        width={isSmScreen ? '100' : '129'}
        height={isSmScreen ? '40' : '34'}
      />,
      <img
        src={googleLogo}
        alt='Google'
        width={isSmScreen ? '99' : '134'}
        height={isSmScreen ? '33' : '44'}
      />,
      <img
        src={benefitLogo}
        alt='Benefit'
        width={isSmScreen ? '105' : '140'}
        height={isSmScreen ? '35' : '46'}
      />,
      <img
        src={vmware}
        alt='VMWare'
        width={isSmScreen ? '99' : '136'}
        height={isSmScreen ? '37' : '50'}
      />,
      <img
        src={geLogo}
        alt='GE'
        width={isSmScreen ? '53' : '72'}
        height={isSmScreen ? '53' : '72'}
      />,
      <img
        src={wsiLogo}
        alt='Williams-Sonoma Inc.'
        width={isSmScreen ? '98' : '134'}
        height={isSmScreen ? '32' : '43'}
      />,
      <img
        src={draper}
        alt='Draper'
        width={isSmScreen ? '140' : '171'}
        height={isSmScreen ? '49' : '63'}
      />,
      <img
        src={kingArthur}
        alt='King Arthur'
        width={isSmScreen ? '62' : '94'}
        height={isSmScreen ? '62' : '94'}
      />,
      <img
        src={pernodLogo}
        alt='Pernod Ricard'
        width={isSmScreen ? '125' : '171'}
        height={isSmScreen ? '49' : '63'}
      />,
      <img
        src={alvinAiley}
        alt='King Arthur'
        width={isSmScreen ? '125' : '171'}
        height={isSmScreen ? '49' : '63'}
      />,
      <img
        src={ccLogo}
        alt='California Closets'
        width={isSmScreen ? '99' : '136'}
        height={isSmScreen ? '37' : '50'}
      />,
      <img
        src={stubhub}
        alt='StubHub'
        width={isSmScreen ? '166' : '240'}
        height={isSmScreen ? '142' : '100'}
      />,
    ],
    about: [
      <img
        src={googleLogo}
        alt='Google'
        width={isSmScreen ? '105' : '134'}
        height={isSmScreen ? '35' : '44'}
      />,
      <img
        src={foxLogo}
        alt='FOX'
        width={isSmScreen ? '68' : '84'}
        height={isSmScreen ? '30' : '36'}
      />,
      <img
        src={geLogo}
        alt='GE'
        width={isSmScreen ? '51' : '72'}
        height={isSmScreen ? '51' : '72'}
      />,
      <img
        src={absolutLogo}
        alt='Absolut Vodka'
        width={isSmScreen ? '87' : '116'}
        height={isSmScreen ? '40' : '54'}
      />,
      <img
        src={quickenLogo}
        alt='Quicken'
        width={isSmScreen ? '107' : '134'}
        height={isSmScreen ? '24' : '30'}
      />,
      <img
        src={uclaLogo}
        alt='UCLA'
        width={isSmScreen ? '87' : '116'}
        height={isSmScreen ? '40' : '54'}
      />,
      <img
        src={wsiLogo}
        alt='Williams-Sonoma Inc.'
        width={isSmScreen ? '96' : '116'}
        height={isSmScreen ? '31' : '38'}
      />,
      <img
        src={dwellLogo}
        alt='dwell'
        width={isSmScreen ? '78' : '94'}
        height={isSmScreen ? '30' : '36'}
      />,
      <img
        src={googleLogo}
        alt='Google'
        width={isSmScreen ? '105' : '134'}
        height={isSmScreen ? '35' : '44'}
      />,
      <img
        src={foxLogo}
        alt='FOX'
        width={isSmScreen ? '68' : '84'}
        height={isSmScreen ? '30' : '36'}
      />,
      <img
        src={geLogo}
        alt='GE'
        width={isSmScreen ? '51' : '72'}
        height={isSmScreen ? '51' : '72'}
      />,
      <img
        src={absolutLogo}
        alt='Absolut Vodka'
        width={isSmScreen ? '87' : '116'}
        height={isSmScreen ? '40' : '54'}
      />,
      <img
        src={quickenLogo}
        alt='Quicken'
        width={isSmScreen ? '107' : '134'}
        height={isSmScreen ? '24' : '30'}
      />,
      <img
        src={uclaLogo}
        alt='UCLA'
        width={isSmScreen ? '87' : '116'}
        height={isSmScreen ? '40' : '54'}
      />,
      <img
        src={wsiLogo}
        alt='Williams-Sonoma Inc.'
        width={isSmScreen ? '96' : '116'}
        height={isSmScreen ? '31' : '38'}
      />,
      <img
        src={dwellLogo}
        alt='dwell'
        width={isSmScreen ? '78' : '94'}
        height={isSmScreen ? '30' : '36'}
      />,
    ],
    acquiaDXP: [
      <img
        src={salesforce}
        alt='Salesforce'
        width={isSmScreen ? '91' : '120'}
        height={isSmScreen ? '64' : '84'}
      />,
      <img
        src={bigcommerce}
        alt='Big Commerce'
        width={isSmScreen ? '131' : '219'}
        height={isSmScreen ? '30' : '50'}
      />,
      <img
        src={marketo}
        alt='Marketo'
        width={isSmScreen ? '93' : '148'}
        height={isSmScreen ? '40' : '64'}
      />,
      <img
        src={gaLogo}
        alt='Google Analytics'
        width={isSmScreen ? '109' : '161'}
        height={isSmScreen ? '42' : '62'}
      />,
    ],
    awards: [
      <img
        src={addyAward}
        alt='Addy Awards'
        width={isSmScreen ? '140' : '175'}
        height={isSmScreen ? '100' : '125'}
      />,
      <img
        src={museLogo}
        alt='Muse Awards'
        width={isSmScreen ? '140' : '175'}
        height={isSmScreen ? '100' : '125'}
      />,
      <img
        src={awwwLogo}
        alt='Awww Awards'
        width={isSmScreen ? '140' : '175'}
        height={isSmScreen ? '100' : '125'}
      />,
      <img
        src={w3Awards}
        alt='W3 Awards'
        width={isSmScreen ? '140' : '175'}
        height={isSmScreen ? '100' : '125'}
      />,
      <img
        src={cssAwards}
        alt='CSS awards'
        width={isSmScreen ? '140' : '175'}
        height={isSmScreen ? '100' : '125'}
      />,
      <img
        src={dadiAwards}
        alt='Dadi awards'
        width={isSmScreen ? '140' : '175'}
        height={isSmScreen ? '100' : '125'}
      />,
      <img
        src={daveyAwards}
        alt='Davey awards'
        width={isSmScreen ? '140' : '175'}
        height={isSmScreen ? '100' : '125'}
      />,
      <img
        src={c2aAwards}
        alt='c2a awards'
        width={isSmScreen ? '140' : '175'}
        height={isSmScreen ? '100' : '125'}
      />,
    ],
    corevalues: [
      <div className='corevalue-body'>
        <img
          src={coreValuesOne}
          alt='Own it'
          width={isSmScreen ? '500' : '650'}
          height={isSmScreen ? '300' : '450'}
        />
        <p>
          We take pride in what we put forth and hold ourselves accountable for
          outcomes both good and bad. We are each responsible for our words,
          actions, and results.
        </p>
      </div>,
      <div className='corevalue-body'>
        <img
          src={coreValuesTwo}
          alt='Stay Curious'
          width={isSmScreen ? '500' : '650'}
          height={isSmScreen ? '300' : '450'}
        />
        <p>
          Our team knows we don’t know everything. We let our egos take a
          backseat to our desire for learning and advancing each day.
        </p>
      </div>,
      <div className='corevalue-body'>
        <img
          src={coreValuesThree}
          alt='Defy mediocrity'
          width={isSmScreen ? '500' : '650'}
          height={isSmScreen ? '300' : '450'}
        />
        <p>
          Complacency kills. We aim for excellence and build upon each challenge
          with increased dedication to improving our craft.
        </p>
      </div>,
      <div className='corevalue-body'>
        <img
          src={coreValuesFour}
          alt='Do the right thing'
          width={isSmScreen ? '500' : '650'}
          height={isSmScreen ? '300' : '450'}
        />
        <p>
          What we do when nobody is watching matters. While the right path may
          not be the easiest, we must act with integrity in all situations.
        </p>
      </div>,
      <div className='corevalue-body'>
        <img
          src={coreValuesFive}
          alt='Start whit heart'
          width={isSmScreen ? '500' : '650'}
          height={isSmScreen ? '300' : '450'}
        />
        <p>
          Our people are at the center of everything we do. Give the support,
          empathy, and energy to your teammates and clients that you expect in
          return.
        </p>
      </div>,
    ],
    drupalSupport: [
      <img
        src={stubhub}
        alt='StubHub'
        width={isSmScreen ? '166' : '240'}
        height={isSmScreen ? '142' : '100'}
      />,
      <img
        src={vmware}
        alt='VMWare'
        width={isSmScreen ? '99' : '136'}
        height={isSmScreen ? '37' : '50'}
      />,
      <img
        src={akamai}
        alt='Akamai'
        width={isSmScreen ? '99' : '136'}
        height={isSmScreen ? '37' : '50'}
      />,
      <img
        src={harvardLogo}
        alt='Harvard'
        width={isSmScreen ? '100' : '129'}
        height={isSmScreen ? '40' : '34'}
      />,
      <img
        src={kingArthur}
        alt='King Arthur'
        width={isSmScreen ? '62' : '94'}
        height={isSmScreen ? '62' : '94'}
      />,
      <img
        src={isgm}
        alt='ISGM'
        width={isSmScreen ? '99' : '136'}
        height={isSmScreen ? '37' : '50'}
      />,
      <img
        src={prudential}
        alt='Prudential Insurance'
        width={isSmScreen ? '99' : '136'}
        height={isSmScreen ? '37' : '50'}
      />,
      <img
        src={universal}
        alt='Universal Music'
        width={isSmScreen ? '98' : '134'}
        height={isSmScreen ? '32' : '43'}
      />,
    ],
    shopifyPlus: [
      <img
        src={amorepacifioLogo}
        alt='AMOREPACIFIO'
        width={isSmScreen ? '120' : '173'}
        height={isSmScreen ? '16' : '32'}
      />,
      <img
        src={laneige}
        alt='Laneige'
        width={isSmScreen ? '120' : '173'}
        height={isSmScreen ? '16' : '32'}
      />,
      <img
        src={hawaiianHost}
        alt='Hawaiian Host'
        width={isSmScreen ? '120' : '121'}
        height={isSmScreen ? '62' : '93'}
      />,
      <img
        src={farmacyLogo}
        alt='Farmacy'
        width={isSmScreen ? '120' : '193'}
        height={isSmScreen ? '39' : '64'}
      />,
      <img
        src={dansko}
        alt='Dansko'
        width={isSmScreen ? '120' : '173'}
        height={isSmScreen ? '16' : '32'}
      />,
      <img
        src={goldwin}
        alt='Goldwin'
        width={isSmScreen ? '120' : '180'}
        height={isSmScreen ? '36' : '52'}
      />,
      <img
        src={pernodLogo}
        alt='Pernod Ricard'
        width={isSmScreen ? '140' : '171'}
        height={isSmScreen ? '49' : '63'}
      />,
    ],
    shopifyPlusFoodAndBeverage: [
      <img
        src={brainiac}
        alt='brainiac'
        width={isSmScreen ? '93' : '150'}
        height={isSmScreen ? '31' : '51'}
      />,
      <img
        src={equator}
        alt='equator'
        width={isSmScreen ? '99' : '150'}
        height={isSmScreen ? '34' : '52'}
      />,
      <img
        src={pernodLogo}
        alt='Pernod Ricard'
        width={isSmScreen ? '125' : '171'}
        height={isSmScreen ? '49' : '63'}
      />,
      <img
        src={gLogo}
        alt='G'
        width={isSmScreen ? '55' : '66'}
        height={isSmScreen ? '55' : '66'}
      />,
      <img
        src={wcBradley}
        alt='WC | BRADLEY'
        width={isSmScreen ? '150' : '180'}
        height={isSmScreen ? '37' : '50'}
      />,
      <img
        src={kingArthur}
        alt='King Arthur'
        width={isSmScreen ? '62' : '94'}
        height={isSmScreen ? '62' : '94'}
      />,
      <img
        src={hawaiianHost}
        alt='Hawaiian Host'
        width={isSmScreen ? '126' : '121'}
        height={isSmScreen ? '62' : '93'}
      />,
      <img
        src={rubios}
        alt="Rubio's"
        width={isSmScreen ? '126' : '182'}
        height={isSmScreen ? '62' : '93'}
      />,
      <img
        src={wsiLogo}
        alt='Williams-Sonoma Inc.'
        width={isSmScreen ? '98' : '134'}
        height={isSmScreen ? '32' : '43'}
      />,
    ],
  };
  return sets[logoset];
};
