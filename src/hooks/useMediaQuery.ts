import { useState, useEffect } from 'react';
import { breakPoints } from '../utils/constants/mediaBreakpoints'

export const useMediaQuery = (): 'desktop' | 'tablet' | 'mobile' => {

    const [platform, setPlatform] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

    useEffect(() =>{
        const matchIsDesktop = window.matchMedia(breakPoints.desktopBreakpoint);
        const listener = () => { 
            if(matchIsDesktop.matches) setPlatform('desktop');
        }
        matchIsDesktop.addEventListener("change", listener);
        return () => matchIsDesktop.removeEventListener("change", listener);
    }, [])

    useEffect(() =>{
        const matchIsTablet = window.matchMedia(breakPoints.tabletBreakpoint);
        const listener = () => { 
            if(matchIsTablet.matches) setPlatform('tablet');
        }
        matchIsTablet.addEventListener("change", listener);
        return () => matchIsTablet.removeEventListener("change", listener);
    }, [])

    useEffect(() =>{
        const matchIsMobile = window.matchMedia(breakPoints.mobileBreakpoint);
        const listener = () => {  
            if(matchIsMobile.matches) setPlatform('mobile'); 
        }
        matchIsMobile.addEventListener("change", listener);
        return () => matchIsMobile.removeEventListener("change", listener);
    }, [])

    return platform;
}