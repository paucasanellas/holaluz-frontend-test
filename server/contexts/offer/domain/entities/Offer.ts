import type { Client, SupplyPoint, OfferType } from '#shared/types'
import { BuildingType } from '#shared/const/client'
import { MINIMUM_AMOUT_SPECIAL_DISCOUNT, offerDetails } from '#shared/const/offer'

export class Offer {
  constructor(
    private client: Client,
    private supplyPoint: SupplyPoint,
    private neighbors: SupplyPoint[],
  ) {}

  public calculate(): OfferType | null {
    if (!this.isEligibleBuilding()) {
      return null
    }

    if (!this.hasNeighbors()) {
      return null
    }

    if (this.hasSpecialDiscount()) {
      return offerDetails.SPECIAL
    }

    if (this.hasBasicDiscount()) {
      return offerDetails.BASIC
    }

    return offerDetails.STANDARD
  }

  private isEligibleBuilding() {
    return this.client.buildingType === BuildingType.HOUSE
  }

  private hasNeighbors() {
    return this.supplyPoint.neighbors.length > 0
  }

  private hasSpecialDiscount() {
    const totalInvoiced = this.neighbors.reduce((sum, neighbor) => sum + Number(neighbor.invoicedAmount), 0)
    return totalInvoiced > MINIMUM_AMOUT_SPECIAL_DISCOUNT
  }

  private hasBasicDiscount() {
    return this.neighbors.every(
      neighbor => neighbor.power.p1 < this.supplyPoint.power.p1 && neighbor.power.p2 < this.supplyPoint.power.p2,
    )
  }
}
