"use client";
import { useState } from "react";
import "@/app/learn/style.css";
export default function Home() {
    const [activeSection, setActiveSection] = useState("introduction");

    const scamTypes = [
      'Investment Scams',
      'Ecommerce Scams',
      'Phishing Scams',
    ];

    return (
      <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Navbar */}
      <nav
        style={{
          backgroundColor: "#f0f0f0",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "1.2em" }}>
          Your Logo/Title
        </div>
        <ul style={{ listStyle: "none", display: "flex", margin: 0, padding: 0 }}>
          <li style={{ margin: "0 15px" }}>
            <a href="/learn" style={{ textDecoration: "none", color: "#333" }}>
              Education
            </a>
          </li>
          <li style={{ margin: "0 15px" }}>
            <a href="/community" style={{ textDecoration: "none", color: "#333" }}>
              Community
            </a>
          </li>
        </ul>
      </nav>
        <div className='container'>
            {/* Sidebar */}
            <div className='sidebar'>

                <div className="sidebar-item" onClick={() => setActiveSection("introduction")}>Introduction to Scams</div>
                <div className="sidebar-item" onClick={() => setActiveSection("types")}>Types of Scams</div>
                {/* <ScamDropDown scams={scamTypes}/> */}
                <div className="sidebar-item" onClick={() => setActiveSection("safety")}>How to Stay Safe from Scams?</div>
            </div>

            {/* Main Content */}
            <div className='content'>
                {activeSection === "introduction" && 
                (
                <div>
                  <h1>Introduction to Scams</h1>
                  <div className='image-container'>
                    <img src="/1.png" alt="Scam Awareness" />
                  </div>  
                  <p>                
                    A scam is designed to trick you into giving away your money, personal details, or data by offering an attractive deal or false information. 
                  </p>
                  <ul>
                    <li>Scammers could contact potential victims through various communication channels, such as phone calls, WhatsApp messages, SMSes, social media, and e-commerce platforms.</li>
                    <li>Scammers may target victims who unwittingly respond to their outreach and then deceive them, resulting in victims losing something of value to the scammers (usually transferring of money or virtual credits, or revealing personal particulars or credentials).</li>
                    <li>There is usually no face-to-face meeting between scammers and their victims throughout the engagement process.</li>
                  </ul>
                  <h2>
                    Common Signs of Scam
                  </h2>
                  <ul>
                    <li><b>Unusual communication:</b>The way they talk to you seems strange or different from normal</li>
                    <li><b>Communication from unverified sources:</b>You don't really know who is sending the messages.</li>
                    <li><b>Deals that are too good to be true:</b> Just like the first page that you saw!They promise benefits or opportunities that sound amazing but seem unrealistic.</li>
                    <li><b>Visible errors or signs of spoofing:</b>You can see mistakes or parts that look copied or fake.</li>
                    <li><b>Saying you must act now:</b>They try to make you feel like you need to act or respond urgently.</li>
                  </ul>
                  </div>
                )}
                {activeSection === "types" && 
                (
                  <div>
                    <h1>Types of Scams</h1>
                    <h2>Investment Scams</h2>
                    <div className='image-container'>
                    <img src="/2.png" alt="Scam Awareness" />
                  </div>  
                    <p>Victims of investment scams usually come across "investment opportunities" through internet searches or through recommendations from online friends. Once they were duped or had
                      been enticed by the false testimonials, they transferred funds to specified bank accounts or cryptocurrency wallets or made payments via their bank cards for "investment".</p>
                    <p>In some cases, victims would first receive small "profits" which led them to believe that this "investment" was true, enticing them to invest more money. Scammers may also use "investment"
                      websites or apps to display the victim's "profits" in order to convince the victims to invest more money. 
                    </p>
                    <h3>Common signs of phony invesments are:</h3>
                    <ul>
                      <li><b>Promises of high returns at low or no risk</b></li>
                      <li><b>Involvement of pressure tactics</b></li>
                      <li><b>Unverified track record</b></li>
                    </ul>
                    <h3>How to stay safe</h3>
                    <p><b>ADD:</b></p>
                    <ul>
                      <li>Privacy settings to your messaging app to prevent being added into unknown chatgroups</li>
                      <li>Security features such as 2 or multi-FA for banking apps</li>
                    </ul>
                    <p><b>TELL:</b></p>
                    <ul>
                      <li>Warn friends and family about the scam encounter</li>
                      <li>Report and block suspected scam accounts/chat groups</li>
                    </ul>
                    <h2>Phishing Scams</h2>
                    <div className='image-container'>
                      <img src="/3.png" alt="Scam Awareness" />
                    </div>  
                    <p>Phishing scams involve emails, messages, calls or advertisements by scammers where they pose as government officials, businesses or financial institutions.
                      Victims would be tricked into revealing sensitive information such as usernames, passwords, credit card information etc. Upon acquiring the victim information, scammers
                      would performed transactions on the victim's bank account. 
                    </p>
                    <h3>Common signs of phishing are:</h3>
                    <ul>
                      <li><b>Clickable links from random emails, messages or advertisements</b></li>
                      <li><b>Spoofed website addresses</b></li>
                      <li><b>Requests for OTP, personal or banking details</b></li>
                    </ul>
                    <h3>How to stay safe</h3>
                    <p><b>ADD:</b></p>
                    <ul>
                      <li>Only use official banking apps downloaded from official app stores to make transfers or payments.</li>
                    </ul>
                    <p><b>CHECK:</b></p>
                    <ul>
                      <li>You do not use clickable links or QR codes provided by unknown persons to make bank transfers or payments</li>
                      <li>Never disclose your personal information as well as OTP to anyone</li>
                      <li>Always verify the authencity of unsolicited clickable links</li>
                    </ul>
                    <p><b>TELL:</b></p>
                    <ul>
                      <li>Warn friends and family about the scam encounter</li>
                      <li>Report and block suspected scam accounts/chat groups</li>
                    </ul>
                    <h2>E-commerce Scams</h2>
                    <div className='image-container'>
                    <img src="/4.png" alt="Scam Awareness" />
                  </div>  
                  <p>E-commerce scams involve the sales of goods and services without physical meetups. Generally, victims would come across attractive deals 
                    on online marketplaces or social media but would fail to receive the goods or services. In some cases, the victims were the sellers who did not
                    receive payment after delivering the goods or services to scammers. The scammers often provided victims with fake screenshots as "proof of payment".
                  </p>
                  <h3>Common signs of e-commerce scams are:</h3>
                    <ul>
                      <li><b>Offers the item/service at an attractive price for a limited time</b></li>
                      <li><b>Needs you to click on links or install 3rd-party app sent via text messages to make payment</b></li>
                    </ul>
                    <h3>How to stay safe</h3>
                    <p><b>ADD:</b></p>
                    <ul>
                      <li>Security features such as 2FA for banking apps and set a transaction limit on payment accounts</li>
                    </ul>
                    <p><b>CHECK:</b></p>
                    <ul>
                      <li>Pay using secure payment options offered by the platform</li>
                      <li>Do not click on links or scan QR code sent via text messages by sellers</li>
                      <li>Never disclose your personal information as well as OTP to anyone</li>
                      <li>Always verify the authencity of unsolicited clickable links</li>
                    </ul>
                    <p><b>TELL:</b></p>
                    <ul>
                      <li>Warn friends and family about the scam encounter</li>
                    </ul>


                  </div>
                  )}
                {activeSection === "safety" && 
                (
                  <div>
                    <h1>How to Stay Safe from Scams?</h1>
                    <h3>Use anti-virus software</h3>
                    <p>Anti-virus apps can help detect malware and malicious phishing links are also key to safeguarding your devices and accounts. </p>
                    <h3>Always download from official App stores</h3>
                    <ul>
                      <li>Do not download apps from unknown or unofficial sources.</li>
                      <li>Only use official app stores such as Google Play Store (Android) or Apple App Store (iOS), as these platforms have measures in place to detect and remove malicious apps.</li>
                    </ul>
                    <h3>Enable 2FA whenever possible</h3>
                    <p>2FA uses more than one type of information to identify who you are to grant you access to your online account. There are two forms of 2FA. 
                      The first is usually something you know (password) while the second factor is something you have such as OTP from a digital token or an SMS 
                      that is sent to your mobile device. Another form of authentication involves biometrics, which includes fingerprints and face recognition.
                    </p>
                    <h3>Use strong passwords</h3>
                    <p>Strong passwords are key to keeping your accounts and personal information safe from cybercriminals. 
                      A strong password should consist of at least 12 characters. Use uppercase letters, lowercase letters, numbers and symbols to make it hard to crack. 
                    </p>
                  </div>
                )}
            </div>
        </div>
        </div>
    );
}
