import React from "react";
import Header from "./Header";
import Leftbar from "./Leftbar";
import Gmailbody from "./Gmailbody";
import Rightbar from "./Rightbar";
import Index from './Index.css'
export default function Gmail() {
    
    return (
        <div>
            <div class="body-wrapper" >

{/* <!-- HEADER -->/ */}

                    <header class="header">

                    <div class="header-group">

                        <div class="icons">
                        <button id="header-menu" class="btn header-menu tooltip" data-info="Main menu" >
                            <img src="/app/assets/icons/menu_black_24dp.svg" alt="Main menu" class="btn-icon btn-icon-alt"/>
                        </button>
                        </div>

                        <a href="#" class="header-logo" >
                        <img src="/app/assets/icons/logo_gmail_lockup_default_1x_r2.png" alt="Gmail" />
                        </a>

                    </div>

                    <form class="header-search" action="">

                        <div class="icons">
                        <button id="js-header-search" class="btn btn-nofill tooltip"  data-info="Search">
                            <img src="/app/assets/icons/search_black_24dp.svg" alt="Search"class="btn-icon btn-icon-alt"/>
                        </button>
                        </div>

                        <input type="search" class="header-search-input" placeholder="Search mail"/>
                        
                        <div class="icons">
                        <button type="reset" class="btn" data-info="Options">
                            <img src="/app/assets/icons/clear_black_24dp.svg" alt="Options" class="btn-icon btn-icon-alt"/>
                        </button>
                        </div>

                        <div class="icons">
                        <button id="header-search-options" class="btn tooltip" data-info="Options">
                            <img src="/app/assets/icons/arrow_drop_down_black_24dp.svg" alt="Options" class="btn-icon btn-icon-alt"/>
                        </button>
                        </div>

                    </form>

                    <div class="header-group profile" >

                        <div class="icons">
                            <button id="header-info" class="btn">
                            <img src="/app/assets/icons/help_outline_black_24dp.svg" alt="Support" class="btn-icon btn-icon-alt"/>
                            </button>
                        </div>

                        <div class="icons">
                            <button id="header-settings" class="btn" data-info="Settings">
                            <img src="/app/assets/icons/settings_black_24dp.svg" alt="Settings"  class="btn-icon btn-icon-alt"/>
                            </button>
                        </div>

                        <div class="icons">
                            <button id="header-apps" class="btn" >
                            <img src="/app/assets/icons/apps_black_24dp.svg" alt="Google apps" class="btn-icon btn-icon-alt"/>
                            </button>
                        </div>

                        <div class="icons">
                            <button id="header-profile" class="btn tooltip" >
                            <img src="/app/assets/img/profile.jpg" class="btn-icon header-profile"/>
                            </button>
                        </div>
                    </div>

                    </header>
                    {/* <Header/> */}
{/* <!-- LEFT SIDEBAR --> */}

                    <section class="left-sidebar">

                    <div class="left-sidebar-compose">
                        <button class="sidebar-btn-compose">
                        <img src="/app/assets/icons/create_32dp.png" alt="Compose a new email" class="sidebar-btn-compose-icon"/>
                        <span class="sidebar-btn-compose-title">Compose</span>
                        </button>
                    </div>

                    <div class="left-siderbar-label">
                        <ul class="labels category-item-list">

                        <li class="category-item active">
                            <div>
                            <svg class="category-item-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"/></svg>
                            <span class="category-item-title">Inbox</span>
                            </div>
                            <span class="category-item-number" >32</span>
                        </li>

                        <li class="category-item">
                            <div>
                            <svg class="category-item-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                            <span class="category-item-title">Starred</span>
                            </div>
                            <span class="category-item-number">5</span>
                        </li>

                        <li class="category-item">
                            <div>
                            <svg class="category-item-icon" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M11.99,2C6.47,2,2,6.48,2,12s4.47,10,9.99,10C17.52,22,22,17.52,22,12S17.52,2,11.99,2z M15.29,16.71L11,12.41V7h2v4.59 l3.71,3.71L15.29,16.71z"/></g></svg>
                            <span class="category-item-title">Snoozed</span>
                            </div>
                            <span class="category-item-number"></span>
                        </li>

                        <li class="category-item">
                            <div>
                            <svg class="category-item-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                            <span class="category-item-title">Sent</span>
                            </div>
                            <span class="category-item-number"></span>
                        </li>

                        <li class="category-item">
                            <div>
                            <svg class="category-item-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"/></svg>
                            <span class="category-item-title">Drafts</span>
                            </div>
                            <span class="category-item-number"></span>
                        </li>

                        <ul class="category-item category-item-sub">
                            <div>
                            <svg class="category-item-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
                            <span class="category-item-title">More</span>
                            </div>

                        </ul>

                        </ul>
                    </div>

                    <div class="left-sidebar-connect" >

                        <div class="connect meets" >
                        <div class="drag-btn-container">
                            <button class="drag-btn"></button>
                        </div>

                        <span class="category-title" >Meets</span>

                        <div class="category-item" >
                            <div>
                            <svg class="category-item-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
                            <span class="category-item-title" >New meeting</span>
                            </div>
                        </div>
                        
                        <div class="category-item" >
                            <div>
                            <svg class="category-item-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"/><path d="M0 0h24v24H0zm0 0h24v24H0z" fill="none"/></svg>
                            <span class="category-item-title" >Join a meeting</span>
                            </div>
                        </div>

                        </div>
                        
                        <div class="connect hangouts" >

                        <span class="category-title" >Hangouts</span>

                        <div class="hangouts-img" >
                            <img class="category-img" src="/app/assets/icons/hangouts-common.png" alt=""/>
                        </div>

                        <div class="category-item-btn">
                            <button class="sidebar-btn-lg">
                            Sign in
                            </button>
                        </div>

                        <div class="connect-info">
                            <span>Signing in will sign you into Hangouts across Google</span>
                            <a href="#" class="connect-link">
                            Learn more
                            </a>
                        </div>

                        </div>

                    </div>

                    <div class="left-sidebar-footer">

                        <button class="btn btn-sidebar">
                        <img src="app/assets/icons/person_black_24dp.svg" class="btn-icon-sidebar btn-icon-sm"/>
                        </button>/

                        <butto class="btn btn-sidebar active">
                        <img src="app/assets/icons/hangout_black_20dp.png" class="btn-icon-sidebar btn-icon-sm active"/>
                        </butto>

                    </div>

                    </section>
                    {/* <Leftbar/> */}
{/* <!-- BODY --> */}

                <section class="inbox" >
                    
                    {/* <!-- MAIL --> */}

                    <div class="inbox-menu">

                        <div class="inbox-menu-group">

                        <div class="inbox-btn-group" >
                            <button class="btn-alt">
                            <img src="/app/assets/icons/check_box_outline_blank_black_24dp.svg" alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover"/>
                            </button>

                            <button class="btn-sm btn-alt">
                            <img src="/app/assets/icons/arrow_drop_down_black_24dp.svg" alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover"/>
                            </button>
                        </div>

                        <button class="btn">
                            <img src="/app/assets/icons/refresh_black_24dp.svg" alt="Refresh" class="btn-icon btn-icon-sm btn-icon-alt btn-icon-hover"/>
                        </button>

                        <button class="btn">
                            <img src="/app/assets/icons/more_vert_black_20dp.png" alt="More" class="btn-icon btn-icon-sm btn-icon-alt btn-icon-hover"/>
                        </button>

                        </div>

                        <div class="inbox-menu-group">

                        <button class="btn-lg btn-alt" >
                            <div class="inbox-menu-pagination">
                            1-50 of 262
                            </div>
                        </button>

                        <div class="inbox-menu-pagination-btn">
                            <button class="btn btn-nofill btn-pagination">
                            <img src="/app/assets/icons/chevron_left_black_24dp.svg" alt="Newer" class="btn-icon-sm btn-icon-alt"/>
                            </button>

                            <button class="btn btn-pagination">
                            <img src="/app/assets/icons/chevron_right_black_24dp.svg" alt="Older" class="btn-icon-sm btn-icon-alt btn-icon-hover"/>
                            </button>
                        </div>

                        <div class="inbox-btn-group" >
                            <button class="btn-alt">
                            <img src="/app/assets/icons/keyboard_black_24dp.svg" alt="Input tools on/off" class="btn-icon-sm btn-icon-alt" />
                            </button>

                            <button class="btn-sm btn-alt">
                            <img src="/app/assets/icons/arrow_drop_down_black_24dp.svg" alt="Select input tool" class="btn-icon-sm btn-icon-alt"/>
                            </button>
                        </div>

                        </div>

                    </div>

                    <div class="inbox-container">

                        <div class="inbox-category">

                        <div id="ctg-primary" class="inbox-category-item active">
                            <svg class="inbox-category-icon btn-icon btn-icon-sm btn-icon-alt active" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"/></svg>
                            <span class="inbox-category-title">Primary</span>
                        </div>

                        <div class="inbox-category-item">
                            <svg class="inbox-category-icon btn-icon btn-icon-alt btn-icon-sm" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                            <span class="inbox-category-title">Social</span>
                        </div>

                        <div class="inbox-category-item">
                            <svg class="inbox-category-icon btn-icon btn-icon-alt btn-icon-sm" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/></svg>
                            <span class="inbox-category-title">Promotions</span>
                        </div>

                        </div>

                        {/* <!-- MAIL CONTENT --> */}
                        
                        <div class="content">
                        <div class="mail">
                            
                            <div class="inbox-message-item">

                                <div class="checkbox" >
                                <button class="btn">
                                    <img src="/app/assets/icons/check_box_outline_blank_black_24dp.svg" alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon"/>
                                </button>
                                </div>

                                <div class="message-group-hidden">
                                <button class="btn-alt btn-nofill drag-indicator" >
                                    <img src="/app/assets/icons/drag_indicator_black_24dp.svg" alt="Drag" class="btn-icon-sm btn-icon-alt btn-icon-disabled" />
                                </button>
                                </div>

                                <button class="btn star">
                                <img src="/app/assets/icons/star_border_black_24dp.svg" alt="Not starred" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon"/>
                                </button>

                                <div class="message-default" >

                                <div class="message-sender message-content unread" >/
                                    <span >Cascadom</span>
                                </div>
                    
                                <div class="message-subject message-content unread">
                                    <span>Dev Horror Stories: 👻 2000 lines of inline styles</span>
                                </div>

                                <div class="message-seperator message-content"> - </div>

                                <div class="message-body message-content">
                                    <span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta error beatae optio ea, quod harum. Iure ab sed, dolores eos repudiandae inventore magnam id modi blanditiis harum at. Facere, exercitationem.</span>
                                </div>
                                
                                <div class="gap message-content" > &nbsp; </div>

                                <div class="message-date center-text unread" >
                                    <span>12:09 AM</span>
                                </div>

                                </div>

                                <div class="message-group-hidden" >
                                <div class="inbox-message-item-options">
                                    <button class="btn">
                                    <img src="/app/assets/icons/archive_black_24dp.svg" alt="Archive" class="btn-icon-sm btn-icon-alt btn-icon-hover"/>
                                    </button>
                    
                                    <button class="btn">
                                    <img src="/app/assets/icons/delete_black_24dp.svg" alt="Delete" class="btn-icon-sm btn-icon-alt btn-icon-hover"/>
                                    </button>
                    
                                    <button class="btn">
                                    <img src="/app/assets/icons/mark_as_unread_black_24dp.svg" alt="Mark as unread" class="btn-icon-sm btn-icon-alt btn-icon-hover"/>
                                    </button>
                    
                                    <button class="btn">
                                    <img src="/app/assets/icons/access_time_filled_black_24dp.svg" alt="Snooze" class="btn-icon-sm btn-icon-alt btn-icon-hover"/>
                                    </button>
                                </div>
                                </div>

                            </div>
                            
                            <div class="inbox-message-item  message-default-unread">

                                <div class="checkbox">
                                <button class="btn">
                                    <img src="/app/assets/icons/check_box_outline_blank_black_24dp.svg" alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon"/>
                                </button>
                                </div>

                                <div class="message-group-hidden">
                                <button class="btn-alt btn-nofill drag-indicator" >
                                    <img src="/app/assets/icons/drag_indicator_black_24dp.svg" alt="Drag" class="btn-icon-sm btn-icon-alt btn-icon-disabled" />
                                </button>
                                </div>

                                <div >
                                <button class="btn star">
                                    <img src="/app/assets/icons/star_border_black_24dp.svg" alt="Not starred" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon"/>
                                </button>
                                </div>

                                <div class="message-default" >

                                <div class="message-sender message-content" >
                                    <span >Mr. President</span>
                                </div>
                    
                                <div class="message-subject message-content">
                                    <span>Thanks for Saving the World</span>
                                </div>

                                <div class="message-seperator message-content"> - </div>

                                <div class="message-body message-content">
                                    <span> Party at my crib next weekend, amet consectetur adipisicing elit. Soluta error beatae optio ea, quod harum. Iure ab sed, dolores eos repudiandae inventore magnam id modi blanditiis harum at. Facere, exercitationem.</span>
                                </div>
                                
                                <div class="gap message-content" > &nbsp; </div>

                                <div class="message-date center-text" >
                                    <span>4:23 PM</span>
                                </div>

                                </div>

                                <div class="message-group-hidden" >
                                <div class="inbox-message-item-options">
                                    <button class="btn">
                                    <img src="/app/assets/icons/archive_black_24dp.svg" alt="Archive" class="btn-icon-sm btn-icon-alt btn-icon-hover"/>
                                    </button>
                    
                                    <button class="btn">
                                    <img src="/app/assets/icons/delete_black_24dp.svg" alt="Delete" class="btn-icon-sm btn-icon-alt btn-icon-hover"/>
                                    </button>
                    
                                    <button class="btn">
                                    <img src="/app/assets/icons/mark_as_unread_black_24dp.svg" alt="Mark as unread" class="btn-icon-sm btn-icon-alt btn-icon-hover"/>
                                    </button>
                    
                                    <button class="btn">
                                    <img src="/app/assets/icons/access_time_filled_black_24dp.svg" alt="Snooze" class="btn-icon-sm btn-icon-alt btn-icon-hover"/>
                                    </button>
                                </div>
                                </div>

                            </div>
                            
                            <div class="inbox-message-item  message-default-unread">

                                <div class="checkbox">
                                <button class="btn">
                                    <img src="/app/assets/icons/check_box_outline_blank_black_24dp.svg" alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon"/>
                                </button>
                                </div>

                                <div class="message-group-hidden">
                                <button class="btn-alt btn-nofill drag-indicator" >
                                    <img src="/app/assets/icons/drag_indicator_black_24dp.svg" alt="Drag" class="btn-icon-sm btn-icon-alt btn-icon-disabled" />/
                                </button>
                                </div>

                                <div >
                                <button class="btn star">
                                    <img src="/app/assets/icons/star_border_black_24dp.svg" alt="Not starred" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon"/>
                                </button>/
                                </div>

                                <div class="message-default" >

                                <div class="message-sender message-content" >
                                    <span >Spotify</span>
                                </div>
                    
                                <div class="message-subject message-content">
                                    <span>🎉 💰 New Job who this? </span>
                                </div>

                                <div class="message-seperator message-content"> - </div>

                                <div class="message-body message-content">
                                    <span> Hello, Habib! We are glad to break the news to you, amet consectetur adipisicing elit. Soluta error beatae optio ea, quod harum. Iure ab sed, dolores eos repudiandae inventore magnam id modi blanditiis harum at. Facere, exercitationem.</span>
                                </div>
                                
                                <div class="gap message-content" > &nbsp; </div>

                                <div class="message-date center-text" >
                                    <span>2:01 PM</span>
                                </div>

                                </div>

                                <div class="message-group-hidden" >
                                <div class="inbox-message-item-options">
                                    <button class="btn">
                                    <img src="/app/assets/icons/archive_black_24dp.svg" alt="Archive" class="btn-icon-sm btn-icon-alt btn-icon-hover"/>
                                    </button>
                    
                                    <button class="btn">
                                    <img src="/app/assets/icons/delete_black_24dp.svg" alt="Delete" class="btn-icon-sm btn-icon-alt btn-icon-hover"/>
                                    </button>
                    
                                    <button class="btn">
                                    <img src="/app/assets/icons/mark_as_unread_black_24dp.svg" alt="Mark as unread" class="btn-icon-sm btn-icon-alt btn-icon-hover"/>
                                    </button>
                    
                                    <button class="btn">
                                    <img src="/app/assets/icons/access_time_filled_black_24dp.svg" alt="Snooze" class="btn-icon-sm btn-icon-alt btn-icon-hover"/>
                                    </button>
                                </div>
                                </div>

                            </div>

                        </div>

                        {/* <!-- FOOTER --> */}

                        <footer class="activity">
                            <div class="footer-container">

                            <div class="footer-item">
                                <span class="progressbar" ></span>
                                <a href="#" class="footer-link footer-text-sm">

                                
                                <div class="footer-group">
                                    <span> 0 GB of 15 GB used</span> 
                                    <span>
                                    <img src="/app/assets/icons/open_in_new_black_24dp.svg" alt="Google drive storage" class="btn-icon-alt btn-icon-sm"/>
                                    </span>
                                </div>

                                </a>
                            </div>

                            <div class="footer-item">
                                <a href="#`" class="footer-link footer-text-sm">Terms</a>
                                ·
                                <a href="#" class="footer-link footer-text-sm">Privacy</a>
                                ·
                                <a href="#" class="footer-link footer-text-sm">Program Policies</a>
                            </div>

                            <div class="footer-item">
                                <span class="footer-text-sm" >Last activity: 37 minutes ago</span>
                                
                                <div class="footer-group">
                                <a href="#" class="footer-link footer-text-sm">Details</a>
                                </div>
                            </div>

                            </div>
                        </footer>

                        </div>

                    </div>

                </section> 
                {/* <Gmailbody/> */}

{/* <!-- RIGHT SIDEBAR --> */}

                    <section class="app-container" >

                    <div class="app-group">

                        <div class="app-item">
                        <button class="btn">
                            <img src="app/assets/icons/calendar_2020q4_2x.png" alt="Calendar" class="btn-icon btn-icon-sm"/>
                        </button>
                        </div>

                        <div class="app-item">
                        <button class="btn">
                            <img src="app/assets/icons/keep_2020q4v3_2x.png" alt="Keep" class="btn-icon btn-icon-sm"/>
                        </button>
                        </div>

                        <div class="app-item">
                        <button class="btn">
                            <img src="app/assets/icons/tasks2_2x.png" alt="Tasks" class="btn-icon btn-icon-sm"/>
                        </button>
                        </div>

                        <div class="app-item">
                        <button class="btn">
                            <img src="app/assets/icons/contacts_2x.png" alt="Contacts" class="btn-icon btn-icon-sm"/>
                        </button>
                        </div>

                        <div class="btn btn-nofill" >
                        <div class="hrt-rule btn-icon-sm"></div>
                        </div>

                        <div class="app-item">
                        <button class="btn">
                            <img src="app/assets/icons/add_black_24dp.svg" alt="" class="btn-icon btn-icon-sm btn-icon-disabled"/>
                        </button>
                        </div>

                    </div>
                        <button class="btn">
                            <img src="./app/assets/icons/chevron_right_black_24dp.svg" alt="" class="btn-icon btn-icon-sm btn-icon-alt"/>
                        </button>

                    </section>
                    {/* <Rightbar/> */}

            </div>
        </div>
    )
}