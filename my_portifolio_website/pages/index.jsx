import Head from 'next/head'
import { useEffect, useState } from 'react'

const ORDER = ['system', 'light', 'dark']

export default function Home() {
  const [mode, setMode] = useState('system')

  useEffect(() => {
    let saved = 'system'
    try {
      const s = localStorage.getItem('theme')
      if (s === 'light' || s === 'dark' || s === 'system') saved = s
    } catch {}
    setMode(saved)

    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      let cur = 'system'
      try {
        const s = localStorage.getItem('theme')
        if (s === 'light' || s === 'dark' || s === 'system') cur = s
      } catch {}
      if (cur === 'system') {
        document.documentElement.setAttribute('data-theme', mq.matches ? 'dark' : 'light')
      }
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const cycle = () => {
    const next = ORDER[(ORDER.indexOf(mode) + 1) % ORDER.length]
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const eff = next === 'system' ? (dark ? 'dark' : 'light') : next
    document.documentElement.setAttribute('data-theme', eff)
    try {
      localStorage.setItem('theme', next)
    } catch {}
    setMode(next)
  }

  return (
    <>
      <Head>
        <title>Hemang Ahuja</title>
      </Head>
      <div className="wrap">
        <nav>
          <a className="wordmark" href="#">
            <span className="prompt">~/</span>hemang.xyz
          </a>
          <button className="theme-btn" onClick={cycle} aria-label="Switch color theme">
            theme: {mode}
          </button>
          <span className="links">
            <a href="#about">about</a>
            <a href="#work">work</a>
            <a href="#writing">writing</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ whiteSpace: 'nowrap' }}>
              resume &#8599;
            </a>
          </span>
        </nav>

        <div className="term" id="about">
          <div className="term-bar">
            <span className="dot r"></span>
            <span className="dot y"></span>
            <span className="dot g"></span>
            <span className="term-title">hemang@xyz: ~</span>
          </div>
          <div className="term-body">
            <div className="cmd">
              <span className="prompt">$</span> whoami
            </div>
            <div className="out">
              <h1>Hemang Ahuja</h1>
            </div>
            <div className="cmd">
              <span className="prompt">$</span> cat about.txt
            </div>
            <div className="out bio">
              Software engineer in Bangalore.
              <br />
              <span className="dim">
                I like security and databases more than my job description suggests. I play chess, go to the gym
                to undo what a desk job does, and sometimes write poetry. I build tools to fix things that
                annoy me.
              </span>
            </div>
            <div className="cmd">
              <span className="prompt">$</span> <span className="cursor"></span>
            </div>
          </div>
        </div>

        <section id="work">
          <div className="cmd">
            <span className="prompt">$</span> ls work/ <span className="tag"># day job, the short version</span>
          </div>
          <div className="out">
            <div className="item">
              <span className="name">ai-eval-pipeline</span>
              <div className="desc">
                async evaluation pipeline for AI apps - saves <b>6+ hours</b> of manual testing every production
                release
              </div>
            </div>
            <div className="item">
              <span className="name">otel-sdk</span>
              <div className="desc">
                OpenTelemetry tracing SDK used by <b>5+ AI agents</b> across teams
              </div>
            </div>
            <div className="item">
              <span className="name">renovator</span>
              <div className="desc">automates dependency maintenance with bullmq, redis background jobs and github webhooks</div>
            </div>
            <div className="item">
              <span className="name">autolocal</span>
              <div className="desc">debug Go microservices locally instead of fighting the shared environment</div>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="cmd">
            <span className="prompt">$</span> ls projects/
          </div>
          <div className="out">
            <div className="item">
              <span className="name">
                <a href="https://www.hemang.xyz/just-chatting">just-chatting</a>
              </span>{' '}
              <span className="tag"># live</span>
              <div className="desc">channel-based messaging with audio and video calls - next.js, pusher, jitsi</div>
            </div>
            <div className="item">
              <span className="name">
                <a href="https://github.com/cyscomvit/cyscom-recruitments">cyscom-recruitments</a>
              </span>
              <div className="desc">recruitment portal for the cyscom vit chapter - next.js, firebase</div>
            </div>
            <div className="item">
              <span className="name">
                <a href="https://github.com/hemangahuja/coordinate-training">chess-coordinate-trainer</a>
              </span>
              <div className="desc">pygame drill for square notation, because board vision is a skill</div>
            </div>
            <div className="item">
              <span className="name">
                <a href="https://github.com/hemangahuja/pyjamas_forms">pyjamas</a>
              </span>
              <div className="desc">config-driven form generator with per-field aes encryption before storage</div>
            </div>
          </div>
        </section>

        <section id="writing">
          <div className="cmd">
            <span className="prompt">$</span> ls writing/
          </div>
          <div className="out">
            <div className="item">
              <span className="name">
                <a href="https://medium.com/@hemangahujaeotw">technical</a>
              </span>
              <div className="desc">
                security writing on medium, including a published piece on the birthday attack and hash collisions
                for OWASP VITCC
              </div>
            </div>
            <div className="item">
              <span className="name">
                <a href="https://blog.cyscomvit.com/2021/10/slow-loris-attack.html">slow-loris-attack</a>
              </span>
              <div className="desc">low-and-slow http attack that starves web servers - cyscom vit blog</div>
            </div>
            <div className="item">
              <span className="name">
                <a href="https://blog.cyscomvit.com/2021/05/a-beginners-guide-to-buffer-overflow.html">buffer-overflow</a>
              </span>
              <div className="desc">intro to buffer overflow attacks in c - cyscom vit blog</div>
            </div>
            <div className="item">
              <span className="name">
                <a href="https://www.instagram.com/lil.peep.west.delhi/">poetry</a>
              </span>
              <div className="desc">poems, occasionally</div>
            </div>
          </div>
        </section>

        <footer>
          <span>
            <a href="https://github.com/hemangahuja">github</a> /{' '}
            <a href="https://www.linkedin.com/in/hemangahuja/">linkedin</a> /{' '}
            <a href="mailto:hemangahujaeotw@gmail.com">email</a>
          </span>
          <span>exit 0</span>
        </footer>
      </div>
    </>
  )
}




