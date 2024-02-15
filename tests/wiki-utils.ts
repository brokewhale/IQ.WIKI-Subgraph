import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { OwnerUpdated, Posted } from "../generated/Wiki/Wiki"

export function createOwnerUpdatedEvent(
  user: Address,
  newOwner: Address
): OwnerUpdated {
  let ownerUpdatedEvent = changetype<OwnerUpdated>(newMockEvent())

  ownerUpdatedEvent.parameters = new Array()

  ownerUpdatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  ownerUpdatedEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownerUpdatedEvent
}

export function createPostedEvent(_from: Address, _ipfs: string): Posted {
  let postedEvent = changetype<Posted>(newMockEvent())

  postedEvent.parameters = new Array()

  postedEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  postedEvent.parameters.push(
    new ethereum.EventParam("_ipfs", ethereum.Value.fromString(_ipfs))
  )

  return postedEvent
}
