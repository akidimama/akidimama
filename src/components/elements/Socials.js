import React from 'react'

import {
    FacebookIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,
    FacebookShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton
  } from "react-share";


export default function Socials() {
  return (
    <div>
        
        <div>
            <WhatsappShareButton
                url={"http://www.viewlodges.com.ng"}
                title={"A step by step guide how to use a smartcontract to perform a flashloan attack on Pancakeswap and earn free BNB's daily"}
                separator=":: "
               
            >
                <WhatsappIcon size={36} round={true} />
            </WhatsappShareButton>
            <TelegramShareButton
                url={"http://www.viewlodges.com.ng"}
                title={"A step by step guide how to use a smartcontract to perform a flashloan attack on Pancakeswap and earn free BNB's daily"}
                hashtag="#BNB_Arbitrage"
               
            >
                <TelegramIcon size={36} round={true} />
            </TelegramShareButton>
            
            <FacebookShareButton
                url={"http://www.viewlodges.com.ng"}
                quote={"A step by step guide how to use a smartcontract to perform a flashloan attack on Pancakeswap and earn free BNB's daily"}
                hashtag="#BNB_Arbitrage" 
              
            >
                <FacebookIcon size={36} round={true}/>
            </FacebookShareButton>
            <TwitterShareButton
                url={"http://www.viewlodges.com.ng"}
                title={"A step by step guide how to use a smartcontract to perform a flashloan attack on Pancakeswap and earn free BNB's daily"}
                hashtag="#BNB_Arbitrage"
               
            >
                <TwitterIcon size={36} round={true} />
            </TwitterShareButton>
            
        </div>

    </div>
  )
}
