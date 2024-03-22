import React from 'react'
import usaflag from "../../public/usaflag.svg"
import dot from "../../public/dot.svg"
import insta from "../../public/insta.svg"
import linked from "../../public/linked.svg"
import paymentlink from "../../public/paymentlink.svg"
import instaandlink from "../../public/instaandlink.svg"



import Image from 'next/image'


const FooterMain = () => {
    return (
        <div className='footer-part-done margintop33px'>
            <div className='filteredmain-champ colorbackblack height750px footerdownchild'>
                <div className='flex1grow flexleftrightfooter borderwhitecolor '>
                    <div className='flex-grow-3 colorbackbeight colorwhite '>
                        <div className='grouptextfooter'>
                            <h4 className='colorwhite bethefirsttoknowtext uppercase-it'>Be the first to know</h4>
                            <span className='colorwhite singuptext'>Sign up for updates from metta muse.</span>
                        </div>

                        <div className='parentinputcumbutton'>
                            <input className='inputtakerfooter' placeholder='Enter your e-mail...'></input>
                            <label className='footerbutton'>Subsribe</label>
                        </div>
                    </div>
                    <div className=' flex-grow-2 colordarkbeight blackbackground colorwhite'>
                        <div className='flexsettingfooterright childcontactusleft'>
                            <h5 className='contact-us font-w700'>Contact us</h5>
                            <span className='mobile-cum-mail'>
                                <span>+44 221 133 5360</span>
                                <span>customercare@mettamuse.com</span>
                            </span>

                            <h5 className='contact-us'>Currency</h5>
                            <span className='usacumusd'>
                                <span>
                                    <Image src={usaflag} />
                                </span>
                                <span>
                                <Image src={dot} />
                                </span>
                                <span className='usaalign'>USD</span>
                            </span>

                            <span>
                                Transactions will be completed in Euros and a currency reference is available on hover.
                            </span>
                        </div>

                    </div>

                </div>

                <hr className='margintp' />

                <div className='flex5grow margintp'>
                    <div className='metta-musse'>
                        <ul className='colorwhite liststylerightflexwithgap liststylenone-right'>
                            <h3>metta muse</h3>
                            <div className='flex-spacingfooter'>
                                <li>About us</li>
                                <li>Stories</li>
                                <li>Artisans</li>
                                <li>Boutiques</li>
                                <li>Contact Us</li>
                                <li>EU Compliance Docs</li>
                            </div>
                        </ul>

                        <ul className='colorwhite liststylerightflexwithgap liststylenone-right'>
                            <h3>QUICK LINKS</h3>
                            <div className='flex-spacingfooter'>
                                <li>Orders & Shipping</li>
                                <li>Join/Login as a Seller</li>
                                <li>Payment & Pricing</li>
                                <li>Return & Refunds</li>
                                <li>FAQs</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                            </div>

                        </ul>

                        <ul className='payemntandstuff colorwhite liststylenone-right'>
                            <h3 className='uppercase-it'>Follow Us</h3>
                            <div className='flex-spacingfooter'>
                                <div>
                                    <span>
                                        <Image src={instaandlink}/>
                                    </span>
                                    
                                </div>

                                <div className='museandaccepts'>
                                    <span>mettā muse Accepts</span>
                                    <div className='imagedivpaymentone'>
                                        <Image src={paymentlink} />
                                    </div>
                                </div>
                                
                            </div>
                        </ul>
                    </div>

                    <div className='copyfootertext'>
                        <span >Copyright © 2023 mettamuse. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterMain
