import { COLOR_TYPE } from "../lib/constants"

type PageTitleType = {
  title: string
  color?: string
}
const PageTitle = ({ title, color = 'black' }: PageTitleType) => {
  return (
    <h2
      className="font-bold uppercase subpixel-antialiased
      tracking-wide	text-2xl pt-6 pb-6 border-r pr-10"
      style={{ color }}
    >
      {title}
    </h2>
  )
}

export default PageTitle
