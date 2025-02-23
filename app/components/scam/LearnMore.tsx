import React from 'react';
import '@/app/components/scam/style.css'; // Import the global stylesheet
import Link from 'next/link';

const LearnMore = () => {
    const handleCopyLink = () => {
        // In a real application, you would implement the logic to copy the link to the clipboard
        alert('Link copied to clipboard');
        setLinkCopied(true);
        setTimeout(() => {
            setLinkCopied(false);
        }, 2000); // Reset state after 2 seconds
    };

    const [linkCopied, setLinkCopied] = React.useState(false);

    return (
        <>
            <section className="scam-learn-more-section">
                <div className="scam-learn-more-content">
                    <div className=''>
                        <h2 className="scam-sectionTitle">Learn More</h2>
                        <p className="scam-sectionText">Protect yourself by learning how to prevent being scammed.</p>
                        <Link href="/register">
                            <button className="scam-learnMoreButton">
                                Learn How to Prevent Scams
                                <svg
                                    className="scam-buttonIcon"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </button>
                        </Link>
                    </div>
                    <div className="scam-learn-more-image-container"> {/* Container for image */}
                        <img src="/scam/learn_more.jpg" alt="Learn More About Scams" className="scam-learn-more-image" />
                    </div>
                </div>
            </section>

            <section className="scam-section">
                <h2 className="scam-sectionTitle">Share the Test!</h2>
                <p className="scam-sectionText">Help your friends and family learn to spot scams too.</p>
                <div className="scam-shareContainer">
                    <input type="text" value="https://scamspot.netlify.app/" readOnly className="scam-shareInput" />
                    <button onClick={handleCopyLink} className="scam-button">
                        {linkCopied ? (
                            <>
                                <svg
                                    className="scam-buttonIcon"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                Copied!
                            </>
                        ) : (
                            <>
                                <svg
                                    className="scam-buttonIcon"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                </svg>
                                Copy Link
                            </>
                        )}
                    </button>
                </div>
            </section>
        </>
    );
};

export default LearnMore;