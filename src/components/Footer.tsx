import { GitBranch, Link2, ExternalLink } from 'lucide-react'
import type { Translations } from '../i18n/translations'

interface Props { tr: Translations }

const SocialIcons = [GitBranch, Link2, ExternalLink]

export default function Footer({ tr }: Props) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 dark:bg-black border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-white font-bold text-lg">
                n3n<span className="text-blue-400">.ai</span>
              </span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed mb-5">{tr.footer.desc}</p>
            <div className="flex gap-3">
              {SocialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                >
                  <Icon size={14} className="text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {(Object.keys(tr.footer.cols) as Array<keyof typeof tr.footer.cols>).map((category) => (
            <div key={category}>
              <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">{category}</h4>
              <ul className="flex flex-col gap-2.5">
                {tr.footer.cols[category].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-gray-200 text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs">
            {tr.footer.rights.replace('{year}', String(year))}
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-gray-400 text-xs">{tr.footer.status}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
