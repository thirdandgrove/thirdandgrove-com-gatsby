import React from 'react';

import { ReactComponent as GoogleLogo } from './logos/google.svg';
import { ReactComponent as FoxLogo } from './logos/fox.svg';
import { ReactComponent as GELogo } from './logos/ge.svg';
import { ReactComponent as AbsolutLogo } from './logos/absolut.svg';
import { ReactComponent as CCLogo } from './logos/californiaClosets.svg';
import { ReactComponent as QuickenLogo } from './logos/quicken.svg';
import { ReactComponent as UCLALogo } from './logos/ucla.svg';
import { ReactComponent as WSILogo } from './logos/williamsSonoma.svg';
import { ReactComponent as DwellLogo } from './logos/dwell.svg';
import { ReactComponent as BenefitLogo } from './logos/benefit.svg';
import { ReactComponent as SunpowerLogo } from './logos/sunpower.svg';
import { ReactComponent as PernodLogo } from './logos/pernodricard.svg';
import { ReactComponent as MintLogo } from './logos/intuit-mint.svg';
import { ReactComponent as Glanbia } from './logos/glanbia.svg';
import { ReactComponent as Wvi } from './logos/world-vision.svg';
import { ReactComponent as KingArthur } from './logos/kaf.svg';
import { ReactComponent as CloudHealth } from './logos/cloudhealth.svg';
import { ReactComponent as CooperVision } from './logos/cooper-vision.svg';
import { ReactComponent as Memebox } from './logos/memebox-logo.svg';
import { ReactComponent as Goldwin } from './logos/goldwin-logo.svg';
import { ReactComponent as Gaiam } from './logos/gaiam-logo.svg';
import { ReactComponent as Brainiac } from './logos/brainiac-logo.svg';
import { ReactComponent as Equator } from './logos/equator-logo.svg';
import { ReactComponent as Jameson } from './logos/jameson-logo.svg';

export default (logoset, isSmScreen) => {
  const sets = {
    shopify: [
      <Memebox
        alt='Memebox'
        width={isSmScreen ? '116' : '166'}
        height={isSmScreen ? '16' : '24'}
      />,
      <CCLogo
        alt='California Closets'
        width={isSmScreen ? '99' : '136'}
        height={isSmScreen ? '37' : '50'}
      />,
      <Goldwin
        alt='Goldwin'
        width={isSmScreen ? '125' : '180'}
        height={isSmScreen ? '36' : '52'}
      />,
      <Gaiam
        alt='Gaiam'
        width={isSmScreen ? '61' : '81'}
        height={isSmScreen ? '68' : '90'}
      />,
      <Brainiac
        alt='Brainiac'
        width={isSmScreen ? '93' : '150'}
        height={isSmScreen ? '31' : '51'}
      />,
      <Equator
        alt='Equator'
        width={isSmScreen ? '99' : '150'}
        height={isSmScreen ? '34' : '52'}
      />,
      <AbsolutLogo
        alt='Absolut Vodka'
        width={isSmScreen ? '94' : '150'}
        height={isSmScreen ? '20' : '32'}
      />,
      <Jameson
        alt='Absolut Vodka'
        width={isSmScreen ? '95' : '150'}
        height={isSmScreen ? '48' : '76'}
      />,
    ],
    acquia: [
      <MintLogo
        alt='Mint'
        width={isSmScreen ? '100' : '156'}
        height={isSmScreen ? '32' : '50'}
      />,
      <SunpowerLogo
        alt='Sunpower'
        width={isSmScreen ? '134' : '183'}
        height={isSmScreen ? '32' : '44'}
      />,
      <Glanbia
        alt='Glanbia'
        width={isSmScreen ? '100' : '148'}
        height={isSmScreen ? '49' : '74'}
      />,
      <Wvi
        alt='World Vision'
        width={isSmScreen ? '188' : '194'}
        height={isSmScreen ? '100' : '40'}
      />,
      <KingArthur
        alt='King Arthur'
        width={isSmScreen ? '62' : '94'}
        height={isSmScreen ? '62' : '94'}
      />,
      <CooperVision
        alt='Cooper Vision'
        width={isSmScreen ? '134' : '177'}
        height={isSmScreen ? '24' : '32'}
      />,
      <CloudHealth
        alt='Cloud Health'
        width={isSmScreen ? '126' : '170'}
        height={isSmScreen ? '122' : '50'}
      />,
    ],
    drupal: [
      <MintLogo
        alt='Mint'
        width={isSmScreen ? '100' : '156'}
        height={isSmScreen ? '32' : '50'}
      />,
      <SunpowerLogo
        alt='Sunpower'
        width={isSmScreen ? '134' : '183'}
        height={isSmScreen ? '32' : '44'}
      />,
      <BenefitLogo
        alt='Benefit'
        width={isSmScreen ? '105' : '140'}
        height={isSmScreen ? '35' : '46'}
      />,
      <Wvi
        alt='World Vision'
        width={isSmScreen ? '188' : '194'}
        height={isSmScreen ? '100' : '40'}
      />,
      <KingArthur
        alt='King Arthur'
        width={isSmScreen ? '62' : '94'}
        height={isSmScreen ? '62' : '94'}
      />,
      <CooperVision
        alt='Cooper Vision'
        width={isSmScreen ? '134' : '177'}
        height={isSmScreen ? '24' : '32'}
      />,
      <CloudHealth
        alt='Cloud Health'
        width={isSmScreen ? '126' : '170'}
        height={isSmScreen ? '122' : '50'}
      />,
      <UCLALogo
        alt='UCLA'
        width={isSmScreen ? '85' : '116'}
        height={isSmScreen ? '40' : '54'}
      />,
    ],
    default: [
      <UCLALogo
        alt='UCLA'
        width={isSmScreen ? '85' : '116'}
        height={isSmScreen ? '40' : '54'}
      />,
      <GoogleLogo
        alt='Google'
        width={isSmScreen ? '99' : '134'}
        height={isSmScreen ? '33' : '44'}
      />,
      <BenefitLogo
        alt='Benefit'
        width={isSmScreen ? '105' : '140'}
        height={isSmScreen ? '35' : '46'}
      />,
      <CCLogo
        alt='California Closets'
        width={isSmScreen ? '99' : '136'}
        height={isSmScreen ? '37' : '50'}
      />,
      <GELogo
        alt='GE'
        width={isSmScreen ? '53' : '72'}
        height={isSmScreen ? '53' : '72'}
      />,
      <WSILogo
        alt='Williams-Sonoma Inc.'
        width={isSmScreen ? '98' : '134'}
        height={isSmScreen ? '32' : '43'}
      />,
      <SunpowerLogo
        alt='Sunpower'
        width={isSmScreen ? '134' : '183'}
        height={isSmScreen ? '17' : '24'}
      />,
      <PernodLogo
        alt='Pernod Ricard'
        width={isSmScreen ? '125' : '171'}
        height={isSmScreen ? '49' : '63'}
      />,
    ],
    about: [
      <GoogleLogo
        alt='Google'
        width={isSmScreen ? '105' : '134'}
        height={isSmScreen ? '35' : '44'}
      />,
      <FoxLogo
        alt='FOX'
        width={isSmScreen ? '68' : '84'}
        height={isSmScreen ? '30' : '36'}
      />,
      <GELogo
        alt='GE'
        width={isSmScreen ? '51' : '72'}
        height={isSmScreen ? '51' : '72'}
      />,
      <AbsolutLogo
        alt='Absolut Vodka'
        width={isSmScreen ? '87' : '116'}
        height={isSmScreen ? '40' : '54'}
      />,
      <QuickenLogo
        alt='Quicken'
        width={isSmScreen ? '107' : '134'}
        height={isSmScreen ? '24' : '30'}
      />,
      <UCLALogo
        alt='UCLA'
        width={isSmScreen ? '87' : '116'}
        height={isSmScreen ? '40' : '54'}
      />,
      <WSILogo
        alt='Williams-Sonoma Inc.'
        width={isSmScreen ? '96' : '116'}
        height={isSmScreen ? '31' : '38'}
      />,
      <DwellLogo
        alt='dwell'
        width={isSmScreen ? '78' : '94'}
        height={isSmScreen ? '30' : '36'}
      />,
      <GoogleLogo
        alt='Google'
        width={isSmScreen ? '105' : '134'}
        height={isSmScreen ? '35' : '44'}
      />,
      <FoxLogo
        alt='FOX'
        width={isSmScreen ? '68' : '84'}
        height={isSmScreen ? '30' : '36'}
      />,
      <GELogo
        alt='GE'
        width={isSmScreen ? '51' : '72'}
        height={isSmScreen ? '51' : '72'}
      />,
      <AbsolutLogo
        alt='Absolut Vodka'
        width={isSmScreen ? '87' : '116'}
        height={isSmScreen ? '40' : '54'}
      />,
      <QuickenLogo
        alt='Quicken'
        width={isSmScreen ? '107' : '134'}
        height={isSmScreen ? '24' : '30'}
      />,
      <UCLALogo
        alt='UCLA'
        width={isSmScreen ? '87' : '116'}
        height={isSmScreen ? '40' : '54'}
      />,
      <WSILogo
        alt='Williams-Sonoma Inc.'
        width={isSmScreen ? '96' : '116'}
        height={isSmScreen ? '31' : '38'}
      />,
      <DwellLogo
        alt='dwell'
        width={isSmScreen ? '78' : '94'}
        height={isSmScreen ? '30' : '36'}
      />,
    ],
  };
  return sets[logoset];
};
