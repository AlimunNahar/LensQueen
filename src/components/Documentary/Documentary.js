import React from "react";
import Footer from "../Footer/Footer";
import DocFooter from "../Footer/DocFooter";
import Header from "../Header/Header";
import useTitle from "../Hooks/useTitle";

const Documentary = () => {
  useTitle("Documentary");
  return (
    <div>
      <Header />
      <DocFooter />
      <div className="my-10">
        <section className="py-6 dark:dark:bg-gray-800 dark:dark:text-gray-50">
          <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
            <img
              src="https://media.istockphoto.com/id/1303189272/photo/the-bride-and-groom-use-the-little-finger-together-lovely-couple-hold-hand-with-sunset.jpg?b=1&s=170667a&w=0&k=20&c=1Lb68SPX3ZXYrrDHoIGHXbPs6pAQbwjXMo_Jz4LQN70="
              alt=""
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:dark:bg-gray-500 aspect-square"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:dark:bg-gray-500 aspect-square"
              src="https://www.theknot.com/tk-media/images/61e409ea-f4d7-4c33-9cd8-fca030b93abb~rs_768.h"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:dark:bg-gray-500 aspect-square"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6TY6v5nCFATk2rs0yIE2EE-l4mkV3XyDiFw&usqp=CAU"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:dark:bg-gray-500 aspect-square"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdkm8u8ypjmmuZ0tQVGa3JN-ta7uqCcj2vVg&usqp=CAU"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:dark:bg-gray-500 aspect-square"
              src="https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:dark:bg-gray-500 aspect-square"
              src="https://media.istockphoto.com/id/1181587386/photo/i-pinky-promise-ill-be-by-your-side-forever.jpg?s=612x612&w=0&k=20&c=WsQ1PmnE8hv-00fzXLr8sSh-XoibHwsUmEz01P6sLjE="
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:dark:bg-gray-500 aspect-square"
              src="https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:dark:bg-gray-500 aspect-square"
              src="https://gumlet.assettype.com/dtnext%2F2022-06%2Fe3276d0f-da03-41d5-b571-a92dd531a0b4%2F8b82967f_dd87_4fbc_83f6_de2b60603675.jpg?format=auto"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:dark:bg-gray-500 aspect-square"
              src="https://ae01.alicdn.com/kf/H96dd1987da5441529cab7d84cf3dd43aG/Princess-Hanfu-With-Pearl-Lace-Veil-For-Women-Cosplay-Accessories-White-Veil-Dancing-Stage-Show-Girl.jpg_Q90.jpg_.webp"
            />
            <img
              src="https://www.theknot.com/tk-media/images/dfa65673-ecc1-4c74-b860-149cb1e0da51"
              alt=""
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:dark:bg-gray-500 aspect-square"
            />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Documentary;
