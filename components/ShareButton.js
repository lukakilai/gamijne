import { FacebookShareButton, FacebookIcon } from "react-share";

export default function ShareButton({ url }) {
  return (
    <div className="w-1/2 bg-fb rounded-lg overflow-hidden pl-0 pr-6 font-bold text-white ">
      <FacebookShareButton
        url={url}
        className="flex flex-row justify-between items-center w-full"
      >
        <FacebookIcon />
        გააზიარე
      </FacebookShareButton>
    </div>
  );
}
