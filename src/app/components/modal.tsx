export default function Modal(modalProps: {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <dialog open={modalProps.isOpen}>
      <div className="fixed  inset-0 z-20 flex items-center justify-center">
        <div className="modal-overlay fixed inset-0  bg-black opacity-50"></div>
        <div className="modal-content absolute transform transition-transform bg-white w-auto  max-w-3xl rounded-lg shadow-lg">
          <div className="absolute top-0 right-0">
            <button className="p-1" onClick={modalProps.onClose}>
              Close
            </button>
          </div>

          <div className="p-4">{modalProps.children}</div>
        </div>
      </div>
    </dialog>
  );
}
