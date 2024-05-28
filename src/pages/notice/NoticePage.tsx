import React, { useRef, useState } from "react";
import { ContentSection, NoticeInputForm, Noticestyle, PhotoSection, RegisterBt, TitleSection } from "../../styles/notice/NoticeStyle";

const NoticePage = () => {
  // 이미지 업로드
  const [uploadImg, setUploadImg] = useState<string>(
    `${process.env.PUBLIC_URL}/images/notice/notice_img.svg`,
  );
  const [uploadImgFile, setUploadImgFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChangeFileOne = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // 미리보기
      const tempUrl = URL.createObjectURL(file);
      setUploadImg(tempUrl); // 미리보기 끝
      // FB 파일을 보관
      setUploadImgFile(file); // 파일 1개 추가 끝
    }
  };

  return (
    <>
      <Noticestyle>
        <h1>&nbsp;&nbsp;공지 등록</h1>
        <NoticeInputForm>
          <PhotoSection>
            <span>사진</span>
            <div>
              <label htmlFor="img">
                <button
                  type="button"
                  onClick={() => {
                    fileInputRef.current?.click();
                  }}
                >
                  <img src={uploadImg} alt="" />
                </button>
              </label>
              <input
                type="file"
                // {...register("photo")}
                accept="image/png, image/gif, image/jpeg"
                onChange={handleChangeFileOne}
                ref={fileInputRef} // ref 속성을 통해 요소와 연결
                id="img"
                style={{ display: "none" }}
              />
            </div>
          </PhotoSection>
          <TitleSection>
            <span>제목</span>
            <input />
          </TitleSection>
          <ContentSection>
            <span>내용</span>
            <textarea />
          </ContentSection>
          <RegisterBt>등록하기</RegisterBt>
        </NoticeInputForm>
      </Noticestyle>
    </>
  );
};

export default NoticePage;
