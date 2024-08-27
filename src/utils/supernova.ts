export async function addSupernovaNetwork() {
  try {
    await (window as any).ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: '0x11ebd',
          rpcUrls: ['https://rpc.novascan.io/'],
          chainName: 'Supernova',
          nativeCurrency: {
            name: 'xZNN',
            symbol: 'xZNN',
            decimals: 18
          },
          blockExplorerUrls: ['https://novascan.io']
        }
      ]
    })
  } catch (error) {
    console.log(error)
  }
}

export async function switchToSupernovaNetwork() {
  try {
    await (window as any).ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x11ebd' }]
    })
  } catch (error) {
    if (error.code === 4902 || error.code === -32603) {
      await addSupernovaNetwork()
    }
    console.log(error)
  }
}
