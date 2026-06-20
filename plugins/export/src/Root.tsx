import React from 'react'
import { Composition } from 'remotion'
import { StatInfographic } from './compositions/StatInfographic'
import { TextCard } from './compositions/TextCard'
import { LINKEDIN_POST, LINKEDIN_SQUARE } from './types'

export function RemotionRoot() {
  return (
    <>
      <Composition
        id="StatInfographic"
        component={StatInfographic}
        durationInFrames={60}
        fps={30}
        {...LINKEDIN_POST}
        defaultProps={{
          title: 'Season Highlights',
          subtitle: '2025–26 Regular Season',
          accent: 'royal',
          stats: [
            { value: '48',   label: 'Wins',          delta: '▲ +5',   deltaType: 'pos' },
            { value: '91%',  label: 'PK Success',    delta: '3rd in league' },
            { value: '3.4',  label: 'Goals / Game',  delta: '▲ +0.6', deltaType: 'pos' },
            { value: '102',  label: 'Points',        delta: '▲ +13',  deltaType: 'pos' },
          ],
        }}
      />

      <Composition
        id="TextCard"
        component={TextCard}
        durationInFrames={60}
        fps={30}
        {...LINKEDIN_SQUARE}
        defaultProps={{
          eyebrow: 'Combined AppKit',
          headline: 'Build faster.\nLook better.',
          body: 'A full component library built for data-forward apps.',
          accent: 'royal',
          dark: false,
        }}
      />

      <Composition
        id="TextCardDark"
        component={TextCard}
        durationInFrames={60}
        fps={30}
        {...LINKEDIN_SQUARE}
        defaultProps={{
          eyebrow: 'Combined AppKit',
          headline: 'Build faster.\nLook better.',
          body: 'A full component library built for data-forward apps.',
          accent: 'royal',
          dark: true,
        }}
      />
    </>
  )
}
