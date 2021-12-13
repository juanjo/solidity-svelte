<script>
  import { web3 } from 'svelte-web3';
  import IdeaContract from '../../../src/contracts/Idea.json';

  async function getIdea() {
    const web3 = new Web3(window.ethereum);
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = IdeaContract.networks[networkId];
    const contract = new web3.eth.Contract(
      IdeaContract.abi,
      deployedNetwork && deployedNetwork.address
    );

    const response = await contract.methods.getIdea().call();
    return response;
  }

  $: promise = getIdea();
  let newIdea = 'My whatever';

  async function setIdea(_newIdea) {
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = IdeaContract.networks[networkId];

    const contract = new web3.eth.Contract(
      IdeaContract.abi,
      deployedNetwork && deployedNetwork.address
    );

    await contract.methods.setIdea(_newIdea).send({from: accounts[0]});
    promise = getIdea();
  }


</script>


{#await promise}
  <p>...loading</p>
{:then idea}
  <h1>{idea}</h1>

  <textarea bind:value={newIdea} rows="10" cols="100"></textarea>
  <button on:click={setIdea(newIdea)}>Save as a contract</button>
{/await}