const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    mobileHeightL: '667px',
    tablet: '768px',
    laptop: '1025px',
}

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    mobileHeightL: `max-height: ${size.mobileHeightL}`,
    tablet: `min-width: ${size.tablet}`,
    laptop: `(min-width: ${size.laptop})`,
}