import { status as httpStatus } from 'http-status'
import type { H3Error } from 'h3'
import { ZodError } from 'zod'
import { NotFoundError } from '@@/server/contexts/shared/errors/NotFoundError'
import { InvalidParamsError } from '@@/server/contexts/shared/errors/InvalidParamsError'

type ServerError = H3Error & {
  status?: number
  statusText?: string
}

export const useServerError = (
  error: unknown,
) => {
  const response: Partial<ServerError> = {}

  if (error instanceof ZodError) {
    response.status = httpStatus.UNPROCESSABLE_ENTITY
    response.statusMessage = httpStatus['422_NAME']
    response.data = error
  }

  else if (error instanceof InvalidParamsError) {
    response.status = httpStatus.UNPROCESSABLE_ENTITY
    response.statusMessage = error.message
  }

  else if (error instanceof NotFoundError) {
    response.status = httpStatus.NOT_FOUND
    response.statusMessage = error.message
  }

  else {
    response.status = httpStatus.INTERNAL_SERVER_ERROR
    response.statusMessage = httpStatus['500_NAME']
  }

  throw createError(response)
}
