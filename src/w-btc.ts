import { BigInt } from "@graphprotocol/graph-ts"
import {
  wBTC,
  Pause,
  Unpause,
  Burn,
  Mint,
  MintFinished,
  OwnershipRenounced,
  OwnershipTransferred,
  Approval,
  Transfer
} from "../generated/wBTC/wBTC"
import { MintEvent, BurnEvent } from "../generated/schema"

export function handleBurn(event: Burn): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  let burnEvent = new BurnEvent(id)
  burnEvent.from = event.transaction.from.toHexString()
  burnEvent.txHash = event.transaction.hash.toHexString()
  burnEvent.value = event.params.value
  burnEvent.timestamp = event.block.timestamp
  burnEvent.save()
}


export function handleMint(event: Mint): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  let mintEvent = new MintEvent(id)
  mintEvent.from = event.transaction.from.toHexString()
  mintEvent.txHash = event.transaction.hash.toHexString()
  mintEvent.value =  event.params.amount
  mintEvent.timestamp = event.block.timestamp
  mintEvent.save()
}

//export function handleMintFinished(event: MintFinished): void {}

