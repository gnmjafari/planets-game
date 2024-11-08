import React from "react";

const GameTutorialModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <dialog
      className="modal max-w-screen"
      open={isOpen}
      onClose={() => {
        onClose();
      }}
    >
      <div className="modal-box  max-w-2xl" dir="rtl">
        <h3 className="font-bold text-lg">آموزش بازی</h3>
        <div className="flex justify-between w-full items-start">
          <div className="flex flex-col w-1/2">
            <div className="py-4 text-justify">
              <span className="text-2xl ml-2">1.</span>
              <span className="text-2xl ml-1">هدف بازی : </span>
              <span className="text-sm ">
                هدف اصلی بازی این است که سیاره‌ها را به مکان‌های مناسب خود
                ببرید. هر سیاره باید در مکانی قرار گیرد که با مسیر حرکتش تطابق
                داشته باشد.
              </span>
            </div>
            <div className="py-4 text-justify">
              <span className="text-2xl ml-2">2.</span>
              <span className="text-2xl ml-1">کنترل بازی : </span>
              <span className="text-sm ">
                برای درگ کردن سیاره، کلیک کنید و نگه دارید تا آن را بکشید. سپس
                سیاره را به مکان مورد نظر ببرید و دکمه موس را رها کنید تا سیاره
                در آن مکان قرار گیرد.
              </span>
            </div>
          </div>

          <div className="w-1/2">
            <img
              src="/3d-icons/Confused Man Because No Lessons Were Found 3D Illustration.webp"
              alt="Game tutorial icon"
            />
          </div>
        </div>

        <div className="modal-action">
          <form method="dialog">
            <button
              className="btn btn-success"
              onClick={() => {
                onClose();
              }}
            >
              متوجه شدم
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default GameTutorialModal;
