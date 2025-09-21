import { ethers } from "hardhat";

async function main() {
  console.log("🚀 Starting Verdant Vault Trades deployment...");

  // Get the contract factory
  const VerdantVaultTrades = await ethers.getContractFactory("VerdantVaultTrades");
  
  // Deploy the contract with a verifier address (you can change this)
  const verifierAddress = process.env.VERIFIER_ADDRESS || "0x0000000000000000000000000000000000000000";
  
  console.log("📝 Deploying contract with verifier:", verifierAddress);
  
  const verdantVaultTrades = await VerdantVaultTrades.deploy(verifierAddress);
  
  await verdantVaultTrades.waitForDeployment();
  
  const contractAddress = await verdantVaultTrades.getAddress();
  
  console.log("✅ VerdantVaultTrades deployed to:", contractAddress);
  console.log("🔗 Contract address:", contractAddress);
  console.log("📋 Verifier address:", verifierAddress);
  
  // Save deployment info
  const deploymentInfo = {
    contractAddress,
    verifierAddress,
    network: "sepolia",
    timestamp: new Date().toISOString(),
  };
  
  console.log("📄 Deployment info:", JSON.stringify(deploymentInfo, null, 2));
  
  console.log("🎉 Deployment completed successfully!");
  console.log("💡 Remember to update your environment variables with the contract address");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
  });
