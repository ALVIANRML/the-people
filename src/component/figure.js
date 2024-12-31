import Figure from 'react-bootstrap/Figure';
import React, { useState } from 'react';
import '../css/Figura.css'
import '../css/Popup.css'
import january from'../img/january/january.png'
import february from'../img/february/february.png'
import march from'../img/march/march.png'
import april from'../img/april/april.png'
import may from'../img/may/may.png'
import june from'../img/june/june.png'
import july from'../img/july/july.png'
import august from'../img/august/august.png'
import september from'../img/september/september.png'
import october from'../img/october/october.png'
import november from'../img/november/november.png'
import december from'../img/december/december.png'

export function January() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div>
      
      <div className={isPopupOpen ? "main-content blur" : "main-content"}>
        <Figure className="Figure" onClick={handleOpenPopup}>
          <Figure.Image alt="171x180" src={january} />
        </Figure>
      </div>

      
      {isPopupOpen && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          onClick={handleClosePopup} // Tutup jika klik di luar
        >
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Bootstrap Modal</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClosePopup}
                ></button>
              </div>
              <div className="modal-body">
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClosePopup}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export function February() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div>
      {/* Tambahkan kelas 'blur' ke elemen utama jika modal terbuka */}
      <div className={isPopupOpen ? "main-content blur" : "main-content"}>
        <Figure className="Figure" onClick={handleOpenPopup}>
          <Figure.Image alt="171x180" src={february} />
        </Figure>
      </div>

      {/* Modal Bootstrap */}
      {isPopupOpen && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          onClick={handleClosePopup} // Tutup jika klik di luar
        >
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Bootstrap Modal</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClosePopup}
                ></button>
              </div>
              <div className="modal-body">
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClosePopup}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export function March() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div>
      {/* Tambahkan kelas 'blur' ke elemen utama jika modal terbuka */}
      <div className={isPopupOpen ? "main-content blur" : "main-content"}>
        <Figure className="Figure" onClick={handleOpenPopup}>
          <Figure.Image alt="171x180" src={march} />
        </Figure>
      </div>

      {/* Modal Bootstrap */}
      {isPopupOpen && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          onClick={handleClosePopup} // Tutup jika klik di luar
        >
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Bootstrap Modal</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClosePopup}
                ></button>
              </div>
              <div className="modal-body">
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClosePopup}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}




export function April() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div>
      {/* Tambahkan kelas 'blur' ke elemen utama jika modal terbuka */}
      <div className={isPopupOpen ? "main-content blur" : "main-content"}>
        <Figure className="Figure" onClick={handleOpenPopup}>
          <Figure.Image alt="171x180" src={april} />
        </Figure>
      </div>

      {/* Modal Bootstrap */}
      {isPopupOpen && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          onClick={handleClosePopup} // Tutup jika klik di luar
        >
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Bootstrap Modal</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClosePopup}
                ></button>
              </div>
              <div className="modal-body">
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClosePopup}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}




export function May() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div>
      {/* Tambahkan kelas 'blur' ke elemen utama jika modal terbuka */}
      <div className={isPopupOpen ? "main-content blur" : "main-content"}>
        <Figure className="Figure" onClick={handleOpenPopup}>
          <Figure.Image alt="171x180" src={may} />
        </Figure>
      </div>

      {/* Modal Bootstrap */}
      {isPopupOpen && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          onClick={handleClosePopup} // Tutup jika klik di luar
        >
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Bootstrap Modal</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClosePopup}
                ></button>
              </div>
              <div className="modal-body">
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClosePopup}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export function June() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div>
      {/* Tambahkan kelas 'blur' ke elemen utama jika modal terbuka */}
      <div className={isPopupOpen ? "main-content blur" : "main-content"}>
        <Figure className="Figure" onClick={handleOpenPopup}>
          <Figure.Image alt="171x180" src={june} />
        </Figure>
      </div>

      {/* Modal Bootstrap */}
      {isPopupOpen && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          onClick={handleClosePopup} // Tutup jika klik di luar
        >
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Bootstrap Modal</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClosePopup}
                ></button>
              </div>
              <div className="modal-body">
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClosePopup}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export function July() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div>
      {/* Tambahkan kelas 'blur' ke elemen utama jika modal terbuka */}
      <div className={isPopupOpen ? "main-content blur" : "main-content"}>
        <Figure className="Figure" onClick={handleOpenPopup}>
          <Figure.Image alt="171x180" src={july} />
        </Figure>
      </div>

      {/* Modal Bootstrap */}
      {isPopupOpen && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          onClick={handleClosePopup} // Tutup jika klik di luar
        >
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Bootstrap Modal</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClosePopup}
                ></button>
              </div>
              <div className="modal-body">
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClosePopup}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export function August() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div>
      {/* Tambahkan kelas 'blur' ke elemen utama jika modal terbuka */}
      <div className={isPopupOpen ? "main-content blur" : "main-content"}>
        <Figure className="Figure" onClick={handleOpenPopup}>
          <Figure.Image alt="171x180" src={august} />
        </Figure>
      </div>

      {/* Modal Bootstrap */}
      {isPopupOpen && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          onClick={handleClosePopup} // Tutup jika klik di luar
        >
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Bootstrap Modal</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClosePopup}
                ></button>
              </div>
              <div className="modal-body">
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClosePopup}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export function September() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div>
      {/* Tambahkan kelas 'blur' ke elemen utama jika modal terbuka */}
      <div className={isPopupOpen ? "main-content blur" : "main-content"}>
        <Figure className="Figure" onClick={handleOpenPopup}>
          <Figure.Image alt="171x180" src={september} />
        </Figure>
      </div>

      {/* Modal Bootstrap */}
      {isPopupOpen && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          onClick={handleClosePopup} // Tutup jika klik di luar
        >
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Bootstrap Modal</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClosePopup}
                ></button>
              </div>
              <div className="modal-body">
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClosePopup}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



export function October() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div>
      {/* Tambahkan kelas 'blur' ke elemen utama jika modal terbuka */}
      <div className={isPopupOpen ? "main-content blur" : "main-content"}>
        <Figure className="Figure" onClick={handleOpenPopup}>
          <Figure.Image alt="171x180" src={october} />
        </Figure>
      </div>

      {/* Modal Bootstrap */}
      {isPopupOpen && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          onClick={handleClosePopup} // Tutup jika klik di luar
        >
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Bootstrap Modal</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClosePopup}
                ></button>
              </div>
              <div className="modal-body">
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClosePopup}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function November() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div>
      {/* Tambahkan kelas 'blur' ke elemen utama jika modal terbuka */}
      <div className={isPopupOpen ? "main-content blur" : "main-content"}>
        <Figure className="Figure" onClick={handleOpenPopup}>
          <Figure.Image alt="171x180" src={november} />
        </Figure>
      </div>

      {/* Modal Bootstrap */}
      {isPopupOpen && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          onClick={handleClosePopup} // Tutup jika klik di luar
        >
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Bootstrap Modal</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClosePopup}
                ></button>
              </div>
              <div className="modal-body">
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClosePopup}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export function December() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div>
      {/* Tambahkan kelas 'blur' ke elemen utama jika modal terbuka */}
      <div className={isPopupOpen ? "main-content blur" : "main-content"}>
        <Figure className="Figure" onClick={handleOpenPopup}>
          <Figure.Image alt="171x180" src={december} />
        </Figure>
      </div>

      {/* Modal Bootstrap */}
      {isPopupOpen && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          onClick={handleClosePopup} // Tutup jika klik di luar
        >
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Bootstrap Modal</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClosePopup}
                ></button>
              </div>
              <div className="modal-body">
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
                <p>This is a Bootstrap modal in React!</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClosePopup}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

