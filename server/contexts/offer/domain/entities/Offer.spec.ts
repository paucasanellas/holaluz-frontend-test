import { Offer } from '@@/server/contexts/offer/domain/entities/Offer'
import { clientFactory } from '@@/tests/factories/client.factory'
import { supplyPointFactory } from '@@/tests/factories/supply-point.factory'
import { offerDetails } from '#shared/const/offer'
import { BuildingType } from '#shared/const/client'

describe('Offer', () => {
  it('should return null if building type is not eligible', () => {
    const notEligibleClient = clientFactory.build({
      buildingType: BuildingType.APARTAMENT,
      role: 'customer',
    })

    const supplyPoint = supplyPointFactory.build({
      cups: notEligibleClient.cups,
    })

    const neighbors = [
      supplyPointFactory.build(),
      supplyPointFactory.build(),
    ]

    const offer = new Offer(notEligibleClient, supplyPoint, neighbors)
    expect(offer.calculate()).toBeNull()
  })

  it('should return null if there are no neighbors', () => {
    const client = clientFactory.build({
      buildingType: BuildingType.HOUSE,
      role: 'customer',
    })

    const supplyPointWithoutNeighbors = supplyPointFactory.build({
      cups: client.cups,
      neighbors: [],
    })

    const offer = new Offer(client, supplyPointWithoutNeighbors, supplyPointWithoutNeighbors.neighbors as [])
    expect(offer.calculate()).toBeNull()
  })

  it('should return SPECIAL offer if total invoiced amount is greater than minimum', () => {
    const client = clientFactory.build({
      buildingType: BuildingType.HOUSE,
      role: 'customer',
    })

    const supplyPoint = supplyPointFactory.build({
      cups: client.cups,
      invoicedAmount: 200,
    })

    const neighbors = [
      supplyPointFactory.build({ invoicedAmount: 70 }),
      supplyPointFactory.build({ invoicedAmount: 80 }),
    ]

    supplyPoint.neighbors = neighbors.map(neighbor => neighbor.cups)

    const offer = new Offer(client, supplyPoint, neighbors)
    expect(offer.calculate()).toEqual(offerDetails.SPECIAL)
  })

  it('should return BASIC offer if neighbors have less power', () => {
    const client = clientFactory.build({
      buildingType: BuildingType.HOUSE,
      role: 'customer',
    })

    const supplyPoint = supplyPointFactory.build({
      cups: client.cups,
    })

    const neighbors = [
      supplyPointFactory.build({
        invoicedAmount: 10,
        power: { p1: 3000, p2: 3000 },
      }),
      supplyPointFactory.build({
        invoicedAmount: 5,
        power: { p1: 2500, p2: 2500 },
      }),
    ]

    supplyPoint.neighbors = neighbors.map(neighbor => neighbor.cups)

    const offer = new Offer(client, supplyPoint, neighbors)
    expect(offer.calculate()).toEqual(offerDetails.BASIC)
  })

  it('should return STANDARD offer if no special or basic discount applies', () => {
    const client = clientFactory.build({
      buildingType: BuildingType.HOUSE,
      role: 'customer',
    })

    const supplyPoint = supplyPointFactory.build({
      cups: client.cups,
    })

    const neighbors = [
      supplyPointFactory.build({
        invoicedAmount: 10,
        power: { p1: Infinity, p2: Infinity },
      }),
    ]

    supplyPoint.neighbors = neighbors.map(neighbor => neighbor.cups)

    const offer = new Offer(client, supplyPoint, neighbors)
    expect(offer.calculate()).toEqual(offerDetails.STANDARD)
  })
})
