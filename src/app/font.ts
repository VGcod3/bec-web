import {Anonymous_Pro} from 'next/font/google'
import {IBM_Plex_Mono} from 'next/font/google'

export const anonymous_pro = Anonymous_Pro(
    {weight: "700", subsets: ['latin', 'cyrillic', 'latin-ext'] }
)

export const ibm_plex_mono_bold = IBM_Plex_Mono(
    {weight: ["700"], subsets: ['cyrillic-ext']}
)
export const ibm_plex_mono = IBM_Plex_Mono(
    {weight: ["400"], subsets: ['cyrillic-ext']}
)

