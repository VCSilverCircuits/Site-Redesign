import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gradient-tech border-t border-border text-white mt-10">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} VC Silver Circuits. All rights reserved.
                </p>
                <p className="text-sm text-muted-foreground">
                    Designed and hand built by{" "}
                    <a href="https://awdevsoftware.org" className="underline hover:text-primary">
                        awdevSoftware (Aaron)
                    </a>
                </p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="https://www.youtube.com/@VCSilverCircuitsFTC16158" target="_blank" className="hover:text-primary-glow transition-colors">
                        YouTube
                    </a>
                    <a href="https://www.facebook.com/VCSilverCircuits" target="_blank" className="hover:text-primary-glow transition-colors">
                        Facebook
                    </a>
                    <a href="https://www.instagram.com/vcsilvercircuits" target="_blank" className="hover:text-primary-glow transition-colors">
                        Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
