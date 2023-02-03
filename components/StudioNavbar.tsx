import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavBar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-orange-300 flex items-center ml-2">
          <ArrowUturnLeftIcon className="h-6 w-6 text-orange-300 mr-2" />
          Go To Website
        </Link>
      </div>

      <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#F7AB0A]">
        <h1 className="font-bold text-white">
          Want coding challenges & Solutions sent to your inbox daily? 👉
        </h1>
        <Link href="/subscribe" className="text-orange-300 font-bold ml-2">
          Subscribe
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavBar;
