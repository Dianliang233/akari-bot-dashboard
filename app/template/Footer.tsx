import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import Image from 'next/image'
import Logo from '@/app/assets/logo.svg'
import Icon from '@mdi/react'
import {
  mdiWeb,
  mdiNewspaperVariantOutline,
  mdiEmail,
  mdiGithub,
  mdiLightningBolt,
  mdiScript,
  mdiLock,
} from '@mdi/js'

export default function Footer() {
  const bilibili =
    'M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z'

  return (
    <footer className="p-9 flex flex-col items-center justify-center bg-slate-900 text-white">
      <div className="container flex flex-col md:flex-row justify-between md:items-end">
        <div>
          <Section>
            <LinkLabel>关注我们</LinkLabel>

            <Button
              href="https://teahouse.team/"
              title="官网"
              icon={mdiWeb}
            ></Button>
            <Button
              href="https://story.teahouse.team/"
              title="博客"
              icon={mdiNewspaperVariantOutline}
            ></Button>
            <Button
              href="mailto:admin@teahou.se"
              title="邮箱"
              icon={mdiEmail}
            ></Button>
            <Button
              href="https://space.bilibili.com/406275313"
              title="哔哩哔哩"
              icon={bilibili}
            ></Button>
            <Button
              href="https://github.com/Teahouse-Studios"
              title="GitHub"
              icon={mdiGithub}
            ></Button>
            <Button
              href="https://afdian.net/@teahouse"
              title="爱发电"
              icon={mdiLightningBolt}
            ></Button>
          </Section>
          <Section>
            <LinkLabel>产品</LinkLabel>

            <Button href="https://meme.teahouse.team/">梗体中文</Button>
            <Button href="https://bot.teahouse.team/">小可</Button>
          </Section>

          <Section>
            <LinkLabel>法律</LinkLabel>

            <Button href="https://teahouse.team/terms" icon={mdiScript}>
              服务条款
            </Button>
            <Button href="https://teahouse.team/privacy" icon={mdiLock}>
              隐私政策
            </Button>
          </Section>
        </div>
        <div className="text-center md:text-right text-sm flex flex-col gap-1">
          <div>
            <a
              href="https://teahouse.team/"
              target="_blank"
              rel="noopener noreferrer"
              title="Teahouse Studios"
            >
              <Image
                src={Logo}
                className="inline-block w-auto invert h-16"
                alt="Teahouse Studios"
                loading="lazy"
              />
            </a>
          </div>
          <div>
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-white no-underline"
            >
              蜀 ICP 备 2022011374 号-1
            </a>
          </div>
          <div>© 2022 成都问谛居科技有限公司</div>
        </div>
      </div>
    </footer>
  )
}

function Section({ children }: { children: ReactNode }) {
  return <section className="mb-1 flex items-center gap-1">{children}</section>
}

function LinkLabel({ children }: { children: ReactNode }) {
  return <span className="block text-xs md:inline mr-3">{children}</span>
}

interface ButtonProps extends ComponentPropsWithoutRef<'a'> {
  children?: ReactNode
  icon?: string
}

function Button({ children, icon, ...props }: ButtonProps) {
  return (
    <a
      className="inline-flex p-2 text-white text-sm gap-1 items-center transition-all hover:bg-white hover:bg-opacity-10 rounded-md"
      {...props}
    >
      {icon && <Icon path={icon} className="block h-6" />}
      {children}
    </a>
  )
}
