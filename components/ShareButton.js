import { FacebookShareButton, FacebookIcon } from "react-share";

export default function ShareButton({ url }) {
  return (
    <div className="max-w-max bg-fb rounded-lg overflow-hidden pl-0 pr-6 font-caps text-white text-base">
      <FacebookShareButton
        url={url}
        className="flex flex-row justify-between items-center w-full"
      >
        <FacebookIcon className="h-8" />
        გააზიარე
      </FacebookShareButton>
    </div>
  );
}
