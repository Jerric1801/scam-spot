"use client"

import Link from 'next/link'
import Image from 'next/image';
import '@/app/styles/home.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 

export default function HomePage() {
    const images = [
        '/home/home-image-1.jpg',
        '/home/home-image-2.jpg',
        '/home/home-image-3.jpg',
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [images.length]);

    useEffect(() => {
        let inactivityTimer: NodeJS.Timeout; // Explicitly type inactivityTimer as NodeJS.Timeout

        const resetInactivityTimer = () => {
            clearTimeout(inactivityTimer);
            inactivityTimer = setTimeout(() => {
                router.push('/scamgood');
            }, 60000);
        };

        resetInactivityTimer();

        const handleUserActivity = () => { // No explicit type needed for handleUserActivity as it's straightforward
            resetInactivityTimer();
        };

        document.addEventListener('click', handleUserActivity);

        return () => {
            clearTimeout(inactivityTimer);
            document.removeEventListener('click', handleUserActivity);
        };
    }, [router]);


    return (
        <div className="home-page">
            <div className="home-identity">
                <img src="uder_eats_logo.svg"></img>
            </div>
            <div className="home-container">
                <div className="home-image-slideshow-container">
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt={`Home Image ${index + 1}`}
                            fill={true}
                            style={{
                                objectFit: 'cover',
                                opacity: index === currentImageIndex ? 1 : 0,
                                transition: 'opacity 0.5s cubic-bezier(0.25, 0.1, 0.25, 1.0)',
                                visibility: index === currentImageIndex ? 'visible' : 'hidden',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                            }}
                            className="home-slideshow-image"
                        />
                    ))}
                </div>


                <div className="home-voucher-offer-container">
                    <div className="home-voucher-content-section">
                        <h2 className="home-voucher-headline">HUGE SAVINGS ALERT! Get Your FREE $50 Food Voucher! 🍕🍔</h2>
                        <p className="home-voucher-subheadline">
                            Limited Time Offer! Treat Yourself to Deliciousness on Us!
                        </p>
                        <div className="home-voucher-details">
                            <p>
                                Enjoy a <strong>$50 voucher</strong> to spend at any participating restaurant in the 'Uder Eats Network'!
                            </p>
                            <p className="home-voucher-conditions-hint">
                                <small>*Voucher valid for 30 days from redemption. Limited vouchers available. Participating restaurants may vary. <a href="/scam" style={{ color: 'inherit', textDecoration: 'underline' }}>See Terms & Conditions</a></small>
                            </p>
                        </div>
                        <div className="home-voucher-call-to-action">
                            <Link href="/scambad">
                                <button className="home-cta-button home-cta-1">Redeem Now</button>
                            </Link>
                            <Link href="/scambad">
                                <button className="home-cta-button home-cta-2">Next Time</button>
                            </Link>
                        </div>
                        <p className="home-voucher-fine-print">
                            <small>This exclusive offer is brought to you by Marketing Campaign Partners in association with Uder Eats Network. Don't miss out! Share with your friends!</small>
                        </p>
                    </div>

                    {/*  Terms and Conditions Section */}
                    <section id="terms" style={{ display: 'none' }}>
                        <h3>Terms and Conditions</h3>
                        <p>Voucher is valid for one-time use only. Not redeemable for cash.  Offer subject to change or cancellation without prior notice. Participating restaurants list available upon request and may vary by location. Voucher expires 30 days after redemption. Limited to one voucher per person.  Enjoy your meal!</p>
                        <p><small>For full terms and conditions, please contact customer support. </small> <a href="#" style={{ color: 'inherit', textDecoration: 'underline' }}>Contact Us</a> (Doesn't actually go anywhere significant).</p>
                    </section>
                </div>
            </div>
        </div>
    );
}