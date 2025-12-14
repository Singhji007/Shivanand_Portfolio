export default function CertificateModal({ src, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={src}
          title="Certificate Preview"
          width="100%"
          height="100%"
        />

        <button className="modal-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
