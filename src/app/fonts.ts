import LocalFont from 'next/font/local';
import { Anonymous_Pro, IBM_Plex_Mono } from 'next/font/google'

export const anonymous_pro = Anonymous_Pro(
    { weight: "700", subsets: ['latin', 'cyrillic', 'latin-ext'] }
)
export const ibm_plex_mono_bold = IBM_Plex_Mono(
    { weight: ["700"], subsets: ['cyrillic-ext'] }
)
export const ibm_plex_mono = IBM_Plex_Mono(
    { weight: ["300"], subsets: ['cyrillic-ext'] }
)

export const capture_it = LocalFont({
    preload: true,
    src: '../fonts/CaptureIt.ttf'
});