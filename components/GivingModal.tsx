
import React from 'react';

interface GivingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const GivingModal: React.FC<GivingModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-5xl bg-stone-900 rounded-2xl overflow-hidden shadow-2xl border border-amber-500/20">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="relative w-full aspect-video">
                    <img
                        src="/ways-to-give.png"
                        alt="Ways to Give"
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay Links - Positioning based on the provided image layout */}
                    {/* Cash App Area - Approx location */}
                    <a
                        href="https://cash.app/$WDCJCOGIC"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-[48%] right-[5%] w-[35%] h-[12%] z-10 opacity-0 hover:opacity-10 transition-opacity bg-amber-500 rounded cursor-pointer"
                        title="Give via Cash App: $WDCJCOGIC"
                    />

                    {/* PayPal Area - Approx location */}
                    <a
                        href="https://paypal.me/COGICDCJURISDICTION"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-[65%] right-[5%] w-[35%] h-[12%] z-10 opacity-0 hover:opacity-10 transition-opacity bg-amber-500 rounded cursor-pointer"
                        title="Give via PayPal"
                    />

                    {/* Zelle Area - Approx location */}
                    <a
                        href="mailto:FINANCIALSECRETARY@DCJCOGIC.ORG"
                        className="absolute top-[82%] right-[5%] w-[45%] h-[10%] z-10 opacity-0 hover:opacity-10 transition-opacity bg-amber-500 rounded cursor-pointer"
                        title="Zelle: FINANCIALSECRETARY@DCJCOGIC.ORG"
                    />
                </div>
            </div>
        </div>
    );
};

export default GivingModal;
