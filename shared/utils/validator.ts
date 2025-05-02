import * as z from 'zod'
import { VALID_CUPS } from '#shared/const/cups'

export const useValidator = () => {
  return {
    v: z,
    validations: {
      cups: VALID_CUPS,
    },
  }
}
