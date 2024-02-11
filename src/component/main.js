import React, { useState } from "react";
import axios from "axios";

import LogoUnsoed1Image from "../assets/images/LogoUnsoed.png";

import { styled } from "@mui/material/styles";

import LogoUnsoed2Image from "../assets/images/LogoUnsoed.png";

const Desktop11 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `100vw`,
  height: `100vh`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const LogoUnsoed2 = styled("div")({
  backgroundImage: `url(${LogoUnsoed2Image})`,
  backgroundPosition: `center`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  backdropFilter: `blur(100px)`,
  WebkitBackdropFilter: `blur(100%)`,
  width: `1063px`,
  height: `839px`,
  position: `absolute`,
  left: `30%`,
  top: `180px`,
  opacity: `10%`,
});

const ButtonFile = styled("button")({
  backgroundColor: `rgba(35, 42, 99, 1)`,
  borderRadius: `30px`,
  width: `179px`,
  height: `41px`,
  position: `absolute`,
  left: `22%`,
  top: `320px`,
});

const KotakGambar = styled("div")({
  backgroundColor: `rgba(217, 217, 217, 1)`,
  border: `1px solid rgba(0, 0, 0, 1)`,
  boxSizing: `border-box`,
  width: `300px`,
  height: `300px`,
  position: `absolute`,
  left: `50%`,
  top: `300px`,
});

const Rectangle3 = styled("div")({
  backgroundColor: `rgba(237, 213, 0, 1)`,
  width: `100%`,
  height: `180px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const LogoUnsoed1 = styled("img")({
  height: `147px`,
  width: `182px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `5%`,
  top: `16px`,
});

const KlasifikasiPectusExc = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inknut Antiqua`,
  fontWeight: `600`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `30%`,
  top: `39px`,
});

const Rectangle4 = styled("div")({
  backgroundColor: `rgba(170, 170, 170, 1)`,
  width: `240px`,
  height: `840px`,
  position: `absolute`,
  left: `0px`,
  top: `180px`,
});

const ProfileMahasiswa = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inknut Antiqua`,
  fontWeight: `600`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `23px`,
  top: `300px`,
});

const TentangMipa = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inknut Antiqua`,
  fontWeight: `600`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `45px`,
  top: `379px`,
});

const PectusExcavatum = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inknut Antiqua`,
  fontWeight: `600`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `23px`,
  top: `208px`,
});

const TentangUnsoed = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inknut Antiqua`,
  fontWeight: `600`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `29px`,
  top: `450px`,
});

const PilihFile = styled("div")({
  textAlign: `center`, // Center-align the text
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `302px`,
  height: `18px`,
  position: `absolute`,
  top: `8px`,
});

const ImageContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
});

const Hasil = styled("div")({
  backgroundColor: `rgba(217, 217, 217, 1)`,
  border: `1px solid rgba(0, 0, 0, 1)`,
  boxSizing: `border-box`,
  width: `300px`,
  height: `300px`,
  position: `absolute`,
  top: `140%`,
});

function Desktop1() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");
  const [imageSource, setImageSource] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const decodeBase64ToImage = (base64String) => {
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "image/png" }); // Ganti tipe sesuai dengan format gambar yang sesuai
    const imageUrl = URL.createObjectURL(blob);
    setImageSource(imageUrl);
  };

  const handleUpload = () => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const encryptedImage = event.target.result.split(",")[1]; // Get the Base64 data

      axios
        .post("http://skripsi-bagja.ikulatluh.cloud/upload", { encryptedImage })
        .then((response) => {
          console.log(
            "Image uploaded and encrypted successfully:",
            response.data
          );
          setResponseMessage(response.data.message); 
          decodeBase64ToImage(response.data.message);// Set the response message
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
          setResponseMessage("Error uploading image");
        });
    };

    reader.readAsDataURL(selectedFile);
  };

  const handleImageChange = () => {
    // Clear the selected file when "Change Image" is clicked
    setSelectedFile(null);
    setResponseMessage("");
  };


  return (
    <Desktop11>
      <LogoUnsoed2></LogoUnsoed2>
      <Rectangle3></Rectangle3>
      <LogoUnsoed1
        src={LogoUnsoed1Image}
        loading="lazy"
        alt={"Logo UNSOED 1"}
      />
      <KlasifikasiPectusExc>
        {`Klasifikasi Pectus Excavatum Menggunakan Convolution Neural Network
Dengan Arsitektur Inception V3 `}
      </KlasifikasiPectusExc>
      <Rectangle4></Rectangle4>
      <ProfileMahasiswa>{`Profile  Mahasiswa`}</ProfileMahasiswa>
      <TentangMipa>{`Tentang MIPA`}</TentangMipa>
      <PectusExcavatum>{`Pectus Excavatum`}</PectusExcavatum>
      <TentangUnsoed>
        {`Tentang Unsoed
`}
      </TentangUnsoed>

      <KotakGambar>
        <div>
          <input
            accept="image/*"
            style={{ marginTop: `220px`, marginLeft: `50px` }}
            type="file"
            onChange={handleFileChange}
          />
          {selectedFile && (
            <div style={{ marginTop: `-240px` }}>
              {/* Display the uploaded image */}
              {selectedFile.type.includes("image") && (
                <ImageContainer>
                  <img
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    src={URL.createObjectURL(selectedFile)}
                    alt="Uploaded"
                  />
                </ImageContainer>
              )}

              <ButtonFile onClick={handleUpload}>
                <PilihFile style={{ marginLeft: "-70px" }}>
                  {"Pilih file"}
                </PilihFile>
              </ButtonFile>
              <ButtonFile
                style={{ marginTop: "50px" }}
                onClick={handleImageChange}
              >
                <PilihFile style={{ marginLeft: "-60px" }}>
                  {"Ganti Gambar"}
                </PilihFile>
              </ButtonFile>
            </div>
          )}
          {/* Menampilkan pesan respon */}
          {responseMessage && (
            <div style={{ marginTop: "10px" }}>
              <Hasil>
             
                  {imageSource && <img style={{ maxWidth: "100%", maxHeight: "100%" }} src={imageSource} alt="Decoded Image" />}
                
              </Hasil>
            </div>
          )}
        </div>
      </KotakGambar>

      {/* ... (other elements) */}
    </Desktop11>
  );
}

export default Desktop1;
