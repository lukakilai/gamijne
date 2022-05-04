import { FacebookShareButton, FacebookIcon } from "react-share";

export default function ShareButton({ url }) {
  return (
    <div className="max-w-max cursor-pointer rounded-lg border-2 border-fb bg-fb pl-0 pr-6 text-white transition-all duration-150 hover:scale-105">
      <FacebookShareButton
        url={url}
        className="flex w-full flex-row items-center justify-between"
      >
        <FacebookIcon className="h-8" />
        <p className="font-caps text-base tracking-wider">გააზიარე</p>
      </FacebookShareButton>
    </div>
  );
}
