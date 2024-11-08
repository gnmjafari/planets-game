const WrongAnswerModal = ({
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
      <div className="modal-box  max-w-1xl" dir="rtl">
        <div className="flex justify-between w-full items-start">
          <div className="flex flex-col h-full justify-between gap-16 items-start w-1/2">
            <p className="py-4 text-justify">
              متاسفانه اشتباه جواب دادی، اما ناامید نشو و اینبار بیشتر دقت کن
            </p>

            <button
              className="btn btn-success"
              onClick={() => {
                onClose();
              }}
            >
              میخوام دوباره تلاش کنم
            </button>
          </div>

          <div className="w-1/2">
            <img
              src="/3d-icons/Man Searching For A Course 3D Illustration.webp"
              alt="Game tutorial icon"
            />
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default WrongAnswerModal;
