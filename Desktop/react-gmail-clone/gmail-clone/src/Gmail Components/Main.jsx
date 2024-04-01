import React from "react";
import Header from "./Header";
import Leftbar from "./Leftbar";
import Gmailbody from "./Gmailbody";
import Rightbar from "./Rightbar";
import Index from './Index.css'
import { Routes,Route } from "react-router-dom";
import Snoozed from "./Snoozed";
import Starred from "./Starred";
import Drafts from "./Drafts";


export default function Main() {
    
    return (
        <div class="body-wrapper" >
            
            <Header />
            <Leftbar />
            <Routes>
                <Route path="/" element={<Gmailbody param=""/>} />
                <Route path="/inbox" element={<Gmailbody param="Inbox"/>} />
                <Route path="/sent" element={<Gmailbody param="sent"/> } />
                <Route path="/snoozed" element={<Snoozed/> } />
                <Route path="/starred" element={<Starred/> } />
                <Route path="/drafts" element={<Drafts/> } />
            </Routes>
            {/* <Gmailbody /> */}
            <Rightbar/>
            
        </div>
    )
}