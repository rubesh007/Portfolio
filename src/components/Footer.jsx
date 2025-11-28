import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const Footer = () => {
    return (
        <footer className="bg-background border-t border-neon-cyan/20 py-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-neon-cyan/5 via-background to-background pointer-events-none"></div>
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left relative z-10">
                    <p className="font-bold text-lg text-glow-cyan">Rubesh<span className="text-neon-cyan">.</span></p>
                    <p className="text-sm text-muted-foreground mt-2">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-6 relative z-10">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a href="https://github.com/rubesh007" className="text-muted-foreground hover:text-neon-cyan hover:text-glow-cyan transition-colors">
                                    <Github size={20} />
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>GitHub</p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a href="https://www.instagram.com/_.mr.ruby._?igsh=MWgwemZoNGN6aGRjaQ==" className="text-muted-foreground hover:text-neon-cyan hover:text-glow-cyan transition-colors">
                                    <Instagram size={20} />
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Instagram</p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a href="https://www.linkedin.com/in/rubesh-kumar-s-674804384?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-muted-foreground hover:text-neon-cyan hover:text-glow-cyan transition-colors">
                                    <Linkedin size={20} />
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>LinkedIn</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
