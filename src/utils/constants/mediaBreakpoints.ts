interface IMediaBreakpoints {
    desktopBreakpoint: string,
    tabletBreakpoint: string,
    mobileBreakpoint: string,
}

export const breakPoints: IMediaBreakpoints = {
    desktopBreakpoint: "(min-width: 1200px)",
    tabletBreakpoint: "(min-width: 768px) and (max-width: 1200px)",
    mobileBreakpoint: "(min-width: 320px) and (max-width: 767px)",
}