"use client"

import "@/app/components/scam/style.css" // Import your global stylesheet
import React, { useState } from 'react';

const ScamVisual = () => {
    const scamPoints = [
        { number: 1, summary: "Overly Enthusiastic & Urgent Language", details: "The use of all caps, exclamation points, and words like 'HUGE' and 'FREE' is designed to grab attention and create a sense of urgency and excitement. Legitimate offers are usually presented in a more measured tone." },
        { number: 2, summary: "Vague and Generic Details", details: "The offer mentions 'Uder Eats Network' (misspelled and similar to a real brand) and 'participating restaurants may vary,' lacking specific details. Legitimate offers are usually clear and transparent about where and how you can redeem them." },
        { number: 3, summary: "Call to Action and Button Design", details: "Having prominent buttons encourages immediate action, reducing the time for users to think critically. The 'Redeem Now' call to action is designed to capitalize on the excitement and perceived urgency." },
        { number: 4, summary: "Sense of Urgency & Pressure", details: "Creating a fear of missing out (FOMO) and encouraging sharing is a tactic to make the offer go viral quickly, which is beneficial for scams to reach more victims rapidly." },
        { number: 5, summary: "Generic Brand Association", details: "Mentioning 'Marketing Campaign Partners' in association with 'Uder Eats Network' is vague and less trustworthy.  Reputable brands usually promote offers directly or through well-known partners, not unnamed entities." },
    ];

    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="scamVisualComponentWrapper"> {/* Wrapper for the whole component */}
            <div className="visualContainer">
                <img className="scamImage" src="/scam/visual.png" alt="Scam Website Visual with Highlights" />
                <div className="highlightCircle circle1"></div>
                <div className="highlightCircle circle2"></div>
                <div className="highlightCircle circle3"></div>
            </div>

            {/* Accordion Section */}
            <div className="scam-accordion-container">
                <h2>Why This Might Be a Scam:</h2>
                {scamPoints.map((point, index) => (
                    <div key={index} className="scam-accordion-item">
                        <button
                            className="scam-accordion-header"
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={expandedIndex === index}
                            aria-controls={`scam-content-${index}`}
                        >
                            <span className="scam-number-circle">{point.number}</span>
                            {point.summary}
                            <span className="scam-accordion-icon">
                                {expandedIndex === index ? '-' : '+'}
                            </span>
                        </button>
                        <div
                            id={`scam-content-${index}`}
                            className={`scam-accordion-content ${expandedIndex === index ? 'expanded' : ''}`}
                            aria-hidden={expandedIndex !== index}
                        >
                            <p>{point.details}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ScamVisual;