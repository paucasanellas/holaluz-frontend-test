export const MINIMUM_AMOUT_SPECIAL_DISCOUNT = 100

export enum offerTypes {
  STANDARD = 'STANDARD',
  BASIC = 'BASIC',
  SPECIAL = 'SPECIAL',
}

export const offerDetails: Record<offerTypes, { discount: number, id: offerTypes }> = {
  [offerTypes.STANDARD]: {
    discount: 0, id: offerTypes.STANDARD,
  },
  [offerTypes.BASIC]: {
    discount: 5, id: offerTypes.BASIC,
  },
  [offerTypes.SPECIAL]: {
    discount: 12, id: offerTypes.SPECIAL,
  },
}
