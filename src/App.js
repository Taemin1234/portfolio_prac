import style from './css/Style.module.css'

function App() {
  return (
    <div className={style.container}>
      {/* <Header/> */}
      {/* <Main/> */}
      {/* <About/> */}
      {/* <작품/> */}
      {/* <Contact/> */}


      <header className={style.header}>
        <a href="/" className={style.header_link}>Home</a>
        <a href="/about" className={style.header_link}>About</a>
        <a href="/Works" className={style.header_link}>Works</a>
        <a href="/contact" className={style.header_link}>Contact</a>
      </header>
      <main>
        <section className={style.main}>
          <div>
            <h1 data-text="TM's&nbsp;Portfolio" className={style.main_title}>TM's&nbsp;Portfolio</h1>
            <p className={style.main_subtitle}>송태민의 포트폴리오입니다.</p>
          </div>
          <div className={style.arrow_wrap}>
            <div className={`${style.arrow} ${style.top}`}></div>
            <div className={`${style.arrow} ${style.middle}`}></div>
            <div className={`${style.arrow} ${style.bottom}`}></div>
          </div>
        </section>
        <section className={`${style.about} ${style.section}`}>
          <h2 className={style.title}>About</h2>
          <div className={style.text_box}>
            <div className={style.des_box}>
              <p className={style.name}>송태민</p>
              <p className={style.des}>
                항상 고민하고 노력하는 개발자가 되려 합니다.<br/>
                같은 목적지라도 어떻게 효율적이고 좋은 방법으로 갈지 고민하고<br/>
                처음 가는 길도 생각하며 나아가면 나의 길로 만들 수 있습니다.
              </p>
            </div>
            <div>
              <ul>
                <li className={style.info_list}>
                  <p className={style.title}>생년월일</p>
                  <p className={style.content}>1994.11.22</p>
                </li>
                <li className={style.info_list}>
                  <p className={style.title}>경력</p>
                  <ul>
                    <li>페이잇 : 2022.03 ~ 2022.12 (스타트업) - 퍼블리셔</li>
                    <li>코드파트너즈 : 2023.02 ~  (웹에이전시) - 퍼블리셔</li>
                  </ul>
                </li>
                <li>
                  <a href='#link' title='새 창 열림' target="_blank">벨로그</a>
                  <a href='#link' title='새 창 열림' target="_blank">깃허브</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
