import React from 'react'
import './footer.css'

const Footer = () => (
    <footer id="footer">
        <div className="DottedBox">
            <div className="part1">
                <div className="copyright">
                    <div className="footer">
                        <div className="copyRight">
                            <ul className="dtSocial">
                                <li className="facebook">
                                    <a target="_blank" href="https://www.facebook.com/MiraeAssetFinance/" title="Facebook"><img src="https://mafc.com.vn/wp-content/uploads/2019/06/facebook-e1562176941915.png" alt="facebook"/></a>
                                </li>
                                <li className="zalo">
                                    <a target="_blank" href="https://oa.zalo.me/2220308193032514465" title="Zalo"><img src="https://mafc.com.vn/wp-content/uploads/2019/06/Zalo-e1562177051391.png" alt="Zalo"/></a>
                                </li>
                                <li className="instagram">
                                    <a target="_blank" href="https://www.instagram.com/tai_chinh.mirae_asset_vn/" title="Instagram"><img src="https://mafc.com.vn/wp-content/uploads/2019/06/Instagram-e1562177095782.png" alt="Instagram"/></a>
                                </li>
                                <li className="youtube-play">
                                    <a target="_blank" href="https://www.youtube.com/channel/UC1eWxrrVUzZldO_HVHXTX3Q" title="YouTube"><img src="https://mafc.com.vn/wp-content/uploads/2019/06/Youtube-e1562177014816.png" alt="youtube"/></a>
                                </li>
                            </ul>

                            <p><a href="/dieu-khoan-va-su-dung/">Điều khoản sử dụng</a>| <a href="/so-do-trang/">Sơ đồ web</a></p>
                        </div>
                        <div className="logoFooter">
                            <a href="/">
                                <img src="https://mafc.com.vn/wp-content/uploads/2019/05/logo-Mirae-Asset-01-01-01.png" alt="Mirae Asset Finance Vietnam"/>
                            </a>
                        </div>
                    </div>
                    <div className="dtCopyright">
                        <p>© 2015 Mirae Asset Financial Company Vietnam. All rights reserved</p>
                    </div>
{/* 
                    <ul className="fixedRight" style={{right: -155 + 'px'}}>
                        <li><a href="/dang-ky-vay-tieu-dung-247">Đăng Ký Khoản Vay</a>
                            <br></br>
                        </li>
                        <li id="checkpage"><a href="#dt-bangtinh">Bảng Tính</a></li>
                        <li><a href="/thanh-toan/tra-cuu-khoan-vay/">Tra Cứu Khoản Vay</a>
                        <br></br>
                        </li>
                        <li><a href="/thanh-toan/huong-dan-thanh-toan">Điểm Thanh Toán</a>
                        <br></br>
                        </li>
                        <li><a href="/vay-tien-o-dau-mirae-asset">Liên Hệ</a></li>
                    </ul>

                    <div id="pc_dt_call" className="popup" onclick="myFunction()"><img src="https://mafc.com.vn/wp-content/uploads/2019/05/sp_call-e1562177285438.png" alt="call" width="45px"/><span className="popuptext show" id="myPopup">Hãy gọi *1234 hoặc (028) 7300 7777<br></br>để được hướng dẫn thêm!</span></div>
                    <div id="signup_now">
                        <a target="blank" href="https://easy.mafc.com.vn/"><img src="/wp-content/uploads/2019/05/signup_now-300x93.png" alt="đăng ký ngay"/></a>
                    </div>
                    <div id="sp_dt_call">
                        <a href="tel:*1234"><img src="https://mafc.com.vn/wp-content/uploads/2019/05/sp_call-e1562177285438.png" alt="call" width="45px"/></a>
                    </div> */}
                </div>
            </div>
        </div>
    </footer>
)

export default Footer;