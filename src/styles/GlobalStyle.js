import { createGlobalStyle } from "styled-components";

import UnboundRegular from '../fonts/unbounded/Unbounded-Regular.woff'
import UnboundBold from '../fonts/unbounded/Unbounded-Bold.woff'
import UnboundExtraBold from '../fonts/unbounded/Unbounded-ExtraBold.woff'

import Mbc1961 from '../fonts/mbc/MBC1961.woff'

import PretendardMed from '../fonts/pretendard/Pretendard-Medium.woff2'
import PretendardBold from '../fonts/pretendard/Pretendard-Bold.woff2'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Unbounded';
        src: local("Unbounded"), url(${UnboundRegular}) format('woff');
        font-weight: 500;
    }
    @font-face {
        font-family: 'Unbounded';
        src: local("Unbounded"), url(${UnboundBold}) format('woff');
        font-weight: 700;
    }
    @font-face {
        font-family: 'Unbounded';
        src: local("Unbounded"), url(${UnboundExtraBold}) format('woff');
        font-weight: 900;
    }

    @font-face {
        font-family: 'Mbc1961';
        src: local("Mbc1961"), url(${Mbc1961}) format('woff');
        font-weight: 500;
    }

    @font-face {
        font-family: 'Pretendard';
        src: local("Pretendard"), url(${PretendardMed}) format('woff2');
        font-weight: 500;
    }
    @font-face {
        font-family: 'Pretendard';
        src: local("Pretendard"), url(${PretendardBold}) format('woff2');
        font-weight: 700;
    }
`

export default GlobalStyle