import React from 'react'
import './zomato.css'
import { FaLocationDot } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { MdArrowRight } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Accordion from 'react-bootstrap/Accordion';
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function zomato() {
    return (
        <div>

            <section className='first_section_main_div'>

                <div className='first_inner_div'>

                    <div className='nav_section_first'>

                        <div className='first_upper_leftside'>
                        </div>

                        <div className='first_upper_rightside'>
                            <p className='menus_first_section'>Investor Relations</p>
                            <p className='menus_first_section'>Add Restaurant</p>
                            <p className='menus_first_section'>Login</p>
                            <p className='menus_first_section'>Sign up</p>

                        </div>
                    </div>

                    <div className='inner_content_section_first'>
                        <img className='first_section_zomato_logo' src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="" />
                        <p className='heading_first_section'>Discover the best food & drinks in Kochi</p>
                        <div className='input_section_first'>


                            <div className='select_location_wrapper'>
                                <FaLocationDot className='loction_icon_first' />
                                <select className='select_location_first_section'>
                                    <option>Fort Kochi,Kochi</option>
                                </select>
                            </div>

                            <div className='main_div_serchbar_first'>
                                <input type="text" className='search_bar_first_section' placeholder='Search for restaurant,cuisine or a dish' />
                                <CiSearch className='icon_search_first' />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className='second_section_main_div'>

                <div className='second_section_main_inner_div'>


                    <div className='second_section_firstCard_div'>
                        <img className='second_section_fistcard_image' src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/6872/images/Oxrxpqa6SyOaHCeBWDed_slow_cooker_landscape.jpg" alt="" />

                        <div className='second_section_firstcard_heading'>Order Online</div>
                        <div className='second_section_firstcard_subheading'>Stay home and order to your doorstep</div>
                    </div>

                    <div className='second_section_firstCard_div'>
                        <img className='second_section_fistcard_image' src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/6872/images/Oxrxpqa6SyOaHCeBWDed_slow_cooker_landscape.jpg" alt="" />

                        <div className='second_section_firstcard_heading'>Order Online</div>
                        <div className='second_section_firstcard_subheading'>Stay home and order to your doorstep</div>
                    </div>
                </div>
            </section>

            <section className='Third_section_main'>
                <div className='third_inner_div_main'>
                    <h1>Collections</h1>
                    <div className='third_inner_subheading'>
                        <div className='third_leftside_subheading'>
                            <p className='subheading_left_third'>Explore curated lists of top restaurants, cafes, pubs, and bars in Kochi, based on trends</p>

                        </div>
                        <div className='third_right_subheading'></div>
                        <div className='third_rightside_head'>All collections in Koch <MdArrowRight /></div>
                    </div>
                    <div className='card_section_third'>

                        <div className='onebyone_card  cardonethird'>
                            <div className='main_div_card'>
                                <p className='content_card_third'>8 Places for Art Lovers</p>
                                <p className='content_card_third'>7 Places  <MdArrowRight /></p>
                            </div>


                        </div>

                        <div className='onebyone_card cardtwothird'>
                            <div className='main_div_card'>
                                <p className='content_card_third'>  Great Cafes</p>
                                <p className='content_card_third'>11 Places <MdArrowRight /></p>
                            </div>


                        </div>

                        <div className='onebyone_card cardthreethird'>
                            <div className='main_div_card'>
                                <p className='content_card_third'>6 Places for Authentic Kuzhimandhi</p>
                                <p className='content_card_third'>5 Places <MdArrowRight /></p>
                            </div>


                        </div>
                        <div className='onebyone_card cardfourthird'>
                            <div className='main_div_card'>
                                <p className='content_card_third'>5 Must-visit Legendary Places</p>
                                <p className='content_card_third'>5 Places  <MdArrowRight /></p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className='fourth_section_main'>
                <div className='fourth_section_innerdiv'>
                    <h1 style={{ color: 'rgb(54,54,54)', fontFamily: ' Okra, Helvetica, sans-serif' }}>Popular localities in and around Kochi</h1>
                    <div className='card_section_four'>
                        <div className='onebyone_card_forthsection'>
                            <div className='left_side_fourthcard'>
                                <h3 style={{ color: 'rgba(0, 0, 0, 0.86)' }}>Kakkanad</h3>
                                <p>522 places</p>

                            </div>

                            <div className='right_side_fourthcard'>
                                <MdKeyboardArrowRight className='icon_fourth_card' />

                            </div>
                        </div>

                        <div className='onebyone_card_forthsection'>
                            <div className='left_side_fourthcard'>
                                <h3 style={{ color: 'rgba(0, 0, 0, 0.86)' }}>Edappally</h3>
                                <p>376 places</p>

                            </div>

                            <div className='right_side_fourthcard'>
                                <MdKeyboardArrowRight className='icon_fourth_card' />

                            </div>
                        </div>

                        <div className='onebyone_card_forthsection'>
                            <div className='left_side_fourthcard'>
                                <h3 style={{ color: 'rgba(0, 0, 0, 0.86)' }}>Fort Kochi</h3>
                                <p>142 places</p>

                            </div>

                            <div className='right_side_fourthcard'>
                                <MdKeyboardArrowRight className='icon_fourth_card' />

                            </div>
                        </div>

                        <div className='onebyone_card_forthsection'>
                            <div className='left_side_fourthcard'>
                                <h3 style={{ color: 'rgba(0, 0, 0, 0.86)' }}>Panampilly Nagar</h3>
                                <p>122 places</p>

                            </div>

                            <div className='right_side_fourthcard'>
                                <MdKeyboardArrowRight className='icon_fourth_card' />

                            </div>
                        </div>

                        <div className='onebyone_card_forthsection'>
                            <div className='left_side_fourthcard'>
                                <h3 style={{ color: 'rgba(0, 0, 0, 0.86)' }}>MG Road</h3>
                                <p>103 places</p>

                            </div>

                            <div className='right_side_fourthcard'>
                                <MdKeyboardArrowRight className='icon_fourth_card' />

                            </div>
                        </div>

                        <div className='onebyone_card_forthsection'>
                            <div className='left_side_fourthcard'>
                                <h3 style={{ color: 'rgba(0, 0, 0, 0.86)' }}>Kacheripady</h3>
                                <p>126 places</p>

                            </div>

                            <div className='right_side_fourthcard'>
                                <MdKeyboardArrowRight className='icon_fourth_card' />

                            </div>
                        </div>

                        <div className='onebyone_card_forthsection'>
                            <div className='left_side_fourthcard'>
                                <h3 style={{ color: 'rgba(0, 0, 0, 0.86)' }}>Palarivattom</h3>
                                <p>172 places</p>

                            </div>

                            <div className='right_side_fourthcard'>
                                <MdKeyboardArrowRight className='icon_fourth_card' />

                            </div>
                        </div>

                        <div className='onebyone_card_forthsection'>
                            <div className='left_side_fourthcard'>
                                <h3 style={{ color: 'rgba(0, 0, 0, 0.86)' }}>Vyttila</h3>
                                <p>139 places</p>

                            </div>

                            <div className='right_side_fourthcard'>
                                <MdKeyboardArrowRight className='icon_fourth_card' />

                            </div>
                        </div>

                        <div className='onebyone_card_forthsection ninth_card'>
                            <p style={{ fontsize: '20px' }}>See more <IoIosArrowDown /></p>
                        </div>


                    </div>

                </div>

            </section>
            <section className='fifth_section_main'>
                <div className='fifth_inner_div'>
                    <div className='leftside_fifth_sectionmain'>
                        <img height={'400px'} width={'350px'} src="https://b.zmtcdn.com/data/o2_assets/ce5bc038a8a2d4f8f24465c8826182af1726501431.png" alt="" />
                    </div>


                    <div className='rightside_fifth_sectionmain'>
                        <div className='rightside_ibnner_div'>
                            <h1>Get the Zomato app</h1>
                            <p>We will send you a link, open it on your phone to download the app</p>
                            <div className='maindiv-radio-btn'>
                                <input type="radio" className='radio-btn-fifth' /> <div>Email</div>

                                <input type="radio" className='radio-btn-fifth' /><div> Phone</div>

                            </div>
                            <div className='maindiv-inputbtn'>
                                <input className='fifth-input' type="text" placeholder='Email' />
                                <button className='fifth-btn' >Share App Link</button>

                            </div>
                            <p style={{ color: 'gray' }} >Download app from</p>
                            <div>

                                <img className='fifth-img' src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" />
                                <img className='fifth-img' src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" />
                            </div>
                        </div>


                    </div>
                </div>

            </section>
            <section className='sixth-section-main'>
                <div className='sixth-inner-sec'>
                    <h1>Explore options near me</h1>
                    <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Popular Cuisines Near Me</Accordion.Header>
                            <Accordion.Body>
                                Arabian near meBakery near meBeverages near meBiryani near meBurger near meChinese near meContinental near meDesserts near meIce Cream near meJuices near meKerala near meNorth Indian near mePizza near meSandwich near meSeafood near meShake near meShawarma near meSichuan near meSouth Indian near meStreet near me
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <br />

                    <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Popular Restaurant Types Near me</Accordion.Header>
                            <Accordion.Body>
                                Bakeries near meBars near meBeverage Shops near meCafés near meCasual Dining near meCocktail Bars near meConfectioneries near meDessert Parlors near meDhabas near meFine Dining near meFood Courts near meFood Trucks near meKiosks near meLounges near mePaan Shop near meQuick Bites near meSweet Shops near me
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <br />

                    <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Top Restaurant Chains</Accordion.Header>
                            <Accordion.Body>
                                Burger KingKFCMcDonald'sPizza HutWOW! Momo
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <br />

                    <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Cities We Deliver To</Accordion.Header>
                            <Accordion.Body>
                                Delhi NCRKolkataMumbaiBengaluruPuneHyderabadChennaiLucknowKochiJaipurAhmedabadChandigarhGoaIndoreGangtokNashikOotyShimlaLudhianaGuwahatiAmritsarKanpurAllahabadAurangabadBhopalRanchiVisakhapatnamBhubaneswarCoimbatoreMangaloreVadodaraNagpurAgraDehradunMysorePuducherrySuratVaranasiPatnaUdaipurSrinagarKhajurahoNeemranaCuttackTrivandrumHaridwarLehPushkarRajkotMaduraiKozhikodeAlappuzhaThrissurManipalVijayawadaJodhpurKotaAjmerMussoorieRishikeshJalandharJammuManaliAll delivery cities
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </div>

            </section>


            <section className='seventh-section-footer'>
                <div className='sesventh-footer-div'>
                    <div className='inner-div-top'>
                        <img className='img-logo-footer' src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="" />
                        <div>
                            <button className='btn-footer' >  <img className='flag-footer' src="https://cdn.pixabay.com/photo/2016/08/24/17/07/india-1617463_1280.png" alt="" /> India <IoIosArrowDown /> </button>


                            <button
                                className='btn-footer'> <img className='flag-footer' src="https://clipart-library.com/image_gallery/n1275656.jpg" alt="" /> English <IoIosArrowDown /> </button>
                        </div>
                    </div>
                    <div className='main-footer-container'>
                        <div className='first-footer'>
                            <h5>About Zomato</h5>
                            <div style={{ color: 'gray' }} >Who We Are </div>

                            <div style={{ color: 'gray' }} > Blog</div>

                            <div style={{ color: 'gray' }} >Work With Us</div>

                            <div style={{ color: 'gray' }} >Investor Relations</div>

                            <div style={{ color: 'gray' }} >Report Fraud</div>

                            <div style={{ color: 'gray' }} >Press Kit</div>


                        </div>
                        <div className='second-footer'>
                            <h5>ZOMAVERSE</h5>
                            <div style={{ color: 'gray' }} >Who We Are </div>

                            <div style={{ color: 'gray' }} > Zomato</div>

                            <div style={{ color: 'gray' }} >Blinkit</div>

                            <div style={{ color: 'gray' }} >District</div>

                            <div style={{ color: 'gray' }} >Feeding</div>

                            <div style={{ color: 'gray' }} >Press Kit</div>

                        </div>
                        <div className='third-footer'>                <h5>ZOMAVERSE</h5>
                            <div style={{ color: 'gray' }} >Who We Are </div>

                            <div style={{ color: 'gray' }} > Zomato</div>

                            <div style={{ color: 'gray' }} >Blinkit</div>

                            <div style={{ color: 'gray' }} >District</div>

                            <div style={{ color: 'gray' }} >Feeding</div>

                            <div style={{ color: 'gray' }} >Press Kit</div> </div>
                        <div className='fourth-footer'>                <h5>ZOMAVERSE</h5>
                            <div style={{ color: 'gray' }} >Who We Are </div>

                            <div style={{ color: 'gray',fontSize:'17px' }} > Zomato</div>

                            <div style={{ color: 'gray' }} >Blinkit</div>

                            <div style={{ color: 'gray' }} >District</div>

                            <div style={{ color: 'gray' }} >Feeding</div>

                            <div style={{ color: 'gray' }} >Press Kit</div> </div>
                        <div className='fifth-footer'>    
                                        <h5>ZOMAVERSE</h5>
                            

                            
                            <TiSocialLinkedinCircular /> <FaInstagram /> <FaXTwitter /> <FaYoutube /> <FaFacebook />
                            <div style={{marginTop:'5px' ,marginBottom:'5px'}}>

<img  height={'40px'} width={'120px'} src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" />
</div>
<div>
<img height={'40px'} width={'120px'} src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" />
</div>


            
                            </div>
          
                   
                    </div>
                    <hr />
                    <p  style={{fontSize:'14px' ,color:'gray'}}>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2025 © Zomato™ Ltd. All rights reserved.</p>
                </div>
             

            </section>
        </div>
    )
}

export default zomato