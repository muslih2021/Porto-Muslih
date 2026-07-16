import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  tullyLogo,
  certCodepolitanJs,
  certCodepolitanReact,
  certTelkomsel,
  certHackerRankJs,
  certKampusMerdeka,
  certDicodingDasarAI,
  certDicodingAndroidIntermediate,
  certDicodingMLAndroid,
  certDicodingSOLID,
  certDicodingAndroidFundamental,
  certDicodingAndroidPemula,
  certDicodingKotlin,
  certDicodingLogika,
  certDicodingDasarPemrograman,
  certDicodingGit,
} from "../../assets";

// Real Certificates Data
const certificatesData = [
  {
    id: 1,
    title: "Telkomsel Internship Partnership Program 2025",
    issuer: "Telkomsel by Telkom Indonesia",
    year: "2026",
    aspect: "aspect-[4/3]",
    image: certTelkomsel,
    description: "Certificate of Completion for successfully completing the Telkomsel Internship Partnership Program 2025, from August 4 to December 5, 2025, at PDM Integration and Resources Management division."
  },
  {
    id: 2,
    title: "Studi Independen Bersertifikat Angkatan 6",
    issuer: "Kampus Merdeka – Dicoding Indonesia",
    year: "2024",
    aspect: "aspect-[16/9]",
    image: certKampusMerdeka,
    description: "Sertifikat Kepesertaan dari Pelaksana Pusat Kampus Merdeka atas partisipasi dan penyelesaian kewajiban dalam program Studi Independen Bersertifikat Angkatan 6 di Dicoding Indonesia."
  },
  {
    id: 3,
    title: "Belajar JavaScript",
    issuer: "CODEPOLITAN – Kelas Online",
    year: "2026",
    aspect: "aspect-[4/3]",
    image: certCodepolitanJs,
    description: "Sertifikat kelulusan kelas Belajar JavaScript dalam program Kelas Online CODEPOLITAN. Berlaku hingga 11 Juli 2029."
  },
  {
    id: 4,
    title: "Belajar ReactJS",
    issuer: "CODEPOLITAN – Kelas Online",
    year: "2026",
    aspect: "aspect-[4/3]",
    image: certCodepolitanReact,
    description: "Sertifikat kelulusan kelas Belajar ReactJS dalam program Kelas Online CODEPOLITAN. Berlaku hingga 13 Juli 2029."
  },
  {
    id: 5,
    title: "JavaScript (Basic)",
    issuer: "HackerRank",
    year: "2026",
    aspect: "aspect-[4/3]",
    image: certHackerRankJs,
    description: "Certificate of Accomplishment dari HackerRank atas kelulusan skill certification test JavaScript (Basic). Earned on 13 Jul, 2026. ID: 7963C1207A2F."
  },
  {
    id: 6,
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    year: "2024",
    aspect: "aspect-[4/3]",
    image: certDicodingDasarAI,
    description: "Sertifikat Kompetensi Kelulusan kelas Belajar Dasar AI dari Dicoding Indonesia. Berlaku hingga 19 April 2027."
  },
  {
    id: 7,
    title: "Belajar Pengembangan Aplikasi Android Intermediate",
    issuer: "Dicoding Indonesia",
    year: "2024",
    aspect: "aspect-[4/3]",
    image: certDicodingAndroidIntermediate,
    description: "Sertifikat Kompetensi Kelulusan kelas Belajar Pengembangan Aplikasi Android Intermediate dari Dicoding Indonesia. Berlaku hingga 14 Juni 2027."
  },
  {
    id: 8,
    title: "Belajar Penerapan Machine Learning untuk Android",
    issuer: "Dicoding Indonesia",
    year: "2024",
    aspect: "aspect-[4/3]",
    image: certDicodingMLAndroid,
    description: "Sertifikat Kompetensi Kelulusan kelas Belajar Penerapan Machine Learning untuk Android dari Dicoding Indonesia. Berlaku hingga 02 Mei 2027."
  },
  {
    id: 9,
    title: "Belajar Prinsip Pemrograman SOLID",
    issuer: "Dicoding Indonesia",
    year: "2024",
    aspect: "aspect-[4/3]",
    image: certDicodingSOLID,
    description: "Sertifikat Kompetensi Kelulusan kelas Belajar Prinsip Pemrograman SOLID dari Dicoding Indonesia. Berlaku hingga 07 April 2027."
  },
  {
    id: 10,
    title: "Belajar Fundamental Aplikasi Android",
    issuer: "Dicoding Indonesia",
    year: "2024",
    aspect: "aspect-[4/3]",
    image: certDicodingAndroidFundamental,
    description: "Sertifikat Kompetensi Kelulusan kelas Belajar Fundamental Aplikasi Android dari Dicoding Indonesia. Berlaku hingga 01 April 2027."
  },
  {
    id: 11,
    title: "Belajar Membuat Aplikasi Android untuk Pemula",
    issuer: "Dicoding Indonesia",
    year: "2024",
    aspect: "aspect-[4/3]",
    image: certDicodingAndroidPemula,
    description: "Sertifikat Kompetensi Kelulusan kelas Belajar Membuat Aplikasi Android untuk Pemula dari Dicoding Indonesia. Berlaku hingga 06 Maret 2027."
  },
  {
    id: 12,
    title: "Memulai Pemrograman dengan Kotlin",
    issuer: "Dicoding Indonesia",
    year: "2024",
    aspect: "aspect-[4/3]",
    image: certDicodingKotlin,
    description: "Sertifikat Kompetensi Kelulusan kelas Memulai Pemrograman dengan Kotlin dari Dicoding Indonesia. Berlaku hingga 01 Maret 2027."
  },
  {
    id: 13,
    title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    issuer: "Dicoding Indonesia",
    year: "2024",
    aspect: "aspect-[4/3]",
    image: certDicodingLogika,
    description: "Sertifikat Kompetensi Kelulusan kelas Pengenalan ke Logika Pemrograman dari Dicoding Indonesia. Berlaku hingga 19 Februari 2027."
  },
  {
    id: 14,
    title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    issuer: "Dicoding Indonesia",
    year: "2024",
    aspect: "aspect-[4/3]",
    image: certDicodingDasarPemrograman,
    description: "Sertifikat Kompetensi Kelulusan kelas Memulai Dasar Pemrograman untuk Menjadi Pengembang Software dari Dicoding Indonesia (diverifikasi Prakerja). Berlaku hingga 19 Februari 2027."
  },
  {
    id: 15,
    title: "Belajar Dasar Git dengan GitHub",
    issuer: "Dicoding Indonesia",
    year: "2024",
    aspect: "aspect-[4/3]",
    image: certDicodingGit,
    description: "Sertifikat Kompetensi Kelulusan kelas Belajar Dasar Git dengan GitHub dari Dicoding Indonesia. Berlaku hingga 20 Februari 2027."
  },
];

const CertificatesListModal = ({ isOpen, onClose, onSelectCert }: { isOpen: boolean, onClose: () => void, onSelectCert: (cert: any) => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[90] overflow-y-auto bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.18, ease: "easeOut" } }}
            exit={{ opacity: 0, transition: { duration: 0.08 } }}
            className="relative w-full min-h-screen flex flex-col"
          >
            <div className="sticky top-0 z-30 bg-white border-b border-[#8F000D]/10 px-6 py-4 flex justify-between items-center">
              <span className="font-got text-[#8F000D]" style={{ fontSize: "1.2rem", letterSpacing: "0.05em" }}>
                ALL CERTIFICATES
              </span>
              <button
                onClick={onClose}
                className="text-[#8F000D] hover:opacity-70 text-2xl font-bold w-10 h-10 flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="p-8 md:p-12 relative overflow-hidden max-w-7xl mx-auto w-full">
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance] w-full">
                {certificatesData.map((cert, index) => (
                  <motion.div
                    key={`modal-cert-${cert.id}`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    onClick={() => onSelectCert(cert)}
                    className="break-inside-avoid relative w-full aspect-[4/3] bg-white rounded-lg border border-gray-200 overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
                  >
                    <div className="w-full h-[75%] overflow-hidden relative">
                      <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>
                    <div className="absolute top-0 inset-x-0 h-[3px] bg-[#8F000D]/50" />
                    <div className="flex flex-col justify-center items-center h-[25%] p-4 bg-white border-t border-gray-100">
                      <h3 className="font-sans font-bold text-[#3A3A31] text-[14px] sm:text-[16px] leading-snug text-center">
                        {cert.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certificatesData[0] | null>(null);
  const [isListModalOpen, setIsListModalOpen] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedCert || isListModalOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [selectedCert, isListModalOpen]);

  return (
    <section 
      id="certificates" 
      className="relative w-full bg-[#8F000D] py-20 px-6 md:px-16 lg:px-24 overflow-hidden"
      style={{
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        width: "100vw",
      }}
    >
      {/* Background Watermark Sigils - Textured Pattern */}
      {/* Massive one top-left */}
      <img
        src={tullyLogo}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="absolute pointer-events-none select-none filter brightness-0 invert opacity-[0.12]"
        style={{ width: "65vw", maxWidth: "800px", top: "-10%", left: "-15vw", zIndex: 0, transform: "rotate(-25deg)" }}
      />
      {/* Medium one top-right */}
      <img
        src={tullyLogo}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="absolute pointer-events-none select-none filter brightness-0 invert opacity-[0.20]"
        style={{ width: "20vw", maxWidth: "300px", top: "10%", right: "5vw", zIndex: 0, transform: "rotate(15deg)" }}
      />
      {/* Small one middle-right */}
      <img
        src={tullyLogo}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="absolute pointer-events-none select-none filter brightness-0 invert opacity-[0.25]"
        style={{ width: "12vw", maxWidth: "150px", top: "45%", right: "-2vw", zIndex: 0, transform: "rotate(-45deg)" }}
      />
      {/* Huge one bottom-right */}
      <img
        src={tullyLogo}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="absolute pointer-events-none select-none filter brightness-0 invert opacity-[0.15]"
        style={{ width: "55vw", maxWidth: "700px", bottom: "-15%", right: "-10vw", zIndex: 0, transform: "rotate(30deg)" }}
      />
      {/* Small one bottom-left */}
      <img
        src={tullyLogo}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="absolute pointer-events-none select-none filter brightness-0 invert opacity-[0.20]"
        style={{ width: "18vw", maxWidth: "250px", bottom: "10%", left: "10vw", zIndex: 0, transform: "rotate(10deg)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mb-12 md:mb-16"
        >
          <h2 className="font-got text-white text-center" style={{ fontSize: "clamp(1.8rem, 6.5vw, 4.5rem)", letterSpacing: "0.02em" }}>
            CERTIFICATES
          </h2>
        </motion.div>

        {/* Pinterest-like Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance] w-full">
          {certificatesData.slice(0, 3).map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => setSelectedCert(cert)}
              className="break-inside-avoid relative w-full aspect-[4/3] bg-black/40 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image filling the top part */}
              <div className="w-full h-[75%] overflow-hidden relative">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              
              {/* Top Frame Decor */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-white/50" />

              <div className="flex flex-col justify-center items-center h-[25%] p-4">
                <h3 className="font-sans font-bold text-white text-[14px] sm:text-[16px] leading-snug text-center drop-shadow-md">
                  {cert.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {certificatesData.length > 3 && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <button
              onClick={() => setIsListModalOpen(true)}
              className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-got text-white border border-white/50 hover:bg-white hover:text-[#8F000D] transition-colors duration-300 rounded"
              style={{ letterSpacing: "0.15em", fontSize: "14px" }}
            >
              VIEW ALL CERTIFICATES ({certificatesData.length - 3} more)
            </button>
          </motion.div>
        )}
      </div>

      <CertificatesListModal 
        isOpen={isListModalOpen} 
        onClose={() => setIsListModalOpen(false)} 
        onSelectCert={setSelectedCert} 
      />

      {/* Lightbox / Detail Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] overflow-y-auto bg-white">
            {/* Modal Panel - Scrollable container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.18, ease: "easeOut" } }}
              exit={{ opacity: 0, transition: { duration: 0.08 } }}
              className="relative w-full min-h-screen bg-white shadow-2xl flex flex-col"
            >
              {/* Close Button & Header area */}
              <div className="sticky top-0 z-30 bg-white border-b border-[#8F000D]/10 px-6 py-4 flex justify-between items-center">
                <span className="font-got text-[#8F000D]" style={{ fontSize: "1.2rem", letterSpacing: "0.05em" }}>
                  CERTIFICATE DETAILS
                </span>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-[#8F000D] hover:opacity-70 text-2xl font-bold w-10 h-10 flex items-center justify-center transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Image Section */}
              <div className="w-full relative flex-shrink-0 bg-[#F8F8EB] p-4 sm:p-6 md:p-8 flex items-center justify-center border-b border-[#8F000D]/10" style={{ minHeight: "50vh" }}>
                 <img 
                    src={selectedCert.image} 
                    alt={selectedCert.title} 
                    className="w-full max-h-[70vh] object-contain drop-shadow-xl"
                 />
              </div>

              {/* Content Section */}
              <div className="w-full flex-1 p-6 sm:p-8 md:px-16 md:py-12 flex flex-col justify-start">
                <span className="text-[12px] font-mono tracking-widest text-[#8F000D] font-bold block mb-2 uppercase">
                  {selectedCert.issuer}
                </span>
                <h3 className="font-got text-[#3A3A31] text-[20px] sm:text-[24px] md:text-[28px] leading-snug mb-4">
                  {selectedCert.title}
                </h3>
                
                <div className="w-16 h-[3px] bg-[#8F000D] mb-6" />

                <p className="font-sans font-light text-[15px] sm:text-[16px] text-gray-700 leading-relaxed mb-8 max-w-3xl">
                  {selectedCert.description}
                </p>

                <div className="flex justify-between items-center text-[13px] font-got text-[#8F000D] mt-auto pt-6 border-t border-[#8F000D]/10">
                  <span>ISSUED: {selectedCert.year}</span>
                  <span className="font-sans text-gray-400">ID: CERT-00{selectedCert.id}</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
export { Certificates };
