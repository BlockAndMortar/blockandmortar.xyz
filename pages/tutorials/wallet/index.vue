<template>
  <div class="max-w-4xl mx-auto p-5" v-show="loaded">
    <header>
      <div class="uppercase font-medium text-sm">Tutorials</div>
      <h1 class="text-4xl font-bold">Wallet usage and safety</h1>
    </header>

    <Steps :steps="steps" :currentStep="currentStep" />
    
    <!-- Step 1 -->
    <section v-show="currentStep === 0">
      <p>Welcome to the Block & Mortar wallet tutorial.</p>

      <div v-show="!metaMaskInstalled">
        <p>Install a browser plugin.</p>
      </div>

      <div v-show="metaMaskInstalled">
        <p>Looks like MetaMask is installed.</p>
      </div>

      <button @click="gotoStep(1)" v-show="metaMaskInstalled">
        Next step
      </button>
    </section>

    <!-- Step 2 -->
    <section v-show="currentStep === 1">
      <p>In order to interact with a dApp, including this one, you'll need to Connect your wallet.</p>

      <div v-show="!selectedAccount">
        <button @click="connectWallet">
          Connect wallet
        </button>
      </div>

      <div v-show="selectedAccount">
        <p>Great, you're connect to the site using wallet {{ selectedAccount }}. Now, let's learn about signing.</p>
      </div>

      <button @click="gotoStep(2)" v-show="selectedAccount">
        Next step
      </button>
    </section>

    <!-- Step 3 -->
    <section v-show="currentStep === 2">
      <p>Now, we sign a message. Talk about signing safety and pitfalls.</p>

      <div v-show="!didSignMessage">
        <button @click="signMessage">
          Sign message
        </button>
      </div>

      <div v-show="didSignMessage">
        <p>Nicely done! You just signed a message.</p>
      </div>

      <button @click="gotoStep(3)" v-show="didSignMessage">
        Next step
      </button>
    </section>

    <!-- Step 4 -->
    <section v-show="currentStep === 3">
      <p>Maybe we just show screenshots of what it's like to call a method with gas, or perhaps we could let people mint a free NFT?</p>
    </section>
  </div>
</template>

<script setup>
  const loaded = ref(false);
  const metaMaskInstalled = ref(false);
  const selectedAccount = ref(null);
  const didSignMessage = ref(false);
  const currentStep = ref(0);

  const steps = [
    { id: '01', name: 'Install plugin', onClick: () => gotoStep(0, true) },
    { id: '02', name: 'Connect to site', onClick: () => gotoStep(1, true) },
    { id: '03', name: 'Sign message', onClick: () => gotoStep(2, true) },
    { id: '04', name: 'Smart contracts', onClick: () => gotoStep(3, true) },
  ];

  function gotoStep(stepNumber, validate = false) {
    if (validate && stepNumber >= currentStep.value) {
      return;
    }

    currentStep.value = stepNumber;
  }

  async function connectWallet() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    selectedAccount.value = accounts[0];
  }

  async function signMessage() {
    await window.ethereum.request({
      method: "personal_sign",
      params: [
        'Test message from Block & Mortar',
        selectedAccount.value,
      ]
    });
    didSignMessage.value = true;
  }

  onMounted(async () => {
    try {
      metaMaskInstalled.value = typeof window.ethereum !== 'undefined';
    
      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      selectedAccount.value = accounts[0];
    } finally {
      loaded.value = true;
    }

  });
</script>

<style scoped>
  p {
    @apply my-4;
  }

  button {
    @apply inline-flex items-center px-4 py-2 border border-transparent
           text-sm font-medium rounded-md shadow-sm text-white bg-cyan-600
           hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500;
  }
</style>