type PageTitleType = {
  title: string
}
const PageTitle = ({ title }: PageTitleType) => {
  return (
    <h2
      className="font-bold uppercase subpixel-antialiased
      tracking-wide	text-2xl pt-6 pb-6 border-r pr-10"
    >
      {title}
    </h2>
  )
}

export default PageTitle
