const { expect } = require("chai");
describe("Bank", function () {
    this.beforeEach(async function(){
        [owner, test_wallet] = await ethers.getSigners();
        Bank = await ethers.getContractFactory("Bank", owner);
        bank = await Bank.deploy();
    
        Ptc = await ethers.getContractFactory("Ptc", test_wallet);
        ptc = await Ptc.deploy();

        ptc.connect(test_wallet);
        await ptc.connect(test_wallet).approve(bank.address,5000);

        PTC = ptc.address;
    });

    describe("deployment", function () {
        it("should mint tokens to test_wallet", async function () {
            expect(await ptc.balanceOf(test_wallet.address)).to.equal(5000);
        })
    })

    describe("deposit", function () {
        it("should deposit ptc", async function () {
            await bank.connect(test_wallet).deposit(PTC,1000);
            expect(await ptc.balanceOf(test_wallet.address)).to.equal(4000);
            expect(await bank._balances(test_wallet.address, PTC)).to.equal(1000);
        })
    })

    describe("withdraw", function () {
        it("should withdraw ptc from the contract", async function () {
            await bank.connect(test_wallet).deposit(PTC,500);
            expect(await ptc.balanceOf(test_wallet.address)).to.equal(4500);
        })

        it("should not allow withdrawing more than has been deposited", async function () {
            await expect(bank.connect(test_wallet).withdraw(PTC,5001)).to.be.revertedWith("Insufficent balance!")
        })
    })
})