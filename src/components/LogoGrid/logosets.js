import React from 'react';
import loadable from '@loadable/component';

const addyAward = loadable(() => import('./logos/addy-award.svg'));
const museLogo = loadable(() => import('./logos/muse-logo.png'));
const acquiaEngageLogo = loadable(() =>
  import('./logos/acquia-engage-logo.svg')
);
const awwwLogo = loadable(() => import('./logos/awwwards-logo.png'));
const harvardLogo = loadable(() => import('./logos/harvard.svg'));
const googleLogo = loadable(() => import('./logos/google.svg'));
const foxLogo = loadable(() => import('./logos/fox.svg'));
const geLogo = loadable(() => import('./logos/ge.svg'));
const absolutLogo = loadable(() => import('./logos/absolut-logo.svg'));
const ccLogo = loadable(() => import('./logos/californiaClosets.svg'));
const quickenLogo = loadable(() => import('./logos/quicken.svg'));
const uclaLogo = loadable(() => import('./logos/ucla.svg'));
const wsiLogo = loadable(() => import('./logos/williamsSonoma.svg'));
const dwellLogo = loadable(() => import('./logos/dwell.svg'));
const benefitLogo = loadable(() => import('./logos/benefit.svg'));
const sunpowerLogo = loadable(() => import('./logos/sunpower.svg'));
const pernodLogo = loadable(() => import('./logos/pernodricard.svg'));
const mintLogo = loadable(() => import('./logos/intuit-mint.svg'));
const glanbia = loadable(() => import('./logos/glanbia.svg'));
const wvi = loadable(() => import('./logos/world-vision.svg'));
const kingArthur = loadable(() => import('./logos/KAB-logo-K.svg'));
const cloudHealth = loadable(() => import('./logos/cloudhealth.svg'));
const cooperVision = loadable(() => import('./logos/cooper-vision.svg'));
const memebox = loadable(() => import('./logos/memebox-logo.svg'));
const goldwin = loadable(() => import('./logos/goldwin-logo.svg'));
const gaiam = loadable(() => import('./logos/gaiam-logo.svg'));
const brainiac = loadable(() => import('./logos/brainiac-logo.svg'));
const equator = loadable(() => import('./logos/equator-logo.svg'));
const jameson = loadable(() => import('./logos/jameson-logo.svg'));
const salesforce = loadable(() => import('./logos/salesforca-logo.svg'));
const marketo = loadable(() => import('./logos/marketo-logo.svg'));
const gaLogo = loadable(() => import('./logos/google-analytics-logo.svg'));
const bigcommerce = loadable(() => import('./logos/bigcommerce-logo.svg'));
const umg = loadable(() => import('./logos/umg-logo.svg'));
const stubhub = loadable(() => import('./logos/stubhub-logo.svg'));
const reebok = loadable(() => import('./logos/reebok-logo.svg'));
const dassault = loadable(() => import('./logos/dassault-systems-logo.svg'));
const vmware = loadable(() => import('./logos/vmware-logo.svg'));
const akamai = loadable(() => import('./logos/akamai_logo.svg'));
const draper = loadable(() => import('./logos/draper-logo.png'));
const alvinAiley = loadable(() => import('./logos/alvinailey-logo.png'));
const isgm = loadable(() => import('./logos/isgm_logo.svg'));
const prudential = loadable(() => import('./logos/prudential_logo.svg'));
const universal = loadable(() => import('./logos/universal_music_logo.png'));
const carlyle = loadable(() => import('./logos/carlyle.png'));
const boissance = loadable(() => import('./logos/boissance.svg'));
const hawaiianHost = loadable(() =>
  import('./logos/hawiian-host-logo-gray.svg')
);
const wcBradley = loadable(() => import('./logos/wc-bradley.svg'));
const gLogo = loadable(() => import('./logos/g-logo.svg'));
const rubios = loadable(() => import('./logos/rubios-logo.svg'));
const w3Awards = loadable(() => import('./logos/w3-awards.png'));
const cssAwards = loadable(() => import('./logos/css-awards.png'));
const dadiAwards = loadable(() => import('./logos/dadi-awards.png'));
const farmacyLogo = loadable(() => import('./logos/farmacy-logo.svg'));
const amorepacifioLogo = loadable(() =>
  import('./logos/amorepacifio-logo.svg')
);

export default (logoset, isSmScreen) => {
  const sets = {
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
        src={w3Awards}
        alt='W3 Awards'
        width={isSmScreen ? '128' : '142'}
        height={isSmScreen ? '60' : '70'}
      />,
      <img
        src={cssAwards}
        alt='CSS awards'
        width={isSmScreen ? '168' : '210'}
        height={isSmScreen ? '40' : '60'}
      />,
      <img
        src={dadiAwards}
        alt='Dadi awards'
        width={isSmScreen ? '140' : '180'}
        height={isSmScreen ? '90' : '110'}
      />,
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
        src={hawaiianHost}
        alt='Hawaiian Host'
        width={isSmScreen ? '126' : '121'}
        height={isSmScreen ? '62' : '93'}
      />,
      <img
        src={benefitLogo}
        alt='benefit'
        width={isSmScreen ? '150' : '180'}
        height={isSmScreen ? '37' : '50'}
      />,
      <img
        src={boissance}
        alt='BOISSANCE'
        width={isSmScreen ? '126' : '150'}
        height={isSmScreen ? '61' : '80'}
      />,
      <img
        src={goldwin}
        alt='Goldwin'
        width={isSmScreen ? '125' : '180'}
        height={isSmScreen ? '36' : '52'}
      />,
      <img
        src={pernodLogo}
        alt='Pernod Ricard'
        width={isSmScreen ? '125' : '171'}
        height={isSmScreen ? '49' : '63'}
      />,
      <img
        src={farmacyLogo}
        alt='Farmacy'
        width={isSmScreen ? '146' : '193'}
        height={isSmScreen ? '39' : '64'}
      />,
      <img
        src={amorepacifioLogo}
        alt='AMOREPACIFIO'
        width={isSmScreen ? '159' : '173'}
        height={isSmScreen ? '16' : '32'}
      />,
      <img
        src={kingArthur}
        alt='King Arthur'
        width={isSmScreen ? '62' : '94'}
        height={isSmScreen ? '62' : '94'}
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
