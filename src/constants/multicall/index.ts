import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x04E57ef1D755fAAf0172Dccf9fb3963766fcC168', // TODO
  [ChainId.BSCTESTNET]: '0x04E57ef1D755fAAf0172Dccf9fb3963766fcC168'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
