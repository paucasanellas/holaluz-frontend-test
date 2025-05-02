import { fireEvent, render, screen } from '@@/tests/nuxt'
import { clientFactory } from '@@/tests/factories/client.factory'
import { supplyPointFactory } from '@@/tests/factories/supply-point.factory'
import { offerFactory } from '@@/tests/factories/offer.factory'
import { mockNuxtImport } from '@nuxt/test-utils/runtime'
import ClientWithOffer from './ClientWithOffer.vue'
import type { OfferType } from '#shared/types'
import { offerTypes } from '#shared/const/offer'

const client = clientFactory.build()
const supplyPoint = supplyPointFactory.build()

const applyOfferMock = vi.fn()

mockNuxtImport('useOffer', () => {
  return () => {
    return { apply: applyOfferMock }
  }
})

describe('Component: ClientWithOffer', () => {
  it('should render component properly', async () => {
    const offer = offerFactory.build()
    await renderComponent(
      offer,
    )
    screen.getByRole('heading', { level: 1, name: `Bienvenido a la revolución, ${client.fullName}.` })
  })

  describe('client is eligible', () => {
    describe('doesnt meet any discount conditions', () => {
      it('should see standard offer', async () => {
        const offer = offerFactory.build()
        await renderComponent(
          offer,
        )
        screen.getByRole('heading', { level: 2, name: `¡Enhorabuena! Puedes disfrutar de oferta estándar` })
      })
    })

    describe('all neighbors have both p1 and p2 lower', () => {
      it('should see basic discount (5%)', async () => {
        const offer = offerFactory.build({ id: offerTypes.BASIC, discount: 5 })
        await renderComponent(
          offer,
        )
        screen.getByRole('heading', { level: 2, name: `¡Enhorabuena! Puedes disfrutar del descuento básico de un 5%` })
      })
    })

    describe('total invoiced amount of neighbors is above 100€', () => {
      it('should see special discount (12%)', async () => {
        const offer = offerFactory.build({ id: offerTypes.SPECIAL, discount: 12 })
        await renderComponent(offer)
        screen.getByRole('heading', { level: 2, name: `¡Enhorabuena! Puedes disfrutar del descuento especial de un 12%` })
      })
    })

    it('should apply an offer discount', async () => {
      const offer = offerFactory.build()
      await renderComponent(offer)
      const submit = screen.getByRole('button', { name: '¡Pide tu descuento ya!' })
      await fireEvent.click(submit)

      expect(applyOfferMock).toBeCalledWith({
        cups: client.cups,
        discount: offer.discount,
        offer: offer.id,
      })
    })
  })
})

const renderComponent = (
  offer: OfferType,
) => {
  const store = useOfferStore()

  store.setOffer({
    client,
    supplyPoint,
    offer,
  })
  return render(ClientWithOffer)
}
