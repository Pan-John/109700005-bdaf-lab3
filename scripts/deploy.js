async function main() {
  const Ptc = await ethers.getContractFactory("Ptc");
  const PTC = await Ptc.deploy();
  console.log("PTC address:", PTC.address);

  const Bank = await ethers.getContractFactory("Bank");
  const bank = await Bank.deploy();
  console.log("Bank address:", bank.address);

}
 
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
