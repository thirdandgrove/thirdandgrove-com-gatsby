import React from 'react';

import addyAward from './logos/addy-award.svg';
import museLogo from './logos/muse-logo.png';
import acquiaEngageLogo from './logos/acquia-engage-logo.svg';
import awwwLogo from './logos/awwwards-logo.png';
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
import kingArthur from './logos/KAB-logo-K.png';
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
import draper from './logos/draper-logo.png';
import alvinAiley from './logos/alvinailey-logo.png';

export default (logoset, isSmScreen) => {
  const sets = {
    shopify: [
      <img
        src={memebox}
        alt='memebox'
        width={isSmScreen ? '116' : '166'}
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
        width={isSmScreen ? '80' : '90'}
        height={isSmScreen ? '42' : '62'}
      />,
      <img
        src={museLogo}
        alt='Muse Awards'
        width={isSmScreen ? '140' : '200'}
        height={isSmScreen ? '64' : '84'}
      />,
      <img
        src={awwwLogo}
        alt='Awww Awards'
        width={isSmScreen ? '109' : '135'}
        height={isSmScreen ? '42' : '62'}
      />,
      <img
        src={acquiaEngageLogo}
        alt='Acquia Engage'
        width={isSmScreen ? '131' : '170'}
        height={isSmScreen ? '30' : '50'}
      />,
    ],
  };
  return sets[logoset];
};
